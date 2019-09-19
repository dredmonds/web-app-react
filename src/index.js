import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';

class Root extends React.Component {
  render() {
    return <h1 className="header">React boilerplate starter</h1>;
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
