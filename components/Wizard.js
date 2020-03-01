import React, { PureComponent, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { charCreate, useActions, charEdit } from "../store";
import Step from "./WizardStep";

function Wizard(props) {
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState({ ...props.initialValues });

  const actions = useActions({ charCreate }, [charCreate]);

  const showMoreApp = () => {
    props.navigation.navigate('Main');
  };

  const _nextStep = () => {
    if (index !== props.children.length - 1) {
      setIndex(index + 1);
    }
  };

  const _prevStep = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const _onChangeValue = (name, value) => {
    setValues({
      ...values,
      [name]: value
    });
  };

  const _onSubmit = () => {
    showMoreApp();
    actions.charCreate(values);
  };

  return (
    <View style={{ flex: 1 }}>
      {React.Children.map(props.children, (el, i) => {
        if (i === index) {
          return React.cloneElement(el, {
            currentIndex: index,
            nextStep: _nextStep,
            prevStep: _prevStep,
            isLast: index === props.children.length - 1,
            onChangeValue: _onChangeValue,
            values: values,
            onSubmit: _onSubmit
          });
        }
        return null;
      })}
    </View>
  );
}

Object.defineProperty(Wizard, 'Step', {
  value: Step
})

export default Wizard;
