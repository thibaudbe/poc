import React from 'react';


export default React.createClass({

  render() {
    const { message } = this.props;

    return (
      <h1>Hello { message }</h1>
    )
  }

});
