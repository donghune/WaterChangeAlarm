import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import logoImage from '../assets/logo.png';

function SplashScreen({navigation}) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main')
        }, 1000)
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image
                    source={logoImage}
                    style={styles.logo}
                />
                <Text style={styles.title}>환수</Text>
                <Text style={styles.subtitle}>알리미</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    }
});


export default SplashScreen