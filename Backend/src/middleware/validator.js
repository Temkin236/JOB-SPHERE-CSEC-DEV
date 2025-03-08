
import { body, validationResult } from 'express-validator';

const validateJob = [
    body('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
    body('description').isLength({ min: 5 }).withMessage('Description must be at least 5 characters long'),
    body('location').isLength({ min: 3 }).withMessage('Location must be at least 3 characters long'),
    body('company').isLength({ min: 3 }).withMessage('Company must be at least 3 characters long'),
    body('salary').isNumeric().withMessage('Salary must be a number'),
    body('logo').isURL().withMessage('Logo must be a URL'),
    body('type').isLength({ min: 3 }).withMessage('Type must be at least 3 characters long'),
    body('experienceLevel').isLength({ min: 3 }).withMessage('Experience Level must be at least 3 characters long'),
    body('currency').isLength({ min: 3 }).withMessage('Currency must be at least 3 characters long'),
    body('isbookmarked').isBoolean().withMessage('isbookmarked must be a boolean'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
export default validateJob;