import React from 'react';

import {
  algorithm,
  brain,
  cImg,
  chip,
  css,
  deepLearning,
  html,
  javaScript,
  java,
  mysql,
  nodejs,
  physics,
  python,
  mongodb,
  express
} from '../../assets/skills/images';

const skills = [
  { imageSrc: chip, title: 'Artificial Intelligence' },
  { imageSrc: algorithm, title: 'Data Structures and Algorithms' },
  { imageSrc: brain, title: 'Machine Learning' },
  { imageSrc: cImg, title: 'C++' },
  { imageSrc: css, title: 'CSS' },
  { imageSrc: deepLearning, title: 'Deep Learning' },
  { imageSrc: html, title: 'HTML' },
  { imageSrc: javaScript, title: 'JavaScript' },
  { imageSrc: java, title: 'Java' },
  { imageSrc: mysql, title: 'MySQL' },
  { imageSrc: nodejs, title: 'Node.js' },
  { imageSrc: physics, title: 'ReactJS' },
  { imageSrc: python, title: 'Python' },
  { imageSrc: mongodb, title: 'Mongodb' },
  { imageSrc: express, title: 'Expressjs' },
];

export const Skill_List = () => {
  return (
    <div className="">
      <div className="flex flex-wrap m-5 p-4 justify-start ">
        {skills.map((skill, index) => (
             <div className=" flex m-2 p-2 justify-center items-center rounded-md"  key={index}>
             <img src={skill.imageSrc} className="w-5 h-5 mx-1" alt={skill.title} />
             <div className="card-body">
                 <h5 className="mx-1">{skill.title}</h5>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="m-5 p-4">
      <div className="font-bold  p-4 text-2xl bg-amber-100"><p>Skills</p></div>
      <Skill_List />
      <hr></hr>
    </div>
  );
};

export default Skills;
