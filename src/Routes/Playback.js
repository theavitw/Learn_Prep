import React from 'react'
import { Link } from 'react-router-dom'

function Playback() {
  const Playback = {
    1: {
      title: "Recording Interview 1",
      Date: "21-12-23",
      Time: "19:18",
      length: "21:22",
    },
    2: {
      title: "Recording Interview 2",
      Date: "21-12-23",
      Time: "19:18",
      length: "21:22",

    },
    3: {
      title: "Recording Interview 3",
      Date: "21-12-23",
      Time: "19:18",
      length: "21:22",
    },
    4: {
      title: "Recording Interview 4",
      Date: "21-12-23",
      Time: "19:18",
      length: "21:22",
    },
    5: {
      title: "Recording Interview 5",
      Date: "21-12-23",
      Time: "19:18",
      length: "21:22",
    },
    6: {
      title: "Recording Interview 6",
      Date: "21-12-23",
      Time: "19:18",
      length: "21:22",
    },


  }

  return (
    <div className="date_main me_1">
      <p>Our advanced recording system captures your interview sessions, allowing you to review and analyze your performance</p>
      {
        Object.keys(Playback).map((key) => (
          
          <div className="container_play">
            
            <div className='play'>
             <Link>
              <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Polygon 1" d="M32 19L0.499998 37.1865L0.5 0.813466L32 19Z" fill="white" />
              </svg>
              <p className='play_length'>
                {Playback[key].length}
              </p>
              </Link>
            </div>
            <div className = "play_text">
              <Link className='text-black text-decoration-none'>
              <div>
                <h3 className="play_title">{Playback[key].title}</h3>
              </div>
              <div className='play_date'>
                <span>
                  {Playback[key].Date}
                </span>
                {" "}
                <span>
                  {Playback[key].Time}
                </span>
              </div>
              </Link>
            </div>
            <Link className='trash'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Trash">
                  <path id="Vector" d="M27 7H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_2" d="M13 13V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_3" d="M19 13V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_4" d="M25 7V26C25 26.2652 24.8946 26.5196 24.7071 26.7071C24.5196 26.8946 24.2652 27 24 27H8C7.73478 27 7.48043 26.8946 7.29289 26.7071C7.10536 26.5196 7 26.2652 7 26V7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_5" d="M21 7V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H13C12.4696 3 11.9609 3.21071 11.5858 3.58579C11.2107 3.96086 11 4.46957 11 5V7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>

            </Link>
          </div>

        ))
      }
    </div>
  )
}

export default Playback