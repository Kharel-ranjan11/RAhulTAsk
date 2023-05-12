import React from 'react'
import Eight from '../components/Eight'
import Fifth from '../components/Fifth'
import First from '../components/First'
import Fourth from '../components/Fourth'
import Herosection from '../components/Herosection'
import Layout from '../components/Layout'
import Nine from '../components/Nine'
import Second from '../components/Second'
import Sixth from '../components/Sixth'
import Third from '../components/Third'

const Home = () => {
  return (
    <Layout>
      <Herosection />
      <First text='Make | Meet | Marry' />
      <Second />
      <First text='Browser Partner Profiles By' />
      <Third />
      <Fourth />
      <Fifth />
      <First text='Membership Plan' />
      <Sixth />
      {/* <Seventh /> */}
      <Eight />
      <Nine />
    </Layout>
  )
}

export default Home
