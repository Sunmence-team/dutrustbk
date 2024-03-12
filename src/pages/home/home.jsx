import React, { useState, useEffect } from 'react';
import './home.css'
import TradingViewWidget from '../../components/Tradingview';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 2000
});
function home() {

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
        <div className="parent">
        <nav className={`navbar navbar-expand-lg ${scrolling ? 'scrolled' : ''} fixed-top w-100`}>
  <div className="container">
  <Link className="navbar-brand" to="/"><img src="dt.png" alt="" className='logo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="bi bi-list text-blue fs-2"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link text-white px-4 active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white px-4" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white px-4" to="/savings">Savings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white px-4" to="/loan">Loan</Link>
        </li>
        <li className="nav-item">
          <a href='https://dashboard.duttrustbk.com/login.php' className="nav-link text-white px-4" >Login</a>
        </li>
    </ul>
    </div>
  </div>
</nav>
    <section id='hero'>
        <div className="container">
            <div data-aos="fade-down">
                <h2>Explore Our Range of Banking <br /> Account Tailored To Suit Your <br /> Financial Needs</h2>
                <p>Unlock opportunities with our flexible finance online with our secure digital banking <br /> platform.</p>
            <Link to='/about'>
            <button className='btn btn-blue text-white text-uppercase mt-3'>Learn More</button>
            </Link>
            </div>

        </div>

        <div className="container">
                <div className="kinda position-relative z-3 bg-white p-3 d-flex justify-content-center shadow" data-aos="fade-up">
                <div className="row flex-nowrap flex-md-wrap ovx">
                    <div className="col-md-4 position-relative">
                        <img src="relax.jpg" alt="" className='w-100 rlx' />
                        <div className="info text-white text-center">
                        <p className='m-0 text-center'>Online and Mobile</p>
                        <small>Equal blame belongs to those who fail their duty through weakness
                        </small>
                        </div>
                    </div>
                    <div className="col-md-4 position-relative">
                        <img src="relax1.jpg" alt="" className='w-100 rlx' />
                        <div className="info text-white text-center">
                        <p className='m-0 text-center'>Savings & CDs</p>
                        <small>Take trivial example which of us ever all undertakes laborious.
                        </small>
                        </div>
                    </div>
                    <div className="col-md-4 position-relative">
                        <img src="relax2.jpg" alt="" className='w-100 rlx' />
                        <div className="info text-white text-center">
                        <p className='m-0 text-center'>Customers loan</p>
                        <small>Duty or the obligations of business will frequently occur repudiated.
                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
        </div>

        <section id="snd"></section>

            <section id='welcome'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <h2 className='title'>Welcome To Duty Trust Bank</h2>
                            <p>At Duttrust, we are committed to providing you with unparalleled banking services designed to enhance your financial well-being. With a rich history of trust and reliability, we strive to empower our customers through innovative solutions, personalized attention, and a steadfast dedication to security. Discover a partner in your financial journey—where your aspirations meet our expertise</p>
                            <Link to='/savings'><button className='btn btn-blue text-white text-uppercase'>Learn More</button></Link>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <img src="https://s3-alpha-sig.figma.com/img/eb84/8187/c69be828e807bb9d5110d96b7ce593a7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QYhfnjahxDQE3WdUXTz5pNW3ZVOw-dZz~~8mJ5k4bWzjggri9PCtbu~N~0NqDnlwZ4QN6Wn1CmzOSDGriIBt1CzZNs2nUKBM12PwI6i8N1WZCKlC4UWi0xJ~IhuE9xv3~XNVqHH3cG4-a19QPz-kLT5U6rF23Zv0AJFYxi6zZrcqUlxmhNkUL8INbXZD8C-kCnt2FaPVPD6DWxnpVVmfw9XjzNRIwjcGOSXW6T~~vTO2WkldtVgwuZARlWz8X6iI76OnLD0uRXqWw4ZP9Heu6WfSZlDeKnNKXMleMy-RHPdLEGkxUHGuQQ8wJFkG9AozArLABtGULyeWBnkDCKjt7Q__" alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </section>

            <section id='asist'>
                <div className="container">
                <h2 className='text-center'>Duty Trust Bank is Ready To Provide <br /> Assistance</h2>
                <p className='text-center'>At duty trust bank, our dedicated team is ready to provide support and solutions tailored to your needs. Count on us for expert <br /> assistance to navigate your challenges and achieve your goals</p>
                    <div className="row flex-lg-wrap flex-nowrap ovx">
                        <div className="col-lg-4 col-11 gy-3" data-aos="fade-right">
                            <div className="check shadow w-100 rounded-3 p-3 h-100">
                            <i className="bi bi-bar-chart-fill fs-1 help"></i>
                            <p className='pt-2 mb-0 pb-0 fw-bold'>Checking</p>
                            <small>Enjoy seamless transactions, secure online banking, and personalized services designed to meet your everyday financial needs. Choose a checking account that suits your lifestyle and ensures effortless money management.</small>
                            </div>
                        </div>
                        <div className="col-lg-4 col-11 gy-3" data-aos="fade-left">
                            <div className="check w-100 shadow rounded-3 p-3 h-100">
                            <i className="bi bi-bar-chart-fill fs-1 help"></i>

                            <p className='pt-2 mb-0 pb-0 fw-bold'>Savings</p>
                            <small>Maximize your financial potential with our range of savings accounts.Whether you're saving for a milestone or creating an emergency fund, our savings solutions are designed to meet your unique goals.</small>
                            </div>
                        </div>
                        <div className="col-lg-4 col-11 gy-3" data-aos="fade-left">
                            <div className="check w-100 shadow rounded-3 p-3 h-100">
                            <i className="bi bi-bar-chart-fill fs-1 help"></i>

                            <p className='pt-2 mb-0 pb-0 fw-bold'>Loans</p>
                            <small>Whether you're planning a major purchase, consolidating debt, or pursuing a personal goal,Trust in our commitment to transparency and customer satisfaction for a seamless lending experience.</small>
                            </div>
                        </div>
                        <div className="col-lg-4 col-11 gy-3" data-aos="fade-right">
                            <div className="check w-100 shadow rounded-3 p-3 h-100">
                            <i className="bi bi-bar-chart-fill fs-1 help"></i>

                            <p className='pt-2 mb-0 pb-0 fw-bold'>Personal Account</p>
                            <small>Our tailored banking services are designed to meet the unique financial needs of your enterprise, offering seamless transactions, and personalized support. Explore a partnership that goes beyond banking empowering your business to thrive."</small>
                            </div>
                        </div>
                        <div className="col-lg-4 col-11 gy-3" data-aos="fade-left">
                            <div className="check w-100 shadow rounded-3 p-3 h-100">
                            <i className="bi bi-bar-chart-fill fs-1 help"></i>

                            <p className='pt-2 mb-0 pb-0 fw-bold'>Credit Card</p>
                            <small>Unlock a world of financial flexibility with our credit cards. Whether you're looking for rewarding perks, secure transactions, or convenient spending options, our range of credit cards is designed to cater to your lifestyle.</small>
                            </div>
                        </div>
                        <div className="col-lg-4 col-11 gy-3" data-aos="fade-left">
                            <div className="check w-100 shadow rounded-3 p-3 h-100">
                            <i className="bi bi-bar-chart-fill fs-1 help"></i>

                            <p className='pt-2 mb-0 pb-0 fw-bold'>Mortages</p>
                            <small>Whether you're a first-time buyer or looking to refinance, we offer competitive rates, personalized guidance, and a seamless application process. Let us help you turn your homeownership dreams into reality.</small>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section id='secure'>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5" data-aos="fade-right  ">
                            <img src="IMG-20240229-WA0007 2.png" alt="" className='w-100' />
                        </div>
                            <div className="col-lg-7 my-5 my-lg-0" data-aos="fade-left">
                                <h2 className='title'>Secure technology and friendly customer service - from anywhere.</h2>
                                <p>Experience the perfect blend of secure technology and friendly customer service, all accessible from the comfort of anywhere you are. At Duty Trust Bank, we prioritize your peace of mind by combining cutting-edge security measures with a warm and responsive customer support team. Enjoy the convenience of banking with confidence, wherever life takes you</p>

                                <Link to='/loan'><button className='btn btn-blue text-white text-uppercase'>Learn More</button></Link>
                            </div>
                    </div>
                </div>
            </section>

            <section id='megg'>
                <div className="sme text-center">
                <h2 className='text-white'>Emergency Service Requests</h2>
                <p className='text-white'>List of banking service requests all in one place.</p>
                <div className="container">
                <div className="bffr bg-white p-3 rounded-3 position-relative z-3 shadow" data-aos="fade-up">
                    <div className="row flex-nowrap flex-lg-wrap ovx">
                        <div className="col-lg-3">
                            <div className="w-100 pro rounded-top-3 p-5">
                                <div className="rounded-circle bg-purple mx-auto">
                                <img src="Mask group.png" alt="" />
                                </div>
                            </div>
                            <div className="credit w-100 bg-blue rounded-bottom-3 text-white p-2">
                            <p className='pb-0 mb-0'>Credit / Debit Card Related</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="w-100 pro rounded-top-3 p-5">
                                <div className="rounded-circle bg-purple mx-auto">
                                <img src="Mask group (1).png" alt="" />
                                </div>
                            </div>
                            <div className="credit w-100 bg-blue rounded-bottom-3 text-white p-2">
                            <p className='pb-0 mb-0'>Mobile / Internet Banking</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="w-100 pro rounded-top-3 p-5">
                                <div className="rounded-circle bg-purple mx-auto">
                                <img src="Mask group.png" alt="" />
                                </div>
                            </div>
                            <div className="credit w-100 bg-blue rounded-bottom-3 text-white p-2">
                            <p className='pb-0 mb-0'>Account Details Changing</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="w-100 pro rounded-top-3 p-5">
                                <div className="rounded-circle bg-purple mx-auto">
                                <img src="Mask group.png" alt="" />
                                </div>
                            </div>
                            <div className="credit w-100 bg-blue rounded-bottom-3 text-white p-2">
                            <p className='pb-0 mb-0'>Check Book / DD Related</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
                <section id="foreign">
                    <div className="container">
                    <h3>Foreign Exchange</h3>
                    <p>Denouncing pleasure & praising pain was born</p>

                    <div className="row justify-content-lg-center flex-nowrap flex-lg-wrap ovx justify-content-start">
                        <div className="col-lg-3 gy-3 col-11" data-aos="fade-right">
                            <div className="shadow rounded-3">
                            <div className="bg-white p-4 rounded-top-3 d-flex justify-content-center flex-column align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/308e/ce1d/c50940c76b194cb22ab8992e86d01e0d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UnhiHX4yD1jPpnjOdCi8LkGfvbyH9xXP-UEpCLc4W6Ahp2XrPMjScLPrM7uo2XFRWGdUYMT986UBMNr6kGabdA9NUaO6Fv~Cehgwsq~8I~SMT2nsNd9w~n~75B5byclFkMKEKGhMC2bwoCFOi-xbxj~dNQ9uPpf5KEnbWpbpv5TGtxxCvdkhlDLWV1clvUMHSD4k7MG5CO3zUz~0TGUplm9Z4Sb4zTG9NgI~mfzM7sQRPHxnhyhu8FJ9P~t-tvwH9NlPZZ7n4D6iSLZjGTiJ7ytBeox-TG0THxPQvCnyVFrOGDRotPDMXrUZ9tZWF4C18p63KuznAoshwq9oPnFnZg__" alt="" className='country' />
                                <p className='fw-bold'>USD</p>
                            </div>
                                <div className="bg-light-purple p-2">
                                    <p className='mb-0 pb-0 text-white'>Recieve: <span className='ms-3'>52.46</span></p>
                                </div>
                                <div className="bg-blue p-2 rounded-bottom-3">
                                    <p className='mb-0 pb-0 text-white'>Send <span className='ms-3'>64.46</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 gy-3 col-11" data-aos="fade-right">
                            <div className="shadow rounded-3">
                            <div className="bg-white p-4 rounded-top-3 d-flex justify-content-center flex-column align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/d7f4/ad91/4a2f382fc08021f842505689f004114f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbAFbMFJk7eNqQQy6qCskSdifFpLoLkzYUNKRey6t2iEmqkpYPu2Iql6qNqyXKaQs4AKhKCAC2PJWYk2RiJpCsNAh0AtpqzZh0hdFGOeM1aH-v8l7rtdN78cJ~5jZ9CXtBBwGvcdUufUYtFfI7DKaeC4HAbbK0rawzgNzTBOdLFJ2wq~KGBSxQiwJeNIHhmW19vymEQTHOEa9ifWfLgKNp3j7qWglEKwbkFosU6nuyGsOSVheXoMJgCtpdl3aKD21uaEKYzYoA7uJrlnXpq93znasEe8~YeGoYIMieDotgNhcz53h97dMq9rlGI156MjUZpuvKR~DZLDh5HBoBUSmg__" alt="" className='country rounded-circle' />
                                <p className='fw-bold'>JPY</p>
                            </div>
                                <div className="bg-light-purple p-2">
                                    <p className='mb-0 pb-0 text-white'>Recieve: <span className='ms-3'>52.46</span></p>
                                </div>
                                <div className="bg-blue p-2 rounded-bottom-3">
                                    <p className='mb-0 pb-0 text-white'>Send <span className='ms-3'>64.46</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 gy-3 col-11" data-aos="fade-left">
                            <div className="shadow rounded-3">
                            <div className="bg-white p-4 rounded-top-3 d-flex justify-content-center flex-column align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/bf6e/562a/680d31588e99626891f121b460afd295?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dr0IXr9dc76Fq5jSL~5hqa5x6uxruhpHH0kBmwj68IcBSM6lfB36BKWbXfwZmPTaqE8iGG-ZcTq86jRA1NL8-sp~gzz0lMeHKPdpajxGbUP4VSh23d06HWZ38Hkgw8wVc7QXnVaCAoKdyQaVj12Pm1Bv~YU9wTpeFZpwg3zmfYuHGY-Pu6tRgSTDySzvMvBLPcIt~psI09Pnqa2lXBakovhYuCvQzH8zH5l7~y3nyua4Bxwd819BEOaIjrcg0DlxlgrqkgAw0cwwe3tNy-mHB31XmHJZhQ9i4UlZGRtZk~eylSqr-yH0ez6E5KtK6oWBQ8~udrukDa5zL9Gtko1aAA__" alt="" className='country' />
                                <p className='fw-bold'>CAD</p>
                            </div>
                                <div className="bg-light-purple p-2">
                                    <p className='mb-0 pb-0 text-white'>Recieve: <span className='ms-3'>52.46</span></p>
                                </div>
                                <div className="bg-blue p-2 rounded-bottom-3">
                                    <p className='mb-0 pb-0 text-white'>Send <span className='ms-3'>64.46</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 gy-3 col-11" data-aos="fade-left">
                            <div className="shadow rounded-3">
                            <div className="bg-white p-4 rounded-top-3 d-flex justify-content-center flex-column align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/fac0/f0b4/f71455e5e4a4c57820e9260c2a45bb86?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a~2G0P7TFVaINfZjwzMJVPygbwFDITE5mWkxQLT1J4JJ~QfEF0zF0RNFdIjc~tDOzUpMZRH3a2msktKxfxvY07NajmlP-sf-66m5fP4f7usgQLzB3DY9~roYjdPtaaDS5qpsLrz9~xMkP9YiteA2mYLa9l~uJhB7fpF1UHHKL6mIK76NCTicSJpvWlJ9GFPjn1PexLxSm3c0HqCDdWCiR2WF~h0EBoBH6i9GoLejEe1Wvto6SV3YVynxkUB9BtE24-jCeKpa-woeZtgYXCBlGjgVZ0hTHD8EY50pZOWo9A6X1~iBlvA6H9UjsDlS6dqdn3BG44fy1oHZ4CJckHRhzA__" alt="" className='country' />
                                <p className='fw-bold'>AUD</p>
                            </div>
                                <div className="bg-light-purple p-2">
                                    <p className='mb-0 pb-0 text-white'>Recieve: <span className='ms-3'>52.46</span></p>
                                </div>
                                <div className="bg-blue p-2 rounded-bottom-3">
                                    <p className='mb-0 pb-0 text-white'>Send <span className='ms-3'>64.46</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 gy-3 col-11" data-aos="fade-right">
                            <div className="shadow rounded-3">
                            <div className="bg-white p-4 rounded-top-3 d-flex justify-content-center flex-column align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/64c1/3e0a/6f77c4dc260feb5e46a1ff6b97e765ee?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTPFzPkxKJjUgCu2EoTCfIH3ROb2SyzlOW5MTCT2ZevZ~8DJE6ryvZvEGqK23d8NgAFatLLqQL3FfmL5NRKtmUSn1ZCEV~vAyj3VA7pNLtDBqdTnZTix-16FtsI9Vef0Q6tdtIOulpX~D77JS8kOzP~AV2CJUA-XEMPmXfv5KtwlLL52t4ao~r9j0j2qbmJ~B~xU64wHm8Sipdy1LDYxCy1ziROoB-Iy5lSlfhFBDio~0Uzjz-d9-b7UPJtGn5A~~haTeGSmWqaaXMIQh2Txq4qCPmkXAxHFZkvQVLfH1NGD5I-hGz0K1UFSq~z2OyG7L67LByDhseQ3zg21R05W2Q__" alt="" className='country' />
                                <p className='fw-bold'>GBP</p>
                            </div>
                                <div className="bg-light-purple p-2">
                                    <p className='mb-0 pb-0 text-white'>Recieve: <span className='ms-3'>52.46</span></p>
                                </div>
                                <div className="bg-blue p-2 rounded-bottom-3">
                                    <p className='mb-0 pb-0 text-white'>Send <span className='ms-3'>64.46</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 gy-3 col-11" data-aos="fade-left">
                            <div className="shadow rounded-3">
                            <div className="bg-white p-4 rounded-top-3 d-flex justify-content-center flex-column align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/b816/1305/92915b1a87d206901d83df9bc9c6516a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7YiWLDb39p0gt8ILYslCO0pkxc3JY67fqGuiufgpM9hkmQ5WQH~eubkKjqCpTo6NZI8Z98QDLjmlE2X-AEXN~ImUzAYNMKWD6Asu3VisXV8n3WeD-T9m22N601~jV4Id26faYDGWO-n~ClgJfONXSn0Y-~liwG~5It0e6V-bkHEQXsvKK4WYjiEOojGJmSZvWHldC8mEynfzvzEAdswe9qt7Cle5HVoz5RjF9h-Bs3doimTNFFgCBh9FPfa4LkLqeglXFTLuVjRRbxsF3oj7abBn3sIwkYC8~S57oqB~iq86ANtN-r~vpnNAFD1stZ-~YtxM0IYUK79XU7eMqJxSw__" alt="" className='country' />
                                <p className='fw-bold'>SEK</p>
                            </div>
                                <div className="bg-light-purple p-2">
                                    <p className='mb-0 pb-0 text-white'>Recieve: <span className='ms-3'>52.46</span></p>
                                </div>
                                <div className="bg-blue p-2 rounded-bottom-3">
                                    <p className='mb-0 pb-0 text-white'>Send <span className='ms-3'>64.46</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                </section>

                <section id='chart'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <TradingViewWidget /> 
                            </div>
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

export default home
