import React from 'react';
import useFormStore from './useFormStore';

const FormComponent = () => {
  const { formValues, setFormValues, validationSchema } = useFormStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(formValues)
      .then((valid) => {
        console.log('Form is valid:', valid);
        // Submit form
      })
      .catch((err) => {
        console.error('Validation error:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={formValues.type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Salary:</label>
        <input
          type="number"
          name="salary"
          value={formValues.salary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formValues.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={formValues.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Logo URL:</label>
        <input
          type="text"
          name="logo"
          value={formValues.logo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Bookmarked:</label>
        <input
          type="checkbox"
          name="isBookMarked"
          checked={formValues.isBookMarked}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              isBookMarked: e.target.checked,
            })
          }
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formValues.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Experience Level:</label>
        <input
          type="text"
          name="experienceLevel"
          value={formValues.experienceLevel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Currency:</label>
        <input
          type="text"
          name="currency"
          value={formValues.currency}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;