// import React from 'react'
// import banner from '../assets/banner1.png'
// import gif1 from '../assets/Prize-simplicity.gif'
// import gif2 from '../assets/Help-Others.gif'
// import gif3 from '../assets/Enjoy-Simple-Course-Creation.gif'
// import image1 from '../assets/image1.png'


// const About = () => {
//   return (
//     <>
//       <div className='text-white bg-gray-900 font-sans'>
//         <div className='flex justify-between items-center mx-8 py-10 '>
//           <div className='w-1/2'>
//             <span className='text-7xl text-gray-100 hover:text-gray-300 w-60 size-96 leading-normal font-ubuntu'>Hi, we&apos;e <p className='marquee-name hover:text-blue-500 text-9xl font-extrabold text-white'>Educatsy</p> and we’re here to empower organizations and their people on the path to greatness.</span>
//           </div>
//           <div>
//             <img className='w-[60rem] rounded-[5rem] mt-20' src={banner} alt="" />
//           </div>
//         </div>
//         <div className='flex   mx-8 '>
//           <div className='w-1/2 mt-48'>
//             <div className='flex flex-col  justify-between'>
//               <span className='bg-cyan-600 h-1 w-[22rem] rounded-lg text-center mb-2'></span>
//               <span className='text-8xl'>Our <span className='marquee-name font-extrabold'> Vision</span> </span>
//             </div>
//           </div>
//           <div className='text-4xl w-[110rem] leading-tight mt-48'>
//             <p><span className='marquee-name font-extrabold'>Greatness isn&apos;t achieved overnight</span>. It&apos;s a unique journey for everyone, with a lot of learnings and experiences along the way. That&apos;s why, at <span className='marquee-name font-extrabold'>Educatsy</span>, we don&apos;t offer a one-size-fits-all training solution. We&apos;re on a mission to <span className='marquee-name font-extrabold'>empower organizations and their people on the path to greatness</span> through impactful learning experiences.</p><br />
//             <p>But impactful doesn&apos;t have to be bewildering. In an increasingly complex world, we&apos;re committed to <span className='marquee-name font-extrabold'>simplifying the ways in which we learn and work.</span></p><br />
//             <p>Our promise to our customers (and ourselves) is to deliver a training solution that is joyously intuitive for trainers and learners. Because <span className='marquee-name font-extrabold'>when people thrive, organizations follow suit.</span></p><br />
//           </div>
//         </div>

//         <div className=' mt-56  mx-8 '>
//           <div className='w-1/2 mt-48'>
//             <div className='flex flex-col justify-between'>
//               <span className='bg-orange-600 h-1 w-[22rem] rounded-lg text-center mb-2'></span>
//               <span className='text-8xl'>Our <span className='marquee-name font-extrabold'> Values</span> </span>
//             </div>
//           </div>
//           <div className='text-4xl leading-tight mt-28 flex  justify-around items-center'>
//             <div className='ml-52 flex-row'>
//               <div className='flex justify-center items-center mb-20'>
//                 <img className='w-20 mt-11' src={gif1} alt="gif1" />
//                 <div className='flex flex-col ml-10'>
//                   <h1 className='mb-2 font-extrabold text-gray-400 text-5xl'>Embracing simplicity</h1>
//                   <p >We make learning easy, not busy, by embracing a simplicity-first approach in all we do. When training clicks for you in a snap, we know we&apos;ve done well. </p>
//                 </div>
//               </div>
//               <div className='flex justify-center items-center mb-20'>
//                 <img className='w-20 mt-11' src={gif2} alt="gif2" />
//                 <div className='flex flex-col ml-10'>
//                   <h1 className='mb-2 font-extrabold text-gray-400 text-5xl'>Helping hands at the ready</h1>
//                   <p>We strive for meaningful innovation with the right industry trends to empower you to do your best work. We’re always here to help, ready to act on your training needs.  </p>
//                 </div>
//               </div>
//               <div className='flex justify-center items-center mb-20'>
//                 <img className='w-20 mt-11' src={gif3} alt="gif3" />
//                 <div className='flex flex-col ml-10'>
//                   <h1 className='mb-2 font-extrabold text-gray-400 text-5xl'>Learning never ends</h1>
//                   <p>There are no shortcuts to knowing it all, and we embrace that. What we don’t know, we’re excited to learn—from you, and each other. </p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <img className='w-[110rem] rounded-[5rem]' src={banner} alt="" />
//             </div>
//           </div>
//         </div>

