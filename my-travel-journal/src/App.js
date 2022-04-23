import NavBar from './components/NavBar.js';
import Card from './components/Card.js'
import Data from './Data.js';

function App() {
  const travels = Data.map((item) => {
    return <Card 
            key={item.id}
            item={item}
          />
  })
  
  return (
    <div className="App">
      <NavBar />
      <section className='card--list'>
        {travels}
      </section>
    </div>
  );
}

export default App;
