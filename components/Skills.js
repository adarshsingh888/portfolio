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
} from '../assets/skills/images';

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
    <div className="container-fluid text-center">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center">
        {skills.map((skill, index) => (
             <div className="card" style={{ width: '10rem' }} key={index}>
             <img src={skill.imageSrc} className="card-img-top rounded float-start" alt={skill.title} />
             <div className="card-body">
                 <h5 className="card-title">{skill.title}</h5>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="container">
      <div className="heading">Skills</div>
      <Skill_List />
    </div>
  );
};

export default Skills;
