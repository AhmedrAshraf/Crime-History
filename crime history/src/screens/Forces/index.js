import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, TextInput, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import { fetchForcesData } from "../../config/api";

export default class Forces extends React.Component {
    static navigationOptions = { header: null }

    state = {
        allData: [],
        filteredData: [],
        dataScroller: [],
        search: '',
        loader: false,
        iserror: false,
        error: null,
        index: 0,
    }
    
    componentDidMount = async () => {
        try {
            this.setState({ loader: true })
            const fetchedData = await fetchForcesData()
            this.setState({ allData: fetchedData, filteredData: fetchedData, loader: false }, this.renderData)
        } catch (error) {
            this.setState({ loader: false, iserror: true, error: "Somthing went wrong !" })            
        }
    }

    renderData = async () => {
        const index = this.state.index;
        const response = this.state.allData;
        let arr = []
        if (index < response.length) {
            for (let i = index; i < index + 16; i++) {
                if (response[i]) {
                    arr.push(response[i])
                }
            }

        }
        this.setState(pre => ({ dataScroller: [...pre.dataScroller, ...arr], index: pre.index + 16 }))
    }


    search() {
        const originalArray = this.state.allData;
        const seatchedWork = this.state.search;
        const filteredData = originalArray.filter((element) => String(element.name).includes(seatchedWork))
        this.setState({ dataScroller: filteredData })
    }

    Scroll(event) {
        let contentSize = event.nativeEvent.contentSize.height;
        let layoutMeasurement = event.nativeEvent.layoutMeasurement.height;
        let isOnButtom = contentSize - layoutMeasurement;
        let lessButtom = isOnButtom - 50;
        let defaultVal = event.nativeEvent.contentOffset.y;
        if (lessButtom <= defaultVal) {
            this.renderData()
        }
    }

    render() {
        const { error, iserror, dataScroller, loader } = this.state;
        return (
            <View>
                <Appbar.Header><Appbar.Content style={{ marginLeft: 20 }} title="Forces" /></Appbar.Header>

                <View style={styles.bar}>
                    <TextInput value={this.state.search} onChangeText={(search) => this.setState({ search })} placeholder='Search by Forces Name' style={styles.search} />
                    <View><Button title='Search' color='#038cfc' onPress={this.search.bind(this)} /></View>
                </View>

               
                {loader && <ActivityIndicator style={{ marginTop: 150 }} />}
                {iserror ? <View style={{justifyContent: 'center', alignItems: "center", flex: 1}}><Text style={{color:'red' }}>{error}</Text></View> : null}

                <ScrollView onScroll={this.Scroll.bind(this)}  >
                    {
                        dataScroller.map((item, index) => {
                            return (
                                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 20 }} key={index}>{item.name}</Text>
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
