import React, { useRef, useState } from 'react'

export default function ResponseCheck () {

  const [state, setState] = useState('waiting');
  const [message, setMessage]= useState('클릭해서 시작하세요!')
  const [result, setResult] = useState([])

  let timeout = useRef(null);
  let startTime = useRef();
  let endTime = useRef();

  const onClickScreen=() => {
    if(state==='waiting') {
      setState('ready')
      setMessage('초록색으로 변하면 클릭하세요')
     
      timeout.current =setTimeout(() => {
        setState('now')
        setMessage( '지금 클릭')
        startTime= new Date()
      }, Math.floor(Math.random()*1000)+2000)
    } else if (state==='ready') {
      // 성급한 클릭
      clearTimeout(timeout)
        setState('waiting')
        setMessage('이런 너무 성급하셨군요! 초록색일때 클릭해주세요!')
    } else if(state ==='now') {
      // 반응속도 체크 
      endTime = new Date();
      setState('waiting')
      setMessage('클릭해서 시작하세요!')
      setResult((prevResult)=>[...prevResult, endTime.current - startTime.current])
    }
  }

  const onClickReset=() =>{
    setResult([])
  }

  const renderAverage=()=> {
    return (
      result.length===0
          ? null: <>
          <p>평균시간 : {result.reduce((a,c) => a+c)/result.length} ms</p>
          <button onClick={onClickReset}>리셋!</button>
          </>
    )
  }

    return (
      <>
      <h1>ResponseCheck</h1>
      <div id='screen' className={state} onClick={onClickScreen}>
      <p>{message}</p>
      {renderAverage()}
      </div>
      </>
    )

}