//         <div className=' mt-56  mx-8 '>
//           <div className='w-1/2 mt-48'>
//             {/* <div className='flex flex-col  justify-between'>
//               <span className='bg-orange-600 h-1 w-[22rem] rounded-lg text-center mb-2'></span>
//               <span className='text-8xl'>Our <span className='marquee-name font-extrabold'> Values</span> </span>
//             </div> */}
//           </div>
//           <div className='text-4xl leading-tight mt-28 flex flex-row-reverse justify-around items-center'>
//             <div className='ml-52 flex-row'>
//               <div className='flex justify-center items-center mb-20'>
//                 <img className='w-20 mt-11' src={gif1} alt="gif1" />
//                 <div className='flex flex-col ml-10'>
//                   <h1 className='mb-2 font-extrabold text-gray-400 text-5xl'>Keeping it real</h1>
//                   <p >Whatever we say, whatever we do, we&apos;re genuine and honest about it. Tell us how we can help and we&apos;ll dive right into it. Because *real* is the only way we know how to be. </p>
//                 </div>
//               </div>
//               <div className='flex justify-center items-center mb-20'>
//                 {/* <img className='w-20 mt-11' src={gif2} alt="gif2" /> */}
//                 <span className='text-[7rem] text-extrabold text-gray-500 animate-pulse'>&rarr;</span>
//                 <div className='flex flex-col ml-10'>
//                   <h1 className='mb-2 font-extrabold text-gray-400 text-5xl'>Driving solutions</h1>
//                   <p>Problems may sometimes be around the corner, but the solutions are never out of reach. We’re always up for a good challenge, because every challenge is a world of possibilities.</p>
//                 </div>
//               </div>
//               <div className='flex justify-center items-center mb-20'>
//                 <img className='w-20 mt-11' src={gif3} alt="gif3" />
//                 <div className='flex flex-col ml-10'>
//                   <h1 className='mb-2 font-extrabold text-gray-400 text-5xl'>Going above and beyond</h1>
//                   <p>Nothing stands between us and seeking out what simply works. Whether it&apos;s developing products, answering support tickets, or prepping insightful webinars, we leave no stone unturned.  </p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <img className='w-[110rem] rounded-[5rem]' src={banner} alt="" />
//             </div>
//           </div>
//         </div>

//         <div className=' mt-56  mx-8 pb-80 '>
//           <div className='w-1/2 mt-48'>
//             <div className='flex flex-col  justify-between'>
//               <span className='bg-orange-600 h-1 w-[22rem] rounded-lg text-center mb-2'></span>
//               <span className='text-8xl'>Our <span className='marquee-name font-extrabold'> journey in numbers</span> </span>
//             </div>
//             <div className='border-2 h-96 mt-20 mb-20 rounded-xl w-[132rem] flex justify-between px-20 items-center'>
//               <div className='flex flex-col text-3xl text-center justify-between leading-1 mx-5'>
//                 <span className='font-extrabold text-8xl'>2012</span>
//                 <span className='text-4xl'>TalentLMS release</span>
//               </div>
//               <div className='flex flex-col text-3xl text-center justify-between leading-1 mx-5'>
//                 <span className='font-extrabold text-8xl'>180+</span>
//                 <span className='text-4xl'>people behind the software</span>
//               </div>
//               <div className='flex flex-col text-3xl text-center justify-between leading-1 mx-5'>
//                 <span className='font-extrabold text-8xl'>11,000+</span>
//                 <span className='text-4xl'>customers</span>
//               </div>
//               <div className='flex flex-col text-3xl text-center justify-between leading-1 mx-5'>
//                 <span className='font-extrabold text-8xl'>11M+</span>
//                 <span className='text-4xl'>people learning with TalentLMS</span>
//               </div>

//               <div className='flex flex-col text-3xl text-center'>
//                 <img src={image1} alt="" />
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default About

import React from 'react';
import banner from '../assets/banner1.png';
import gif1 from '../assets/Prize-simplicity.gif';
import gif2 from '../assets/Help-Others.gif';
import gif3 from '../assets/Enjoy-Simple-Course-Creation.gif';
import image1 from '../assets/image1.png';

