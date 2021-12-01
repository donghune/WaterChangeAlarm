import React, {useState} from 'react';
import {Button, Dimensions, Image, ImageBackground, StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import ActionButton from "react-native-action-button";
import TopBanner from "./component/TopBanner";
import {addDays, differenceInCalendarDays, format} from "date-fns";
import {range} from "lodash";
import PagerView from "react-native-pager-view";
import backgroundImage from "../assets/download.png"

const screenWidth = Dimensions.get('window').width;
const startDate = Date.parse('2021-11-15')
const baseDate = addDays(startDate, -1)
const cycle = 3
const now = new Date()

import {generateMarkedData} from "./model/CalendarController";

function Banner(isChangeToday) {
    if (isChangeToday) {
        return <TopBanner
            title={`🎊 오늘은 즐거운 환수날! 🎊`}
            subTitle={`환수를 완료 하였다면 아래 버튼을 눌러주세요!`}
        />
    } else {
        return <TopBanner
            title={`집사님의 환수 일정을 표시합니다!`}
            subTitle={"물댕댕이들을 위해서 까먹지 말아주세요!"}
        />
    }
}

function MainScreen({navigation}) {

    const [markedDate, setMarkedDate] = useState(generateMarkedData(now.getFullYear(), now.getMonth(), baseDate, cycle))

    const isChangeToday = markedDate[format(now, 'yyyy-MM-dd')] !== undefined

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {Banner(isChangeToday)}
                <Calendar
                    style={{width: screenWidth}}
                    current={Date()}
                    onDayPress={(day) => {
                        console.log('selected day', day)
                    }}
                    onMonthChange={(date) => {
                        setMarkedDate(generateMarkedData(date.year, date.month - 1, baseDate, cycle))
                    }}
                    markedDates={markedDate}
                    theme={{
                        todayTextColor: '#87ceeb',
                    }}
                    enableSwipeMonths={true}
                />
                <ActionButton
                    onPress={() => {
                        navigation.navigate('FishBowlAdd')
                    }}
                />
                <View style={styles.buttonContainer}>
                    <Button title={"환수 완료"}/>
                    <Button title={"환수 미루기"}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 48
    },
    dayContainer: {
        width: "100%",
        height: 80,
        marginTop: 16,
        marginBottom: 16
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