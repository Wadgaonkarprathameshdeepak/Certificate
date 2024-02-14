import React from 'react'
import './card.css'

import I1 from './Images/Codeshef.jpeg'
import I2 from './Images/2.png'
import I3 from './Images/3.jpg'
import I4 from './Images/4.png'
import I6 from './Images/6.png'
import I7 from './Images/7.png'
import I8 from './Images/8.png'
import I9 from './Images/9.png'
import I10 from './Images/10.png'
import I11 from './Images/11.png'
import I111 from './Images/1.jpg'



const App = () => {
  return (
    <>
      <h1>My Certificate's</h1>
      <div className="row">
      <div className="card">
     
          <img src={I1}  style={{ width: "100%" }} />
          <div className="container">
          <button>View</button>
      

          </div>
          
        </div>

        <div className="card">
          <img src={I2} alt="Northern Lights" style={{ width: "100%" }} />
          <div className="container">
          <button>View</button>
      

          </div>
        </div>

        <div className="card">
          <img src={I3} alt="Your Image" style={{ width: "100%" }} />
          <div className="container">
            <button>View</button>

          </div>
        </div>

        <div className="card">
          <img src={I4} alt="Northern Lights" style={{ width: "100%" }} />
          <div className="container">
            <button>View</button>

          </div>
        </div>


      </div>

      <div className="row">
        <div className="card">
          <img src={I11} alt="5 Terre" style={{ width: "100%" }} />
          <div className="container">
            <button>View</button>
          </div>
        </div>


        <div className="card">
          <img src={I6} alt="Northern Lights" style={{ width: "100%" }} />
          <div className="container">
            <button>View</button>
          </div>
        </div>

        <div className="card">
          <img src={I7} alt="Your Image" style={{ width: "100%" }} />
          <div className="container">
            <button>View</button>

          </div>
        </div>

        <div className="card">
          <img src={I8} alt="Northern Lights" style={{ width: "100%" }} />
          <div className="container">
            <button>View</button>

          </div>
        </div>


      </div>

      <div className="row">
        <div className="card">
         
          <img src={I9} alt="5 Terre" style={{ width: "100%" }} /> 
          <div className="container">
            <button>View</button>
           
          </div>
        </div>


        <div className="card">
          <img src={I10} alt="Northern Lights" style={{ width: "100%" }} />
          <div className="container">
            <button>View</button>
          </div>
        </div>

        <div className="card">
          <img src={I111} alt="Your Image" style={{ width: "100%" }} />
          <div className="container">
            <button>View</button>

          </div>
        </div>

        <div className="card">
          <img src={I7} alt="Northern Lights" style={{ width: "100%" }} />
          <div className="container">
            <button>View</button>

          </div>
        </div>


      </div>
    </>
  )
}

export default App