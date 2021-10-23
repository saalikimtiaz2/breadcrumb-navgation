import React, { useState } from 'react';
import Layout from '../../components/Layout';

function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    isSubmitted: false,
  });

  const handleInputChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setFormData({ ...formData, isSubmitted: true });
    console.log(formData);
  };

  return (
    <Layout>
      <div className="h-3/4 w-100 flex flex-col items-center justify-center">
        <div className="bg-gray-300 p-4 pt-8 w-min rounded shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
            className="rounded-full h-32 w-32 mb-6 mx-auto shadow-lg object-cover"
            alt=""
          />
          <form action="none" onSubmit={handleFormSubmit}>
            <label htmlFor="fullName">
              Name
              <input
                name="fullName"
                placeholder="Jhon Doe"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                name="email"
                placeholder="abc@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <button
              type="submit"
              className="block mx-auto text-sm bg-black text-white px-6 py-1 mt-6"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        {formData.isSubmitted && (
          <div className="block mt-8">
            Hello {formData.fullName} your email is {formData.email}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Home;
