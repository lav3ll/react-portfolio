import React from 'react';
import { BiLogoGithub } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import './Project.css';

const Project = ({
  title,
  image,
  github,
  demo,
  language,
  description,
  alt,
}) => {
  return (
    <div className='card overflow-hidden shadow rounded-4 border-0 mb-5 pe-4'>
      <div className='card-body p-0'>
        <div className='project-container'>
          <div className='project-padding'>
            <h2 className='fw-bolder text-primary'>{title}</h2>
            <img
              className='img-fluid rounded img-container'
              src={image}
              alt={alt}
            />
            <p>{description}</p>
            <p className='fw-semibold text-gradient'>Language: {language}</p>
            <div className='d-flex'>
              <span className='text-gradient'>Github </span>
              <a
                className='text-gradient me-3 ps-1'
                href={github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <BiLogoGithub style={{ fontSize: '24px' }} />
              </a>
              <span className='text-gradient'>Live Demo </span>
              <a
                className='text-gradient'
                href={demo}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineLink style={{ fontSize: '24px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
