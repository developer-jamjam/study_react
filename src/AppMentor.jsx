import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '사공사',
    title: '웹 프론트엔드 주니어 개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자',
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson(person=>({...person, mentor:{...person.mentor, name: name}}));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson(person=>({...person, mentor:{...person.mentor, title}}))
          // key와 value의 이름이 똑같다면 축약할 수 있다. 
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
