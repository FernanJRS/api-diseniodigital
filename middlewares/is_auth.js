
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const isAuth = (req, res, next) => {

    const authHeader = req.headers.authorization // Bearer aoeifawi39j092ei (token)

    if (!authHeader) {
        return res.status(401).json({ 
            success: false,
            message: 'Debe iniciar sesion' })
    }


    const token = authHeader.split(' ')[1] 

    // Comrpobar si el token es valido

    try {
        jwt.verify(token, process.env.SECRET_KEY)

        next()
    } catch (err) {
            return res.status(401).json({ 
                success: false,
                message: err.message })   
    }

    next()
}

