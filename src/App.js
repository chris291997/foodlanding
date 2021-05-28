
import './App.css';
import ScrollReveal from 'scrollreveal';
import React, {useState, useEffect} from 'react';
import 'boxicons';
import Menu from './components/Menu';
import axios from 'axios';
import URL from './components/UrlBase';
import {CopyToClipboard} from 'react-copy-to-clipboard';
// import Storecode from './components/Storecode';


const App = () => {

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  // Validate that variables exist
  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu');
      });
  }
}


const showM = () => {
  showMenu('nav-toggle','nav-menu');
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
  });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

// /*==================== DARK LIGHT THEME ====================*/ 
// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
// const iconTheme = 'bx-sun';

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// // We validate if the user previously chose a topic
// if (selectedTheme) {
// // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
// document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
// themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
// }

// Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
  
// })
// const changetheme = () => {
// // Add or remove the dark / icon theme
// document.body.classList.toggle(darkTheme);
// themeButton.classList.toggle(iconTheme);
// // We save the theme and the current icon that the user chose;
// localStorage.setItem('selected-theme', getCurrentTheme());
// localStorage.setItem('selected-icon', getCurrentIcon());
// }


/*==================== SCROLL REVEAL ANIMATION ====================*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 2000,
//   reset: true
// });

// sr.reveal(`.home__data, .home__img,
//           .about__data, .about__img,
//           .services__content, .menu__content,
//           .app__data, .app__img,
//           .contact__data, .contact__button,
//           .footer__content`, {
//   interval: 200
// })

//! FUNCTIONALITY SCRIPTS
const queryParams = new URLSearchParams(window.location.search);
// var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
// var url = new URL(params);
var store_code = queryParams.get("store_code");

useEffect(() => {
    
    axios.get(URL +`index.php/store_management/loadStoredata?store_code=${store_code}`).then(response => {
        //  console.log(response);
        //  console.log(response.data);
         setInfo(response.data.store_info);
         const infocont = response.data.store_info[0];
         const aboutcont = response.data.store_about[0];
         setAbout(URL+aboutcont.location);


         setStore(infocont.store_name);
         setStorecode(infocont.store_code);
         setTagline(infocont.store_tagline);
         setLogo(URL + infocont.location);
         setDesc(infocont.store_description);
         setLocation(infocont.store_street+', '+infocont.store_brgy+', '+infocont.store_city+ ', '+infocont.store_province);
         setTime(infocont.store_hour_start+ '-' +infocont.store_hour_end);
         setCall(infocont.store_tel);
         setEmail(infocont.store_email);
         setTwitter(infocont.store_twitter);
         setFacebook(infocont.store_facebook);
         setInstagram(infocont.store_instagram);
        
      }).catch(error => {
       console.log(error);
      });
  
}, [])
const [info, setInfo] = useState([]);

// console.log(info);
const [store , setStore] = useState('Store Name');
const [storecode , setStorecode] = useState('Store Name');
const [tagline , setTagline] = useState('Store Tagline');
const [logo , setLogo] = useState('./home.png');
const [about , setAbout] = useState('./about.jpg');


const [desc , setDesc] = useState('Store Description');

const [location , setLocation] = useState('');
const [time , setTime] = useState('');
const [call , setCall] = useState('');
const [email , setEmail] = useState('');

const [facebook , setFacebook] = useState('');
const [instagram , setInstagram] = useState('');
const [twitter , setTwitter] = useState('');



const [cc, setCc] = useState('copy');


const oncopy = ( () => {
    setCc('copied!');
});




  return (
    <>
            <a href="#" className="scrolltop" id="scroll-top">
        <i className='bx bx-chevron-up scrolltop__icon'></i>
        </a>

        <header className="l-header" id="header">
        <nav className="nav bd-container">
            <a href="#" className="nav__logo">{store}</a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#app" className="nav__link">Download App</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
                    <li className="nav__item"><a href="#menu" className="nav__link">Menu</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link">Contact us</a></li>

                    {/* <li><i className='bx bx-moon change-theme' onClick={changetheme} id="theme-button"></i></li> */}
                </ul>
            </div>

            <div className="nav__toggle" title="Double tap" onClick={showM} id="nav-toggle">
                <i className='bx bx-menu'></i>
            </div>
        </nav>
        </header>

        <main className="l-main">
        <section className="home" id="home">
            <div className="home__container bd-container bd-grid">
                <div className="home__data">
                    <h1 className="home__title">{store}</h1>
                    <h2 className="home__subtitle">{tagline}</h2>
                    <a href="#menu" className="button">View Our Menu</a>
                </div>

                <img src={logo}alt="" className="home__img"></img>
            </div>
        </section>

        <section className="about section bd-container" id="about">
            <div className="about__container  bd-grid">
                <div className="about__data">
                    <span className="section-subtitle about__initial">About us</span>
                    <h2 className="section-title about__initial">{tagline}</h2>
                    <p className="about__description">{desc}</p>
                    <a href="#home" className="button">home</a>
                </div>

                <img src={about} alt="" className="about__img"></img>
            </div>
        </section>

        <section className="services section bd-container" id="services">
            <span className="section-subtitle">Here's</span>
            <h2 className="section-title">Our Store Information</h2>

            <div className="services__container  bd-grid">
                <div className="services__content">
                <img src="./time.png" alt="" className="services__img"></img>
                  
                    <h3 className="services__title">{time}</h3>
                    <p className="services__description"> Our Store Hours</p>
                </div>

                <div className="services__content">
                <img src="./call.png" alt="" className="services__img"></img>
                    
                    <h3 className="services__title">{call}</h3>
                    <p className="services__description">Call us here</p>
                </div>

                <div className="services__content">
                <img src="./map.png" alt="" className="services__img"></img>
                    
                    <h3 className="services__title">{location}</h3>
                    <p className="services__description">Get Directions</p>
                </div>
            </div>
        </section>

        <section className="menu section bd-container" id="menu">
            <span className="section-subtitle">Take a look !</span>
            <h2 className="section-title">Our Menu</h2>
           
                <Menu/>
               
        </section>

        <section className="app section bd-container" id="app">
            <div className="app__container bd-grid">
                <div className="app__data">
                    <span className="section-subtitle app__initial">App</span>
                    <h2 className="section-title app__initial">App is avaible</h2>
                    <p className="app__description">Find our application and download it food orders, see your deliveries on the way and much more.</p>
                    <pre>
                        Step1:
                    </pre>
                 
                    <p>Copy Store Subscription Code</p><code className="appstep2">{storecode}</code>
                    <CopyToClipboard text={storecode}>
                    <button className="cclip round-icon" onClick={oncopy}>{cc}</button>
                    </CopyToClipboard>
                    <pre>
                        Step2:
                    </pre>
                    <p>Click AWS to <a href="https://bananabucketapps.s3-ap-southeast-1.amazonaws.com/Sarappy.apk">Download</a></p>
                    <div className="app__stores">
                        <a href="https://bananabucketapps.s3-ap-southeast-1.amazonaws.com/Sarappy.apk"><img src="./AWS.png" alt="" className="app__store"></img></a>
                        {/* <a href="#"><img src="/img/drive.png" alt="" className="app__store"></img></a> */}
                    </div>
                    <pre>
                        Step3:
                    </pre>
                    <p>Once Installed, paste the subscription code on the app.</p>
                </div>

                <img src="./movil-app.png" alt="" className="app__img"></img>
            </div>
        </section>

        <section className="contact section bd-container" id="contact">
            <div className="contact__container bd-grid">
                <div className="contact__data">
                    <span className="section-subtitle contact__initial">Let's talk</span>
                    <h2 className="section-title contact__initial">Contact us</h2>
                    <p className="contact__description">If you want to reserve a table in our restaurant, contact us and we will attend you quickly.</p>
                </div>

                <div className="contact__button">
                    <a href="#services" className="button">Contact us now</a>
                </div>
            </div>
        </section>
        </main>

        <footer className="footer section bd-container">
        <div className="footer__container bd-grid">
            <div className="footer__content">
                <a href="#" className="footer__logo">{store}</a>
                <span className="footer__description">@fudsApp</span>
                <div>
                    <a href={facebook} className="footer__social"><i className='bx bxl-facebook'></i></a>
                    <a href={instagram} className="footer__social"><i className='bx bxl-instagram'></i></a>
                    <a href={twitter} className="footer__social"><i className='bx bxl-twitter'></i></a>
                </div>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Services</h3>
                <ul>
                    <li><a href="#services" className="footer__link">{time}</a></li>
                    <li><a href="#services" className="footer__link">{call}</a></li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Information</h3>
                <ul>
                    <li><a href="#about" className="footer__link">About Us</a></li>
                    <li><a href="#services" className="footer__link">Contact us</a></li>
                    <li><a href="#" className="footer__link">Privacy policy</a></li>
                    <li><a href="#" className="footer__link">Terms of services</a></li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Adress</h3>
                <ul>
                   
                    <li>{location}</li>
                    <li>Philippines</li>
                    <li>{call}</li>
                    <li>{email}</li>
                </ul>
            </div>
        </div>

        <p className="footer__copy">&#169; 2021 Banana. All right reserved</p>
        </footer>
        </>
  );
}

export default App;
