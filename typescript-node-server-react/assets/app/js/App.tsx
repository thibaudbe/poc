import * as React from 'react';


interface Props extends React.Props<App> {
  message: string;
}

export default class App extends React.Component<Props, void> {

  render() {
    const { message } = this.props;

    return (
      <h1>Hello { message } !!!</h1>
    )
  }

}
