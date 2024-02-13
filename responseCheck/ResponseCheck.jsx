import React, { Component } from 'react'

export default class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요!',
    result: []
  }

  timeout;
  startTime;
  endTime;

  onClickScreen=() => {
    const {state, message, result}= this.state;
    if(state==='waiting') {
      this.setState({
        state: 'ready', message: '초록색으로 변하면 클릭하세요'
      })
      this.timeout =setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭'
        })
        this.startTime = new Date();
      }, Math.floor(Math.random()*1000)+2000)
    } else if (state==='ready') {
      // 성급한 클릭
      clearTimeout(this.timeout)
      this.setState({
        state: 'waiting',
        message: '이런 너무 성급하셨군요! 초록색일때 클릭해주세요!'
      })
    } else if(state ==='now') {
      // 반응속도 체크 
      this.endTime = new Date();
      this.setState((prevState)=>{
        return {
          state: 'waiting', message: '클릭해서 시작하세요',
          result : [...prevState.result, this.endTime- this.startTime]
        }
      })
    }
  }

  onClickReset=() =>{
    this.setState({
      result: []
    })
  }

  renderAverage=()=> {
    const {result } = this.state;
    return (
      result.length===0
          ? null: <>
          <p>평균시간 : {result.reduce((a,c) => a+c)/result.length} ms</p>
          <button onClick={this.onClickReset}>리셋!</button>
          </>
    )
  }

  render() {
    return (
      <>
      <h1>ResponseCheck</h1>
      <div id='screen' className={this.state.state} onClick={this.onClickScreen}>
      <p>{this.state.message}</p>
      {this.renderAverage()   }
      </div>
      </>
    )
  }
}
