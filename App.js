import React from 'react';
import { StyleSheet, View, Button, TextInput, Alert} from 'react-native';

export default class App extends React.Component {
  state = {
    text: '',
  }

  onChangeTextHandler = (text) => {
    console.warn(text)
  }

  render() {
    return (
      <View>
        <View style={styles.InputContainer}>
          <TextInput onChangeText={this.onChangeTextHandler} placeholder="scrivi todo" style={styles.Input}/>
          <Button title="Conferma" onPress={() => {}}/>
        </View  >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputContainer:{
    padding:50,
    marginTop:50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Input:{
    width: '68%',
    paddingVertical: 5,
    paddingLeft: 3,
    borderWidth: 1,
    borderRadius: 5,
  }
});