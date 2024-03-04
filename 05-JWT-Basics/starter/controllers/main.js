const {BadRequest} = require("../errors/index");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    const {username, password} = req.body;
    //mongoose validation
    // Joi
    //check in Controller

    if (!username || !password) {
        throw new BadRequest('Please provide email and Password');
    }

    //dummy
    const id = new Date().getDate();

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});
    console.log(token);

    res.status(200).json({msg: 'user created', token});
}

const dashboard = async (req, res) => {

    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
        msg: `Hello, ${req.user.username}`, secret: 'Here is your authorized Data, your luck number is:' +
            `${luckyNumber}`
    })
}

module.exports = {login, dashboard};
