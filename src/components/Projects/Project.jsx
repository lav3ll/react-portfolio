import React from 'react';
import { BiLogoGithub } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';

const Project = ({
  title,
  image,
  github,
  demo,
  language,
  description,
  alt,
}) => {
  console.log(image);
  return (
    <div className='card overflow-hidden shadow rounded-4 border-0 mb-5 pe-4'>
      <div className='card-body p-0'>
        <div className='d-flex align-items-center'>
          <div className='p-5'>
            <h2 className='fw-bolder text-primary'>{title}</h2>
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
          <img
            className='img-fluid'
            src={image}
            alt={alt}
            width='300px'
            height='400px'
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
