import {useExposure} from "./Hooks/UseDisclosure";
import {Overlay} from "./Components/Overlay";


function App() {

const {isOpen , onClose , onToggle } = useExposure();

  return (
    <div className={'w-full h-screen flex justify-center items-center'}>
      <h1 onClick={onClose} className={isOpen ?'text-red-500': 'text-white'}>Hello</h1>
      <button className={'z-50'} onClick={onToggle }>Clik Me</button>
      <Overlay isOpen={isOpen}/>
    </div>
  )
}

export default App
