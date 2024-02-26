import React from 'react'

const Footer = () => {
  return (
    <div>
        <section id='footer' className='bg-light-blue'>
            <div className="nwbg bg-blue">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-4 gy-3 gy-lg-0">
                           <img src="logo.jpg" alt="" className='w-25 rounded-3' />
                            <div className="w-100 d-flex gap-3 mt-3">
                            <i class="bi bi-instagram text-white fs-2"></i> 
                            <i class="bi bi-facebook text-white fs-2"></i>
                            <i class="bi bi-twitter-x text-white fs-2"></i>
                            <i class="bi bi-youtube text-white fs-2"></i>

                            </div>
                        </div>
                        <div className="col-lg-4 gy-3 gy-lg-0">
                            <h5 className='text-white'>Contact</h5>
                            <small className='text-white'>24 Lekki Phase 2, NY11021 Women Modeling Agency</small>
                            <small className='text-white'>08024023021,12-342-675</small>
                        </div>
                        <div className="col-lg-4 gy-3 gy-lg-0">
                            <h5 className='text-white'>Subscribe</h5>
                            <small className='text-white'>Individuals subscribe to newsletters to receive regular updates, news.</small>
                                <form action="">
                                    <div className="d-flex gap-3 mt-3 align-items-center">
                                        <label htmlFor="email" className='text-white'>Email</label>
                                        <input type="email" className='bg-transparent rounded-3 border border-white flex-grow-1' />
                                    </div>
                                </form>
                        </div>
                    </div>

                    <hr className='opacity-100 text-white mt-5' />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
