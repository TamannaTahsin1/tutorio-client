/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
import slide4 from "../../assets/img/slide4.jpg";
import slide5 from "../../assets/img/slide5.jpg";
// import ClassesModal from './ClassesModal';
import React from "react";
// modal
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Classes = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
       <h2 className='my-10 mt-20 text-center text-4xl bg-gradient-to-r from-pink-600 via-blue-600 to-blue-600 text-transparent bg-clip-text'>
        ---<span className=" font-bold">Popular Features</span>---
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'>
        <SwiperSlide>
          <button onClick={() => handleOpen()}>
            <div className='card w-80 bg-base-100 shadow-xl'>
              <figure>
                <img src={slide1} alt='Shoes' />
              </figure>
              <div className='card-body text-left'>
                <h2 className='card-title'>
                  Artificial Intelligence
                  <div className='badge badge-secondary'>POPULAR</div>
                </h2>
                <p>Artificial intelligence is a rapidly advancing field.</p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Technology</div>
                  <div className='badge badge-outline'>AI</div>
                </div>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'>
                    <Box sx={style}>
                      <Typography
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                          fontWeight: "bold",
                        }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        <img src={slide1} alt='' />
                      </Typography>
                      <Typography
                        sx={{
                          mt: 2,
                          color: "rgb(43, 108, 176)",
                          fontWeight: "bold",
                        }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        Artificial Intelligence
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                        }}>
                        Artificial intelligence is a rapidly advancing field of
                        computer science focused on creating machines that can
                        perform tasks that typically require human intelligence.
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                        }}>
                        <button>Close</button>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button>
            <div className='card w-80 bg-base-100 shadow-xl'>
              <figure>
                <img src={slide2} alt='Shoes' />
              </figure>
              <div className='card-body text-left'>
                <h2 className='card-title'>
                  Web Development
                  <div className='badge badge-secondary'>POPULAR</div>
                </h2>
                <p>
                  Web development is the process of building and maintaining
                  websites
                </p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Technology</div>
                  <div className='badge badge-outline'>Web</div>
                </div>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'>
                    <Box sx={style}>
                      <Typography
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                          fontWeight: "bold",
                        }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        <img src={slide2} alt='' />
                      </Typography>
                      <Typography
                        sx={{
                          mt: 2,
                          color: "rgb(43, 108, 176)",
                          fontWeight: "bold",
                        }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        Web Development
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                        }}>
                        Web development is the process of building and
                        maintaining websites or web applications, blending
                        design and coding skills. It includes front-end
                        development for user interfaces and back-end development
                        for server-side functionalities, collectively shaping
                        the online experiences we interact with daily.
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                        }}>
                        <button>Close</button>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button>
            <div className='card w-80 bg-base-100 shadow-xl'>
              <figure>
                <img src={slide3} alt='Shoes' />
              </figure>
              <div className='card-body text-left'>
                <h2 className='card-title'>
                Graphics Design
                  <div className='badge badge-secondary'>POPULAR</div>
                </h2>
                <p>Graphic design is the art of visually communicating ideas through images</p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Technology</div>
                  <div className='badge badge-outline'>Graphics</div>
                </div>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'>
                    <Box sx={style}>
                      <Typography
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                          fontWeight: "bold",
                        }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        <img src={slide3} alt='' />
                      </Typography>
                      <Typography
                        sx={{
                          mt: 2,
                          color: "rgb(43, 108, 176)",
                          fontWeight: "bold",
                        }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        Graphics Design
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                        }}>
                       Graphic design is the art of visually communicating ideas through images, typography, and layout, creating compelling visual content. Graphic designers use their creativity and technical skills to craft visually appealing designs for various purposes, from branding and marketing materials to digital interfaces.
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                        }}>
                        <button>Close</button>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button>
            <div className='card w-80 bg-base-100 shadow-xl'>
              <figure>
                <img src={slide4} alt='Shoes' />
              </figure>
              <div className='card-body text-left'>
                <h2 className='card-title'>
                Digital Marketing
                  <div className='badge badge-secondary'>POPULAR</div>
                </h2>
                <p>
Digital marketing is the strategic use of online channels.</p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Technology</div>
                  <div className='badge badge-outline'>Marketing</div>
                </div>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'>
                    <Box sx={style}>
                      <Typography
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                          fontWeight: "bold",
                        }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        <img src={slide4} alt='' />
                      </Typography>
                      <Typography
                        sx={{
                          mt: 2,
                          color: "rgb(43, 108, 176)",
                          fontWeight: "bold",
                        }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        Digital Marketing
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                        }}>
                      Digital marketing is the strategic use of online channels such as social media, email, and search engines to promote products or services, engaging with target audiences in the digital realm. It involves data-driven approaches, analytics and drive business growth in the digital landscape.
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                        }}>
                        <button>Close</button>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button>
            <div className='card w-80 bg-base-100 shadow-xl'>
              <figure>
                <img src={slide5} alt='Shoes' />
              </figure>
              <div className='card-body text-left'>
                <h2 className='card-title'>
                App Development
                  <div className='badge badge-secondary'>POPULAR</div>
                </h2>
                <p>App development is the process of creating software applications for mobile devices or desktops</p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Technology</div>
                  <div className='badge badge-outline'>App</div>
                </div>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'>
                    <Box sx={style}>
                      <Typography
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                          fontWeight: "bold",
                        }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        <img src={slide5} alt='' />
                      </Typography>
                      <Typography
                        sx={{
                          mt: 2,
                          color: "rgb(43, 108, 176)",
                          fontWeight: "bold",
                        }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        App Development
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                        }}>
                
App development is the process of creating software applications for mobile devices or desktops, utilizing programming languages like Java, Swift, or Kotlin. Developers design, code, and test apps to deliver seamless and functional experiences, catering to diverse user needs and preferences in the ever-evolving world of technology.
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{
                          mt: 2,
                          color: "rgb(66, 153, 225)",
                        }}>
                        <button>Close</button>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Classes;
