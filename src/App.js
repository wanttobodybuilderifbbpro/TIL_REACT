import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'Gangnam Udong Restaurant';
  // document.querySelector('h4').innerHTML = post; 생javascript에서의 방법
  /* 자료 저장하고 싶을 떈 변수 쓰면 됨. 
  post라고 쓸때마다 Gangname ~~ 되는 것. 
  변수는 let, var, const 중에서 아무거나.
  근데 자료를 잠깐 저장할 때는 state라는 문법을 써도 좋음. */
  let [title , b] = useState('Suggest to Men Coat');
  /*△ 자료를 쓰고 싶으면 let 사용. a = state에 보관했던 자료
   b = state변경 도와주는 함수.  */
  // ['남자 코트 추천', '함수'] 남음. 
  let [logo , setLogo] = useState('Reac blog');
  let [title_b , setLogob] = useState('Gangnam Udong Restaurant');;
  let [title_c , setLogoc] = useState('Self-study with Python');;


  return (  //return 소괄호 안에서만 html문법 써야함.
  //병렬로 태그 2개 이상 금지. 
    <div className="App">
     <div className="black-nav">
      <h4>ReactBlog</h4>
     </div>
     <div className="list">
      <h4>{ title }</h4>  
      <p>Published by 21st, December.</p>
     </div>
     <div className="list">
      <h4>{ title_b }</h4>
      <p>Published by 21st, December.</p>
     </div>
     <div className="list">
      <h4>{ title_c }</h4>
      <p>Published by 21st, December.</p>
     </div>
    </div>
  );
}

export default App;
