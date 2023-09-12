const { where } = require("sequelize");
const db = require("../models");
const Security = db.security

const getSecurity = async (req, res) => {
    try {
        const security = await Security.findAll()
        if (security) {
            res.status(200).json({status:"success", data: security});
        } else {
            res.status(204).json({ status: "Failed" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const addSecurity = async (req, res) => {
    try {
        const security = await Security.create(req.body)
        if (security) {
            res.status(200).json({ status: "success", message: "security added successfully" });
        } else {
            res.status(400).json({ status: "Failed" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateSecurityById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const security = await Security.findOne({ where: { role_id: id } })
        console.log(security);
        if (security) {
            await security.set(req.body);
            await security.save();
            res.status(202).json({ status: "success", message: "data updated successfully" });
        } else {
            res.status(402).json({ status: "Not Found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteSecurityById = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const security = await Security.findOne({ where: { role_id: id } })
        if(security) {
            await security.destroy();
            res.status(200).json({ status: "success", message: "data deleted successfully" });
        }else{
            res.status(202).json({ status: "Not Found" });
        }
    }catch(error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { getSecurity, addSecurity, updateSecurityById, deleteSecurityById }