import React, { useEffect, useState } from 'react';

function ProjectCard({ data }) {
  console.log("--------------------------------------------------------------------");
  console.log(data);
  const { 
    projectDetails,
    FrontendTech, 
    BackendTech, 
    DatabaseTech, 
    ToolsAndUtilities,
    DeploymentTech, 
    DevelopmentAndBuildTools, 
    OptionalEnhancements 
  } = data;
  console.log(FrontendTech);
  console.log("--------------------------------------------------------------------"); 

  // Function to render tech stack dynamically
  const renderTechStack = (techArray, title) => {
    return (
      <div className='m-2 p-2 '>
        <h4 className='font-bold text-xl'>{title}</h4>
        <ul className='flex m-2 px-6 list-disc flex-wrap'>
          {techArray.map((item, index) => (
            <li key={index} className='mx-6'>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className=''>
        
      <div id='title' className='m-2 flex items-center bg-amber-100'>
        <div className=' flex m-2 p-2 w-12 h-12'>
          <img src={projectDetails.ImgLink} className='bg-transparent' alt="Project Thumbnail"/>
        </div>
        <h3 className='font-bold text-2xl'>{projectDetails.title}</h3>
      </div>
      
      <div id='Links' className='flex  m-2'>
        <a className='m-2 p-2 bg-green-100 rounded-lg' href={projectDetails.LiveLink}>
          <i className="fa-solid fa-link mr-1"></i>Live project Link
        </a>
        <a className='m-2 p-2 bg-green-100 rounded-lg' href={projectDetails.GitHubLink}>
          <i className="fa-brands fa-github mr-1"></i> Github Repo link
        </a>
      </div>

      <div id='tech-used' className='m-2 p-2'>
        
        {FrontendTech && renderTechStack(FrontendTech, 'Frontend Tech')}
        {BackendTech && renderTechStack(BackendTech, 'Backend Tech')}
        {DatabaseTech && renderTechStack(DatabaseTech, 'Database Tech')}
        {ToolsAndUtilities && renderTechStack(ToolsAndUtilities, 'Tools and Utilities')}
        {DeploymentTech && renderTechStack(DeploymentTech, 'Deployment Tech')}
        {DevelopmentAndBuildTools && renderTechStack(DevelopmentAndBuildTools, 'Development and Build Tools')}
        {OptionalEnhancements && renderTechStack(OptionalEnhancements, 'Optional Enhancements')}
        
      </div>
      
      <div id='Description' className=' m-2 p-2'>
        {projectDetails.description}
      </div>
    </div>
  );
}

export default ProjectCard;
