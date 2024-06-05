const userModel = require("../../models/userModel");

async function userControllerDetails(req,res){
    try{
        console.log("user_id",req.userId);
        const user=await userModel.findById(req.userId)
        res.status(200).json({
            data:user,
            error:false,
            success:true,
            message:"user details"
        })
        console.log("user---",user)
    }
    catch(err){
        res.status(400).json(
            {
                message:err.message || err,
                error:true,
                success:false,
            }
        )
    }
}
module.exports=userControllerDetails