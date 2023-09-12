const { where } = require("sequelize");
const db = require("../models");
const { v4: uuid } = require('uuid');
const Template = db.template

const getTemPlate = async (req, res) => {
    try {
        const template = await Template.findAll()
        if (template) {
            res.status(200).json({ status: "success", data: template });
        } else {
            res.status(204).json({ status: "Failed" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const addTemplate = async (req, res) => {
    try {
        const generatedUuid = uuid();
        const data = await req.body;
        //console.log("body: ", req.body);
        data.template_id = generatedUuid;
        console.log("body: ", data);
        const template = await Template.create(data)
        if (template) {
            res.status(200).json({ status: "success", message: "Template added successfully", data: template });
        } else {
            res.status(400).json({ status: "Failed" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const UpdateTemplateById = async (req, res) => {
    const templateId = req.params.id;
    const data = await req.body;
    const transaction = await db.sequelize.transaction();
    try {
        const template = await Template.update(data, { where: { template_id: templateId }, transaction, });
        if (template) {
            await transaction.commit();
            res.status(200).json({ status: "success", message: "Template added successfully", data: template });
        } else {
            res.status(400).json({ status: "Failed" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteTemplateById = async (req, res) => {
    const id = req.params.id;
    const transaction = await db.sequelize.transaction();
    try {
        await Template.destroy({ where: { template_id: id }, transaction, });
        await transaction.commit();
        res.status(200).json({ status: "success", message: "data deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { getTemPlate, addTemplate, UpdateTemplateById, deleteTemplateById }