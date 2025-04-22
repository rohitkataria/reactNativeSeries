import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

type props = {
  onOptionSelect: (value: string) => void;
  options: {label: string; value: string}[];
  triggerText?: string;
};

const CustomPopupMenu: React.FC<props> = ({
  onOptionSelect,
  options,
  triggerText = '⋮',
}) => {
  return (
    <Menu>
      <MenuTrigger>
        <Text style={styles.triggerText}>{triggerText}</Text>
      </MenuTrigger>
      <MenuOptions customStyles={popupStyles}>
        {options.map(option => (
          <MenuOption
            key={option.value}
            onSelect={() => onOptionSelect(option.value)}>
            <Text style={styles.optionText}>{option.label}</Text>
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  triggerText: {
    fontSize: 22,
    color: '#333',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  optionText: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
  },
});

const popupStyles = {
  optionsContainer: {
    borderRadius: 10,
    minWidth: 120,
  },
};

export default CustomPopupMenu;
