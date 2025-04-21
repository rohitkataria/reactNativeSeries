import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchableDropdown from './src/components/SearchableDropdown';
import {COMMON_AREA_UNITS_DROPDOWN} from './src/constants/CommonAreaDropdownData';

const App = () => {
  const [commonAreaUnitValue, setCommonAreaUnitValue] = useState('');
  console.log('commonAreaUnitValue >>', commonAreaUnitValue);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.dropdownText}>Searchable Dropdown</Text>
        <SearchableDropdown
          data={COMMON_AREA_UNITS_DROPDOWN}
          value={commonAreaUnitValue}
          labelText="Common Area"
          isDisabled={false}
          placeHolderText="Select Common Area"
          onChange={selectedItem => {
            setCommonAreaUnitValue(selectedItem.value);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'white'},
  container:{flex: 1, padding: 20, backgroundColor: 'white'},
  dropdownText: {
    fontSize: 24,
    alignSelf: 'center',
    margin: 20,
  },
});

export default App;
