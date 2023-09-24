import Head from 'next/head';
import {BsFillMoonStarsFill, BsLinkedin} from 'react-icons/bs';
import {FaReact, FaHtml5, FaCss3, FaBootstrap} from 'react-icons/fa';
import {SiTailwindcss, SiJavascript} from 'react-icons/si';
import Image from 'next/image';
import toon from './img/toon.png';
import bos from './img/bos.png';

export default function Home() {
  return (
    <div>
      <head>
        <title>Cody Buermann Portfolio</title>
        <meta name='description' content='Portfolio for Cody Buermann. Front-End Software Engineer with experience in; HTML5, CSS3, JavaScript, Bootstrap, TailwindCSS, and React.'></meta>
      </head>
      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl font-burtons'>Portfolio</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
              <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'><a href="https://profile.indeed.com/p/codyb-vxk39m1" target='_blank'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600'>Cody Buermann</h2>
            <h3 className='text-2xl py-2'>Front-End Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Front end emphasis with full stack aspirations. Mainly working in React, Tailwinds, HTML5, CSS3, Bootstrap, and vanilla JavaScript, while I am studying Python and MySQL. Currently pursuing more contract & freelance opportunities.
            </p>
          </div>
          <div className='max-w-92 max-h-92 mx-auto py-12 overflow-hidden'>
            <Image src={toon} alt='Avatar' className='rounded-full mx-auto'/>
          </div>
          <div className='text-3xl flex justify-center my-10'>
            <a href="https://www.linkedin.com/in/cody-buermann-116718188/" target='_blank'><BsLinkedin /></a>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl text-center py-1'>Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Since 2018 I have been involved in <span className='text-teal-500'>small business web development</span>. In the previous couple years I have been diversifying into <span className='text-teal-500'>UI development</span> with React, Tailwinds & Bootstrap. Whether you need a new website for your <span className='text-teal-500'>small business</span>, looking for a <span className='text-teal-500'>contractor</span> to contribute to a code base, or have other project opportunities you'd like to discuss, feel free to reach out with the <span className='text-teal-500'><a href='#contact'>contact</a></span> information below.
            </p>
          </div>
          <div className='mb-6'>
            <div className='shadow-lg rounded p-10 pt-2'>
              <h3 className='text-2xl pt-8 text-teal-500'>Front-End Development</h3>
              <p className='text-md py-2 leading-8 text-gray-800'>From basic web development to responsive UI layouts, Front-End Software Development is my bread & butter. No matter the project size, don't hesitate to reach out and share with me your project details and goals.</p>
              <p className='py-3 text-xl text-teal-500'>Languages I use:</p>
              <div className='flex flex-wrap justify-between mx-1 gap-2'>
                <p><FaReact className='text-3xl mx-auto'/>React.js</p>
                <p><SiTailwindcss className='text-3xl mx-auto'/>TailwindCSS</p>
                <p><FaHtml5 className='text-3xl mx-auto'/>HTML5</p>
                <p><FaCss3 className='text-3xl mx-auto'/>CSS3</p>
                <p><FaBootstrap className='text-3xl mx-auto'/>Bootstrap</p>
                <p><SiJavascript className='text-3xl mx-auto'/>JavaScript</p>
              </div>
            </div>
          </div>
          <h3 className='text-3xl text-center py-16'>Portfolio</h3>
          <div className='flex justify-center gap-10 mb-6'>
            <div>
              <Image src={bos} alt='Buermanns Outdoor Services' className='mx-auto rounded shadow-lg' />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
