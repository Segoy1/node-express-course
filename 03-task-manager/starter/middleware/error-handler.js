const{CustomError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof CustomError){
        return res.status(err.stack).json({msg:err.message})
    }
    return res.status(500).json({msg:'Something Wrong'})
}

module.exports = errorHandlerMiddleware
