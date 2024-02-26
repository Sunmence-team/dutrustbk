import React, { useState, useEffect } from 'react';
import './loan.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
const loan = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust 100 to whatever scroll position you prefer
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className='overflow-x-hidden'>
      <section id='abtfirst'>
      <nav className={`navbar navbar-expand-lg ${scrolling ? 'scrolled' : ''} fixed-top w-100`}>
  <div className="container">
  <Link className="navbar-brand" to="/"><img src="dt.png" alt="" className='logo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="bi bi-list text-blue fs-2"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link text-secondary px-4" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary px-4" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary px-4 " to="/savings">Savings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary px-4 active" to="/loan">Loan</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary px-4" to="/">Login</Link>
        </li>
    </ul>
    </div>
  </div>
</nav>


        <div className="container">
            <div className="fight">
                <div className="d-flex justify-content-between align-items-end">
                    <div className='col-1'>
                        <img src="unsplash_SLjQgffgmeQ.png" alt="" className='w-100' />
                    </div>
                    <div className='col-10 px-lg-5'>
                        <div className="px-lg-5">
                    <h2 className='text-center'>Commercial Real Estate Loans</h2>
                    <p className='text-center'>Discover the essence of Duty Trust Bank, where financial expertise meets unwavering commitment, providing innovative solutions tailored to your unique needs and ensuring a trusted partnership in your financial journey</p>

                        </div>
                    </div>
                    <div className="row g-0 align-items-end justify-content-end flex-nowrap">
                        <div className="col-7">
                            <img src="unsplash_SoT4-mZhyhE.png" alt="" className='w-100 ' />
                        </div>
                    <div className="col-9">
                        <img src="unsplash_63UYIw9CINk@2x.png" alt="" className='w-100' />
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section id='loan1'>
        <div className="container">
            <div data-aos="fade-down">
            <h1>The Smarter, <br /> Faster Way To Get A Better Home <br /> Loans.</h1>
            <ul>
                <li className='text-white mb-3'><span className='bby'>EASILY COMPARE</span></li>
                <li className='text-white mb-3'><span className='bby'>FAST PRESONALISED SERVICE</span></li>
                <li className='text-white mb-3'><span className='bby'>ONLINE APPLICATION</span></li>
            </ul>

            <button className='btn btn-blue text-white text-uppercase mt-3'>Lean More</button>

            </div>
        </div>
    </section>

    <section id='loan2'>
        <div className="container">
            <h2 className='text-center'>Give Better Deals</h2>

            <div className="row align-items-center">
                <div className="col-md-4 gy-4" data-aos="fade-right">
                    <div className="h-100">
                        <div className="d-flex justify-content-center">
                            <img src="Frame 353.png" alt="" className="w-75" />
                        </div>
                            <h6 className='text-center fw-bold'>Unrivalled Service</h6>
                            <p className='text-center'> Your satisfaction is our top priority. We take the time to understand your financial goals and provide personalized advice and solutions to help you achieve them.</p>

                    </div>
                </div>
                <div className="col-md-4 gy-4" data-aos="fade-left">
                    <div className="h-100">
                        <div className="d-flex justify-content-center">
                            <img src="Frame 353.png" alt="" className="w-75" />
                        </div>
                            <h6 className='text-center fw-bold'>Best Deals</h6>
                            <p className='text-center'> YNeed a loan? Our website showcases the most competitive loan rates, whether you're looking for a home loan, car loan, or a personal loan. Use our online tools to calculate your EMI and explore repayment options.</p>
                        </div>

                    </div>
                <div className="col-md-4 gy-4" data-aos="fade-left">
                    <div className="h-100">
                        <div className="d-flex justify-content-center">
                            <img src="Frame 353.png" alt="" className="w-75" />
                        </div>
                            <h6 className='text-center fw-bold'>Easy and Convience</h6>
                            <p className='text-center'>Enjoy the flexibility of banking on your schedule. Our online platform is available 24/7, allowing you to manage your accounts whenever it's convenient for you.</p>
                        </div>
                    </div>
            </div>
        </div>
    </section>

    <section id='loan3'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5" data-aos="fade-right">
                    <img src="https://s3-alpha-sig.figma.com/img/dac9/63da/81e6cda25a6c802dcbe1905cca5076e7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YidONNdwRYMprx3Zt6ikYwqTfGG4Ktp9mrJjQ5fVIXUKKeyUGMLxpS1b3BUo3norsR1pwbmTciQ~npfmU27VOZPEbNY4YCOni5VSIsDbNnFVl6MZ4v9fIEBtwt9dHo7Yo7DGsIx8hx28g-unJ4x1hITJ-9zxdiCfoTO3RiM5~mncgbqPzSP-SzOrQwf1IHXVh3E8UZ0SzWWopRtL5FcVQy3oowlW9FNNKqkAAjPAX8rS2F7dpUOBtoENKqP9YMvC-r-WBvoBWwNqrH9M6MBRAUONRbrCNajmEJ~8Fnl~uT6iU0g9J66kyJzeORbd53mKTWn4FefHYC3cxSgywec1aQ__" alt="" className="w-100" />
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <div className="title">
                        <h2>Why Choose Us</h2>
                        <p>Choose from our popular business credit card options such as low rate, cash back or flexible rewards to find the one that works best for your business.</p>
                        <p>No matter which card you choose, your business will benefit from important features like:</p>

                        <ul>
                            <li>Free online expense reporting tools.</li>
                            <li>No fee for additional employee cards.</li>
                            <li>Mobile payment capability for added convenience.</li>
                            <li>Zero Fraud Liability.* You won’t be liable for fraudulent purchases when your card is lost or stolen.</li>
                            <li>Cardmember Service available 24 hours a day/365 days per year.</li>
                        </ul>

                        <button className="btn btn-blue text-white text-uppercase">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id='loan4'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-4" data-aos="fade-right">
                    <div>
                    <h6 className='fw-bold'>Loan Amount</h6>
                    <div className="dash w-100 bg-blue"></div>
                    <p>Up to <span className='fw-bold'>$ 25M</span></p>
                    </div>
                    <div>
                    <h6 className='fw-bold'>Loan Value</h6>
                    <div className="dash w-100 bg-blue"></div>
                    <p>Up to <span className='fw-bold'>75%</span></p>
                    </div>
                    <div>
                    <h6 className='fw-bold'>Terms</h6>
                    <div className="dash w-100 bg-blue"></div>
                    <p>Up to <span className='fw-bold'>5 years</span></p>
                    </div>
                    <div>
                    <h6 className='fw-bold'>Collateral Types</h6>
                    <div className="dash w-100 bg-blue"></div>
                    <p>All Property Types considered, including special use (Excluding 'ground up' construction or raw land)</p>
                    </div>
                    <div>
                    <h6 className='fw-bold'>Other </h6>
                    <div className="dash w-100 bg-blue"></div>
                    <p>Interest-only and Non-recourse available</p>
                    </div>
                </div>
                <div className="col-lg-7" data-aos="fade-left">
                    <h2>Creative Structures with Fast Closings</h2>
                    <p>Commercial real estate lending nationwide, with a focus on transactions that require creativity and a sense of urgency.</p>

                    <div className="d-flex align-items-center gap-3">
                        <img src="Mask.png" alt="" />
                        <h6 className='fw-bold'>COMPETITIVE PRICING</h6>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <img src="Mask.png" alt="" />
                        <h6 className='fw-bold'>FLEXIBLE STRUCTURES</h6>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <img src="Mask.png" alt="" />
                        <h6 className='fw-bold'>CERTAINTY OF EXECUTION</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id='loan5'>
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-5" data-aos="fade-right">
                    <img src="https://s3-alpha-sig.figma.com/img/9ad6/210d/fe41175b127c9d1ac2a11a0b081ba2b6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5K43aUSwbqo0t4vohH4NqeGT9dMnM431kTz1YLp9Vm1wZy-6-pqwHeSQBr5t3WOkktP6-VTuzWfjxhb40OV2ogjz~tBPY7tFHi6S~RqesYICuXU~yMziqVTmXyqZfjjBLZ~tT8XvB6N37OaT1t3DrzCPQJW6m5Kc-y5fk7a-ypPtBKxRsGoqGphIyiho-8DaQqjNLZLBjTovDZq5aoq2Nb06ZlKKyaZX0D3lot9Ff9hvUYD9dczA2Eym0L6Iy6ViyWuGB-wumZSRcL7iG2BZUkuYnwQx5vT9oF1RR~xea3Izt0DtvqNpgfih8Ui4k6fDIH9LlixPWuTUpyqR~04ng__" alt="" className="w-100" />
                </div>
                <div className="col-lg-6 gy-4 gy-lg-0" data-aos="fade-left">
                    <div className="title">
                        <h2>Featured Deals</h2>
                        <h4>$95,000</h4>
                        <h6>Office Space | Chicago</h6>
                        <p>Duty Trust Bank provided a first mortgage secured by a 90% occupied office building in the Greater Chicago area. Loan proceeds refinanced the existing, higher cost debt, and funded a 3-month interest reserve. The 24-month, floating rate loan was written to a Utah-based real estate investment firm borrower and was priced at 6.50%</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id='loan6'>
        <div className="container">
            <h2 className='text-center'>Our Approach</h2>
            <div className="row flex-nowrap flex-lg-wrap ovx">
                <div className="col-lg-4 gy-3 col-11" data-aos="fade-right">
                    <div className="what rounded-3 p-3 pb-5 shadow h-100">
                        <div className='rounded-circle bg-purple mb-3'>
                        <img src="Mask group.png" alt="" />
                        </div>
                        <h5 className='w-100 mt-3'>Our Approach</h5>
                        <p>Over 25 years in the non-traditional lending space.</p>
                    </div>
                </div>
                <div className="col-lg-4 gy-3 col-11" data-aos="fade-left">
                    <div className="what rounded-3 p-3 pb-5 shadow h-100">
                    <div className='rounded-circle bg-purple mb-3'>
                        <img src="Mask group.png" alt="" />
                        </div>
                        <h5 className='w-100 mt-3'>Speed</h5>
                        <p>Our unique platform is designed to expedite diligence and provide quick decisions.</p>
                    </div>
                </div>
                <div className="col-lg-4 gy-3 col-11" data-aos="fade-left">
                    <div className="what rounded-3 p-3 pb-5 shadow h-100">
                    <div className='rounded-circle bg-purple mb-3'>
                        <img src="Mask group.png" alt="" />
                        </div>
                        <h5 className='w-100 mt-3'>Execution</h5>
                        <p>Over 25 years in the non-traditional lending space.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>

    </div>
  )
}

export default loan
