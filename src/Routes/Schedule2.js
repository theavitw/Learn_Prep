import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { date } from './Schedule'
function Schedule2() {
  const HandleCancle = () => {
    let a = window.confirm("Are you sure you want to cancel this interview?");
    if (a) {
     alert("Your interview has been cancelled");
     window.location.href = "/Schedule";
    }
    



   

  }
  return (

    <div className="date_main sd_1">
      <h1>
        Your interview session has been booked with LeanPrep!{" "}
      </h1>
      <div className="detailes">
        <div >
          <div >
            <div >
              <h2
                style={{ textDecoration: "underline" }}
              >
                Details
              </h2>
              <h3 >
                Interview code - 0000006578
                <br />
                Slot - {date.time}
                <br />
                Date - {date.day} {" "}
                {
                  date.month
                }, {
                  date.year
                } <br />
              </h3>
            </div>



          </div>
          <div className="flex flex-col justify-between h-[208px] shrink-0">
            <div className="overflow-hidden bg-[#000aff] flex flex-col mr-[108px] h-8 shrink-0 items-start pl-[148px] py-1 rounded-lg">
              <div
                className="text-center text-xl font-['Product_Sans'] text-white"
                id="GoToPreparation"
              >
                <br />
                {" "}
              </div>
            </div>
            <div className='mb-3'>
              <NavLink to="/Preparetion" className="text-white text-decoration-none w-100">
                <button className='sd_2 sd_3'>
                    Go To Preparation
                  </button>
              </NavLink>
              <button className='sd_2' 
              onClick={HandleCancle}
              >
                Cancle Interview
              </button>

            </div>
            <h3 className='sd_5'>
              Remember, the goal of this mock online interview session is to improve
              your interview skills. Approach it with a positive mindset and take
              advantage of the opportunity to enhance your performance. Good luck!
            </h3>
          </div>
        </div>


        <div className="detailes box">
          <div className="p-4  " >
            <span className='text-decoration-underline'>Instructions</span>
             <br />
            <br />
            <ul>
              <li className="contents">

                Test your equipment: Ensure that your computer, webcam, microphone,
                and internet connection are working properly. Check for any updates or
                software requirements beforehand.
                <br />
              </li>

              <br />

              <li className="contents">
                Choose an appropriate location: Find a quiet, well-lit space where you
                won't be interrupted during the interview. Ensure that the background
                is professional and free from distractions.
                <br />
              </li>

              <br />

              <li className="contents">
                Dress professionally: Wear appropriate attire as if you were attending
                an in-person interview. Dressing professionally will help you get into
                the right mindset.
              </li>
            </ul>
          </div>


        </div>

      </div>
    </div>

  )
}

export default Schedule2