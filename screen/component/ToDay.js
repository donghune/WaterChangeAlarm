import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function BeforeDay() {
    return (
        <View style={styles.container}>
            <View style={styles.dayContainer}>
                <Text style={styles.title}>
                    🎊 오늘은 즐거운 환수날! 🎊
                </Text>
                <Text style={styles.subtitle}>
                    환수를 완료 하였다면 아래 버튼을 눌러주세요!
                </Text>
                <Button title={"환수완료"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
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