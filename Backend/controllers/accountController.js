const md5 = require("md5");
const db = require("../models");
const md = require("md5");
const Accounts = db.accounts

// add a account
const addAccount = async (req, res) => {
    const user_id = req.user.user_id;
    var d = Date();
    var a = d.toString();
    const account_key = md5(a+""+req.body.accounts);
    const {accounts,owner,parent_account,description,region,industry,vertical,type,street1,street2,city,state,zip,country,phone,street12,street21,city2,state2,zip2,country2,phone2} = req.body;
    try {
        
          const accounts_data = await Accounts.create({user_id,account_key, accounts,owner,parent_account,description,region,industry,vertical,type,street1,street2,city,state,zip,country,phone,street12,street21,city2,state2,zip2,country2,phone2});
          
          if(accounts_data){
              res.status(200).json({success:"Success"})
          }else{
              res.status(200).json({error: "Failed"})
          }
        } catch (error) {
          res.status(200).json({error: "Failed"})
        }
}

const getAccount = async (req, res) => {
  
  const user_id = req.user.user_id;
  try {
    const accounts_data = await Accounts.findAll({where: { user_id: user_id }});

    if (!accounts_data) {
      res.status(200).json({ status: "Failed", message: "Account Data Not Found" });
    } else {
      res.status(200).json({ data: accounts_data });
    }
  } catch (error) {
    res.status(200).json({ error: "Failed" });
  }
};

const updateAccount = async (req, res) => {
  const user_id = req.user.user_id;
  const account_id = req.params.id;
  console.log(account_id);

  const {accounts, owner,parent_account,description,region,industry,vertical,type,billing_street1,billing_street2,billing_city,billing_state,billing_zip,billing_country,billing_phone,shipping_street1,shipping_street2,shipping_city,shipping_state,shipping_zip,shipping_country,shipping_phone} = req.body;

  try {
    const updateAccount = await Accounts.update(
      {accounts, owner, parent_account,description,region,industry,vertical,type,billing_street1,billing_street2,billing_city,billing_state,billing_zip,billing_country,billing_phone,shipping_street1,shipping_street2,shipping_city,shipping_state,shipping_zip,shipping_country,shipping_phone},
      {
        where: {
          account_id: account_id,
          user_id: user_id,
        },
      }
    );

    if(updateAccount[0] === 1){
      res.status(200).json({status: "Success", message: "Account Updated"});
    }else {
      res.status(404).json({ status: "Error", message: "Account Not Found" });
    }
  }catch (error) {
    console.error("Error updating Account:", error);
    res.status(500).json({ error: "Failed to Update Account" });
  }
};

const deleteAccount = async (req, res) => {
  const user_id = req.user.user_id;
  const account_id = req.params.id;
  console.log('delete:',account_id);

  try {
    const deleteAccount = await Accounts.destroy({
      where: {
        account_id: account_id,
        user_id: user_id,
      },
      });

    if (deleteAccount === 1) {
      res.status(200).json({ status: "Success", message: "Account Deleted" });
    } else {
      res.status(404).json({ status: "Error", message: "Account Not Found" });
    }
  } catch (error) {
    console.error("Error deleting Account:", error);
    res.status(500).json({ error: "Failed to Delete Account" });
  }
};




module.exports = { addAccount, getAccount, updateAccount, deleteAccount }
