import React from 'react'
import Hero from '../../contents/Hero'
import LatestCollection from '../../contents/LatestCollection'
import Best_saller from '../../contents/Best_saller'
import Policy from '../../contents/Policy'
import NewsLetter from '../../contents/NewsLetter'
import Collection from './Collection'

const Home = () => {
  return (
    <>
   <Hero/>
   <LatestCollection/>
   <Best_saller/>
   <Policy/>
   <NewsLetter/>
   </>
  )
}

export default Home