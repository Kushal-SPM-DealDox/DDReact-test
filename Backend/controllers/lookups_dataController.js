const db = require("../models");
const Lookups_data = db.lookups_data;
const md5 = require('md5')

const addLookupsData = async (req, res) => {
    console.log("+++++++++++++++++++")
    const user_id = req.user.user_id;
    const {lookups_name, access_key_id, lookups_accesskey, code, value1, value2, disable, parent_lookups_data} = req.body;
    const lookups_data_accesskey = md5(user_id+""+lookups_name+""+new Date());
    console.log(lookups_accesskey)
    try {
        const lookups = await Lookups_data.findAll({where: { user_id: user_id, lookups_accesskey:lookups_accesskey, lookups_name:lookups_name}});
        if(lookups.length == 0 && !access_key_id){
            const lookups_data = await Lookups_data.create({user_id, lookups_name, lookups_accesskey, code, value1, value2, disable, parent_lookups_data, lookups_data_accesskey});
            
            if(lookups_data){
                res.status(200).json({status:"Success", message:"Successfully created", data:lookups_data})
            }else{
              console.log(lookups_data);
                res.status(200).json({status: "Failed", message:"Failed "})
            }
          
        }else{
            if(access_key_id){
                const lookups_data = await Lookups_data.update({lookups_name, code, value1, value2, disable, parent_lookups_data},{where:{user_id, lookups_accesskey, lookups_data_accesskey:access_key_id}});
                if(lookups_data){
                  res.status(200).json({status:"Success", message:"Successfully updated", data:lookups_data})
                }else{
                console.log(lookups_data);
                  res.status(200).json({status: "Failed", message:"Failed to update "})
                }
            }else{
                 res.status(200).json({status: "Failed", message:"Lookups Name Already Exists!"})
            }
        }
      } catch (error) {
        console.log(error)
        res.status(200).json({status: "Failed", message:"Failed "+error.message})
      }
}

const getLookupsData = async (req, res) => {
    const user = req.user;
    console.log(user)
    if(user){
    const user_id = req.user.user_id;
    const {lookups_accesskey} = req.body;

    try {
      const lookups_data = await Lookups_data.findAll({where: { user_id: user_id, lookups_accesskey:lookups_accesskey}});
  
      if (!lookups_data) {
        res.status(200).json({ status: "Failed", message: "Loopups Data Not Found" });
      } else {
        res.status(200).json({ status: "Success", data: lookups_data });
      }
    } catch (error) {
      res.status(200).json({ status: "Failed", message: "Failed! "+error.message });
    }
   }
}

module.exports = { addLookupsData, getLookupsData }
