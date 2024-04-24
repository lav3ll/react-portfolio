import React from 'react';
import profileIMG from '../../utils/me.png';
import About from './About';
import { NavLink } from 'react-router-dom';
import CV from '../../utils/lavell-cv.pdf';

const Homepage = () => {
  return (
    <header className='py-5'>
      <div className='container px-5 pb-5'>
        <div className='row gx-5 align-items-center'>
          <div className='col-xxl-5'>
            {/* Header text content */}
            <div className='text-center text-xxl-start'>
              <div className='badge bg-gradient-primary-to-secondary text-white mb-4'>
                <div className='text-uppercase'>
                  Visual Craftsmanship &middot; Technical Mastery &middot;
                  Client Satisfaction
                </div>
              </div>
              <div className='fs-3 fw-light text-muted'>
                Transform Your Business Future
              </div>
              <h1 className='display-3 fw-bolder mb-5'>
                <span className='text-gradient d-inline'>
                  Drive Online Growth with Confidence
                </span>
              </h1>
              <div className='d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3'>
                <a
                  className='btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder'
                  href={CV}
                  download
                >
                  Resume
                </a>

                <NavLink
                  to='/projects'
                  activeClassName='active'
                  className='btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder'
                >
                  Projects
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-xxl-7'>
            {/* Header profile picture */}

            <div className='d-flex justify-content-center mt-5 mt-xxl-0'>
              <div className='profile bg-gradient-primary-to-secondary'>
                <img
                  className='profile-img'
                  src={profileIMG}
                  alt='man sitting with hands rested on a table'
                />
                <div className='dots-1'>
                  {/* SVG Dots */}
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    x='0px'
                    y='0px'
                    viewBox='0 0 191.6 1215.4'
                    style={{ enableBackground: 'new 0 0 191.6 1215.4' }}
                    xmlSpace='preserve'
                  >
                    <g transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)'>
                      {/* SVG paths */}
                    </g>
                  </svg>
                  {/* End of SVG Dots */}
                </div>
                {/* Other dots */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </header>
  );
};

export default Homepage;
