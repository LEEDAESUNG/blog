/* eslink-isDisabled */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {

  let [글제목, 제목변경] = useState(['남자코드 추천', '강남 우동맛집', '파이썬독학']);
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          ReactBlog
        </h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        제목변경(copy);
      }} > 가나다순 정렬</button>

      {/* <button onClick={() => {
        //let copy = 글제목; //array 또는 object 는 포인터개념, copy == 글제목
        let copy = [...글제목];
        copy[0] = '여자코드 추천';
        console.log(글제목);
        console.log(copy);
        제목변경(copy);
      }} > 글수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 좋아요변경(좋아요+1) }}>💖</span> { 좋아요 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ 
          if(modal === true) setModal(false) 
          else if(modal === false) setModal(true)
           }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {/* <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}
      
      {
        글제목.map(function(a,i){ //글제목 배열수 만큼 반복
          return (
          <div className="list" key={i} >
              <h4 onClick={ ()=>{
                    if(modal === true) setModal(false)
                    else if(modal === false) setModal(true)
                  }
                }>
                {글제목[i]}<span onClick={() => { 좋아요변경(좋아요+1) }}>💖</span> { 좋아요 } 
              </h4>
              <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      {
        modal === true ? <Modal></Modal> : null
      }

      

    </div>
  );
}

//컴포넌트
//예시1:const Modal = ()=>{}
//예시2:Modal = '1234';
function Modal() {
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
