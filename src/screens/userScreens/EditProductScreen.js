import React, { Component } from "react";
import { View, Text } from 'react-native';

const EditProductScreen = ({ route, navigation }) => {

  const { name } = route.params;

  return (
    <View style={{ alignItems: 'center'}}>
        <Text>
          {name}の編集画面をここにつくる
        </Text>
      </View>
  );
}

export default EditProductScreen