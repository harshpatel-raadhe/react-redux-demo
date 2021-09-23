import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import IceCreamContainer from './Components/IceCreamContainer';
import PizzaContainer from './Components/PizzaContainer';
import SandwichContainer from './Components/SandwichContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <PizzaContainer />
        <SandwichContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
