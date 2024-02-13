import React from 'react';
import ReactDOM from 'react-dom';

import NumberBaseball from './numberBaseBall/NumberBaseball';

ReactDOM.render(<NumberBaseball />, document.querySelector('#root'));

const onSubmitForm = (e) => {
  e.preventDefault();
  if (value === answer.join('')) {
    setTries((t) => ([
      ...t,
      {
        try: value,
        result: '홈런!',
      }
    ]));
    setResult('홈런!');
    alert('게임을 다시 실행합니다.');
    setValue('');
    setAnswer(getNumbers());
    setTries([]);
    inputEl.current.focus();
  } else {
    const answerArray = value.split('').map((v) => parseInt(v));
    let strike = 0;
    let ball = 0;
    if (tries.length >= 9) {
      setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
      alert('게임을 다시 시작합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
      inputEl.current.focus();
    } else {
      console.log('답은', answer.join(''));
      for (let i = 0; i < 4; i += 1) {
        if (answerArray[i] === answer[i]) {
          console.log('strike', answerArray[i], answer[i]);
          strike += 1;
        } else if (answer.includes(answerArray[i])) {
          console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
          ball += 1;
        }
      }
      setTries(t => ([
        ...t,
        {
          try: value,
          result: `${strike} 스트라이크, ${ball} 볼입니다.`,
        }
      ]));
      setValue('');
      inputEl.current.focus();
    }
  }
};