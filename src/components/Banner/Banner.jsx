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
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  const stats = [
    { number: "MERN", label: "Full Stack" },
    { number: "API", label: "Backend Development" },
    { number: "UI", label: "Responsive Frontend" },
  ];

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
                <button className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-heading hover:bg-transparent hover:text-heading border-2 px-8 font-bold text-primary transition-all duration-300 hover:shadow-[0px_0px_20px_rgba(12,241,153,.65)] sm:w-auto cursor-pointer">
                  Download CV
                  <BsDownload className="ml-3 text-lg" />
                </button>
                <NavLink to="/skill" className="w-full sm:w-auto">
                  <button className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-heading px-8 font-bold text-heading transition-all duration-300 hover:bg-heading hover:text-primary hover:shadow-[0px_0px_20px_rgba(12,241,153,.45)] sm:w-auto cursor-pointer">
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
                    <a href=""><BiLogoGmail className='' /></a>
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