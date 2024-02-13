import React, { Component } from 'react'

export default class RenderTest extends Component {
  state= {
    counter: 0
  }

  // 버튼 클릭시 다시 렌더링 되지 않도록 설정
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(this.state.counter!==nextState.counter) {
      return true;
    }
    return false;
  }

  // 리액트의 PureComponent는 위의 shouldComponentUpdate 를 내부에서 알아서 구현해놓은 컴포넌트,
  // PureComponent를 사용해도 버튼이 재렌더링 되지 않는다.
  // 그러나 객체나 배열같은 복잡한 참조 관계가 생기면
  // 컴포넌트가 변경되었는지, 안되었는지 알지 못하게된다.

  onClick=() =>{
    this.setState({ state: {}});
  }
  render() {
    return (
      <div>
        <p>렌더링 테스트</p>
        <button onClick={this.onClick}>Click</button>
      
      </div>
    )
  }
}
