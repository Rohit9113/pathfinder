import React from 'react';

const FAQ = () => 
{
  return (
    
    <div 
    id='main'
    className="w-screen h-auto flex justify-center mt-10 mb-10">

      <div
      id='content'
      className='w-[90%] h-auto flex justify-center items-center flex-col p-10 '>

        <span className='md:text-4xl mb-8 font-bold text-center text-xl font-serif'>Frequently Asked Questions</span>

        <div
        className='w-full border-2 border-black flex flex-col p-2 shadow-xl mb-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg'>
          <span className='font-semibold'>1. What is the purpose of this website?</span>
          <p className='pl-4 text-gray-400'>This website helps students find the best technical courses based on their preferences, such as location, duration, price, and other filters. We aim to provide personalized course recommendations to help users make informed decisions about their education.</p>
        </div>

        <div
        className='w-full border-2 border-black flex flex-col p-2 shadow-xl mb-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg'>
          <span className='font-semibold'>2. How do I search for courses?</span>
          <p className='pl-4 text-gray-400'>You can use our search filters to narrow down your choices. You can filter by location, price, duration, subject, or other preferences. This allows you to find the most relevant courses that match your specific needs.</p>
        </div>

        <div
        className='w-full border-2 border-black  flex flex-col p-2 shadow-xl mb-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg'>
          <span className='font-semibold'>3. Are the courses free?</span>
          <p className='pl-4 text-gray-400'> Some of the courses listed on our website are free, while others may require a fee. The price is typically provided by the course provider, and we offer a range of free and paid options.</p>
        </div>

        <div
        className='w-full border-2 border-black flex flex-col p-2 shadow-xl mb-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg'>
          <span className='font-semibold'>4. How do I contact customer support?</span>
          <p className='pl-4 text-gray-400'> You can contact our customer support team by visiting the "Contact Us" section on our website. We provide various contact methods, including email and a contact form, so you can reach out with any questions or issues you may have.
          </p>
        </div>

        <div
        className='w-full border-2 border-black flex flex-col p-2 shadow-xl mb- rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg'>
          <span className='font-semibold'>5. Can I recommend a course?</span>
          <p className='pl-4 text-gray-400'> Yes, we encourage users to recommend courses! If you know of a course that you think would be valuable to our users, you can submit a recommendation through our "Recommend a Course" form on the website.</p>
        </div>

      </div>

    </div>
  );
};

export default FAQ;


