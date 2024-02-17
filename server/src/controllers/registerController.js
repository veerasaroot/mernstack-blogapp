const User = require('../models/user')
const bcrypt = require('bcryptjs')

const registerController = async (req, res) => {
    const { username, email, password } = req.body

    const dbFind = await User.find({ email: email })
    if (dbFind.length > 0) {
        res.json({
            'type': 'Error',
            'message': 'The provided email has already used.'
        })
    } else {
        const userModel = new User({
            _id: null,
            username: username,
            email: email,
            password: await bcrypt.hash(password, 10),
            created_at: Date.now()
        })
        userModel.save()

        res.json({
            'type': 'Success',
            'message': 'Registration successfully.'
        })
    }
}

module.exports = registerController