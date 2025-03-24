import jwt from 'jsonwebtoken'

export const isAdmin = (req, res, next) => {
    
    try {
        var decoded = jwt.verify(req.headers.authorization.split(' ')[1], 'uabfnfmefiaomfsdf139')
        console.log(decoded)
    } catch (error) {
        return res.status(401).json({ 
            success: false,
            message: error.message })
    }
    
    if (decoded.role !== 'admin') {
        return res.status(401).json({ 
            success: false,
            message: 'No tiene permisos para realizar esta acción' })
    }
    
    next()
}