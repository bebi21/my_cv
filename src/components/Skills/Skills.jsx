import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../AnimationText/variants";

function Skills(props) {
  return (
    <div
      className='flex xl:px-[15%] md:px-[8%] px-[20px] items-center justify-center gap-[20px] gap-y-[40px] py-[80px]  transition-colors dark:text-white'
      id='skills'>
      <div className='-rotate-90 lg:mr-[80px] md:block hidden'>
        <h3 className=' text-[34px] font-semibold'>Skills</h3>
        <div className='w-12 h-1 bg-orange-500'></div>
      </div>

      <div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className='text-center'>
          <h2 className='text-6xl font-semibold text-orange-600 uppercase'>
            Kĩ năng
          </h2>
          <p className='text-gray-400 my-4 dark:text-white text-[22px]'>
            Đây là 1 số kĩ năng tôi có. Hi vọng nó sẽ đáp ứng yêu cầu của bạn
          </p>
        </motion.div>
        <div className='flex items-center gap-5 justify-center'>
          <div className='grid 2xl:grid-cols-5 lg:grid-cols-4 grid-cols-3 gap-8 uppercase'>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4 dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] '
                viewBox='0 0 48 48'>
                <path
                  fill='#E65100'
                  d='M41,5H7l3,34l14,4l14-4L41,5L41,5z'></path>
                <path fill='#FF6D00' d='M24 8L24 39.9 35.2 36.7 37.7 8z'></path>
                <path
                  fill='#FFF'
                  d='M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z'></path>
                <path
                  fill='#EEE'
                  d='M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z'></path>
              </svg>
              <span className='text-[22px] dark:text-gray-600 font-medium'>
                HTML
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] '
                viewBox='0 0 48 48'>
                <path
                  fill='#0277BD'
                  d='M41,5H7l3,34l14,4l14-4L41,5L41,5z'></path>
                <path fill='#039BE5' d='M24 8L24 39.9 35.2 36.7 37.7 8z'></path>
                <path
                  fill='#FFF'
                  d='M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z'></path>
                <path
                  fill='#EEE'
                  d='M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z'></path>
              </svg>
              <span className='text-[22px] dark:text-gray-600 font-medium'>
                CSS
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] '
                viewBox='0 0 48 48'>
                <path fill='#ffd600' d='M6,42V6h36v36H6z'></path>
                <path
                  fill='#000001'
                  d='M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z'></path>
              </svg>
              <span className='text-[22px] dark:text-gray-600 font-medium'>
                Javascript
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] '
                viewBox='0 0 48 48'>
                <path
                  fill='#f06292'
                  d='M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065	c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463	c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173	c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87	c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311	c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002	s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418	c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733	c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911	c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783	c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752	c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118	c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986	c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988	C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637	c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839	c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052	c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926	c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716	c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007	s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162	c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059	c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857	c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174	c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738	c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164	s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032	c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764	c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493	c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347	c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9	c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225	c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118	C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28	c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494	c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741	C34.883,31.105,33.779,31.683,33.111,31.923z'></path>
              </svg>
              <span className='text-[22px] dark:text-gray-600 font-medium'>
                SASS
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] '
                viewBox='0 0 48 48'>
                <path
                  fill='#00acc1'
                  d='M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z'></path>
              </svg>
              <span className='text-[22px] dark:text-gray-600 font-medium'>
                Tailwind Css
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] '
                viewBox='0 0 48 48'>
                <path
                  fill='#80deea'
                  d='M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z'></path>
                <path
                  fill='#80deea'
                  d='M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z'></path>
                <path
                  fill='#80deea'
                  d='M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z'></path>
                <circle cx='24' cy='24' r='4' fill='#80deea'></circle>
              </svg>
              <span className='text-[22px] dark:text-gray-600 font-medium'>
                React Js
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] '
                viewBox='0 0 48 48'>
                <path
                  fill='#388e3c'
                  d='M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013'></path>
                <path
                  fill='#37474f'
                  d='M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z'></path>
                <path
                  fill='#2e7d32'
                  d='M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076'></path>
                <path
                  fill='#4caf50'
                  d='M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076'></path>
                <path
                  fill='#37474f'
                  d='M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z'></path>
              </svg>
              <span className='text-[22px] dark:text-gray-600 font-medium'>
                Node Js (Restful API)
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 128 128'
                id='mongodb'>
                <path
                  fill='#439934'
                  fillRule='evenodd'
                  d='M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051c-.057-8.084-.113-16.168-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z'
                  clipRule='evenodd'
                />
                <path
                  fill='#45A538'
                  fillRule='evenodd'
                  d='M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z'
                  clipRule='evenodd'
                />
                <path
                  fill='#46A037'
                  fillRule='evenodd'
                  d='M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z'
                  clipRule='evenodd'
                />
                <path
                  fill='#409433'
                  fillRule='evenodd'
                  d='M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182-1.72 3.503-3.863 6.77-6.353 9.763-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753c-.865-3.223-1.319-6.504-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z'
                  clipRule='evenodd'
                />
                <path
                  fill='#4FAA41'
                  fillRule='evenodd'
                  d='M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642-2.217-6.628-4.452-13.249-6.7-19.867-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879 2.265 6.703 4.526 13.407 6.768 20.118 2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78c-.056 3.351-.112 6.701-.167 10.052z'
                  clipRule='evenodd'
                />
                <path
                  fill='#4AA73C'
                  fillRule='evenodd'
                  d='M43.155 32.227c.21.274.511.516.617.826 2.248 6.618 4.483 13.239 6.7 19.867 2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9-1.737-5.187-3.483-10.371-5.242-15.551-.089-.263-.34-.469-.516-.702 1.09-2.947 2.181-5.894 3.272-8.84z'
                  clipRule='evenodd'
                />
                <path
                  fill='#57AE47'
                  fillRule='evenodd'
                  d='M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198-2.242-6.711-4.503-13.415-6.768-20.118-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z'
                  clipRule='evenodd'
                />
                <path
                  fill='#60B24F'
                  fillRule='evenodd'
                  d='M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z'
                  clipRule='evenodd'
                />
                <path
                  fill='#A9AA88'
                  fillRule='evenodd'
                  d='M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011c.075 3.334.529 6.615 1.394 9.838-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z'
                  clipRule='evenodd'
                />
                <path
                  fill='#B6B598'
                  fillRule='evenodd'
                  d='M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z'
                  clipRule='evenodd'
                />
                <path
                  fill='#C2C1A7'
                  fillRule='evenodd'
                  d='M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z'
                  clipRule='evenodd'
                />
                <path
                  fill='#CECDB7'
                  fillRule='evenodd'
                  d='M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z'
                  clipRule='evenodd'
                />
                <path
                  fill='#DBDAC7'
                  fillRule='evenodd'
                  d='M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z'
                  clipRule='evenodd'
                />
                <path
                  fill='#EBE9DC'
                  fillRule='evenodd'
                  d='M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z'
                  clipRule='evenodd'
                />
                <path
                  fill='#CECDB7'
                  fillRule='evenodd'
                  d='M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z'
                  clipRule='evenodd'
                />
                <path
                  fill='#4FAA41'
                  fillRule='evenodd'
                  d='M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z'
                  clipRule='evenodd'
                />
              </svg>

              <span className='text-[22px] dark:text-gray-600 font-medium'>
                MongoDB
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] '
                viewBox='0 0 48 48'>
                <path
                  fill='#ff8f00'
                  d='M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z'></path>
                <path
                  fill='#ffa000'
                  d='M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z'></path>
                <path
                  fill='#ff6f00'
                  d='M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z'></path>
                <path
                  fill='#ffc400'
                  d='M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z'></path>
              </svg>
              <span className='text-[22px] dark:text-gray-600 font-medium'>
                Firebase
              </span>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                fill='#000000'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]'
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 360 360'
                xmlSpace='preserve'>
                <g id='XMLID_978_'>
                  <path
                    id='XMLID_979_'
                    d='M344.377,125.605h-48.754V77.834L212.601,0H15.623v360h280v-51.668h48.754V125.605z M314.377,278.332h-210
		V155.605h210V278.332z'
                  />
                  <path
                    id='XMLID_982_'
                    d='M149.671,235.093c-2.516,0-4.968-0.306-7.36-0.92c-2.392-0.613-4.57-1.364-6.532-2.254
		c-1.963-0.888-3.665-1.778-5.106-2.668c-1.442-0.888-2.438-1.61-2.99-2.162l-5.612,10.948c3.802,2.7,8.096,4.784,12.88,6.256
		c4.784,1.472,9.628,2.208,14.536,2.208c3.189,0,6.24-0.354,9.154-1.058c2.912-0.705,5.488-1.824,7.728-3.358
		c2.238-1.532,4.017-3.542,5.336-6.026c1.318-2.484,1.978-5.474,1.978-8.97c0-3.004-0.492-5.535-1.472-7.59
		c-0.982-2.054-2.378-3.818-4.186-5.29c-1.81-1.472-4.018-2.698-6.624-3.68c-2.607-0.98-5.506-1.9-8.694-2.76
		c-2.454-0.612-4.616-1.196-6.486-1.748c-1.872-0.552-3.419-1.164-4.646-1.84c-1.228-0.674-2.162-1.456-2.806-2.346
		c-0.644-0.888-0.966-2.008-0.966-3.358c0-2.33,0.858-4.14,2.576-5.428c1.716-1.288,4.324-1.932,7.82-1.932
		c1.962,0,3.895,0.246,5.796,0.736c1.9,0.492,3.664,1.09,5.29,1.794c1.625,0.706,3.004,1.426,4.14,2.162
		c1.134,0.736,1.916,1.32,2.346,1.748l5.612-10.304c-2.884-1.962-6.256-3.664-10.12-5.106c-3.864-1.44-8.096-2.162-12.696-2.162
		c-3.312,0-6.41,0.445-9.292,1.334c-2.884,0.89-5.414,2.193-7.59,3.91c-2.178,1.718-3.88,3.864-5.106,6.44
		c-1.228,2.576-1.84,5.52-1.84,8.832c0,2.516,0.382,4.678,1.15,6.486c0.767,1.81,1.917,3.404,3.45,4.784
		c1.532,1.38,3.45,2.576,5.75,3.588c2.3,1.012,5.014,1.948,8.142,2.806c2.576,0.736,4.906,1.412,6.992,2.024
		c2.084,0.614,3.864,1.288,5.336,2.024c1.472,0.736,2.606,1.595,3.404,2.576c0.796,0.982,1.196,2.178,1.196,3.588
		C160.158,232.855,156.663,235.093,149.671,235.093z'
                  />
                  <path
                    id='XMLID_983_'
                    d='M188.079,235.92c2.79,3.068,6.133,5.552,10.028,7.452c3.894,1.902,8.233,2.852,13.018,2.852
		c3.128,0,6.072-0.414,8.832-1.242c2.76-0.828,5.336-1.978,7.729-3.45l3.771,4.232h11.96l-8.924-10.028
		c2.698-3.004,4.799-6.44,6.302-10.304c1.502-3.864,2.254-7.912,2.254-12.144c0-4.108-0.768-8.156-2.3-12.144
		c-1.533-3.986-3.68-7.544-6.439-10.672c-2.761-3.128-6.088-5.658-9.982-7.59c-3.896-1.932-8.204-2.898-12.926-2.898
		c-4.601,0-8.864,0.905-12.788,2.714c-3.926,1.81-7.314,4.248-10.166,7.314c-2.853,3.067-5.092,6.594-6.716,10.58
		c-1.626,3.987-2.438,8.158-2.438,12.512c0,4.172,0.767,8.25,2.3,12.236C183.126,229.328,185.287,232.855,188.079,235.92z
		 M193.415,205.146c0.828-2.606,2.038-4.952,3.634-7.038c1.595-2.085,3.588-3.756,5.98-5.014c2.392-1.256,5.12-1.886,8.188-1.886
		c2.944,0,5.597,0.614,7.958,1.84c2.36,1.228,4.354,2.852,5.98,4.876c1.624,2.024,2.882,4.355,3.771,6.992
		c0.889,2.638,1.334,5.368,1.334,8.188c0,2.392-0.337,4.754-1.012,7.084c-0.676,2.332-1.626,4.478-2.852,6.44l-4.508-5.06h-11.961
		l9.937,11.224c-1.228,0.676-2.562,1.212-4.002,1.61c-1.442,0.399-2.99,0.598-4.646,0.598c-3.006,0-5.689-0.612-8.05-1.84
		c-2.361-1.226-4.355-2.852-5.98-4.876c-1.626-2.024-2.868-4.354-3.727-6.992c-0.859-2.636-1.288-5.366-1.288-8.188
		C192.173,210.406,192.587,207.754,193.415,205.146z'
                  />
                  <polygon
                    id='XMLID_986_'
                    points='298.708,234.633 265.405,234.633 265.405,180.445 252.708,180.445 252.708,245.765 
		298.708,245.765 	'
                  />
                </g>
              </svg>

              <span className='text-[22px] dark:text-gray-600 font-medium'>
                SQL
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] '
                viewBox='0 0 30 30'>
                <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></path>
              </svg>
              <span className='text-[22px] dark:text-gray-600 font-medium'>
                Git
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width={100}
                height={100}
                viewBox='0 0 48 48'>
                <path
                  fill='#f50057'
                  d='M24.5,32.88c0,0-0.01-0.04-0.02-0.12C24.5,32.84,24.5,32.88,24.5,32.88z'
                />
                <path
                  fill='#f50057'
                  d='M27.375,8.625c0,0-0.375-1.375,0.125-2.5s0.5-1.875-0.5-3c2-0.125,2.75,1.25,2.75,1.25l0.025,0.159 c0.118,0.766-0.278,1.494-0.946,1.888C28.219,6.781,27.563,7.437,27.375,8.625z'
                />
                <path
                  fill='#f50057'
                  d='M41.63,36.24c0.02-0.21,0.34-3.04-0.38-4.36c-1.5,4.24-3,8.12-7.37,10.87 c0.62-1.25,1.62-3.25,2.62-6.25c-3,4-9,8-13.5,8.25c3.04-1.68,4.75-3.84,5.5-5.25c0,0-1.75,0.5-3.88,0.75 c2.88-1.75,4.88-4.87,3.88-9.75c-2,6.25-4.75,8.25-8.38,8.62c-3.62,0.38-6.87-1.5-6.87-1.5l1.25-0.12c0,0-3.25-2.5-2.12-5.75 c0.05-0.16,0.11-0.31,0.18-0.45c0.82-1.82,3.61-0.9,3.32,1.07v0.01c0,0,0.87,2.37,3.24,1.74c0.76-1.24,1.26-2.5,1.26-2.5l0.37,1.63 c0,0,1.75-0.75,1.75-2.13c1.5,0.57,1.88,1.28,1.97,1.59c-0.26-1.4-2.52-11.03-14.49-10.89l-2.09,1.94 c-0.14,0.13-0.36,0.02-0.34-0.16L7.71,22l0.14-0.14c-0.04,0.01-0.09,0-0.13,0L7.71,22l-0.82,0.76c-0.14,0.13-0.36,0.02-0.34-0.16 l0.1-1.02c-1.74-0.74-1.9-2.7-1.9-2.7S2.58,18.27,3.5,15.5C4,14,5.2,13.85,5.71,13.97c0.65,0.15,1.32,0.16,1.94-0.09 c0.9-0.36,2.05-1.05,2.85-2.38C12,9,14.25,8,19.12,8c6.45,0,9.05,1.98,9.35,2.22c-0.18-0.21-1.27-1.66,1.03-3.84 c2.27-2.16,1.86-2.67,1.77-2.75c0.34,0.1,4.75,1.6,5.23,7.37c0.5,6-6.5,7.25-6.5,7.25s9,1.75,9.12-6.75 c1.76,1,5.38,4.75,5.88,12.88C45.49,32.26,41.84,36.03,41.63,36.24z'
                />
                <path
                  fill='#f50057'
                  d='M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z'
                />
                <path
                  fill='#f50057'
                  d='M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z'
                />
              </svg>
              <span className='text-[22px] dark:text-gray-600 font-medium'>
                NestJS
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width={100}
                height={100}
                viewBox='0 0 48 48'>
                <rect width={36} height={36} x={6} y={6} fill='#1976d2' />
                <polygon
                  fill='#fff'
                  points='27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264'
                />
                <path
                  fill='#fff'
                  d='M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z'
                />
              </svg>

              <span className='text-[22px] dark:text-gray-600 font-medium'>
                TypeScript
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='lg:p-8  p-4  dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'>
              <img
                className='w-[100px] h-[100px]'
                src='https://images.opencollective.com/ant-design/6f1eb50/logo/256.png'
                alt=''
              />

              <span className='text-[22px] dark:text-gray-600 font-medium'>
                Antd
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
