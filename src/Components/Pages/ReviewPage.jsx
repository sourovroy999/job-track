import React from 'react';

const ReviewPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Ayesha Rahman",
      jobTitle: "Frontend Developer",
      comment: "JobTrack helped me land my dream job in just two weeks. The interface is smooth and easy to navigate!"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      jobTitle: "Backend Engineer",
      comment: "As a job seeker, I found JobTrack’s job listings to be relevant, updated, and very helpful."
    },
    {
      id: 3,
      name: "Fatima Noor",
      jobTitle: "UI/UX Designer",
      comment: "I loved how simple and clean JobTrack is. I applied to 4 companies and got 2 interview calls within a week."
    },
    {
      id: 4,
      name: "Hasan Ali",
      jobTitle: "Full Stack Developer",
      comment: "JobTrack saves time and shows only quality tech jobs. Highly recommended for devs!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">What People Say About <span className="text-blue-600">JobTrack</span></h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{review.jobTitle}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
