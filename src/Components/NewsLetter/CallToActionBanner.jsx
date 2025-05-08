import React from 'react';
import { useNavigate } from 'react-router';

const CallToActionBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r  from-sky-500 to-indigo-500 text-white py-10 px-6 rounded-xl shadow-xl my-10 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-bold mb-2">Ready to land your dream job?</h2>
          <p className="text-lg">Join thousands of professionals using JobTrack to take the next step in their careers.</p>
        </div>
        <button
          onClick={() => navigate('/register')}
          className="btn btn-accent text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CallToActionBanner;
