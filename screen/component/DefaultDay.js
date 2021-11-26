import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function BeforeDay() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                환수하는 날을 표기한 달력이에요!
            </Text>
            <Text style={styles.subtitle}>
                까먹지 말고 환수해주세요!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#fff',
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

export default BeforeDay