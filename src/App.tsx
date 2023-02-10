
import CartSideBar from './components/CartSideBar'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className="bg-gray-50 w-full h-full overflow-x-hidden">
      <Navigation/>
      <CartSideBar/>
      <HomePage/>
    </div>
  )
}

export default App
