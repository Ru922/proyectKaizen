const User = require('../database/models/user')

const getUser = async (req,res) => {
    try {
        const usermodel = await User.find({});

        return res.send(usermodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        res.status(500).send({ error: error.message });
        throw error;
    };
}

const oneUser = async (req, res) => {
    try {
        const usermodel = await User.findOne({_id : req.params.id});

        return res.send(usermodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        res.status(500).send({ error: error.message });
        throw error;
    };
};

const addUser = async (req, res) => {
    try {
        const usermodel = await User.create(req.body);
        return res.send(usermodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        res.status(500).send({ error: error.message });
        throw error;
    };
    
};

module.exports = {
 getUser,
 addUser,
 oneUser
}