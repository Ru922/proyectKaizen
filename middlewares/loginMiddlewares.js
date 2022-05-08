const ObjectId = require('mongoose').Types.ObjectId;

const idValidatorU = (req, res, next) => {
    if( !ObjectId.isValid(req.params.id) ){
        return res.status(400).send({ error: "Invalid ID Format." });
    };

    next();
};
const propertyValidatorU = (req, res, next) => {
    const unsupportedProperties = []; 
    for (let property in req.body) {
        if ( property !== 'email' && property !== 'name' && property !== 'avatar' && property !== 'password' && property !== 'username' && property !== 'lastname' ){
            unsupportedProperties.push(property);
        };
    };
    if(unsupportedProperties.length > 0) {
       return res.status(400).send({ error: `Unsupported properties: ${unsupportedProperties}.` });
    };
    next();
};

const nameValidatorU = (req, res, next) => {
    let na = "bad";
    for (let property in req.body) {
        if ( property == 'name' ) {
            na = "ok";
        };
    };
    if (na == 'bad') {
        return res.status(400).send({ error: "Name is requiered" });
    };    

    if(req.body.nombre && req.body.nombre.length > 31){
        return res.status(400).send({ error: "The name is too long." });
    };
    
    next();
}; 

const lastnameValidatorU = (req, res, next) => {
    let na = "bad";
    for (let property in req.body) {
        if ( property == 'lastname' ) {
            na = "ok";
        };
    };
    if (na == 'bad') {
        return res.status(400).send({ error: "Last name is requiered" });
    };    

    if(req.body.nombre && req.body.nombre.length > 41){
        return res.status(400).send({ error: "The Last name is too long." });
    };
    
    next();
}; 

/*
const usernameValidatorU = async (req,res, next) => {
    console.log('usernameValidator');
    let ma = "bad";
    for (let property in req.body) {
        if ( property == 'username' ) {
            ma = "ok";
            console.log('ok');
        };
    };
    if (ma == 'bad') {
        return res.status(400).send({ error: "User name is requiered" });
    };
    next();
}; 
*/
/*
const emailValidatorU = async (req,res, next) => {
    console.log('emailValidator');
    let ma = "bad";
    for (let property in req.body) {
        if ( property == 'email' ) {
            ma = "ok";
            console.log('ok');
        };
    };
    if (ma == 'bad') {
        return res.status(400).send({ error: "Email is requiered" });
    };
    next();
}; 
*/

const passValidatorU = (req, res, next) => {
    let pa = "bad";
    for (let property in req.body) {
        if ( property == 'password' ) {
            pa = "ok";
        };
    };
    if (pa == 'bad') {
        return res.status(400).send({ error: "Password is requiered" });
    };    

    const pass = req.body.password;
    let cuentaMay = 0;
    let cuentaMin = 0;
    for (var i = 0; i < req.body.password.length; i++ ) {
        if(pass.charCodeAt(i) > 64 && pass.charCodeAt(i) < 91) {
            cuentaMay = cuentaMay + 1;
        };
        if (!(pass.charCodeAt(i) > 64 && pass.charCodeAt(i) < 91)) {
            cuentaMin = cuentaMin + 1;
        };    
    };
    if ( (cuentaMay == 0) || (cuentaMin == 0) ) {
        return res.status(400).send({ error: "There must be at least one uppercase character and one lowercase character." });
    };
    next();
}; 

module.exports = { idValidatorU, propertyValidatorU, nameValidatorU, passValidatorU, lastnameValidatorU };