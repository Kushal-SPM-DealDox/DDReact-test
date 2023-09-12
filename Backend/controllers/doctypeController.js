const { where } = require("sequelize");
const db = require("../models");
const Doctype = db.doctype;
const Section = db.section;
const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const getDoctypes = async (req, res) => {
    try {
        const doctype = await Doctype.findAll({
            include: [{
                model: Section,
                as: 'sections',
            }],
        })
        if (doctype) {
            res.status(200).json({ status: "success", data: doctype });
        } else {
            res.status(204).json({ status: "Failed" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const addDoctype = async (req, res) => {
    try {
        const generatedUuid = uuid();
        //console.log(req.body.sectionData, req.body.sections, req.files);
        const { sectionData, ...doctypeData } = await req.body;
        console.log(req.body);
        //console.log("body: ", req.body);
        doctypeData.doc_id = generatedUuid;
        const files = await req.files;

        doctypeData.template_file = files.template_file ? files.template_file[0].filename : null
        doctypeData.watermark_file = files.watermark_file ? files.watermark_file[0].filename : null

        const doctype = await Doctype.create(doctypeData);
        if (doctype) {
            let sections = [];
            for (const section of JSON.parse(sectionData)) {
                const generatedUuid = uuid();
                const newsection = await Section.create({
                    section_id: generatedUuid,
                    section_name: section.section_name,
                    section_tag: section.section_tag,
                    id: section.id,
                    doc_id: doctypeData.doc_id,
                })
                console.log("newSection: ", newsection, newsection.dataValues);
                sections.push(newsection.dataValues)
            }
            doctype.dataValues.sections = sections;
            res.status(200).json({ status: "success", message: "doctype added successfully", data: doctype });
        } else {
            res.status(400).json({ status: "Failed" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteDoctypeById = async (req, res) => {
    const id = req.params.id;
    const transaction = await db.sequelize.transaction();
    try {
        const doctype = await Doctype.findOne({ where: { doc_id: id } })
        if (doctype) {
            await Section.destroy({ where: { doc_id: id }, transaction, });
            await Doctype.destroy({ where: { doc_id: id }, transaction, });
            await transaction.commit();
            deletePublicFile(doctype);
            res.status(200).json({ status: "success", message: "data deleted successfully" });
        } else {
            res.status(202).json({ status: "Not Found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deletOneSectionById = async (req, res) => {
    const id = req.params.id;
    const transaction = await db.sequelize.transaction();
    try {
        await Section.destroy({ where: { section_id: id }, transaction, });
        await transaction.commit();
        res.status(200).json({ status: "success", message: "data deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: error.message });
    }
}

const updateDoctypeById = async (req, res) => {
    const id = req.params.id
    const oldDoc = await Doctype.findOne({ where: { doc_id: id } })
    const { sectionData, ...doctype } = await req.body;
    const transaction = await db.sequelize.transaction();

    try {
        await Section.destroy({ where: { doc_id: id }, transaction, });

        const files = await req.files;
        doctype.template_file = files.template_file ? files.template_file[0].filename : null
        doctype.watermark_file = files.watermark_file ? files.watermark_file[0].filename : null

        const doctypeData = await Doctype.update(doctype, { where: { doc_id: id }, transaction, });
        // update returns an array with 1, 0 // 1 for true, 0 for false

        if (doctypeData) {
            let sections = [];
            for (const section of JSON.parse(sectionData)) {
                const generatedUuid = uuid();
                const newsection = await Section.create({
                    section_id: generatedUuid,
                    section_name: section.section_name,
                    section_tag: section.section_tag,
                    id: section.id,
                    doc_id: id,
                }, { transaction });
                sections.push(newsection.dataValues)
            }

            await deletePublicFile(oldDoc);
            await transaction.commit();
            console.log("doctypeData: ",doctypeData);
            doctype.sections = sections;

            res.status(200).json({ status: "success", message: "data updated successfully", data: doctype});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deletePublicFile = (doctype) => {
    const template_file = doctype.template_file;
    const watermark_file = doctype.watermark_file;
    console.log(watermark_file, template_file);
    const filePaths = [`../Backend/public/files/${template_file}`, `../Backend/public/files/${watermark_file}`]
    filePaths.forEach(filePath => {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            } else {
                console.log('File deleted successfully');
            }
        });
    });
    return doctype;
}

module.exports = { getDoctypes, addDoctype, deleteDoctypeById, deletOneSectionById, updateDoctypeById }