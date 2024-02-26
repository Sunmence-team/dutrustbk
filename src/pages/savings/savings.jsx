import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './savings.css'
import Footer from '../../components/Footer';

const savings = () => {
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
          <Link className="nav-link text-secondary px-4 active" to="/savings">Savings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary px-4" to="/loan">Loan</Link>
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
                    <h2 className='text-center'>Saving</h2>
                    <p className='text-center'>Discover the essence of Duty Trust Bank, where financial expertise meets unwavering commitment, providing innovative solutions tailored to your unique needs and ensuring a trusted partnership in your financial journey</p>
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

    <section id='sav1'>
        <div className="container">
            <div data-aos="fade-down">
            <h1 className='text-center'>Prime Business Savings</h1>
            <h5 className='text-white text-center'>A free and simple savings account that earns interest on all balances. Ask us about our extended deposit insurance option.</h5>
            <div className="d-flex justify-content-center mt-4">
            <button className='btn btn-outline-light px-4 nwbtn'>Login</button>
            </div>
            </div>
        </div>
    </section>

    <section id='sav2'>
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-6" data-aos="fade-right">
                <div className="title">
                    <h2>Health Savings Accounts</h2>
                </div>
                    <p>Health Savings Accounts are designed to help employees with qualifying high-deductible health plans. HSAs pay for out-of-pocket medical costs and help cover future medical expenses—all with debit card access and check writing capabilities. Some restrictions apply.</p>

                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <img src="https://s3-alpha-sig.figma.com/img/6fde/f398/9333f7f5bd6e22d9329c98bda721bec1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b-SE~LJZDdDk4cAoLuRz6KWbwyCCMkJlFdBmQs5LgDo0DD26KgCvUUS9qbaCZmu5gQ5hQz40Zy9mRtMmVZDXkgSC5X2~q7la7Y0uHFEut3kFYdaPTnZhEDZfzuyrvg3AHhldHdf9s6io5SBB~WON8FdUz1gxLLyLc7iRU42arDTiq3BaoGhmKv9tBSUTfydMvY6DqCFA9exqGNC4xx5Wt1l8ipFOKp-fac96wu4AQCIvpS1ssT7IifpmBhbIiINeMHFvftV37xFUYuolnQPpGfsWiOOKme2vxzL6uJlkCI4KHRCpMjbXqohOyHeC3xIf~ZvHFrsWh06lIznOakOpgw__" alt="" className="w-100 rounded-3" />
                </div>
            </div>
        </div>
    </section>

    <section id='sav3' data-aos="zoom-in">
        <div className="container">
            <h1 className='text-center'>We offer a variety of personal and business credit cards to meet your needs - including competitive introductory rates and multiple rewards programs.</h1>
        </div>
    </section>

    <section id='sav4'>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6" data-aos="fade-right">
                    <img src="https://s3-alpha-sig.figma.com/img/148c/5828/62cca9575c03c8909660c82cd381d85d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EKPCrfmMx98sV3AQXpQSiwZPwDVDnJcDu1jdbUIV9Vwjdh4qpfhlS4qGo7Zh6rhL1IScIeNMSnWnUr6fCKTkZJLmU9L39jKOxXn55PwB17UbeNhsyIQ53rwRUd0vPmyySX~eWW~oMZOKvFtRH1ZTpiePW4nm4bFFg4hBtbqad6jIuLmSGBB3ehrui-zHJnH~4c0j2anmihA0LDshkIoNr24kDpQh~D3EQYGcz0fhUG6zjT8SWp8s44oZh6eMr1ETYKkqPcmB0k6LvkZbRIcR~zyJLdGBPlLd0l4ONj8VCvz24O1bKxB4StUsoHnnKvmzqyinrVrIkzxiLXkiI4do8Q__" alt="" className='w-100' />
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <div className="title">
                        <h2>Business Credit Cards</h2>
                    </div>
                        <p>Choose from our popular business credit card options such as low rate, cash back or flexible rewards to find the one that works best for your business.</p>
                        <p>No matter which card you choose, your business will benefit from important features like:</p>
                        <ul>
                            <li>Free online expense reporting tools.</li>
                            <li>No fee for additional employee cards.</li>
                            <li>Mobile payment capability for added convenience.</li>
                            <li>Zero Fraud Liability.* You won’t be liable for fraudulent purchases when your card is lost or stolen.</li>
                            <li>Cardmember Service available 24 hours a day/365 days per year.</li>
                        </ul>
                        <button className="btn btn-blue text-white text-uppercase">Apply now</button>
                </div>
            </div>
        </div>
    </section>

    <section id='sav5' data-aos="fade-up">
        <div className="container">
            <h1 className='text-center'>Get started with Duty Trust Bank today.</h1>
            <p className='text-white text-center'>We’re here to help.</p>
            <div className="d-flex justify-content-center">
            <button className="btn btn-outline-light text-white nwbtn">Contact</button>
            </div>
        </div>
    </section>
    <section id="sav6" data-aos="zoom-in">
        <div className="container">
            <h2>Duty Trust Bank provides zero fraud liability for unauthorized transactions. Cardholder must notify Elan Financial Services promptly of any unauthorized use. Certain conditions and limitations may apply.</h2>
            <h2>The creditor and issuer of these cards is Elan Financial Services, pursuant to separate licenses from Visa U.S.A. Inc., and Mastercard International Incorporated. Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.</h2>
        </div>
    </section>

    <Footer/>
    </div>
  )
}

export default savings
