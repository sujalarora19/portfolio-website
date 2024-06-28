"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const items = [
  {
    id: 1,
    title: "Contentify",
    color: 'from-blue-300 to-violet-500',
    desc: "Contentify is an AI-powered website that generates content based on user prompts. From writing articles to crafting social media posts, Contentify has the capability to produce high-quality, engaging content for all your needs.",
    img: "/contentify.png",
    link: "https://github.com/Maddy2206/Contentify"
  },
  {
    id: 2,
    title: "Intelliform",
    color: 'from-teal-300 to-indigo-300',
    desc: "Intelliform is an AI-powered form builder that automates the process of creating forms. Users can easily customize the appearance of their forms, and seamlessly share and download responses.",
    img: "/intelliform.png",
    link: "https://github.com/Maddy2206/AI-Form-Builder"
  },
  {
    id: 3,
    title: "Portfolio website",
    color: ' from-orange-300 to-indigo-500',
    desc: "Designed and developed a personal portfolio website showcasing my skills, projects, and achievements. This visually appealing and user-friendly platform effectively highlights your professional journey and expertise.",
    img: "/portfolio.png",
    link: ""
  },
  {
    id: 4,
    title: "Plan Master",
    color: 'from-green-300 to-blue-500',
    desc: "Simplify your project management with Plan Master. This intuitive app helps you organize tasks, set priorities, and track progress, ensuring you stay on top of all your project-related activities with ease.",
    img: "/planmaster.png",
    link: "https://github.com/Maddy2206/Project-management"
  },
  {
    id: 5,
    title: "T4 - Twisty Tic Tac Toe",
    color: 'from-red-300 to-purple-500',
    desc: "Add a fun twist to the classic Tic Tac Toe game with T4. If the game ends in a tie, our unique feature randomly removes three tokens from the board, turning it into an exciting showdown for one player's victory.",
    img: "/t4.png",
    link: "https://github.com/Maddy2206/Tic-Tac-Toe"
  },
];

function Projects() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.6%"]);

  return (
    <motion.div
      className='h-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
          My Projects
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-purple-400 ' />
            {items.map(item => (
              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                <div className='flex flex-col gap-6 text-black items-center text-center'>
                  <h1 className='font-bold text-3xl'>
                    {item.title}
                  </h1>
                  <div className='relative w-full h-64'>
                    <Image src={item.img} alt="" fill objectFit='cover' className='rounded-md' />
                  </div>
                  <p className='max-w-xl text-lg'>{item.desc}</p>
                  <Link href={item.link}>
                    <Button variant="ghost" className='flex gap-2 translate-y-[-3]'>Github link
                      <Image src={'/github.png'} height={20} width={20}></Image>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;