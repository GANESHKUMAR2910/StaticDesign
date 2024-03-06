import React from 'react'
import './Sidebar.css'
import profile from './assets/profile.jpg'
const Sidebar = () => {
  return (
    <div className='container'>
     <div className='Heading-1'>
      <div className='Profile'>
        <div className='name'>MK</div>
        </div>
      <div className='welcome1'>welcome back,</div>
      <div className='Mk'>Maryland Winkles</div>
      <div className="mail">mar.land@yahoo.com</div>
      </div>
     <div className='Heading-2'>
        <h2>Currency exchange</h2>
     </div>
     <div className='button-1'>
      <button>USD</button><button>EUR</button>
     </div>
     <div className='Container-2'>
      <div className='amount'>Amount</div>
      <div className='container-90'>
      <span className='currency'>$8,250</span><span className='value'>1USD=0.8505927 EUR</span>
      </div>
      <div className='To'>To</div>
      <div className='container-5'>
      <span className='currency'>€7,017</span><span className='value'>1USD=0.8505927 EUR</span>
      </div>
      </div>
      <div className='Container-3'>
      <div>
      <button className='convert'>Convert</button>
      </div>
      <div className='date1'>
          <div className='update'>LastUpdated.  </div> 
          August 7,2021 at 8.17pm</div>   
      </div>
      
    </div>
  )
}

export default Sidebar
