import React, { memo } from 'react';
// memo 는 부모가 바뀌어도 자식이 바뀌지 않았다면, 자식 컴포넌트가 리렌더 되지 않게 함

const TryHooks= memo(({tryInfo})=> {

    return (
      <li>
        <p>testttt</p>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  
})
TryHooks.displayName=TryHooks; // memo를 씌우면 개발자 도구에 _c 이러한 형태로 찍히기 때문에, displayName 을 따로 설정해준다.


export default TryHooks;