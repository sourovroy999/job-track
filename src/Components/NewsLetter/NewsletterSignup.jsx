import React, { useState } from 'react';
import toast from 'react-hot-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Simulate API call or store email
    console.log('Subscribed with:', email);
    toast.success('Subscribed successfully!');
    setEmail('');
  };

  return (
    <div className="bg-blue-100 py-8 px-4 rounded-xl shadow-lg text-center max-w-xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
      <p className="mb-4 text-gray-700">Subscribe to get job alerts and career tips in your inbox.</p>
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 justify-center">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <button type="submit" className="btn btn-primary mt-2 sm:mt-0">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
