import express from 'express';
import {
    createJob,
    getJob,
    getJobById,
    deleteJobs,
    Updatejobs, // Add missing import
} from '../controllers/jobController.js'; // Include file extension
import validationJob from '../middleware/validator.js'; // Include file extension

const router = express.Router();

// Define routes
router.get('/', getJob); // Get all jobs
router.get('/:id', getJobById); // Get a job by ID
router.post('/', validationJob, createJob); // Create a new job (with validation)
router.put('/:id', Updatejobs); // Update a job by ID
router.delete('/:id', deleteJobs); // Delete a job by ID

export default router;