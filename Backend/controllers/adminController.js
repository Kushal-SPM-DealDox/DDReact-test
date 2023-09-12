const { where } = require("sequelize");
const db = require("../models");
const People = db.people;
const sgMail = require('@sendgrid/mail');
API_KEY = "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";
sgMail.setApiKey(API_KEY);

const addPeople = async (req, res) => {

  const data = req.body;
  console.log(People);
  try{
    const people = await People.create(req.body)
    if(people){
      res.status(200).json({status:"success", name: `${data.first_name} ${data.last_name}`, email: `${data.email}`});
    }else{
      res.status(200).json({status:"Failed", message: people});
    }
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

const getPeople = async (req, res) => {
  try{
    const people = await People.findAll();
    console.log(people);
    if(people){
        res.status(200).json({status:"success", data: people}); 
    }
    else{
        res.status(200).json({status:"Failed"});
    }
  }catch(error){
    res.status(400).json({error: error.message});
  }
}


const addPeopleByemail = async (req, res) => {
  try {
    const email = String(req.params.email);
    const securityRole = String(req.query.securityRole);
    const people = await People.findOne({ where: { email: email } });
    if (people) {
      console.log(req.body);
      people.set(req.body);
      await people.save();
      await sendmail(email, securityRole); // Use await here
      res.status(200).json({ status: "success", data: people });
    } else {
      res.status(200).json({ status: "Not Found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sendmail = async (email, securityRole) => {

  const encodeEmail = encodeURIComponent(email);
  const value1 = encodeURIComponent(securityRole);
  console.log(value1);

  const message = {
    to: email,
    from: process.env.EMAIL,
    subject: 'Registration Confirm Page',
    text: 'Welcome To DD Product',
    html: `<h1>Welcome To DD Product use it completely</h1><a href="http://localhost:3000/setpassword/?emailContent=${encodeEmail}&value1=${value1}">Click here</a> to Verify Your Account!.`
  };

  try {
    await sgMail.send(message);
    console.log('Email Sent..');
  } catch (error) {
    console.error('SendGrid Error:', error);
    throw error;
  }
};




module.exports = {addPeople, getPeople, addPeopleByemail}