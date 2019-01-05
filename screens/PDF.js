import React from 'react';
import { Platform, Text, View, Button, Image, StyleSheet, Linking, Dimensions, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {
    Container,
    Content,
    List,
    ListItem
} from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FAIcon from 'react-native-vector-icons/FontAwesome';

import Pdf from 'react-native-pdf';

export default class PDF extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Useful Links",
        drawerIcon: () => {
            return (
                <Icon name="list" size={20} />


            )
        }
    }

    backToList() {

        const { navigate } = this.props.navigation;

        navigate('Useful Links');

    }

    render() {

        const { navigation } = this.props;
        const url = navigation.getParam('url');
        const source = { uri: url, cache: true };

        console.log("URL", typeof (url));

        return (
            <Container style={styles.container}>


                <View>
                    <Pdf
                        source={source}
                        onLoadComplete={(numberOfPages, filePath) => {
                            console.log(`number of pages: ${numberOfPages}`);
                        }}
                        onPageChanged={(page, numberOfPages) => {
                            console.log(`current page: ${page}`);
                        }}
                        onError={(error) => {
                            console.log(error);
                        }}

                        style={styles.pdf}
                        activityIndicator={<ActivityIndicator style={styles.activity} size="large" color="#000000" />} />
                </View>
                <View style={styles.nav}>
                    <Text style={styles.navText} onPress={() => this.backToList()}><FAIcon
                        name="chevron-left"
                        size={16}
                    /></Text>
                </View>


            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
        backgroundColor: "#fff"

    },
    activity: {
        marginTop: 50
    },
    nav: {
        position: "absolute",
        top: 0,
        left: 0,
        paddingLeft: 10,
        paddingRight: 14,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 100,
        marginLeft: 10,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#339933"
    },
    navText: {
        fontSize: 20,
        color: "#fff"
    },
    pdf: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})