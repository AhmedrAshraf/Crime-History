import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class Dashboard extends React.Component {

    static navigationOptions = { header: null }

    render() {
        return (
            <View>
                <Appbar.Header><Appbar.Content style={{ marginLeft: 20 }} title="Dashboard"/></Appbar.Header>

            <Text style={{ fontSize: 25, marginTop: 200, color: 'silver', textAlign: "center" }} >Nothing to Show Righ Now</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
