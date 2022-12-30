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

     <button onClick={()=>{
      let copy = [...title];  {/* [...] 해야 작동함 */}
      copy[0] = 'Suggest to Women Coat'
      {/* ▲array데이터 다룰 땐 원본은 보존하는게 좋다 */}  
      titlechange(copy);
       }}> 
     Change the sentences </button>

     <button onClick ={()=>{
      let copy = [... title];
      copy.sort();
      titlechange(copy);
     }}>Order by ABC</button>
     

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

     <Modal></Modal>

     <NewYear />

    </div>
  );  
}

function Modal(){    //다른 function 만들려면 바깥에다 만들어야
   return(
    <div className="modal">
      <h4>Title</h4>
      <p>Date</p>
      <p>Details</p>
    </div>
   )
}

function NewYear(){
  return(
    <div className="modal">
      <h4>Happy New Year</h4>
      <p>2023</p>
      <p>Januaray, First.</p>
    </div>
  )
}

const Modal1 = () => {
  return(
    <div></div>
  )
}  //이런식으로 해도 문법이 됨 component const는 에러 메시지를 출력해줌. 

export default App;
