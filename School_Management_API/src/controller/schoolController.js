import {createSchool,distanceSchool} from '../model/schoolSchema.js';

export const addSchool = async (req,res) => {
    const {name, address, latitude, longitude } = req.body;

    if(!name || !address || !latitude || !longitude ){
        return res.status(400).json({message: 'Kindly fill all Details'});
    }
    try {
        const schoolId = await createSchool(name,address,latitude,longitude);
        res.status(201).json({message: 'School was added to db Successfully', schoolId});
    } catch (error) {
        console.error("Unable to add" , error);
        res.status(500).json({message: 'Unable to add school to db'});
        
    }
};

export const listSchools = async (req,res) => {
    const {latitude,longitude} = req.query;

    if(!latitude || !longitude){
        return res.status(400).json({message: 'Lat and Long fields required'});
    }
    try {
        const schools= await distanceSchool(latitude,longitude);
        res.status(200).json(schools);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Failed to fetch schools data'});
        
    }
};