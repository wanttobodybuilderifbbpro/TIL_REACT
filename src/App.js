import logo from './logo.svg';
import './App.css';

function App() {

  let post = 'Gangnam Udong Restaurant';
  // document.querySelector('h4').innerHTML = post; 생javascript에서의 방법

  return (
    <div className="App">
     <div className="black-nav">
      <h4 style={{color : 'red', fontSize : '16px'}}>This is blog</h4>
     </div>
     <h4>{ post }</h4> 
    </div>
  );
}

export default App;
