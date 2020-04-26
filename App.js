/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Children extends Component {
  state = {hasError: false};

  handleClick = () => {
    this.setState({hasError: true});
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Boundary');
    }

    return (
      <Button
        title="Botão"
        onPress={() => {
          this.handleClick();
        }}
      />
    );
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#b5a08b',
            color: '#fff',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 20}}>
            Ops: Desculpe, tente novamente mais tarde...
          </Text>
        </View>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Children />
    </ErrorBoundary>
  );
}

export default App;
