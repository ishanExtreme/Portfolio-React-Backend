
module.exports = (err, req, res, next)=>{

    return res.status(500).send({error:"Something Failed, Try again later"}); 
}