import React from 'react';
import { View } from 'react-native';
import { Appbar, Card, Subheading, Paragraph } from 'react-native-paper';

export default class Home extends React.Component {

    static navigationOptions = { header: null }

    render() {
        return (
            <View>
                <Appbar.Header>
                    <Appbar.Content style={{ marginLeft: 20 }} title="Crime History App" />
                </Appbar.Header>

                <Card>
                    <Card.Cover source={{ uri: 'https://i.ytimg.com/vi/pxsFCkMUEFk/maxresdefault.jpg' }} />
                </Card>

                <Subheading style={{ margin: 10, fontWeight: "bold" }}>Crime History App</Subheading>
                
                <Paragraph style={{ margin: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>

            </View>
        );
    }
}