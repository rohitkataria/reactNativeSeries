import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type PickerMode = 'date' | 'time' | 'datetime';
type IOSDisplay = 'default' | 'compact' | 'inline' | 'spinner';
type AndroidDisplay = 'spinner' | 'default' | 'clock' | 'calendar';

interface CustomDateTimePickerProps {
  isVisible: boolean;
  mode?: PickerMode;
  display?: IOSDisplay | AndroidDisplay;
  date?: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  is24Hour?: boolean;
  locale?: string;
}

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
  isVisible,
  mode = 'date',
  display,
  date = new Date(),
  minimumDate,
  maximumDate,
  onConfirm,
  onCancel,
  is24Hour = true,
  locale = 'en-IN',
}) => {
  return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode={mode}
      display={display}
      date={date}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      onConfirm={onConfirm}
      onCancel={onCancel}
      is24Hour={is24Hour}
      locale={locale}
    />
  );
};

export default CustomDateTimePicker;
