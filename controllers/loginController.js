const User = require('../database/models/user')

const getUser = async (req,res) => {
    console.log('getUser');
    const _email = req.body.email;
    const _pass = req.body.password;
    if ( _email == null && _pass == null ){
        try {
            const usermodel = await User.find({});
            return res.send(usermodel);
        } catch(error){
            console.log('Algo ocurrio:', error);
            return res.status(500).send({ error: error.message });
        };
    }
    if ( !(_email == null) && !(_pass == null) ) {
        try {
            const usermodel = await User.findOne({ email: _email });
            if( usermodel.email === _email && usermodel.password === _pass ) {
                return res.status(200).send( _email);
            } else {
                return res.status(510).send( 'Nombre de usuario y contraseña incorrectos.' );
            }
        } catch( error ){
            return res.status(200).send( 'El usuario no existe.' );
        };
    } else {
        return res.status(200).send( 'Faltan datos.' );
    }
}

const emailUser = async (req,res) => {
    console.log('emailUser');
    const _email = req.body.email;
    const _pass = req.body.password;
    try {
        const usermodel = await User.findOne({ email: _email });
        return res.send(usermodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        return res.status(500).send({ error: error.message });
    };
}

const oneUser = async (req, res) => {
    console.log('oneUser');
    try {
        const usermodel = await User.findById({_id : req.params.id});
        return res.send(usermodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        return res.status(500).send({ error: error.message });
    };
};

const addUser = async (req, res) => {
    console.log('addUser');
    const _email = req.params.email;
    try {
        const usermodel = await User.findOne({ _email });
        if( usermodel.length > 0 ){
            // ya existe
            return(res.status(500).send({ error: 'El correo ya existe' }));
        };

    } catch(error){
        console.log('Algo ocurrio:', error);
        return res.status(500).send({ error: error.message });
    };
    try {
        console.log('addUser');
        const usermodel = await User.create(req.body);

        return res.send(usermodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        return res.status(500).send({ error: error.message });
    };
};


module.exports = {
 getUser,
 addUser,
 oneUser,
 emailUser
}