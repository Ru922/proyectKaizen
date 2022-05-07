const User = require('../database/models/user')

const getUser = async (req,res) => {
    console.log('getUser');
    try {
        const usermodel = await User.find({});

        return res.send(usermodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        res.status(500).send({ error: error.message });
        throw error;
    };
}

const emailUser = async (req,res) => {
    console.log('emailUser');
    const _email = req.params.email;
    try {
        const usermodel = await User.findOne({ _email });
        return res.send(usermodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        res.status(500).send({ error: error.message });
        throw error;
    };
}

const oneUser = async (req, res) => {
    console.log('oneUser');
    try {
        const usermodel = await User.findById({_id : req.params.id});
        return res.send(usermodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        res.status(500).send({ error: error.message });
        throw error;
    };
};

const addUser = async (req, res) => {
    console.log('addUser');
    try {
        console.log('addUser');
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
 oneUser,
 emailUser
}