import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function BeforeDay({title, subTitle, buttons}) {

    let titleComp = <View/>

    if (title !== "") {
        titleComp = <Text style={styles.title}>
            {title}
        </Text>
    }

    let subTitleComp = <View/>

    if (subTitle !== "") {
        subTitleComp = <Text style={styles.subtitle}>
            {subTitle}
        </Text>
    }

    return (
        <View style={styles.container}>
            {titleComp}
            {subTitleComp}
            {buttons}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
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
        fontSize: 13,
        marginTop: 10
    },
});

export default BeforeDay