import React, { useState } from 'react';
import { View, Text,   Button,  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';


const BookingScreen = () => {
  const [selectedCar, setSelectedCar] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState('');
  const cars = [
    {label: "Car 1", value: "car1"},
    {label: "Car 2", value: "car2"},
    {label: "Car 3", value: "car3"}
  ]
  const handleBook = () => {
    // Perform booking logic here, such as sending a request to a server
    if (!selectedCar || !startDate || !endDate) {
      setError('Please fill out all fields');
    } else {
      // Successful booking logic here
    }
  };

  return (
    <View>
      <Text>Select a car:</Text>
      <Picker
        selectedValue={selectedCar}
        onValueChange={(itemValue) => setSelectedCar(itemValue)}
        >
        {cars.map(car => <Picker.Item label={car.label} value={car.value} key={car.value}/>)}
      </Picker>
      <Text>Select start date:</Text>
       <DatePicker
        style={{width: 200}}
        date={startDate}
        mode="datetime"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2023-01-01"
        maxDate="2025-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => setEndDate(date)}
      />
       <Text>Select end date:</Text>
       <DatePicker
        style={{width: 200}}
        date={endDate}
        mode="datetime"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2023-01-01"
        maxDate="2025-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => setEndDate(date)}
      />
      {error && <Text>{error}</Text>}
      <Button title="Book" onPress={handleBook} />
    </View>
  );
};

export default BookingScreen;
