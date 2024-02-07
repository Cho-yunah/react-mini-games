const React = require('react')
const {Component} = React;

class WordRelay extends Component {
  state = {
    title: '끝말잇기 게임',
    word: '유나',
    value: '',
    result: ''
  };

  onSubmitForm=(e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length-1]===this.state.value[0]) {
      this.setState({
        result: '딩동댕!',
        value: '',
        word: this.state.value
      })
      this.input.focus();
    } else {
      this.setState({
        result: '땡',
        value : '',
        word: this.state.value
      })
      this.input.focus();
    }
  }

  onChangeInput=(e) => {
    this.setState({value: e.currentTarget.value})
  }

  onRefInput=(c) =>{
    this.input=c;
  }

  render () {
    return <>
      <h1>{this.state.title}</h1>
      <div>{this.state.word}</div>
      <form onSubmit={this.onSubmitForm}>
        <input value={this.state.value} ref={this.onRefInput} onChange={this.onChangeInput} />
        <button>입력!</button>
      </form>
      <div>{this.state.result}</div>
    </>
  }
}

module.exports = WordRelay;