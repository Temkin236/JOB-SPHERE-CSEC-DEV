import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useJobForm } from '../store/useJobForm';
import { useStepper } from '../store/useStepper';
import axios from 'axios';

const Form1 = ({ next }) => {
  const { form1, setForm1 } = useJobForm();

  const validationSchema = yup.object({
    title: yup.string().required('Job title is required'),
    type: yup.string().required('Job type is required'),
    salary: yup.number().required('Salary is required').positive('Salary must be a positive number'),
    description: yup.string().required('Description is required'),
  });

  return (
    <Formik
      initialValues={form1}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setForm1(values);
        next();
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form className="space-y-4 bg-white p-6 rounded-lg shadow-lg w-96">
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <Field name="title" placeholder="Job Title" className="w-full p-2 border rounded mt-1" />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Job Type</label>
            <Field name="type" placeholder="Job Type" className="w-full p-2 border rounded mt-1" />
            <ErrorMessage name="type" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Salary</label>
            <Field name="salary" placeholder="Salary" className="w-full p-2 border rounded mt-1" />
            <ErrorMessage name="salary" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <Field name="description" placeholder="Description" className="w-full p-2 border rounded mt-1" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

const Form2 = ({ back, submit }) => {
  const { form2, setForm2 } = useJobForm();

  const validationSchema = yup.object({
    company: yup.string().required('Company name is required'),
    location: yup.string().required('Location is required'),
    experienceLevel: yup.string().required('Experience level is required'),
    currency: yup.string().required('Currency is required'),
  });

  return (
    <Formik
      initialValues={form2}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setForm2(values);
        submit();
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form className="space-y-4 bg-white p-6 rounded-lg shadow-lg w-96">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <Field name="company" placeholder="Company" className="w-full p-2 border rounded mt-1" />
            <ErrorMessage name="company" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <Field name="location" placeholder="Location" className="w-full p-2 border rounded mt-1" />
            <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Experience Level</label>
            <Field name="experienceLevel" placeholder="Experience Level" className="w-full p-2 border rounded mt-1" />
            <ErrorMessage name="experienceLevel" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Currency</label>
            <Field name="currency" placeholder="Currency" className="w-full p-2 border rounded mt-1" />
            <ErrorMessage name="currency" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={back}
              className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const JobPost = () => {
  const { step, next, back } = useStepper();
  const { form1, form2, resetForm, addPostedJob } = useJobForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    const job = {
      title: form1.title.trim(),
      type: form1.type,
      salary: parseFloat(form1.salary), 
      description: form1.description.trim(),
      company: form2.company.trim(), 
      location: form2.location.trim(),
      experienceLevel: form2.experienceLevel,
      currency: form2.currency,
      logo: "https://logo.clearbit.com/google.com",
      isBookMarked: false,
    };
  
    console.log("Submitting job:", job);
  
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');
  
    try {
      const response = await axios.post(`https://joblisting-3hjv.onrender.com/api/jobs?${params}`, job);
      console.log('Job posted successfully:', response.data);
  
      addPostedJob(job);
      resetForm();
      setSuccessMessage('Job posted successfully!');
    } catch (error) {
      console.error('Error posting job:', error);
      setErrorMessage('Failed to post job. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96">
        {step === 0 && <Form1 next={next} />}
        {step === 1 && <Form2 back={back} submit={handleSubmit} />}

        {successMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPost;