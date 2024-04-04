import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../AnimationText/variants";

function End(props) {
  return (
    <div
      className='flex xl:px-[15%] md:px-[8%] px-[20px] items-center justify-center gap-[20px] gap-y-[40px] py-[80px] min-h-screen dark:text-white bg-white dark:bg-black transition-colors'
      id='the-end'>
      <div className='-rotate-90 lg:mr-[80px] md:block hidden opacity-0'>
        <h3 className=' text-[34px] font-semibold'>End</h3>
        <div className='w-12 h-1 bg-orange-500'></div>
      </div>
      <div className=' text-center'>
        <div>
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className='text-6xl font-semibold text-orange-600 uppercase'>
            The End
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className='my-4 text-[22px]'>
            Cuối cùng <strong className='text-orange-500'>"Cảm ơn bạn"</strong>{" "}
            Đã dành thời gian xem qua hồ sơ CV của tôi
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className='text-[22px]'>
            {/* You're a flower on earth, let's make your life beautiful and
            meaningful  */}
            <strong className='text-orange-500'>(◕‿↼)</strong>
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default End;
