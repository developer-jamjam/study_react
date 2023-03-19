export default function personReducer(person, action) {
  // 기존 person객체와 action을 받아온다. 
  switch (action.type) { 
    case 'updated': {
      const { prev, current } = action;
      /*
        const prev = action.prev;
        const current = action.prev; 
        위의 코드를 축약한 것 
        Object destructuring
      */
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case 'deleted': {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };
    }
    default: { //정의 되지 않은 action이 전달 될 경우 Error를 던져준다.
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}
