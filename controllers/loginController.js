const User = require('../database/models/user');
const { lastnameValidatorU } = require('../middlewares/loginMiddlewares');

const getUser = async (req,res) => {
    console.log('getUser');
    const _username = req.body.username;
    const _pass = req.body.password;
    if ( _username == null && _pass == null ){
        try {
            const usermodel = await User.find({});
            return res.send(usermodel);
        } catch(error){
            console.log('Algo ocurrio:', error);
            return res.status(500).send({ error: error.message });
        };
    }
    if ( !(_username == null) && !(_pass == null) ) {
        try {
            const usermodel = await User.findOne({ username: _username });
            if( usermodel.username === _username && usermodel.password === _pass ) {
                return res.status(200).send( _username);
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

const usernameUser = async (req,res) => {
    console.log('usernameUser');
    const _username = req.body.username;
    const _pass = req.body.password;
    try {
        const usermodel = await User.findOne({ username: _username });
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
    const _username = req.body.username;
    const _pass = req.body.password;
    const _name = req.body.name;
    const _lastname = req.body.lastname;
    const _email = req.body.email;
    if ( !(_username == null) && !(_pass == null) && (_name == null) && (_lastname == null) && (_email == null)) {
// si solo envia username y pass es un login
        console.log('login');
        try {
            const usermodel = await User.findOne({ username: _username });
            if( usermodel.username === _username && usermodel.password === _pass ) {
                return res.status(200).send( _username);
            } else {
                return res.status(510).send( 'Nombre de usuario y contraseña incorrectos.' );
            }
        } catch( error ){
            return res.status(200).send( 'El usuario no existe. Debe registrarlo' );
        };
    } else {
        /// es un alta        
        console.log('addUser');
        //    const _username = req.params.username;
        try {
            const usermodel = await User.findOne({ _username });
            if( usermodel.length > 0 ){
                // ya existe
                return(res.status(500).send({ error: 'User already exists' }));
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
        }
};


module.exports = {
 getUser,
 addUser,
 oneUser,
 usernameUser
}