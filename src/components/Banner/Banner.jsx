import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../AnimationText/variants";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import CV from "../../assets/9_CV Nguyễn Xuân Lộc - loc-cv222-TopCV.vn.pdf";
import { Link } from "react-scroll";

const Banner = () => {
  const [textColor, setTextColor] = React.useState("Ori");
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className='w-[50%] text-white '>
        <div>
          <div className='flex items-center'>
            <div>
              <img
                className='w-[100px] mr-3'
                src='https://img.icons8.com/?size=256&id=dlN23b953qvQ&format=png'
                alt=''
              />
            </div>
            <p className='text-[2em]'>
              <span className='text-orange-600'>I</span> Xin chào! Tôi là
            </p>
          </div>
          <div>
            <TypeAnimation
              sequence={[
                "NGUYỄN XUÂN LỘC",
                1000,
                "  NGUYỄN XUÂN LỘC",
                1000,
                "      NGUYỄN XUÂN LỘC",
                1000,
              ]}
              wrapper='h2'
              speed={50}
              repeat={Infinity}
              className='text-[3em] font-bold inline-block text-orange-600'
            />
            <p className='text-[2em] inline-block text-white '></p>
          </div>
          <div>
            <BiSolidQuoteAltLeft className='inline-block mr-1 tẽt-[1.5em]' />
            <TypeAnimation
              sequence={[
                "tôi là 1 lập  trình viên  font-end",
                1000,
                "tôi  muốn trở thành 1 devloper full stack",
                1000,
              ]}
              wrapper='h2'
              speed={50}
              repeat={Infinity}
              className='text-[1.5em] font-bold inline-block text-white'
            />
          </div>
          <div className='flex mt-5'>
            <Link
              smooth
              duration={700}
              to='about-me'
              className='cursor-pointer relative group overflow-hidden px-6 mr-4 h-14 rounded-lg flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600'>
              <span className='relative text-base text-white'>
                CONTACT WITH ME
              </span>
              <div className='flex items-center -space-x-3 translate-x-3'>
                <div className='w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100' />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </div>
            </Link>
            <a
              href={CV}
              download='CV_NGUYENXUANLOC'
              className='relative group overflow-hidden pl-6 h-14 flex space-x-6 items-center bg-blue-500 rounded-lg'>
              <span className='relative uppercase text-base text-white'>
                Download My CV
              </span>
              <div
                aria-hidden='true'
                className='w-14 bg-blue-600 transition duration-300 -translate-y-7 group-hover:translate-y-7'>
                <div className='h-14 flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 m-auto fill-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div className='h-14 flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 m-auto fill-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className=''>
        <img
          src='https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/119216256_1239560949720951_4721324978728262112_n.jpg?stp=dst-jpg_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEq8AaqgDmfnpMjVwDnPP-57fDbqw_Ht4zt8NurD8e3jADwxiW2mtv27kxnxcco5ZXKwodyHvqm5d1naj10UN1B&_nc_ohc=U6X8vuLRlvQAb6Ti6OM&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCOrQIZcIyOatc6wUW75y4MYDdhx9wuy4LMB8HhKIZniQ&oe=6636523B'
          alt=''
          className=' w-[350px] rounded-md'
        />
      </motion.div>
    </div>
  );
};

export default Banner;
