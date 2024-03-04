
const login = async (req, res)=>{
    res.status(200).send('Fake Login/register/signup route')
}

const dashboard = async(req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:'Hello, John Doe', secret:'Here is your authorized Data, your luck number is:' +
            `${luckyNumber}`});
}

module.exports = {login, dashboard};
