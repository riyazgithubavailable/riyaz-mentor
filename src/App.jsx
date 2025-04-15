
import './App.css'
import Extension from './components/Extension'
import Navbaar from './components/navbaar'
import useColor from './customHook/useColor'

function App() {
  const {bgColor} = useColor()

  return (
    < div className={` h-full lg:h-screen  overflow-y-hidden ${bgColor.primary}`}>
   <Navbaar />
   <Extension />
    </div>
  )
}

export default App
