import logo from './logo.svg';
// import './App.css';
import '../src/styles/style.css'
import '../src/styles/base.css'
import { Form } from './components/composed-components/Form';
import bg1 from '../src/assets/images/bg2.jpg'

function App() {
  return (
    <div className='iceCream-container'>
      <div className='ice-cream-bg'>
        <img
          src={bg1}
          class="img-fluid rounded-top"
          alt=""
        />

      </div>
      <Form />

    </div>
  );
}

export default App;
