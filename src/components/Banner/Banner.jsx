// import banner1 from "../../assets/bannerChat.png"
// import Container from '../Container/Container'
// import { FaFacebookF } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import { BsDownload } from "react-icons/bs";
// import { FaTwitter } from "react-icons/fa";
// import About from '../About/About'
// import Footer from "../Footer/Footer";
// import Work from "../Skill/Work";
// import Education from "../Education/Education";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { NavLink } from "react-router"
// import { useEffect, useState } from "react";

// const Banner = () => {

//   return (
//     <>
//       <div className="bg-primary font-primary pt-24 md:pt-32 lg:pt-36 pb-16 md:pb-20 overflow-hidden">
//         <Container>
//           <div className="flex flex-col items-center text-center px-4">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-heading leading-tight">
//               Shahzahan Siraj
//             </h1>
//             <h3 className="mt-4 text-lg sm:text-2xl md:text-3xl lg:text-5xl text-secondary">
//               I'm a{" "}
//               <span className="text font-semibold block sm:inline">
//                 Frontend Developer
//               </span>
//             </h3>
//             <p className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-secondary leading-6 md:leading-8">
//               I specialize in creating pixel-perfect, high-performance websites and
//               web applications using modern technologies like HTML, CSS, Bootstrap,
//               Tailwind CSS, JavaScript, Firebase, Redux, React Router, Hooks, and
//               React.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-8 md:mt-10 w-full sm:w-auto">
//               <button
//                 className="
//           flex items-center justify-center
//           w-full sm:w-auto
//           px-8 md:px-10
//           py-3
//           border-2 border-heading
//           rounded-full
//           text-heading
//           font-semibold
//           transition-all duration-300
//           hover:shadow-[0px_0px_15px_rgba(12,241,153,.8)]
//           "
//               >
//                 DOWNLOAD CV
//                 <BsDownload className="ml-3 text-lg animate-bounce" />
//               </button>

//               <NavLink to="/skill" className="w-full sm:w-auto">
//                 <button
//                   className="
//             flex items-center justify-center
//             w-full sm:w-auto
//             px-8 md:px-10
//             py-3
//             border-2 border-heading
//             rounded-full
//             text-heading
//             font-semibold
//             transition-all duration-300
//             hover:shadow-[0px_0px_15px_rgba(12,241,153,.8)]
//             "
//                 >
//                   VIEW MY WORK
//                   <FaArrowRightLong className="ml-3" />
//                 </button>
//               </NavLink>
//             </div>
//           </div>
//         </Container>
//       </div>
//       <About />
//       <Education>
//         <Work></Work>
//       </Education>
//       <Work></Work>
//       <Footer></Footer>
//     </>
//   )
// }

// export default Banner





// 




import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";




import Container from "../Container/Container";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Work from "../Skill/Work";
import Education from "../Education/Education";

import { NavLink } from "react-router";
import { BsDownload } from "react-icons/bs";
// import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  const stats = [
    { number: "MERN", label: "Full Stack" },
    { number: "API", label: "Backend Development" },
    { number: "UI", label: "Responsive Frontend" },
  ];

  // const skills = [
  //   "React.js",
  //   "Node.js",
  //   "Express.js",
  //   "MongoDB",
  //   "Tailwind CSS",
  // ];

  const highlights = [
    "Single and multivendor ecommerce platforms",
    "Secure REST API with Node.js and Express.js",
    "MongoDB database design and backend logic",
    "Admin dashboard, vendor panel, cart, order, and payment flow",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-primary font-primary pt-28 pb-20 md:pt-36 md:pb-24">
        <Container>
          <div className="relative grid items-center gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border border-heading/30 px-4 py-2 text-sm font-semibold text-heading">
                Available for freelance projects
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-heading sm:text-5xl md:text-6xl lg:text-7xl">
                Shahzahan Siraj
              </h1>

              <h2 className="mt-5 text-xl font-semibold leading-snug text-secondary sm:text-2xl md:text-4xl">
                Full Stack{" "}
                <span className="text-text">MERN Developer</span> for ecommerce
                and web applications
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-secondary sm:text-base md:text-lg lg:mx-0">
                I build responsive frontend interfaces, secure backend APIs, and
                complete web applications using React, Node.js, Express.js,
                MongoDB, Tailwind CSS, Firebase, Redux, and React Router. I
                specialize in single vendor ecommerce, multivendor marketplaces,
                admin dashboards, and business management systems.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <button className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-heading px-8 font-bold text-primary transition-all duration-300 hover:shadow-[0px_0px_20px_rgba(12,241,153,.65)] sm:w-auto">
                  Download CV
                  <BsDownload className="ml-3 text-lg" />
                </button>
                <NavLink to="/skill" className="w-full sm:w-auto">
                  <button className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-heading px-8 font-bold text-heading transition-all duration-300 hover:bg-heading hover:text-primary hover:shadow-[0px_0px_20px_rgba(12,241,153,.45)] sm:w-auto">
                    View My Work
                    <FaArrowRightLong className="ml-3" />
                  </button>
                </NavLink>
              </div>
              <div className="font-main text-white md:mt-10 mt-6 ">
                <ul className="flex md:justify-start justify-center  md:space-x-[50px] space-x-12 text-heading">
                  <li className="border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                    <a href="https://www.linkedin.com/in/shahzahan-siraj-7b5ba7304/"><FaLinkedinIn className='' /></a>
                  </li>
                  <li className="border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                    <a href="https://www.facebook.com/shahzahan.siraj.92"><FaFacebookF className='text-[24px]' /></a>
                  </li>
                  <li className="relative border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                    <a href="https://github.com/shahzahandev"><FaGithub className='' /></a>
                  </li>
                  <li className="relative border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"><BiLogoGmail className='' /></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl md:block hidden">
              <div className="rounded-[28px] border border-heading/20 bg-white/5 p-5 shadow-[0_24px_80px_rgba(0,0,0,.25)] backdrop-blur">
                <div className="rounded-[22px] border border-white/10 bg-primary/80 p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-sm text-secondary">Specialized in</p>
                      <h3 className="mt-1 text-2xl font-bold text-heading">
                        Ecommerce & Backend Systems
                      </h3>
                    </div>

                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-heading text-2xl font-black text-primary">
                      SS
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-heading" />
                        <p className="text-sm leading-6 text-secondary">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                      >
                        <h4 className="text-xl font-bold text-heading sm:text-2xl">
                          {stat.number}
                        </h4>
                        <p className="mt-1 text-xs leading-5 text-secondary">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <About />

      <Education>
        <Work />
      </Education>

      <Work />

      <Footer />
    </>
  );
};

export default Banner;