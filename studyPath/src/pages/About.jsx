import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const About = () => {
  return (
      <>
      <Nav />
      <div 
      id="main"
      className='w-full h-auto flex justify-center mb-10'>
        
        <div
        id='content'
        className='w-[90%] h-auto border-2 border-black flex justify-center items-center flex-col p-10 shadow-2xl mt-32'>

          <span className='font-bold text-5xl mb-6 sm:text-6xl text-center'>About Us</span>

          <p className='mb-6 text-justify sm:text-center'>Welcome to StudyPathFinder, your trusted partner in finding the perfect technical courses to advance your career in Computer Science and Information Technology. In today’s fast-paced world, the vast array of online and offline courses can be overwhelming, and making the right choice is crucial to achieving your goals. That’s where we come in!
            <br />
          At StudyPathFinder, we specialize in helping students find the best courses that match their individual needs. Whether you're looking to learn a new programming language, dive into data science, explore cybersecurity, or enhance your skills in software development, we provide personalized recommendations based on your preferences.
          </p>

          <span className='font-bold text-3xl sm:text-4xl mb-4'>Our Mission</span>

          <p className='mb-2 text-justify sm:text-center'>Our mission is to empower students by providing them with the most relevant and tailored course recommendations in the tech field. We understand that every learner is unique, and choosing the right course should align with your goals, budget, and lifestyle. That’s why our platform focuses on delivering precise suggestions based on your specific criteria, such as:</p>

          <ul className='list-disc mb-8'>
            <li><strong>Location:</strong> Whether you prefer online or offline courses, we have options suited to your preferred learning environment.</li>
            <li><strong>Duration:</strong> From short-term crash courses to long-term professional programs, we cater to your schedule.</li>
            <li><strong>Price:</strong> We help you find the best courses that fit your budget without compromising on quality.</li>
            <li><strong>Additional Requirements:</strong> From accreditation to career support, we consider all the factors that matter to you.</li>
          </ul>

          <span className='font-bold text-3xl sm:text-4xl mb-4'>What We Offer?</span>

          <ul className='list-disc mb-8'>
            <li><strong>Personalized Recommendations: </strong> Our intelligent algorithm takes into account your preferences such as course type, duration, price, and more to suggest the most suitable options.</li>
            <li><strong>Comprehensive Course Database</strong>With an extensive database of technical courses offered by reputable online and offline institutions, we offer a wide variety of subjects including coding, cloud computing, machine learning, data analysis, and much more.</li>
            <li><strong>Reliable Reviews & Ratings: </strong>Gain insights from other learners’ experiences. Our platform includes verified reviews and ratings from students who have taken the courses.</li>
            <li><strong>Career Focused Learning Paths:</strong> Whether you’re a beginner or looking to upskill, we curate learning paths designed to help you achieve your career goals in tech.</li>
            <li><strong>Upto Date Information: </strong>We continuously update our course listings to ensure that you have access to the latest, most relevant educational opportunities.</li>
          </ul>
          <span className='font-bold text-3xl sm:text-4xl text-center mb-4'>What Choose Us?</span>

          <ul className='list-disc mb-8'>
            <li><strong>Tailored for your Needs: </strong>We’re not just another course directory. We go beyond simply listing options — we provide recommendations based on a combination of factors that matter most to you.</li>
            <li><strong>Expert Advice: </strong>Our team of experts has years of experience in the tech education space, ensuring that we only recommend courses that meet the highest standards.</li>
            <li><strong>Time Saving: </strong>We take the legwork out of course hunting by narrowing down your options to the ones that truly match your criteria.</li>
            <li><strong>Career Focused Learning Paths:</strong> Whether you’re a beginner or looking to upskill, we curate learning paths designed to help you achieve your career goals in tech.</li>
            <li><strong>Affordable Learning: </strong>We believe in accessible education. By helping you choose the right course at the right price, we aim to make your learning journey affordable and efficient.</li>
          </ul>

          <span className='font-bold text-3xl sm:text-4xl mb-4'>Our Vision</span>

          <p className='mb-8 text-justify sm:text-center'>We envision a world where every student has easy access to high-quality education that empowers them to succeed in the ever-evolving tech industry. Our goal is to simplify the course selection process and provide a seamless, personalized learning experience that accelerates your career in IT and Computer Science.</p>

          <span className='font-bold text-3xl sm:text-4xl mb-4'>Join Us Today!</span>

          <p className='mb-8 text-justify sm:text-center'>Ready to find the perfect course? Let us help you take the first step toward achieving your learning and career goals. Start your journey with StudyPathFinder today, and get recommendations tailored just for you!</p>
        </div>


      </div>
      <Footer />
      </>

  )
}

export default About