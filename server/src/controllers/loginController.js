const User = require('../models/user')
const bcrypt = require('bcryptjs')

const loginController = async (req, res) => {
    const { email, password } = req.body

    const dbFind = await User.findOne({ email: email })
    if (!dbFind) {
        res.json({
            'type': 'Error',
            'message': 'Credentials does not match our records.'
        }).status(401)
    } else {
        const dbId = dbFind._id
        const dbUserName = dbFind.username
        const dbEmail = dbFind.email
        const dbPassword = dbFind.password
        const dbCreatedAt = dbFind.created_at

        const passwordMatch = await bcrypt.compare(password, dbPassword)
        if (!passwordMatch) {
            res.json({
                'type': 'Error',
                'message': 'Password does not match.'
            }).status(401)
        } else {
            res.json({
                'id': dbId,
                'username': dbUserName,
                'email': dbEmail,
                'password': dbPassword,
                'created_at': dbCreatedAt
            })
        }
    }
}

module.exports = loginController