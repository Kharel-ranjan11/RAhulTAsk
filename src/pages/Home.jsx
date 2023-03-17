import React from 'react'
import '../styles/Home.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import s1 from '../images/second_c.png'
import s2 from '../images/third_c.png'
import s3 from '../images/second_c.png'
import t1 from '../images/trust1.png'
import t2 from '../images/trust2.png'
import t3 from '../images/trust3.png'
import simple from '../images/phone.png'
import testimonial1 from '../images/testimonial1.png'
import testimonial2 from '../images/testimonial2.png'
import testimonial3 from '../images/testimonial3.png'
import esewa from '../images/esewa.png'
import imepay from '../images/imepay.png'
import khalti from '../images/khalti.png'
import NMB from '../images/NMB.png'
import visa from '../images/visa.png'
import last from '../images/last_cover.png'
import logo from '../images/logo.png'

const Home = () => {
  return (
    <>
    <div className="herosection pb-5 mb-4">
    <div className="tophero">
    <div className="container mt-5">
      <div className="row pt-5 mb-3">
     <div className="col-lg-3  ">
      <img src="src\images\top1.png" alt="top1" />
     </div>
     <div className="col-lg-3  ">
     <img src="src\images\top2.png" alt="top2" />
     </div>
     <div className="col-lg-3 ">
     <img src="src\images\top3.png" alt="top3" />
     </div>
     <div className="col-lg-3 ">
     <img src="src\images\top4.png" alt="top4" />
     </div>
    </div>
    </div>
    </div>
    <div className="middlehero">
    <div className="container">
      <div className="row d-flex">
      <div className="col-lg-2 col-sm-2 ">
      <label  className='lbl ms-2'>Searching For</label><br/>
      <select id="Searching_For" className='w-100 '>
      <option value="one">Myself</option>
      <option value="two">two</option>
      <option value="three">three</option>
    </select>
     </div>

     <div className="col-lg-2 col-sm-2">
      <label  className='lbl ms-2'>I'm looking for a</label><br/>
      <select id="Searching_For"className='w-100 ' >
      <option value="one">Women</option>
      <option value="two">two</option>
      <option value="three">three</option>
    </select>
     </div>  

     <div className="col-lg-3 col-sm-2 mt-4  d-inline-flex ">
     <label className='lbl ms-2 position-relative  '>Age</label><br/>
  <div className="age w-50">
      <select id="Searching_For">
      <option value="one">23</option>
      <option value="two">two</option>
      <option value="three">three</option>
    </select>
  </div>
    <div className="w-50">
    <label className='lbl me-2'>to</label>
      <select id="Searching_For" >
      <option value="one">20</option>
      <option value="two">two</option>
      <option value="three">three</option>
    </select>
    </div>
     </div>
     <div className="col-lg-3 col-sm-3 ">
      <label className='lbl ms-2 '>Caste</label><br/>
      <select id="Searching_For" className='w-100'>
      <option value="one">Hindu</option>
      <option value="two">two</option>
      <option value="three">three</option>
    </select>
     </div>
     <div className="col-lg-2 col-sm-2 text-end">
      <button className='btn'>Let's Begin</button>
     </div>

    </div>
    </div>
    
    </div>
    <div className="buttomhero ">
    <div className="container pt-3 ">
      <div className="row mt-5 ">
     <div className="col-lg-3 col-sm-3">
      <img src="src\images\top_d1.png" alt="td1" />
     </div>
     <div className="col-lg-3 col-sm-3">
     <img src="src\images\top_d2.png" alt="td2" />
     </div>
     <div className="col-lg-3 col-sm-3 mt-3">
     <img src="src\images\top_d3.png" alt="td3" />
     </div>
     <div className="col-lg-3 col-sm-3">
     <img src="src\images\top_d4.png" alt="td4" />
     </div>
     </div>
    </div>
    </div>
    </div>
    
    <div className="first">
    <div className="container-fluid px-0">
      <div className="row">
      <OwlCarousel className='owl-theme ' items={1} autoplay autoplaySpeed={0.3} dots loop>
    <div class='item'>
     <img src={s1} alt="cover1" />
      </div>
    <div class='item'>
    <img src={s2} alt="cover2" />
     </div>
    <div class='item'>
    <img src={s3} alt="cover3" />
    </div>
    <div class='item'>
    <img src={s2} alt="cover4" />
    </div>
    </OwlCarousel>   
      <div className="first_cover">
       <div className="first_caption ms-5 ps-4 mt-5 pt-4">
        <h3>people who got match</h3>
        <h2>We helped them find a partner</h2>
        <h4>Online</h4>
       </div>
      </div>
        </div>
        </div>  
    </div>

    <div className="second d-flex align-items-center justify-content-center "><p>Browser Partner Profiles By</p></div>

    <div className="third mt-5">
    <div className="container">
    <div className="row">
    <div className="nav nav-pills d-inline-flex justify-content-around "  role="tablist" aria-orientation="vertical">
    <p className="nav-link active" id="v-pills-Religion-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Religion"  aria-controls="v-pills-Religion">Religion</p>
    <p className="nav-link" id="v-pills-Caste-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Caste"  aria-controls="v-pills-Caste" >Caste</p>
    <p className="nav-link" id="v-pills-City-tab" data-bs-toggle="pill" data-bs-target="#v-pills-City"  aria-controls="v-pills-City" >City</p>
    <p className="nav-link" id="v-pills-Status-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Status"  aria-controls="v-pills-Status" >Status</p>
    <p className="nav-link" id="v-pills-Country-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Country"  aria-controls="v-pills-Country" >Country</p>
    <p className="nav-link" id="v-pills-Occupation-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Occupation"  aria-controls="v-pills-Occupation" >Occupation</p>

    </div>
    <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-Religion" role="tabpanel" aria-labelledby="v-pills-Religion-tab" tabindex="0">
      <div className="religion d-flex flex-wrap justify-content-center row-gap-4 mt-4">
         <button className='px-5 py-2 me-5 rounded-pill'>Hindu</button>
         <button className='px-5 py-2 me-5 rounded-pill'>Muslim</button>
         <button className='px-5 py-2 me-5 rounded-pill'>Christian</button>
         <button className='px-5 py-2 me-5  rounded-pill'>Buddhist</button>
         <button className='px-5 py-2 me-5 rounded-pill'>Sikh</button>
         <button className='px-5 py-2 me-5 rounded-pill'>Kirat</button>
         <button className='px-5 py-2 me-5 rounded-pill'>Prakriti</button>
         <button className='px-5 py-2 me-5 rounded-pill'>Bon</button>
         <button className='px-5 py-2 me-5 rounded-pill'>Jainism</button>
         <button className='px-5 py-2 me-5 rounded-pill'>Bahai</button>
         <button className='px-5 py-2 me-5 rounded-pill'>View More</button>
      </div>
    </div>
    <div class="tab-pane fade" id="v-pills-Caste" role="tabpanel" aria-labelledby="v-pills-Caste-tab" tabindex="0">Caste</div>
    <div class="tab-pane fade" id="v-pills-City" role="tabpanel" aria-labelledby="v-pills-City-tab" tabindex="0">City</div>
    <div class="tab-pane fade" id="v-pills-Status" role="tabpanel" aria-labelledby="v-pills-Status-tab" tabindex="0">Status</div>
    <div class="tab-pane fade" id="v-pills-Country" role="tabpanel" aria-labelledby="v-pills-Country-tab" tabindex="0">Country</div>
    <div class="tab-pane fade" id="v-pills-Occupation" role="tabpanel" aria-labelledby="v-pills-Occupation-tab" tabindex="0">Occupation</div>
    </div>
    </div>
       <p className='trust'>Why Trust Us ?</p>
      </div>
    </div>

    <div className="fourth">
         <div className="container py-1 px-3 border rounded-5 ">    
          <div className="row bg-light border rounded-5 text-center pb-4">
            <p className='fs-4 mt-5 ms-3 text-start'>Finding <span className='text-danger'>Partners</span> For You</p>
            <div className="col-lg-4 col-sm-12">
              <img className='mt-5' src={t1} alt="trust1" />
              <h4 className='mt-4'>100% Secured Profiles</h4>
              <p className=''>We give you guaranteed information <br/>security.</p>
            </div>
            <div className="col-lg-4 col-sm-12">
            <img className='mt-5' src={t2} alt="trust1" />
              <h4 className='mt-4'>Manually Tested Accounts</h4>
              <p className=''>Each accounts are varified by our <br/>specialized team members.</p>
            </div>
            <div className="col-lg-4 col-sm-12">
            <img className='mt-5' src={t3} alt="trust1" />
              <h4 className='mt-4'>Privacy & Security Control</h4>
              <p className=''>Highly measured means of<br/>security provided.</p>
            </div>
          </div>  
          <p className='text-center mt-5 fs-4 fw-bold simple_guide'>Simple Guide</p>

          <div className="row pb-5">
          <div className="col-lg-8 col-sm-12 mt-4">
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How does OurLifePartner operates?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>The vast amount of verified registration gives each profile <br /> more chances to find perfect match for them </p> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Creation of true and geniune self profile
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Selection of right membership package
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
       Search of your match in organized manner
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Chances of finding geniune & perfect match
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, 
      </div>
    </div>
  </div>
</div>
          </div>
          <div className="col-lg-4 col-sm-12 text-center">
           <img className='simple' src={simple} alt="fourth_img" />
          </div>

          </div>
      </div>
    </div>

    <div className="fifth position-relative mt-5">
    <img src={s2} alt="cover2" className='w-100 ' />
    <div className="sec_cover position-absolute top-0  left-0 h-100 w-100">
       <div className="sec_caption text-center ">
        <h2>Life Partners, What we need</h2>
        <h3>"A great marriage is not when the 'perfect couple' comes together. <br/> It is when an imperfect couple learns to enjoy their differences"</h3>
        <h4>-Dave Meurer</h4>
       </div>
      </div>
    </div>

    <div className=" sixth  second d-flex align-items-center justify-content-center py-5 mt-5 fs-3"><p className='mt-3'>Membership Plan</p></div>

    <div className="seventh pt-3">
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4 col-sm-12 px-4">
            <div className="card py-5 d-flex flex-column  align-items-center">
              <h2 className=''>Free Plan</h2>
              <ul className='  '>
                <li className='py-1'><i className="bi bi-check-circle"></i> Browse Profiles</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Shortlist & Send Intrest</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Message and chat with</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> unlimited users</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Get up to 3x more matches  daily</li>
                <li className='py-1'><i class="bi bi-check-circle"></i> Unlock access to advance  search</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> View contact details</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Make unlimited voice and video calls</li>
              </ul>
              <button type='button' className='btn '>Start Now</button>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 ">
          <div className="card Standard py-5 d-flex flex-column  align-items-center">
              <h2 className=''>Standard Plan</h2>
              <ul className='  '>
                <li className='py-1'><i className="bi bi-check-circle"></i> Browse Profiles</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Shortlist & Send Intrest</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Message and chat with</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> unlimited users</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Get up to 3x more matches  daily</li>
                <li className='py-1'><i class="bi bi-check-circle"></i> Unlock access to advance  search</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> View contact details</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Make unlimited voice and video calls</li>
              </ul>
              <button type='button' className='btn '>Start Now</button>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 px-4">
          <div className="card  py-5 d-flex flex-column  align-items-center">
              <h2 className=''>Premium Plan</h2>
              <ul className='  '>
                <li className='py-1'><i className="bi bi-check-circle"></i> Browse Profiles</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Shortlist & Send Intrest</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Message and chat with</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> unlimited users</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Get up to 3x more matches  daily</li>
                <li className='py-1'><i class="bi bi-check-circle"></i> Unlock access to advance  search</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> View contact details</li>
                <li className='py-1'><i className="bi bi-check-circle"></i> Make unlimited voice and video calls</li>
              </ul>
              <button type='button' className='btn '>Start Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="eight ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-4">        
            <h3 className="txt">
              Testimonials
            </h3>
            </div>
            <div className="col-lg-8 col-sm-8">
            <div className="upcarousel">
            <OwlCarousel className='owl-theme ' items={3} autoplay autoplaySpeed={0.3} dots loop margin={50}>
             <div class='item'>
                 <img src={testimonial1} alt="slide1" className=''/>
              </div>
            <div class='item'>
            <img src={testimonial2} alt="slide1" />
               </div>
             <div class='item'>
             <img src={testimonial3} alt="slide1" />
               </div>
              <div class='item'>
              <img src={testimonial1} alt="slide1" />
                </div>
    </OwlCarousel>   
    </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nine py-5 mt-5">
        <div className="container">
          <p className='text-center'>Our Associated Partners</p>
          <div className="row">
        <div className="payment pt-3 d-flex justify-content-between">
        <img src={esewa} alt="esewa" />
           <img src={imepay} alt="imepay" />
           <img src={khalti} alt="khalti" />
           <img src={NMB} alt="NMB" />
           <img src={visa} alt="Visa" />
        </div>
          </div>
        </div>
      </div>
      <div className="ten mt-5">
        <div className="container text-center">
       <img src={last} alt="last_cover" className='' />
          <div className="last_caption ">
             <p >MAKE | <span>MEET</span> | MARRY</p> <br />
             <img src={logo} alt="logo" />
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Home