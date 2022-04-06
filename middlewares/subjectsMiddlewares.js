const express = require('express');
const ObjectId = require('mongoose').Types.ObjectId;

const idValidator = (req, res, next) => {
    if( !ObjectId.isValid(req.params.id) ){
        return res.status(400).send({ error: "Invalid ID Format." });
    };

    next();
};

const priceValidator = (req, res, next) => {
    if (req.body.price < 0 ){
        return res.status(400).send({ error: "Price must be higher than 0." });
    }

    next();
};


const propertyValidator = (req, res, next) => {
    const unsupportedProperties = []; 
    
    for (let property in req.body) {
        if ( property !== 'price' && property !== 'name' && property !== 'description' && property !== 'imageUrl' && property !== 'schedule' && property !== 'profesor' ){
            unsupportedProperties.push(property);
        }
    }

    if(unsupportedProperties.length > 0) {
       return res.status(400).send({ error: `Unsupported properties: ${unsupportedProperties}.` });
    }

    next();
};

    const profesorValidator = (req, res, next) =>{
        let patron = /^[0-9]*(\.?)[ 0-9]+$/;
        
        let name = req.body.name.toString()

        if(arr.includes(Number)){
            
            return res.status(400).send({ error: "Incorrect name" });
        }
        next();
};

    const descriptionValidator = (req, res, next) =>{

        if(req.body.description.length > 100){
            return res.status(400).send({ error: "Too many characters" })
        }

        next();
};


module.exports = {
    idValidator,
    priceValidator,
    propertyValidator,
    profesorValidator,
    descriptionValidator
}