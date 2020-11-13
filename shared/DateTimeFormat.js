/**
 * format date output
 */

import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useField, useFormikContext } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimeFormat = ({ ...props }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getUTCMonth();
  const day = today.getDate() + 1;

  const [selectedDate, setSelectedDate] = useState("12/12/2020");
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(
    false
  );

  const showDateTimePicker = () => {
    setDateTimePickerVisibility(true);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisibility(false);
  };

  const handleConfirm = (dateTime) => {
    // console.log("A time has been picked: ", dateTime);

    setFieldValue(field.name, dateTime);
    setSelectedDate(dateTime);
    hideDateTimePicker();
  };

  return (
    <View style={{ alignItems: "flex-start" }}>
      <Button
        title={props.title}
        onPress={showDateTimePicker}
        color="#FF5555"
      />
      <Text style={{ fontSize: 20, left: 10, marginBottom: 5 }}>
        {selectedDate.toString()}
      </Text>
      <DateTimePickerModal
        minimumDate={new Date(year, month, day)}
        isDarkModeEnabled={true}
        textColor={"white"}
        isVisible={isDateTimePickerVisible}
        timeZoneOffsetInMinutes={0}
        mode="datetime"
        minuteInterval={15}
        onConfirm={handleConfirm}
        onCancel={hideDateTimePicker}
      />
    </View>
  );
};

export default DateTimeFormat;
