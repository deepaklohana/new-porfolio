import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error('Please fill all the fields');
      return
    }
    // toast.success('Message sent successfully!')

    const response = await new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('API call successfully');
  }, 1000);
});
    if(response){
        toast.success('Message sent successfully!')
    }
    else{
        toast.error('Something went wrong')
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className=" py-12 mx-8  border-y mt-10 border-neutral-100 shadow-section-inset">
      <div className='mx-auto w-lg flex max-w-xl flex-col gap-5'>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium tracking-tight text-neutral-600" htmlFor="name">
          Full Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Deepak Kumar"
          name="name"
          id="name"
          className="shadow-own focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>
      

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium tracking-tight text-neutral-600" htmlFor="email">
          Email Address
        </label>
        <input
          onChange={handleChange}
          type="email"
          placeholder="deepak@project.com"
          name="email"
          id="email"
          className="shadow-own focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium tracking-tight text-neutral-600" htmlFor="message">
          Message
        </label>
        <textarea
          rows={5}
          onChange={handleChange}
          placeholder="You're crazy good, never change."
          name="message"
          id="message"
          className="shadow-own focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>
      <button className="bg-primary rounded-md px-4 py-2 text-white" type="submit">
        Send Message
      </button>
      </div>
    </form>
  );
};

export default ContactForm;
