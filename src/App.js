/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { map } from 'async';

function App() {
  let [입력값, 입력값변경] = useState('');
  let [title, ch] = useState(['남자 코트 추천', '남자 신발 추천', '남자 시계 추천']);
  let [따봉,따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let posts = '강남 고기 맛집';
  let [누른제목, 누른제목변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...title];
    newArray[0] = "여자 코트 추천";
    ch( newArray );
  }

  function 타이틀추가(){
    var newArray = [...title];
    newArray.unshift(입력값);
    ch( newArray );
  }


  return (
    <div className="App">


      <div className="black-nav">
        <div> Blog </div>
      </div>
      <button 
        onClick={ 제목바꾸기 } > 버튼 
      </button>

      {
        title.map(function(i, a){
          return (
            <div className="list" key={i}>
            <h3 onClick={ ()=>{ 누른제목변경(a) } }>{ i }　 
            <span onClick={ ()=>{ 따봉변경(따봉+1) } }> 👍</span> { 따봉 } 
            </h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{ 입력값변경(e.target.value) } }/>
        <button onClick={ 타이틀추가 }>저장</button>
      </div>

      {/* {입력값}
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } }/> */}


      <button onClick={ ()=>{ modal변경(!modal) } }>열닫</button>

      {
        modal === true
        ? <Modal title = { title } 누른제목 = { 누른제목 }></Modal>
        : null
      }
  </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
        <h2>{ props.title[props.누른제목] }</h2>
        <p>날짜</p>
        <p>내용</p>
      </div>
  )
}

export default App;
