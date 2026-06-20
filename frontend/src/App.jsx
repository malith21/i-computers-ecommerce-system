import './App.css'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
      <div>

          

          <ProductCard name="Macbook air" price="150,000" image="/path/to/macbook-air.jpg"/>

          <ProductCard name="Dell XPS" price="120,000" image="/path/to/dell-xps.jpg"/>

          <ProductCard name="HP Spectre" price="130,000" image="/path/to/hp-spectre.jpg"/>
      </div>
    </>
  )
}

export default App
