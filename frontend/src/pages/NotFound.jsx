import React from 'react'

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-center bg-slate-50">
      <img 
        src="404_NotFound.png"
        alt="not found" 
        className="max-w-full mb-6 w-96"
      />

      <p className="text-xl font-semibold">
        Page could not be found.
      </p>

      <a href="/" className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md 
      bg-primary rounded-2xl hover:bg-primary">
        Return to HomePage
      </a>
    </div>
  );
};

export default NotFound;