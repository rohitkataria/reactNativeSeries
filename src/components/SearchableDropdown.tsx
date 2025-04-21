import {StyleSheet, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

type Props = {
  data: any;
  value: any;
  onChange?: (selectedItem: any) => void;
  placeHolderText: string;
  isDisabled?: boolean;
  labelText?: string;
};

const SearchableDropdown = ({
  data,
  value,
  onChange,
  placeHolderText,
  isDisabled = false,
  labelText,
}: Props) => {
  return (
    <>
      {labelText && <Text style={styles.labelText}>{labelText}</Text>}
      <Dropdown
        disable={isDisabled}
        style={[
          styles.dropdown,
          {
            backgroundColor: isDisabled ? 'gainsboro' : 'white',
          },
        ]}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={[
          styles.placeholderStyle,
          {
            backgroundColor: isDisabled ? 'gainsboro' : 'white',
            color: isDisabled ? 'black' : '#CCCCCC',
          },
        ]}
        activeColor={'#F2F2F2'}
        itemContainerStyle={styles.itemContainerStyle}
        containerStyle={styles.containerStyle}
        itemTextStyle={styles.itemTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data || []}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeHolderText}
        searchPlaceholder={'Search'}
        value={value}
        onChange={selectedItem => onChange?.(selectedItem)}
        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
    tintColor: 'black',
  },
  inputSearchStyle: {
    height: 40,
    borderRadius: 8,
    color: 'black',
  },
  itemTextStyle: {
    color: 'black',
    fontSize: 14,
  },
  itemContainerStyle: {
    backgroundColor: 'white',
  },
  containerStyle: {
    backgroundColor: 'white',
    borderColor: '#D4D4D4',
    marginTop: 4,
  },
  dropdown: {
    height: 46,
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 10,
    borderColor: '#d4d4d4',
  },
  placeholderStyle: {
    fontSize: 14,
    borderColor: '#D4D4D4',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: 'black',
    backgroundColor: 'white',
  },
  labelText: {
    fontSize: 14,
    marginBottom: 5,
    color: 'black',
  },
});

export default SearchableDropdown;
