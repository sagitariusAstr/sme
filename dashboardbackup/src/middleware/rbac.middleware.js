const isAdmin = (req,res,next) => {
    if(req.auth_user.role === 'admin'){
        next();
    }else{
        next({
            status:403,
            msg:"you are not authorized to access this functionality"
        })
    }
}


const isSupervisor = (req,res,next) => {
    if(req.auth_user.role === 'supervisors'){
        next();
    }else{
        next({
            status:403,
            msg:"you are not authorized to access this functionality"
        })
    }
}

const isAdminSupervisor = (req,res,next) => {
    if(req.auth_user.role === 'supervisors' || req.auth_user.role === 'admin' ){
        next();
    }else{
        next({
            status: 403,
            msg:"you are not authorized to access"
        })
    }
}

module.exports = {
    isAdmin,
    isSupervisor,
    isAdminSupervisor
}