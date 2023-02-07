import React from 'react'
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/Featured Products/FeaturedProducts';
import Slider from '../../components/Slider/Slider'
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <Categories/>
      <FeaturedProducts type="Trending"/>
      <Contact/>
    </div>
  )
}

export default Home