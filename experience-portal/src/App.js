import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './Data';

function App() {
  const cards = Data.map((item) => {
    return <Card 
    img={item.coverImg}
    title={item.title}
    price={item.price}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    country={item.country}
  />
  })

  return (
    <div className="App">
      <NavBar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
