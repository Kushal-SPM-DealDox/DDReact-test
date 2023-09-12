const fs = require('fs'); // Import the fs module
const db = require("../models");
const company = db.company;
// Serve static files from the "Images" directory


const getCompany = async (req, res) => {
  const user_id = req.user.user_id;
  try {
    const company_data = await company.findAll({ where: { user_id: user_id } });

    if (!company_data) {
      res.status(200).json({ status: "Failed", message: "company Data Not Found" });
    } else {
      // Inside the getCompany function
const dataWithLogoUrls = company_data.map(item => ({
  ...item.toJSON(),
  companyLogo: item.logoUrl // Assuming logoUrl is the field name in your database
}));

res.status(200).json({ data: dataWithLogoUrls });

    }
  } catch (error) {
    res.status(200).json({ error: "Failed" });
  }
};



const updateCompany = async (req, res) => {
    const user_id = req.user.user_id;
    var d = Date();
    var a = d.toString();
    company_key = (a + "" + req.body.company_name);
    const { company_name, language, user_authorization_domain, company_domain, first_name, last_name, phone, email, street, city, state, country } = req.body;
    console.log("Company:" + req.body);
    try {
      let logoUrl = null;

      if (req.body.companyLogo) {
        const base64Data = req.body.companyLogo.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = 'company_logo_' + uniqueSuffix + '.png'; // You can adjust the filename extension
  
        // Save the image to your desired directory
        fs.writeFileSync('Images/' + filename, buffer);
        logoUrl = 'Images/' + filename; // Store the logo URL
        console.log(logoUrl)
      }

        const companyUpdate = await company.update(
            {logoUrl,company_name, language, user_authorization_domain, company_domain, first_name, last_name, phone, email, street, city, state, country },
            {
              where: {
                user_id: user_id,
            },
          }
          );
        if (companyUpdate[0] === 1) {
            res.status(200).json({ status: "Success", message: "company profile Updated" });
        } else {
            res.status(404).json({ status: "Error", message: "company profile Not Found" });
        }
    } catch (error) {
        console.error("Error updating company profile:", error);
        res.status(500).json({ error: "Failed to Update company profile" });
    }
};


module.exports = { getCompany, updateCompany}