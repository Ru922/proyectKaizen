const ObjectId = require('mongoose').Types.ObjectId;

const idValidatorU = (req, res, next) => {
    if( !ObjectId.isValid(req.params.id) ){
        return res.status(400).send({ error: "Invalid ID Format." });
    };

    next();
};

const propertyValidatorU = (req, res, next) => {
    const unsupportedProperties = []; 
    const requiredProperties = [];
    let pa = "bad";
    let di = "bad";
    let ma = "bad";
    for (let property in req.body) {
        if ( property !== 'email' && property !== 'displayName' && property !== 'avatar' && property !== 'password' ){
            unsupportedProperties.push(property);
        };

    };
    if(unsupportedProperties.length > 0) {
       return res.status(400).send({ error: `Unsupported properties: ${unsupportedProperties}.` });
    };

    for (let property in req.body) {
        if ( property == 'email' ) {  //|| property == 'displayName' || property == 'password' ){
            ma = "ok";
        };
        if ( property == 'displayName' ) {  //|| property == 'displayName' || property == 'password' ){
            di = "ok";
        };
        if ( property == 'password' ) {  //|| property == 'displayName' || property == 'password' ){
            pa = "ok";
        };
    };
    if (ma == 'bad') {
        return res.status(400).send({ error: "Mail is requiered" });
    };
    if (di == 'bad') {
        return res.status(400).send({ error: "User is requiered" });
    };
    if (pa == 'bad') {
        return res.status(400).send({ error: "Password is requiered" });
    };    
    
    next();
};

const nameValidatorU = (req, res, next) => {
    if(req.body.displayName && req.body.displayName.length > 20){
        return res.status(400).send({ error: "The name is too long." });
    };
    
    next();
}; 

const passValidatorU = (req, res, next) => {
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
 console.log(`Mayusculas: ${cuentaMay}.`);
 console.log(`Minusculas: ${cuentaMin}.`);
    if ( (cuentaMay == 0) || (cuentaMin == 0) ) {
        return res.status(400).send({ error: "There must be at least one uppercase character and one lowercase character." });
    };
    
    next();
}; 

module.exports = { idValidatorU, propertyValidatorU, nameValidatorU, passValidatorU };