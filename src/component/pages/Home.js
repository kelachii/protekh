import React from 'react'
import Hero from '../hero'
import Learner from '../Learner'
import Course from '../Course'


const Home = () => {
  return (
    <div>
      <Hero />
       {/* add your slider */}
      <Course />
      <Learner />

    </div>
  )
}

export default Home