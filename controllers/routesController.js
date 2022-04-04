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

const oneSubject = async (req, res) => {
    try {
        const subjectmodel = await subjectModel.findOne(req.body);

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

const modifySubject = async (req, res) => {
    try {
        const subjectmodel = await subjectModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })

        return res.send(subjectmodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        res.status(500).send({ error: error.message });
        throw error;
    }

}

const deleteSubject = async (req, res) => {
    try {
        const subjectmodel = await subjectModel.findByIdAndDelete({ _id: req.params.id })

        return res.send(subjectmodel);
    } catch(error){
        console.log('Algo ocurrio:', error);
        res.status(500).send({ error: error.message });
        throw error;
    }

}

module.exports = {
    subjectsPage,
    oneSubject,
    addSubject,
    modifySubject,
    deleteSubject
}