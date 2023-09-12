const md5 = require("md5");
const db = require("../models");
const Content = db.content

// add a content
const addContent = async (req, res) => {
    const user_id = req.user.user_id;
    var d = Date();
    var a = d.toString();
    const content_key = md5(a+""+req.body.Contents);
    const {content_name,sales_org,catalog_number,catalog_category,locked,content} = req.body;
    try {
        
          const Contents_data = await Content.create({user_id,content_key,content_name,sales_org,catalog_number,catalog_category,locked,content});
          
          if(Contents_data){
              res.status(200).json({success:"Success"})
          }else{
              res.status(200).json({error: "Failed"})
          }
        } catch (error) {
          res.status(200).json({error: "Failed"})
        }
}

const getContent = async (req, res) => {
  const user_id = req.user.user_id;
  try {
    const contents_data = await Content.findAll({where: { user_id: user_id }});
console.log(contents_data,'opopopop')
    if (!contents_data) {
      res.status(200).json({ status: "Failed", message: "Content Data Not Found" });
    } else {
      res.status(200).json({ data: contents_data });
    }
  } catch (error) {
    res.status(200).json({ error: "Failed1111" });
  }
};

const updateContent = async (req, res) => {
  const user_id = req.user.user_id;
  const content_id = req.params.id;
  console.log(content_id);

  const {content_name,sales_org,catalog_number,catalog_category,locked,content} = req.body;

  try {
    const updateContent = await Content.update({content_name,sales_org,catalog_number,catalog_category,locked,content},
      {
        where: {
          content_id: content_id,
          user_id: user_id,
        },
      }
    );

    if(updateContent[0] === 1){
      res.status(200).json({status: "Success", message: "content Updated"});
    }else {
      res.status(404).json({ status: "Error", message: "content Not Found" });
    }
  }catch (error) {
    console.error("Error updating content:", error);
    res.status(500).json({ error: "Failed to Update content" });
  }
};

const deleteContent = async (req, res) => {
  const user_id = req.user.user_id;
  const content_id = req.params.id;
  console.log('delete:',content_id);

  try {
    const deleteContent = await Content.destroy({
      where: {
        content_id: content_id,
        user_id: user_id,
      },
      });

    if (deleteContent === 1) {
      res.status(200).json({ status: "Success", message: "content Deleted" });
    } else {
      res.status(404).json({ status: "Error", message: "content Not Found" });
    }
  } catch (error) {
    console.error("Error deleting content:", error);
    res.status(500).json({ error: "Failed to Delete content" });
  }
};

module.exports = {addContent, getContent ,updateContent, deleteContent}