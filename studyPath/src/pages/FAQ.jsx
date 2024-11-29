import { useState } from 'react';

const FAQ = () => 
{
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleAccordion = (index) => 
  {
    if (openIndex === index) 
    {
      setOpenIndex(null);
    } 
    else 
    {
      setOpenIndex(index);
    }
  };

  return (
    <div 
    id="main"
    className='max-w-screen flex justify-center items-center'>

      <div 
      className="w-[70%] sm:w-[60%]">

        <h1 className='text-center mb-10 font-bold text-2xl sm:text-5xl'>Frequently Asked Questions</h1>

          <div 
          className="border-2 border-black mb-1">

            <button
            onClick={() => toggleAccordion(1)}
            className="w-full px-4 py-2 text-left bg-white text-lg font-medium text-black hover:bg-gray-600 hover:text-white sm:px-6 sm:py-4 flex justify-between items-center">
              <p className='text-sm sm:text-lg'>1. What is the purpose of this website?</p>
              <i class="fa-solid fa-caret-down fa-sm sm:fa-lg"></i>
            </button>

            {openIndex === 1 && 
            (
              <div 
              className="px-6 py-4 bg-gray-100">

                <p>This website helps students find the best technical courses based on their preferences, such as location, duration, price, and other filters. We aim to provide personalized course recommendations to help users make informed decisions about their education.</p>
                
              </div>
            )}

          </div>

          <div 
          className="border-2 border-black mb-1">

            <button
            onClick={() => toggleAccordion(2)}
            className="w-full px-4 py-2 text-left bg-white text-lg font-medium text-black hover:bg-gray-600 hover:text-white sm:px-6 sm:py-4 flex justify-between items-center">
              <p className='text-sm sm:text-lg'>2. How do I search for courses?</p>
              <i class="fa-solid fa-caret-down fa-sm sm:fa-lg"></i>
            </button>

            {openIndex === 2 && 
            (
              <div 
              className="px-6 py-4 bg-gray-100">

                <p>You can use our search filters to narrow down your choices. You can filter by location, price, duration, subject, or other preferences. This allows you to find the most relevant courses that match your specific needs.</p>

              </div>
            )}
            
          </div>

          <div 
          className="border-2 border-black mb-1">

            <button
            onClick={() => toggleAccordion(3)}
            className="w-full px-4 py-2 text-left bg-white text-lg font-medium text-black hover:bg-gray-600 hover:text-white sm:px-6 sm:py-4 flex justify-between items-center">
              <p className='text-sm sm:text-lg'>3. Are the courses free?</p>
              <i class="fa-solid fa-caret-down fa-sm sm:fa-lg"></i>
            </button>

            {openIndex === 3 && 
            (
              <div 
              className="px-6 py-4 bg-gray-100">

                <p>Some of the courses listed on our website are free, while others may require a fee. The price is typically provided by the course provider, and we offer a range of free and paid options.</p>

              </div>
            )}
            
          </div>

          <div 
          className="border-2 border-black mb-1">

            <button
            onClick={() => toggleAccordion(4)}
            className="w-full px-4 py-2 text-left bg-white text-lg font-medium text-black hover:bg-gray-600 hover:text-white sm:px-6 sm:py-4 flex justify-between items-center">
              <p className='text-sm sm:text-lg'>4. How do I contact customer support?</p>
              <i class="fa-solid fa-caret-down fa-sm sm:fa-lg"></i>
            </button>

            {openIndex === 4 && 
            (
              <div 
              className="px-6 py-4 bg-gray-100">

                <p>You can contact our customer support team by visiting the "Contact Us" section on our website. We provide various contact methods, including email and a contact form, so you can reach out with any questions or issues you may have.</p>

              </div>
            )}
            
          </div>

          <div 
          className="border-2 border-black mb-1">

            <button
            onClick={() => toggleAccordion(5)}
            className="w-full px-4 py-2 text-left bg-white text-lg font-medium text-black hover:bg-gray-600 hover:text-white sm:px-6 sm:py-4 flex justify-between items-center">
              <p className='text-sm sm:text-lg'>5. Can I recommend a course?</p>
              <i class="fa-solid fa-caret-down fa-sm sm:fa-lg"></i>
            </button>

            {openIndex === 5 && 
            (
              <div 
              className="px-6 py-4 bg-gray-100">

                <p>Yes, we encourage users to recommend courses! If you know of a course that you think would be valuable to our users, you can submit a recommendation through our "Recommend a Course" form on the website.</p>

              </div>
            )}
            
          </div>

      </div>

    </div>
  );
};

export default FAQ;