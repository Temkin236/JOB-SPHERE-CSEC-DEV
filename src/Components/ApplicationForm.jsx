import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useAuthStore from '../store/useAuthStore'; // Import Zustand store

const ApplicationForm = () => {
  const { isAuthenticated } = useAuthStore((state) => state);

  const initialValues = {
    name: '',
    email: '',
    resume: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    resume: Yup.mixed().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    // Handle form submission logic here
  };

  if (!isAuthenticated) {
    return <p>You need to be logged in to apply for this job.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Apply for Software Engineer</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className="flex flex-col gap-6">
            <div className="relative">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 border-[1px] border-[#87878762] rounded-xl placeholder:text-black placeholder:font-light"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="relative">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border-[1px] border-[#87878762] rounded-xl placeholder:text-black placeholder:font-light"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="relative">
              <input
                type="file"
                name="resume"
                onChange={(event) => {
                  setFieldValue('resume', event.currentTarget.files[0]);
                }}
                className="w-full p-3 border-[1px] border-[#87878762] rounded-xl placeholder:text-black placeholder:font-light"
              />
              <ErrorMessage name="resume" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplicationForm;