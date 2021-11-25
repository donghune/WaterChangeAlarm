import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function BeforeDay({leftDay}) {
    return (
        <View style={styles.container}>
            <View style={styles.dayContainer}>
                <Text style={styles.title}>
                    다음 환수까지 {leftDay * -1}일 남았습니다!
                </Text>
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