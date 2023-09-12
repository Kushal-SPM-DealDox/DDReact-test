const db = require("../models");
const Lookups = db.lookups;
const md5 = require('md5')

// add a lookups
const addLookups = async (req, res) => {
  console.log("+++++++++++++++++++")
  const user_id = req.user.user_id;
  const { class_name } = req.body;
  const lookups_accesskey = md5(user_id + "" + class_name + "" + new Date());
  try {
    const lookups = await Lookups.findAll({ where: { user_id: user_id, class_name: class_name } });
    if (lookups.length == 0) {
      const lookups_data = await Lookups.create({ user_id: user_id, class_name, lookups_accesskey: lookups_accesskey });

      if (lookups_data) {
        res.status(200).json({ status: "Success", message: "Successfully created", data: lookups_data })
      } else {
        console.log(lookups_data);
        res.status(200).json({ status: "Failed", message: "Failed " })
      }

    } else {
      res.status(200).json({ status: "Failed", message: "Class Name Already Exists!" })
    }
  } catch (error) {
    res.status(200).json({ status: "Failed", message: "Failed " + error.message })
  }
}

// update a lookups
const updateLookups = async (req, res) => {
  console.log("+++++++++++++++++++")
  const user_id = req.user.user_id;
  const { class_name, lookups_accesskey } = req.body;
  // const lookups_accesskey = md5(user_id+""+class_name+""+new Date());
  try {
    const lookups = await Lookups.findAll({ where: { user_id: user_id, lookups_accesskey: lookups_accesskey } });
    if (lookups.length > 0) {
      const lookups_data = await Lookups.update({ class_name }, { where: { lookups_accesskey: lookups_accesskey, user_id: user_id } });

      if (lookups_data) {
        res.status(200).json({ status: "Success", message: "Successfully updated", data: lookups_data })
      } else {
        console.log(lookups_data);
        res.status(200).json({ status: "Failed", message: "Failed " })
      }

    } else {
      res.status(200).json({ status: "Failed", message: "Class Name Already Exists!" })
    }
  } catch (error) {
    res.status(200).json({ status: "Failed", message: "Failed " + error.message })
  }
}

const getLookups = async (req, res) => {
  const user = req.user;
  console.log(user)
  if (user) {
    const user_id = req.user.user_id;
    try {
      const lookups_data = await Lookups.findAll({ where: { user_id: user_id } });

      if (!lookups_data) {
        res.status(200).json({ status: "Failed", message: "Loopups Data Not Found" });
      } else {
        res.status(200).json({ status: "Success", data: lookups_data });
      }
    } catch (error) {
      res.status(200).json({ status: "Failed", message: "Failed! " + error.message });
    }
  }
};

module.exports = { addLookups, getLookups, updateLookups }

