import db from '../config/database.js'

export async function getAllUsers({role = null}){

    const pool = await db.getConnection()

    let condicion = ''
    if (role){
        condicion = `WHERE role = ? `
    }

    //Sustituir BIN_TO_UUID por HEX
    const [result] = await pool.query(`SELECT BIN_TO_UUID(id) as id, name, username, email, phone, 
        role, password, must_change_password FROM users ${condicion}`, [role])

    return result
}

export async function getUserById(id){
    
    const pool = await db.getConnection()

    const [result] = await pool.query(`SELECT BIN_TO_UUID(id) as id, name, username, email, phone, 
        role, password, must_change_password FROM users WHERE BIN_TO_UUID(id) = ? `, [id])

    return result
}

export async function createUser(data){

    // const mapeo = {
    //     id: 'userId',
    //     name: 'name',
    //     username: 'username',
    //     email: 'email',
    //     phone: 'phone',
    //     role: 'role',
    //     password: 'password',
    //     must_change_password: 'mustChangePassword'
    // }

    const pool = await db.getConnection()

    const [result] = await pool.query(`INSERT INTO users (id, name, username, email, phone, role, 
                                        password, must_change_password) 
                                        VALUES ( UUID_TO_BIN(:id), :name, :username, :email, :phone, :role, 
                                        :password, :must_change_password )`, data)

    return result
}