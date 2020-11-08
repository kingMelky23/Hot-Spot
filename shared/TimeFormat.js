import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
 
const TimeFormat = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
 
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
 
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
 
  const handleConfirm = (time) => {
    console.warn("A time has been picked: ", time);
    hideTimePicker();
  };
 
  return (
    <View>
      <Button title="Show time Picker" onPress={showTimePicker} />
      <DateTimePickerModal
        isDarkModeEnabled={false}
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};
 
export default TimeFormat;