import './App.css'
import { Componente1, Componente2 } from './components/RxJS'
import Gentleman from './pages/Gentleman/Gentleman'
import { Provider } from 'react-redux'
import GentlemanStore from './redux/store'
import ComponentRedux1 from './components/Redux/ComponentRedux1'
import ComponentRedux2 from './pages/Gentleman/components/ComponentRedux2'
function App() {

  return (
    <div className='App'>
      <Provider store={GentlemanStore}>

        <h2>RxJS</h2>
        <Componente1 />
        <Componente2 />

        <h2>Context</h2>
        <Gentleman />
        <ComponentRedux2/>

        <h2>Redux</h2>
        <ComponentRedux1/>
      </Provider>
    </div>
  )
}

export default App
