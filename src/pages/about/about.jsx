import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './about.css'
import Footer from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 2000
});

const about = () => {
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
          <Link className="nav-link text-secondary px-4 active" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary px-4" to="/savings">Savings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary px-4" to="/loan">Loan</Link>
        </li>
        <li className="nav-item">
          <a href='https://dashboard.duttrustbk.com/login.php' className="nav-link text-secondary px-4" >Login</a>
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
                    <h2 className='text-center'>About Us</h2>
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

    <section id='abt2nd'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5" data-aos="fade-right">
                    <img src="https://s3-alpha-sig.figma.com/img/4f86/03f4/da0febfced157a6714a48fd665a2886f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y25HXoHMhrSvtBb6SI50-fLKiNTHmP9HkX9DAik2m7L-AV-21jQGJzeC3-4VwTWg3Iy41Utl9I~xhndDA~CoLd3qy8mINkQo6i00QKrQnu2eUft8GL2xb0X4TMOpxljJ2v2zQ8qU07f533wxWI1b7PGRnbQ3yOJO2WmD66qYyxr7KTkZeHaUjEje9L1H6T7O4jDVtrqBbGyY8en6~YardJaAs2PQv-X13DvQ5VFUcyjZKy98S4j0ZFLfSMA30JpSizuSDtlEssmq0Qm41WIB6oaLLBvKczdP6yiBj9xf3yyY99JtE2CBTiWj-5M1PSACg6rDzIUf63CLrWSaFTnLqQ__" alt="" className="w-100" />
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <p>Welcome to Duty Trust Bank, a full-service bank established in 1872. We are both an experienced, balance sheet lender offering speed, certainty of execution and creativity to structure loan originations and acquisitions nationally, and a full-service bank serving customers in Western, Central, and Southern Maine.

                    We originate and purchase commercial loans nationally - secured by all types of real estate (with the exception of land and construction) and including government guaranteed (SBA and USDA) loans. In Maine, we also provide a full range of personal and business banking services, from banking accounts to financing options to cash management.

                    At Duty Trust Bank, we are committed to bettering the lives of those in need. We focus our charitable efforts in the markets we serve and aim to raise the aspirations of our youth, support those in need, and promote economic development.</p>
                </div>
            </div>
        </div>
    </section>

    <section id='abt3rd'>
        <div className="container">
            <div className="row">
                <div className="col-lg-7" data-aos="fade-right">
                    <div className="title">
                    <h2>Welcome To Duty Trust Bank</h2>
                    <p>At Duttrust, we are committed to providing you with unparalleled banking services designed to enhance your financial well-being. With a rich history of trust and reliability, we strive to empower our customers through innovative solutions, personalized attention, and a steadfast dedication to security. Discover a partner in your financial journey—where your aspirations meet our expertise</p>

                    <Link to='/loan'><button className="btn btn-blue text-white text-uppercase">Learn more</button></Link>
                    </div>
                </div>
                <div className="col-lg-5" data-aos="fade-left">
                    <img src="https://s3-alpha-sig.figma.com/img/eb84/8187/c69be828e807bb9d5110d96b7ce593a7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QYhfnjahxDQE3WdUXTz5pNW3ZVOw-dZz~~8mJ5k4bWzjggri9PCtbu~N~0NqDnlwZ4QN6Wn1CmzOSDGriIBt1CzZNs2nUKBM12PwI6i8N1WZCKlC4UWi0xJ~IhuE9xv3~XNVqHH3cG4-a19QPz-kLT5U6rF23Zv0AJFYxi6zZrcqUlxmhNkUL8INbXZD8C-kCnt2FaPVPD6DWxnpVVmfw9XjzNRIwjcGOSXW6T~~vTO2WkldtVgwuZARlWz8X6iI76OnLD0uRXqWw4ZP9Heu6WfSZlDeKnNKXMleMy-RHPdLEGkxUHGuQQ8wJFkG9AozArLABtGULyeWBnkDCKjt7Q__" alt="" className="w-100" />
                </div>
            </div>
        </div>
    </section>

    <section id="abt4th">
        <div className="container">
            <div className="text-center">
            <h2>Emergency Service Requests</h2>
            <p>List of banking service requests all in one place.</p>

            <div className="row justify-content-lg-center flex-nowrap flex-lg-wrap ovx justif">
                <div className="col-lg-4 gy-3 col-11" data-aos="fade-right">
                    <div className="what w-100 h-100 px-3 py-4 rounded-3 text-start shadow">
                    <div className="rounded-circle bg-purple mb-3">                        
                    <img src="Mask group.png" alt="" className='pb-3' />
                    </div>
                        <p className='m-0 p-0 py-1 fw-bold'>Credit / Debit Card Related</p>
                        <small>From versatile credit options to efficient debit solutions, our cards are designed to complement your lifestyle. Enjoy seamless transactions, exclusive rewards, and the peace of mind that comes with our advanced security features. Choose [Bank Name] for a banking experience that goes beyond transactions, enhancing the way you manage your finances.</small>
                    </div>
                </div>
                <div className="col-lg-4 gy-3 col-11" data-aos="fade-left">
                    <div className="what w-100 h-100 px-3 py-4 rounded-3 text-start shadow">
                    <div className="rounded-circle bg-purple mb-3">
                                <img src="Mask group.png" alt="" />
                                </div>
                        <p className='m-0 p-0 py-1 fw-bold'>Mobile / Internet Banking</p>
                        <small>Experience banking at your fingertips with our cutting-edge Mobile and Internet Banking services. Seamlessly manage your finances anytime, anywhere, with secure access to account information, fund transfers, and bill payments. Embrace the convenience of modern banking tailored to your on-the-go lifestyle.</small>
                    </div>
                </div>
                <div className="col-lg-4 gy-3 col-11" data-aos="fade-left">
                    <div className="what w-100 h-100 px-3 py-4 rounded-3 text-start shadow">
                    <div className="rounded-circle bg-purple mb-3">
                                <img src="Mask group.png" alt="" />
                                </div>
                        <p className='m-0 p-0 py-1 fw-bold'>Account Details Changing</p>
                        <small>Experience banking at your fingertips with our cutting-edge Mobile and Internet Banking services. Seamlessly manage your finances anytime, anywhere, with secure access to account information, fund transfers, and bill payments. Embrace the convenience of modern banking tailored to your on-the-go lifestyle.</small>
                    </div>
                </div>
                <div className="col-lg-4 gy-3 col-11" data-aos="fade-left">
                    <div className="what w-100 h-100 px-3 pt-4 pb-5 rounded-3 text-start shadow">
                    <div className="rounded-circle bg-purple mb-3">
                                <img src="Mask group.png" alt="" />
                                </div>
                        <p className='m-0 p-0 py-1 fw-bold'>Check Book / DD Related</p>
                        <small>Simplify your transactions with our convenient checkbook and demand draft services at Duty Trust Bank.</small>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    </section>

    <section id='abt5th'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5" data-aos="fade-right">
                    <img src="IMG-20240229-WA0007 2.png" alt="" className="w-100" />
                </div>
                <div className="col-lg-7 my-md-5 my-lg-0" data-aos="fade-left">
                    <div className="title">
                    <h2>Professionalism defined: secure tech, unmatched service, accessible anywhere.</h2>
                    </div>
                    <p>Experience the perfect blend of secure technology and friendly customer service, all accessible from the comfort of anywhere you are. At Duty Trust Bank, we prioritize your peace of mind by combining cutting-edge security measures with a warm and responsive customer support team. Enjoy the convenience of banking with confidence, wherever life takes you</p>
                    <Link to='/savings'><button className="btn btn-blue text-white text-uppercase">learn more</button></Link>
                </div>
            </div>
        </div>
    </section>

    <section id='abt6th'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                    <img src="https://s3-alpha-sig.figma.com/img/8f50/7acf/517db69aa97628a589c7fc134c0b8d7c?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GW~7mcVApKs~LWdbycZzPJN0yvQVHUq7kUn--iNEpyvQpiD9tqKgCtj9cwemISmv2VxACosbQqY0nU9jOqtIpGE7ArYKEfJOLgTSy7p-V4WkcxqrAN9KtsmWh0cdEJsMYr4n7d4YPQDD-~DdWzFs-vI~X43K9zAt6hxxdVjx4jfwFUDH2fChrHK-SoOoh-IZjwAziOCb5FcJMjbWaPyvSoI4y2KM6mo~zDzae3iw0qTUCeKDdJ1Uu6iBVp~QCXeBC0Lyo0BmCXwV2qImx-w2~UF3yVNnpUIKZbksfBxuoEss3rnzcbJaekWRPlBaL8~OBn0YXbsYG2kMw1ed0GjnFg__" alt="" className="w-100" />
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <div id="abt5th">
                        <h2>Investor Relations</h2>
                        <p>Duty Trust Bank (NASDAQ: NBN) is a full-service bank headquartered in Portland, Maine. We offer personal and business banking services to the Maine market via seven branches. Our Loan Acquisition and Servicing Group purchases and originates commercial loans on a nationwide basis</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id='abt7'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-6" data-aos="fade-right">
                    <div id="abt5th">
                        <div className="title">
                        <h2>Foreign Exchange</h2>
                        </div>
                        <p><span className='fw-bold'>Exchange Rates:</span> The value of one currency relative to another is determined by exchange rates. These rates are influenced by supply and demand dynamics, interest rates, inflation, and other economic factors</p>
                        <p><span className="fw-bold">Market Participants: </span>Participants in the forex market include central banks, commercial banks, institutional investors, corporations, and individual traders. Each group contributes to market liquidity and price discovery.</p>
                        <p><span className="fw-bold">Currency Pairs: </span>Forex trading involves the exchange of one currency for another. Currency pairs are classified into majors, minors, and exotics, reflecting the strength and stability of the economies involved.</p>
                    </div>
                </div>
                <div className="col-lg-5" data-aos="fade-left">
                    <img src="https://s3-alpha-sig.figma.com/img/437b/3604/474740bfd5b52206e86ea34b6a4b89d1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klH1ELPEcE~1Zql1uEtdXGZzr-r1rHD-LXToHiihTYzL5lIQ-CjOOpGz2Q85xEzgd-A3zFiyo4-~LIsarlR9tSuiYJ9VXLjqHn5Rk3hlNyUJugw~ELuc-2fZ8y7ZPYuSe2kbo0iWKHZ4q2UjLUpa6xSHhWjVaI0AD7~YTASbycScGv76dei4QsQt8geq4VqvaHkoFfBq0DvKRvC2Sic-GmWDV-XLm3sbZwygJVkU~NEhxV~Q4QKWIeowe5HP4KHYVKHvguViXOeAwzKgXdcOiCC~c4nQFE7WeAFHfjnnUFOXSoXPBmNy75xqHeETsoxFrT9Ghu6a1ifw~E~y1-3YNg__" alt="" className="w-100" />
                </div>
            </div>
        </div>
    </section>

    <section id='abt8'>
        <div className="container">
            <div id="abt5th" data-aos="zoom-in">
            <h2 className='text-center'>Community Outreach</h2>
            <p className='mb-2'>At Duty Trust Bank, we understand the pivotal role that a bank plays in the community. Beyond our commitment to financial excellence, we believe in fostering meaningful connections and giving back to the communities we serve. Our dedication goes beyond banking transactions; it extends to building a foundation for growth and prosperity.We take pride in supporting local initiatives that make a positive impact. From sponsoring community events to collaborating with local nonprofits, duty trust bank is deeply embedded in the fabric of your neighborhood. Our goal is to contribute to the well-being of the community by addressing its unique needs and challenges.</p>
            <p className='mb-2'>We take pride in supporting local initiatives that make a positive impact. From sponsoring community events to collaborating with local nonprofits, duty trust bank is deeply embedded in the fabric of your neighborhood. Our goal is to contribute to the well-being of the community by addressing its unique needs and challenges.</p>
            <p className='mb-2'>We take pride in supporting local initiatives that make a positive impact. From sponsoring community events to collaborating with local nonprofits, duty trust bank is deeply embedded in the fabric of your neighborhood. Our goal is to contribute to the well-being of the community by addressing its unique needs and challenges.</p>
            <p className='mb-2'>We believe in the strength of collaboration. Duty trust bank actively seeks partnerships with local businesses and organizations to create a network that fosters growth and resilience. Together, we aim to build a community where everyone thrives.</p>
            </div>
        </div>
    </section>

    <section id='form1' data-aos="fade-up">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-lg-7">
                                <div className="frinner p-5 rounded-start-3 w-100 h-100">
                                <form action="">
                                    <h2>Welcome To Duttrust</h2>
                                    <p>Ready to experience seamless and secure banking at your fingertips? Signing up is quick and easy.</p>
                                    <div className="row">
                                        <div className="col-6 gy-3">
                                            <input type="text" placeholder='First Name' className='w-100 bg-transparent inp' />
                                        </div>
                                        <div className="col-6 gy-3">
                                            <input type="text" placeholder='Last Name' className='w-100 bg-transparent inp' />

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 gy-3">
                                            <input type="email" placeholder='Email' className='w-100 bg-transparent inp' />
                                        </div>
                                        <div className="col-6 gy-3">
                                            <input type="number" placeholder='Phone Number' className='w-100 bg-transparent inp' />

                                        </div>
                                    </div>
                                    <div className="row align-items-end">
                                        <div className="col-6 gy-3">
                                            <label htmlFor="date_of_bath" className='text-secondary'>Date of Birth</label>
                                            <input type="date" placeholder='Date of Birth' className='w-100 bg-transparent inp' />
                                        </div>
                                        <div className="col-6 gy-3">
                                            <input type="text" placeholder='Address' className='w-100 bg-transparent inp' />

                                        </div>
                                        <div className="col-8 mt-5 mx-auto">
                                            <button className='btn btn-blue w-100 text-white h-100'>Submit</button>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                <img src="Frame 339.png" alt="" className='w-100 rounded-end-3' />
                            </div>
                        </div>
                    </div>
                </section>

            <Footer/>

    </div>
  )
}

export default about
