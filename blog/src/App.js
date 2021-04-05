/* eslint-disable */


import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';

function App() {
  let posts = '강남 고기 맛집';

  function testFn(){
    return 100;
  }

  let styleTest ={
    color : 'purple', fontSize : '30px'
  }

  /* useState 사용 이유 : 새로고침없이 html에 렌더링됨 웹앱을 만드는 가장 중요한 원칙임 .
  자주바뀌고 중요한 데이터는 변수말고 state로 저장함 */
  let [ boardTitle , changBoardTitle ] = useState(['남자 코트 추천','와이드 팬츠 추천','커버낫 반팔 후기']);
  let [ good, goodChange] = useState(0);
  let [ test, testChange] = useState(1000);

  function changeTitle() {
    var newArray = [...boardTitle];
    newArray[0] = '여자 코트 추천';
    changBoardTitle(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>
      <div className="list">
        <h3>{boardTitle[0]} <span onClick={ () => {goodChange(good + 1)} }>👍</span> {good}  <span onClick={ changeTitle }>↪</span> </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{boardTitle[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{boardTitle[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      {/*HTML을 한 단어로 줄여서 쓸 수 있는 방법 리액트의 Component 문법*/}
      <Modal />
    </div>
  );
}


/* Component 만드는 법
  1. 이름은 대괄호
  2. return() 안에 있는건 태그 하나로 묶어야 함
  ex) <div></div><div></div><div></div> 안되고
  <div><div></div><div></div></div>이런식으로 해야 함

  3.기준 : 반복출현하는 HTML 덩어리들
            자주 변경되는 HTML UI들
            다른 페이지 만들 때도 컴포넌트로 만듦

    단점 : 1.state 쓸 때 복잡해짐
*/
function Modal(){
  return (
    <>
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;
