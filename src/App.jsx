import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import List from './components/List'
import Car from './components/Car'
import Details  from './components/Details'
import About from './components/About'
import Review from './components/Review'
import Footer from './components/footer'


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Car />
      <List />
      <Details />
      {/* <Signup /> */}
      < About />
      <Review />
      <Footer />
      
    </div>
  )
}

export default App
