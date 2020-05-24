import React, { Component } from "react";
import { View, Text } from 'react-native';

const ListenFavoliteProductScreen = ({ route, navigation }) => {

  const { name } = route.params;
  const { title } = route.params;

  return (
    <View style={{ alignItems: 'center'}}>
        <Text>
        {name}の詳細画面
        </Text>
        <Text>
          {title}
        </Text>
      </View>
  );
}

export default ListenFavoliteProductScreen