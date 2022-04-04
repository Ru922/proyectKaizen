const subjectModel  = require ('../models/subjectsModel')

const subjectsPage = async (req, res) => {
    try {
        const subjectmodel = await subjectModel.find({});

        return res.send(subjectmodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        res.status(500).send({ error: error.message });
        throw error;
    }
};

const addSubject = async (req, res) => {
    try {
        const subjectmodel = await subjectModel.create(req.body);

        return res.send(subjectmodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        res.status(500).send({ error: error.message });
        throw error;
    }

}

module.exports = {
    subjectsPage,
    addSubject
}