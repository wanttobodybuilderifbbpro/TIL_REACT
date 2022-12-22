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
  let [title , titlechange] = useState(['Suggest to Men Coat', 'Gangnam Udong Restaurant', 'Self-study with Python']);
  /*△ 자료를 쓰고 싶으면 let 사용. a = state에 보관했던 자료
   b = state변경 도와주는 함수.  */
  // ['남자 코트 추천', '함수'] 남음. 
  let [logo , setLogo] = useState('Reac blog');
  let [Liked, modliked] = useState(0);  //왼쪽은 실제 state, 오른쪽은 함수
  // ▲ 좋아요 버튼 누르면 좋아요 숫자 올라가게 만드는 식. 
  

  return (  //return 소괄호 안에서만 html문법 써야함.
  //병렬로 태그 2개 이상 금지. 
    <div className="App">
     <div className="black-nav">
      <h4>ReactBlog</h4>
     </div>

     <button onClick={
         ()=>{titlechange(['Suggest to Women Coat', 'Gangnam Udong Restaurant', 'Self-study with Python']);
       }}> 
     Change the sentences </button>

     <div className="list">
      <h4>{ title[0] } 
      <span onClick={ ()=>{modliked(Liked + 1)} }>👍</span> {Liked} </h4>  {/*자주 바뀌는 거니까 state 쓰는 상황*/}
      <p>Published by 21st, December.</p>
     </div>
     <div className="list">
      <h4>{ title[1] }</h4>
      <p>Published by 21st, December.</p>
     </div>
     <div className="list">
      <h4>{ title[2] }</h4>
      <p>Published by 21st, December.</p>
     </div>
    </div>
  );
}

export default App;
