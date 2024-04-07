import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../AnimationText/variants";

const ListProject = [
  {
    name: "Login template ",
    description: "Login and Register",
    technologies: "ReactJs, Typescript, Firebase.",
    time: " 1 day",
    image:
      "https://firebasestorage.googleapis.com/v0/b/project-m5-7b167.appspot.com/o/A%CC%89nh%20ma%CC%80n%20hi%CC%80nh%202024-04-05%20lu%CC%81c%2002.26.20.png?alt=media&token=5f1fadaa-36cb-47b7-a035-2e91f9339c5e",
    live: "https://login-google25.netlify.app/#",
    source: "https://github.com/bebi21/Login-TS-tempalate.git",
    active: true,
  },
  {
    name: "Shop Clothing ",
    description: "shop clothing",
    technologies: "ReactJs , Taiwind, Antd",
    time: "Project is in progress. Updates to follow.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/project-m5-7b167.appspot.com/o/A%CC%89nh%20ma%CC%80n%20hi%CC%80nh%202024-04-08%20lu%CC%81c%2001.59.05.png?alt=media&token=b3a2b08b-9476-4fa2-a6fd-2f527f485ef6",
    live: "https://master--shopclothing21.netlify.app/",
    source: "https://github.com/bebi21/shop_clothing.git",
    active: true,
  },
];
function Projects() {
  return (
    <div
      className='flex xl:px-[15%] md:px-[8%] px-[20px] items-center justify-center gap-[20px] gap-y-[40px] py-[80px] dark:bg-black bg-white transition-colors dark:text-white '
      id='projects'>
      <div className='-rotate-90 lg:mr-[80px] md:block hidden'>
        <h3 className=' text-[34px] '>Projects</h3>
        <div className='w-[80px] h-1 bg-orange-500'></div>
      </div>
      <div className='text-center'>
        <div>
          <h2 className='text-6xl font-semibold text-orange-600 uppercase'>
            Dự án
          </h2>
          <p className='text-gray-400 my-4 text-[22px] dark:text-white'>
            Đây là 1 vài dự án tôi đã hoàn thành, Tôi hi vọng nó sẽ đáp ứng yêu
            cầu của bạn
          </p>
        </div>
        <div className='grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
          {ListProject.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className=' dark:bg-gray-100 bg-white dark:text-gray-600 font-semibold shadow-xl p-4 rounded-[12px] relative group cursor-pointer'>
              <img
                className='w-full h-[300px] object-cover rounded-[12px]'
                src={item.image}
                alt={item.name}
              />
              <h3 className='text-[20px] pt-4'>{item.name}</h3>
              <div className='absolute group-hover:opacity-100 opacity-0 invisible  group-hover:visible top-0 transition-all p-4 text-[20px] bg-black/75 w-full h-full left-0 rounded-[12px] text-left text-white '>
                {item.active === false && (
                  <p className='bg-red-600 px-2 py-1 text-white inline-block rounded-lg absolute top-2 left-2 text-[14px] font-bold'>
                    (Hosting Expiry)
                  </p>
                )}

                <h3 className='text-center text-[24px] font-semibold mb-4'>
                  {item.name}
                </h3>
                <div className='flex flex-col justify-between h-[80%]  '>
                  <div className=''>
                    <p>
                      <strong className='text-[1em]'>Description: </strong>
                      <span className='text-[0.9em]'> {item.description}</span>
                    </p>
                    <p>
                      <strong>Technologies Used:</strong>{" "}
                      <span className='text-[0.9em]'>{item.technologies}</span>
                    </p>
                    <p>
                      <strong>Time:</strong>{" "}
                      <span className='text-[0.9em]'>{item.time}</span>
                    </p>
                  </div>
                  <div className='flex gap-3 items-center justify-center mt-4 text-[0.8em]'>
                    <a
                      href={item.live}
                      rel='noreferrer'
                      target='_Blank'
                      className='text-center  px-2 py-2 w-[120px] bg-orange-600 rounded-[8px] hover:opacity-90'>
                      View Live
                    </a>
                    <a
                      href={item.source}
                      rel='noreferrer'
                      target='_Blank'
                      className='text-center  px-2 py-2 w-[120px] bg-orange-600 rounded-[8px] hover:opacity-90'>
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
