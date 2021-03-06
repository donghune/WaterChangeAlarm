import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import PagerView from 'react-native-pager-view';


const FishbowlAddScreen = () => {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState("");

    return (
        <PagerView style={styles.pagerView} initialPage={0}>
            <View key="1">
                <Text>
                    π λ°λ € λ¬Όλλμ΄λ€μ΄ μ΄κ³  μλ μ΄ν­μ΄λ¦μ΄ λ¬΄μμΈκ°μ?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Text>
                    π νμ μ£ΌκΈ°λ μ΄λ»κ² λλμ?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                />
            </View>
        </PagerView>
    )
}

const styles = StyleSheet.create({
    pagerView: {
        width:"100%",
        margin: 12,
        alignContent: 'center',
        justifyContent: 'center',
    },
    input: {
        marginTop: 20,
        marginBottom: 20,
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
});

export default FishbowlAddScreen