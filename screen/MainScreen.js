import React from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import ActionButton from "react-native-action-button";
import BeforeDay from "./component/BeforeDay";
import ToDay from "./component/ToDay";
import AfterDay from "./component/AfterDay";
import {addDays, differenceInDays, format} from "date-fns";
import {range} from "lodash";
import {now} from "lodash/date";
import DefaultDay from "./component/DefaultDay";

const screenWidth = Dimensions.get('window').width;

const latestDate = Date.parse('2021-11-23')
const cycle = 3

function generateMarkedData() {
    const result = new Map();

    range(100)
        .map(value => addDays(latestDate, value * cycle))
        .forEach(value =>
            result[format(value, 'yyyy-MM-dd')] = {
                selected: true, selectedColor: '#87ceeb'
            }
        )

    return result
}

const nowDay = new Date()
const nextDay = addDays(new Date(), -2)

function ChangeDDay() {
    // const difference = differenceInDays(nextDay, nowDay)
    const difference = nowDay.getDay() / 2
    let dday = <DefaultDay/>
    if (difference < 0) {
        dday = <BeforeDay leftDay={difference}/>
    } else if (difference === 0) {
        dday = <ToDay/>
    } else if (difference > 0) {
        dday = <AfterDay overDay={difference}/>
    }
    return (<DefaultDay/>)
}

function MainScreen({navigation}) {
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
                    markedDates={generateMarkedData()}

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
        alignItems: "center",
        justifyContent: "center",
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