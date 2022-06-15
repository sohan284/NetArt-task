import logo from './logo.svg';
import './App.css';
import img1 from './images/logo.png'
import img2 from './images/1.png'
import img3 from './images/2.png'
import img4 from './images/3.png'
import Footer from './images/Footer';

function App() {
  return (
    <div className="App sm:flex flex-col container">
      <div className='logo flex justify-center'>
        <img src={img1} alt="" />
      </div>
      <div className='main flex flex-col lg:flex-row'>
        <div className='bannerImg flex justify-center lg:ml-36'>

          <img src={img2} alt="" />
        </div>

        <div className='titleImg'>
          <h4 className='font-bold p-5'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          <h5 className='font-semibold pl-5'>
            • C.R.I.'s energy efficient products are well recognized by  various Government Institutions, as trustworthy products for <br /> <span className='t'>various projects across the globe to save energy.</span> 
            <br /> • C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the <br /><span className='t'>old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</span>  </h5>
          <img src={img3} alt="" />
          <h5 className='font-semibold pl-5'>

            Government of India has awarded the <span className='AwardTitle'>"National Energy Conservation Award 2018"</span> . Mr. G. Selvaraj, Joint Managing Director <br /> of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable <br /> Minister of State.

          </h5>
        </div>
      </div>
      <div className='tools'> 
        <h5 className='font-semibold p-5'>
INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</h5>
<div className='flex justify-center'>
<img  src={img4} alt="" />
</div>
<h5 className='p-5'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h5>
      </div>
      <div className='lastTitle'>
        <h4 className='cri font-bold pl-5'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
     <h5 className='font-semibold pl-5'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</h5>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
