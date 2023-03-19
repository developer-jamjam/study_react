import React, { useReducer, useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {
  //const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer,initialPerson);
  /*
    useReducer 
    : 객체를 새롭게 만들어나갈 로직을 작성한 함수와 초기값을 전달
      상태에 접근할 수 있는 변수와 reducer를 호출할 수 있는 dispatch 
      setPerson을 사용했던 것 처럼 dispatch를 사용해서 원하는 action을 명령할 수 있다.
  */

  const handleNameUpdate = () =>  {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({type: "updated", prev, current});
  }

  const handleMentorAdd = () => {
    const name = prompt(`추가하려는 멘토의 이름은 무엇인가요?`);
    const title = prompt(`멘토의 직급은 ?`);
    dispatch({type: "added", name, title});
  }

  const handleMentorRemove = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({type:"deleted",name});
  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleNameUpdate} >
        멘토의 이름을 바꾸기
      </button>
      <button onClick={handleMentorAdd} >
        멘토추가하기
      </button>
      <button onClick={handleMentorRemove} >
        멘토삭제하기
      </button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
}