const About = () => {
  return (
    <div className="text-white bg-gray-900 font-sans">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mx-8 py-10">
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-7xl text-gray-100 hover:text-gray-300 leading-snug font-ubuntu">
            Hi, we&apos;re
            <p className="marquee-name hover:text-blue-500 text-6xl md:text-9xl font-extrabold text-white">
              Educatsy
            </p>
            and we&apos;re here to empower organizations and their people on the path to greatness.
          </h1>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-xl lg:max-w-3xl rounded-[2rem] lg:rounded-[5rem] mt-10 lg:mt-20"
            src={banner}
            alt="Educatsy banner"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row mx-8 mt-10 lg:mt-48">
        <div className="lg:w-[60rem] mb-10 lg:mb-0">
          <div className="flex flex-col justify-between">
            <span className="bg-cyan-600 h-1 w-40 md:w-[22rem] rounded-lg mb-2"></span>
            <h2 className="text-7xl md:text-8xl">
              Our <span className="marquee-name font-extrabold">Vision</span>
            </h2>
          </div>
        </div>
        <div className="lg:w-1/2 text-xl md:text-4xl leading-relaxed">
          <p className='text-2xl md:text-3xl'>
            <span className="marquee-name font-extrabold">
              Greatness isn&apos;t achieved overnight 
            </span>
             . It&apos;s a unique journey for everyone, with a lot of learnings and experiences along the way. That&apos;s why, at
            <span className="marquee-name font-extrabold"> Educatsy</span>, we don&apos;t offer a one-size-fits-all training
            solution. We&apos;re on a mission to{' '}
            <span className="marquee-name font-extrabold">empower organizations and their people on the path to greatness</span>{' '}
            through impactful learning experiences.
          </p>
          <br />
          <p className='text-2xl md:text-3xl'>
            But impactful doesn&apos;t have to be bewildering. In an increasingly complex world, we&apos;re committed to{' '}
            <span className="marquee-name font-extrabold">simplifying the ways in which we learn and work.</span>
          </p>
          <br />
          <p className='text-2xl md:text-3xl'>
            Our promise to our customers (and ourselves) is to deliver a training solution that is joyously intuitive for
            trainers and learners. Because{' '}
            <span className="marquee-name font-extrabold">when people thrive, organizations follow suit.</span>
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20 lg:mt-56 mx-8">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <div className="flex flex-col justify-between">
            <span className="bg-orange-600 h-1 w-40 md:w-[22rem] rounded-lg mb-2"></span>
            <h2 className="text-7xl md:text-8xl">
              Our <span className="marquee-name font-extrabold">Values</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-around items-center mt-10 lg:mt-28">
          <div className="flex flex-col space-y-16 lg:ml-10 lg:w-1/2">
            {/* Value Item 1 */}
            <div className="flex items-start">
              <img className="w-16 lg:w-20 mt-2 lg:mt-11" src={gif1} alt="Embracing simplicity" />
              <div className="ml-5 lg:ml-10">
                <h3 className="mb-2 font-extrabold text-gray-400 text-3xl lg:text-5xl">Embracing simplicity</h3>
                <p className="text-2xl lg:text-3xl">
                  We make learning easy, not busy, by embracing a simplicity-first approach in all we do. When training
                  clicks for you in a snap, we know we&apos;ve done well.
                </p>
              </div>
            </div>
            {/* Value Item 2 */}
            <div className="flex items-start">
              <img className="w-16 lg:w-20 mt-2 lg:mt-11" src={gif2} alt="Helping hands at the ready" />
              <div className="ml-5 lg:ml-10">
                <h3 className="mb-2 font-extrabold text-gray-400 text-3xl lg:text-5xl">Helping hands at the ready</h3>
                <p className="text-2xl lg:text-3xl">
                  We strive for meaningful innovation with the right industry trends to empower you to do your best work.
                  We’re always here to help, ready to act on your training needs.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img className="rounded-[2rem] lg:rounded-[5rem] w-full max-w-lg lg:max-w-xl" src={banner} alt="" />
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="mt-20 lg:mt-56 mx-8 pb-96">
        <div className="lg:w-1/2 mb-10">
          <div className="flex flex-col justify-between">
            <span className="bg-cyan-600 h-1 w-40 md:w-[22rem] rounded-lg mb-2"></span>
            <h2 className="text-6xl md:text-8xl">
              Our <span className="marquee-name font-extrabold">journey in numbers</span>
            </h2>
          </div>
        </div>
        <div className="border-2 rounded-xl flex flex-wrap justify-around items-center px-4 lg:px-20 py-10 lg:h-96">
          <div className="flex flex-col text-center mb-8 lg:mb-0">
            <span className="font-extrabold text-6xl lg:text-8xl">2024</span>
            <span className="text-sm lg:text-4xl">Educatsy release</span>
          </div>
          <div className="flex flex-col text-center mb-8 lg:mb-0">
            <span className="font-extrabold text-6xl lg:text-8xl">180+</span>
            <span className="text-sm lg:text-4xl">people behind the software</span>
          </div>
          <div className="flex flex-col text-center mb-8 lg:mb-0">
            <span className="font-extrabold text-6xl lg:text-8xl">11,000+</span>
            <span className="text-sm lg:text-4xl">customers</span>
          </div>
          <div className="flex flex-col text-center mb-8 lg:mb-0">
            <span className="font-extrabold text-6xl lg:text-8xl">11M+</span>
            <span className="text-sm lg:text-4xl">people learning with Educatsy</span>
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <img className="w-full max-w-2xl lg:max-w-lg" src={image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
