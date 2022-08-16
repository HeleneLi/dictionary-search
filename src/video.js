import React from 'react'
import videoBg from '../src/Ocean.mp4'

const Main = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default Main
