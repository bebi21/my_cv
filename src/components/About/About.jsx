import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillMail,
  AiFillMobile,
} from "react-icons/ai";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../../../../Portfolio/src/variants";
import japan_loc from "../../assets/loc-jp.jpg";

function About() {
  return (
    <div
      className='flex md:h-screen md:flex-row-reverse flex-col-reverse xl:px-[15%] md:px-[8%] px-[20px] bg-white dark:bg-black items-center justify-center gap-[20px] gap-y-[40px] py-[80px] transition-colors '
      id='about-me'>
      <div className='text-left flex-1 xl:ml-[80px] md:ml-[40px]'>
        <div className='flex gap-1 items-center'>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className=''>
            <img
              src='https://img.icons8.com/?size=256&id=dlN23b953qvQ&format=png'
              alt=''
              className='h-[80px]'
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}>
            <div className=''></div>
            <p className='uppercase font-medium flex items-center gap-2 text-2xl text-gray-700 dark:text-white'>
              <span className='w-1 h-8 bg-orange-500 inline-block '></span>{" "}
              About me
            </p>
            <TypeAnimation
              sequence={[
                " Nguyễn Xuân Lộc",
                4000,
                "  Nguyễn Xuân Lộc",
                4000,
                "   Nguyễn Xuân Lộc",
                4000,
              ]}
              speed={50}
              repeat={Infinity}
              className='uppercase font-bold text-4xl md:text-4xl text-orange-500 my-1 '
              wrapper='h2'
            />
          </motion.div>
        </div>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className='text-[20px] text-gray-600 mt-4 dark:text-white'>
          <BiSolidQuoteAltLeft className='inline-block' /> Đây là thông tin của
          tôi, Hi vọng chúng ta có thể làm việc với nhau
        </motion.p>
        <div className=' grid grid-cols-2 gap-6 items-center mt-12 2xl:text-[20px] dark:text-white'>
          <motion.a
            variants={fadeIn("up", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            href='mailto:nguyenlocnd18@gmail.com'
            className='flex gap-2 items-center'>
            <div className='p-3 text-[20px] shadow-xl rounded-[8px]  h-full  uppercase'>
              <AiFillMail />
            </div>
            <div className=''>
              <h3 className='font-semibold my-[-2px] text-orange-600 dark:text-white'>
                Email:
              </h3>
              <p className='text-gray-500 dark:text-white'>
                nguyenlocnd18@gmail.com
              </p>
            </div>
          </motion.a>
          <motion.a
            variants={fadeIn("up", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            href='tel:0916447407'
            className='flex gap-2 items-center'>
            <div className='p-3 text-[20px] shadow-xl rounded-[8px]  h-full  uppercase'>
              <AiFillMobile />
            </div>
            <div className=''>
              <h3 className='font-semibold my-[-2px] text-orange-600 dark:text-white'>
                Phone number:
              </h3>
              <p className='text-gray-500 dark:text-white'>(+84) 916447407</p>
            </div>
          </motion.a>
          <motion.a
            variants={fadeIn("up", 0.6)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            href='https://github.com/bebi21'
            target='_blank'
            rel='noreferrer'
            className='flex gap-2 items-center'>
            <div className='p-3 text-[20px] shadow-xl rounded-[8px]  h-full  uppercase'>
              <AiFillGithub />
            </div>
            <div className=''>
              <h3 className='font-semibold my-[-2px] text-orange-600 dark:text-white'>
                Github:
              </h3>
              <p className='text-gray-500 dark:text-white cursor-pointer'>
                /bebi21
              </p>
            </div>
          </motion.a>
          <motion.a
            variants={fadeIn("up", 0.6)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            href='https://www.facebook.com/profile.php?id=100010011734296'
            target='_blank'
            className='flex gap-2 items-center'
            rel='noreferrer'>
            <div className='p-3 text-[20px] shadow-xl rounded-[8px]  h-full  uppercase'>
              <AiFillFacebook />
            </div>
            <div className=''>
              <h3 className='font-semibold my-[-2px] text-orange-600 dark:text-white'>
                Facebook:
              </h3>
              <p className='text-gray-500 dark:text-white'>
                /NguyenLoc.Profile
              </p>
            </div>
          </motion.a>
        </div>
      </div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className='md:w-2/5 flex items-center justify-center'>
        <img
          src={japan_loc}
          alt=''
          className='h-[400px] rounded-full object-cover w-[400px]'
        />
      </motion.div>
    </div>
  );
}

export default About;
