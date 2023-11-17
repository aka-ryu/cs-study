import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Routes from '../../navigation/Routes';
import {RootStackParamList} from '../../interface/navigation';
import style from './style';

interface IHeader {
  goBack: boolean;
}

const Header = ({goBack}: IHeader) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={style.headerWrap}>
      <View style={style.rightLayer}>
        {goBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>뒤로가기</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={style.middleLayer}>
        <Text style={style.headerTitle}>CS Study</Text>
      </View>
      <View style={style.rightLayer}></View>
    </View>
  );
};

export default Header;
