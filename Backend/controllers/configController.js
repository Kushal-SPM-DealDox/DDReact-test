const md5 = require("md5");
const db = require("../models");
const Config = db.config;

const addConfig = async (req, res) => {
    const user_id = req.user.user_id;
    var d = Date();
    var a = d.toString();
    const config_key = md5(a+""+req.body.config);
    const {value1,value2,value3,value4,value5,value6,value7,value8} = req.body;
    console.log(req.body);
    try {
          const config_data = await Config.create({user_id,config_key,value1,value2,value3,value4,value5,value6,value7,value8});
        //   console.log(config_data)
          if(config_data){
              res.status(200).json({success:"Successsssss"})
          }else{
              res.status(200).json({error: "Failed"})
          }
        } catch (error) {
          res.status(200).json({error: "Failed"})
        }
}

const getConfig = async (req, res) => {
  
    const user_id = req.user.user_id;
    try {
      const config_data = await Config.findAll({where: { user_id: user_id }});
  console.log(config_data,'ioioioiooioi')
      if (!config_data) {
        res.status(200).json({ status: "Failed", message: "config Data Not Found" });
      } else {
        res.status(200).json({ data: config_data });
      }
    } catch (error) {
      res.status(200).json({ error: "Failed" });
    }
  };

  

const updateConfig = async (req, res) => {
    const user_id = req.user.user_id;
    const config_id = req.params.id;
    console.log(config_id);
  
    const {value1,value2,value3,value4,value5,value6,value7,value8} = req.body;
  
    try {
      const updateConfig = await Config.update(
        {value1,value2,value3,value4,value5,value6,value7,value8},
        {
          where: {
            config_id: config_id,
            user_id: user_id,
          },
        }
      );
  
      if(updateConfig[0] === 1){
        res.status(200).json({status: "Success", message: "config Updated"});
      }else {
        res.status(404).json({ status: "Error", message: "config Not Found" });
      }
    }catch (error) {
      console.error("Error updating config:", error);
      res.status(500).json({ error: "Failed to Update config" });
    }
  };


module.exports = { addConfig,getConfig,updateConfig }
