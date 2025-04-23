import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomDateTimePicker from '../components/CustomDateTimePicker';

const HomeScreen = ({}: any) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selected, setSelected] = useState<Date | null>(null);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Pick Date & Time" onPress={() => setShowPicker(true)} />
        {selected && <Text>Selected: {selected.toLocaleString()}</Text>}
        <CustomDateTimePicker
          isVisible={showPicker}
          mode="datetime"
          maximumDate={new Date()}
          minimumDate={
            new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          }
          display={Platform.OS == 'android' ? 'spinner' : 'spinner'}
          onCancel={() => setShowPicker(false)}
          onConfirm={date => {
            setSelected(date);
            setShowPicker(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
