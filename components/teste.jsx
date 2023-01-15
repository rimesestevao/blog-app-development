import React from 'react'

const LandingPage = () => {
  return (
    <div className='wrapper'>
<div className='text-center'>
<h1 className='glitch'>MEES</h1>
        <p className='subHeader'>Eita! A little MESS</p>
</div>
        <a
              href={`https://patreon.com/`}
              className="mt-12 mx-3 bg-none hover:bg-white hover:text-black border border-white text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              See all our posts!
            </a>
        <div className='sideContainer'>
          <h3 className='sideText'>自</h3>
          <h3 className='sideText'>分</h3>
          <h3 className='sideText'>を</h3>
          <h3 className='sideText'>知</h3>
          <h3 className='sideText'>る</h3>
          <h3 className='sideText'>に</h3>
          <h3 className='sideText'>は</h3>
          <h3 className='sideText'>時</h3>
          <h3 className='sideText'>間</h3>
          <h3 className='sideText'>が</h3>
          <h3 className='sideText'>か</h3>
          <h3 className='sideText'>か</h3>
          <h3 className='sideText'>る</h3>
        </div>
    </div>
  )
}

export default LandingPage