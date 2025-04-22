import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomPopupMenu from '../components/CustomPoppupMenu';

const popupData = [
  {label: 'Option 1', value: '1'},
  {label: 'Option 2', value: '2'},
  {label: 'Option 3', value: '3'},
];

const HomeScreen = ({}: any) => {
  const handleSelect = (value: string) => {
    Alert.alert('Selected Option', value);
  };

  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <View style={{justifyContent: 'flex-end', alignSelf: 'flex-end'}}>
          <CustomPopupMenu onOptionSelect={handleSelect} options={popupData} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
