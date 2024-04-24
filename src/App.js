import logo from './logo.svg';
import './App.css';
import FirstCompnent from './FirstCompnent';
import { Car, Bike } from './XComponent';
import Name from './Component/Name';
import List from './Component/List';

function App() {  // functional component -> export default
  return (
    <>
       <FirstCompnent />
       <Car />
       <Bike />
       <Name ne="Giri" />
       <List ne="Prasad"/>
    </>
  );
}

export default App;
