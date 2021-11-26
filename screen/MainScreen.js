import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import ActionButton from "react-native-action-button";
import BeforeDay from "./component/BeforeDay";
import ToDay from "./component/ToDay";
import AfterDay from "./component/AfterDay";
import {addDays, differenceInCalendarDays, differenceInDays, format} from "date-fns";
import {range} from "lodash";
import DefaultDay from "./component/DefaultDay";
import {month} from "react-native-calendars/src/dateutils";
import PagerView from "react-native-pager-view";

const screenWidth = Dimensions.get('window').width;

const startDate = Date.parse('2021-11-23')
const cycle = 3
const now = new Date()

function generateMarkedData(year, month) {
    const result = new Map();
    const lastDay = new Date(year, month, 0).getDate()

    range(lastDay)
        .map(value => new Date(year, month, value + 1))
        .filter(value => (Math.abs(differenceInCalendarDays(startDate, value)) % cycle) === 0)
        .filter(value => differenceInCalendarDays(startDate, value) <= 0)
        .forEach(value => {
                result[format(value, 'yyyy-MM-dd')] = {
                    selected: true, selectedColor: '#87ceeb'
                }
            }
        )

    return result
}

function ChangeDDay() {
    const difference = differenceInCalendarDays(now, now)
    return (<PagerView style={styles.dayContainer}>
        <DefaultDay/>
        <BeforeDay leftDay={difference}/>
        <ToDay/>
        <AfterDay overDay={difference}/>
    </PagerView>)
}

function MainScreen({navigation}) {

    const [markedDate, setMarkedDate] = useState(generateMarkedData(now.getFullYear(), now.getMonth()))

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <ChangeDDay/>
                <Calendar
                    style={{width: screenWidth}}
                    current={Date()}
                    onDayPress={(day) => {
                        console.log('selected day', day)
                    }}
                    onMonthChange={(date) => {
                        setMarkedDate(generateMarkedData(date.year, date.month - 1))
                    }}
                    markedDates={markedDate}
                    theme={{
                        todayTextColor: '#000000',
                    }}
                />
                <ActionButton
                    onPress={() => {
                        navigation.navigate('FishBowlAdd')
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    dayContainer: {
        width: "100%",
        height: 80,
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 10
    },
});

export default MainScreen