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
                    🐟 반려 물댕댕이들이 살고 있는 어항이름이 무엇인가요?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Text>
                    🐟 환수 주기는 어떻게 되나요?
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
        flex: 1,
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