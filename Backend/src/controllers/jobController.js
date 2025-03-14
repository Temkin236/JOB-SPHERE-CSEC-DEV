import Job from '../models/jobModel.js';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';


const getJob = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const getJobById = async (req, res) => {
    try {
        const Job = await Job.findById(req.params.id);
        if(!Job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        console.log(Job);
        res.status(200).json(Job);
    } catch (error) {
        console.log("error fetching job" , error);
        res.status(500).json({ message: error.message });
    }
}
const createJob = async (req, res) => {
    const {title,company,location,type,description,salary,logo,experienceLevel,currency,isbookmarked} = req.body;
    const logoBuffer = req.file.logoBuffer
    const resizedBuffer = await sharp(logoBuffer).resize({ width: 250, height: 250 }).png().toBuffer();
    const name ='logo-${Date.now()}-${Math.round(Math.random() * 1E9)}.jpeg';
      const filePath = path.join(__dirname, '../../uploads', name);

      fs.writeFile(filePath, resizedBuffer, (error)=>{
        if(error) {
          console.log('error saving the file', error);
         }
      })
    try {
         const job = new Job({
            title,
            company,
            location,
            type,
            description,
            salary,
            logo: filePath,
            experienceLevel,
            currency,
            isbookmarked
        });
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const Updatejobs = async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate
        (req.params.id, req.body, { new: true });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        console.log(job);
        res.status(200).json(job);
}
catch(error) {
    res.status(500).json({ message: error.message });
}}

const deleteJobs = async (req, res) => {
    try {
       const job = await Job.findByIdAndDelete(req.params.id);
       if (!job){
        return res.status(404).json({ message: 'Job not found' });
       }
        console.log("deleted job",job);
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        console.error("error deleting job",error)
        res.status(500).json({ message: error.message });
    }
}

export { createJob, deleteJobs, getJob, getJobById, Updatejobs };
