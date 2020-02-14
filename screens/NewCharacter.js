// Source:
// https://github.com/EQuimper/react-screencast/tree/master/multi-step-with-compounds
// https://www.youtube.com/watch?v=8Bb9ypk4LwE

// Complete lib:
// https://github.com/jcmcneal/react-step-wizard/blob/master/src/index.js
// or Redux Form ?
// https://redux-form.com/6.6.2/

// Form Resources:
// https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
// https://stackoverflow.com/questions/51269672/how-to-build-multi-step-form

import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Wizard from '../components/Wizard';
import Input from '../components/WizardInput';

const forms = [
  {
    placeholder: 'Select a Name Choombata!',
    name: 'name',
  },
  {
    placeholder: 'Choose a Class...',
    name: 'class',
  }
];


export default function NewCharacter() {
    return (
      <View style={styles.root}>
        <Wizard
          initialValues={{
            name: '',
            class: ''
          }}
        >
          {forms.map(el => (
            <Wizard.Step key={el.name}>
              {({ onChangeValue, values }) => (
                <View style={styles.container}>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder={el.placeholder}
                    value={values[el.name]}
                    name={el.name}
                  />
                </View>
              )}
            </Wizard.Step>
          ))}
        </Wizard>
      </View>
    );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});