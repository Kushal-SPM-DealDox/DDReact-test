const db = require("../models");
const Opportunities = db.opportunity;


// add a account
const addOpportunity = async (req, res) => {
  const user_id = req.user.user_id;
  const { opportunity_name, net_price, margin, cost, stage, probability, hours, close, start, duration_weeks, owner, region, vertical, practice, currency, org, opportunity_type, account_key  } = req.body;
  console.log("OPPORUNITY:"+req.body);
  try {

    const opportunity_data = await Opportunities.create({ user_id,account_key, opportunity_name, net_price, margin, cost, stage, probability, hours, close, start, duration_weeks, owner, region, vertical, practice, currency, org, opportunity_type });

    if (opportunity_data) {
      res.status(200).json({ success: "Success" });
    } else {
      res.status(200).json({ error: "Failed" });
    }
  } catch (error) {
    res.status(200).json({ error: "Failed" });
  }
}

const getOpportunity = async (req, res) => {
  const user_id = req.user.user_id;
  console.log("===================================================");
  try {
    const opportunity_data = await Opportunities.findAll({ 
      where:
       {
        user_id: user_id, 
      }
     });


    console.log(opportunity_data);
    console.log("===================================================");

    if (!opportunity_data) {
      res.status(200).json({ status: "Failed", message: "Opportunity Data Not Found" });
    } else {
      res.status(200).json({ data: opportunity_data });
    }
  } catch (error) {
    res.status(401).json({ error: "Failed" });
  }
};

//API to get data of opportunity using key 
// const getOpportunityByKey = async (req, res) => {
//   const user_id = req.user.user_id;
//   const accountkey = req.param.id;
//   console.log("===================================================");
//   try {
//     const opportunity_data = await Opportunities.findAll({ 
//       where:
//        {
//         user_id: user_id, 
//         account_key: accountkey,
//       }
//      });


//     console.log(opportunity_data);
//     console.log("===================================================");

//     if (!opportunity_data) {
//       res.status(200).json({ status: "Failed", message: "Opportunity Data Not Found" });
//     } else {
//       res.status(200).json({ data: opportunity_data });
//     }
//   } catch (error) {
//     res.status(401).json({ error: "Failed" });
//   }
// };
//API to get data of opportunity using key END

const updateOpportunity = async (req, res) => {

  const user_id = req.user.user_id;
  const opportunity_id = req.params.id;
  console.log(opportunity_id)

  const { opportunity_name, net_price, margin, stage, probability, hours, close, start, duration_weeks, owner, region, vertical,  practice, currency, org, opportunity_type } = req.body;

  try {
    const updateOpportunity = await Opportunities.update(
      { opportunity_name, net_price, margin, stage, probability, hours, close, start, duration_weeks, owner, region, vertical,  practice, currency, org, opportunity_type },
      {
        where: {
          opportunity_id: opportunity_id,
          user_id: user_id,
        },
      }
    );

    if (updateOpportunity[0] === 1) {
      res.status(200).json({ status: "Success", message: "Opportunity Updated" });
    } else {
      res.status(404).json({ status: "Error", message: "Opportunity Not Found" });
    }
  } catch (error) {
    console.error("Error updating opportunity:", error);
    res.status(500).json({ error: "Failed to Update Opportunity" });
  }
};

const deleteOpportunity = async (req, res) => {
  const user_id = req.user.user_id;
  const opportunity_id = req.params.id;

  try {
    const deleteOpportunity = await Opportunities.destroy({
      where: {
        opportunity_id: opportunity_id,
        user_id: user_id,
      },
    });

    if (deleteOpportunity === 1) {
      res.status(200).json({ status: "Success", message: "Opportunity Deleted" });
    } else {
      res.status(404).json({ status: "Error", message: "Opportunity Not Found" });
    }
  } catch (error) {
    console.error("Error deleting opportunity:", error);
    res.status(500).json({ error: "Failed to Delete Opportunity" });
  }
};



module.exports = { addOpportunity, getOpportunity, updateOpportunity, deleteOpportunity }
