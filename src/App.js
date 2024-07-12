import React, { useState } from 'react';

import './App.css';

const FormFromJSON = ({ formData }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
    <div className="form">
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((fieldName) => (
          <div key={fieldName} className='form-group'>
            <label htmlFor={fieldName}>{formData[fieldName].label}</label>
            {formData[fieldName].type === 'text' && (
              <input
                type="text"
                id={fieldName}
                name={fieldName}
                value={formValues[fieldName] || ''}
                onChange={handleChange}
                required = {formData[fieldName].required}
              />
            )}
            {formData[fieldName].type === 'number' && (
              <input
                type="number"
                id={fieldName}
                name={fieldName}
                value={formValues[fieldName] || ''}
                onChange={handleChange}
              />
            )}

          {formData[fieldName].type === 'email' && (
              <input
                type="email"
                id={fieldName}
                name={fieldName}
                value={formValues[fieldName] || ''}
                onChange={handleChange}
              />
            )}

            {formData[fieldName].type === 'password' && (
              <input
                type="password"
                id={fieldName}
                name={fieldName}
                value={formValues[fieldName] || ''}
                onChange={handleChange}
                required = {formData[fieldName].required}
              />
            )}
            {formData[fieldName].type === 'textarea' && (
              <textarea
                id={fieldName}
                name={fieldName}
                value={formValues[fieldName] || ''}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
      </div>
    </div>
  );
};

const formData = {
  name: {
    label: 'Nombre',
    type: 'text',
  },
  email: {
    label: 'Correo electrónico',
    type: 'email',
    required : 'true'
  },
  message: {
    label: 'Mensaje',
    type: 'textarea',
  },
  age: {
    label: 'Edad',
    type: 'number',
  },
  pass: {
    label: 'Contraseña',
    type: 'password',
    required: 'true'
  }
};

const App = () => {
  return (
    <div>
      <h1>Registrar personas</h1>
      <FormFromJSON formData={formData} />
    </div>
  );
};

export default App;
