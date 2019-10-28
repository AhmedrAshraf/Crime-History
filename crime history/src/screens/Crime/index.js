import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, ActivityIndicator } from 'react-native';
import { Appbar } from 'react-native-paper';
import { fetchCrimeReoprt } from "../../config/api";

export default class Crime extends React.Component {
    static navigationOptions = { header: null }

    state = {
        allData: [],
        filteredData: [],
        search: '',
        loader: false,
        iserror: false,
        error: null,
    }
    componentDidMount = async () => {
        try {
            this.setState({ loader: true })
            const fetchedData = await fetchCrimeReoprt()
            this.setState({ allData: fetchedData, filteredData: fetchedData, loader: false })

        } catch (error) {
            this.setState({ loader: false, iserror: true, error: "Somthing went wrong !" })
        }
    }

    search() {
        const originalArray = this.state.allData;
        const filteredData = originalArray.filter((element) => String(element.name).includes(this.state.search))
        this.setState({ filteredData })
    }

    render() {
        const { error, iserror, filteredData, loader } = this.state;
        return (
            <View>
                <Appbar.Header><Appbar.Content style={{ marginLeft: 20 }} title="Crime History" /></Appbar.Header>

                <View style={styles.bar}>
                    <TextInput value={this.state.search} onChangeText={(search) => this.setState({ search })} placeholder='Search by Crime Name' style={styles.search} />
                    <View>
                        <Button title='Search' color='#038cfc' onPress={this.search.bind(this)} />
                    </View>
                </View>

                {loader && <ActivityIndicator style={{ marginTop: 150 }} />}
                {iserror ? <View style={{justifyContent: 'center', alignItems: "center", flex: 1}}><Text style={{color:'red' }}>{error}</Text></View> : null}
               
                <ScrollView>
                    {
                        filteredData.map((item, index) => {
                            return (
                                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 20 }} key={index} >{item.name}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bar: {
        flexDirection: 'row',
        margin: 5,
    },
    search: {
        borderWidth: 1,
        borderColor: '#038cfc',
        elevation: 1,
        padding: 10,
        paddingLeft: 10,
        width: 280,
        height: 35,
    },
});
