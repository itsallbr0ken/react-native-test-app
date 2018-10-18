import React from 'react';
import { Text, View, Button, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    Content,
    Card,
    CardItem,
    Body
} from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class Location extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Location",
        drawerIcon: () => {
            return (
                <Icon name="map-marker" size={25} />
            )
        }
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.headerContainer}>
                        <View style={styles.menuIconContainer}>
                            <Text style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}>
                                <FAIcon
                                    name="bars"
                                    size={24}
                                />
                            </Text>
                        </View>


                        <Text style={styles.headerText}>Find Us</Text>
                    </View>

                    <View style={styles.locationMessage}>
                        <Text style={styles.locationMessageText}>
                            Need to visit the branch? Checkout the map below for our location.
                        </Text>
                    </View>

                    <View>
                        <MapView
                            initialRegion={{
                                latitude: 51.481762,
                                longitude: -3.189862,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}

                            style={styles.map}
                        >
                            <Marker
                                coordinate={{
                                    latitude: 51.481749,
                                    longitude: -3.189758,
                                }}
                                title="Ymlaen/Forward UNISON Branch"
                                description="1 Cathedral Road, Cardiff CF11 9SB"
                            />
                        </MapView>
                    </View>

                    <Card style={styles.card}>
                        <CardItem header bordered>
                            <Text><Icon name="location-arrow" />   Find us at...</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.boldText}>
                                    Ymlaen/Forward UNISON Branch,
                                </Text>
                                <Text>
                                    1 Cathedral Road,
                                </Text>
                                <Text>
                                    Cardiff
                                </Text>
                                <Text>
                                    CF11 9SB
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>


                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight(),
        backgroundColor: "#339933",
    },
    headerContainer: {
        backgroundColor: "#330066",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 25,
        textAlign: "left",
        alignItems: "center",
        justifyContent: "flex-start",
        fontWeight: "bold",
        flex: 1,
        flexDirection: 'row'
    },
    menuButton: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: "#ffffff"
    },
    headerText: {
        color: "#ffffff",
        textAlign: "center",
        width: "80%",
        fontSize: 22
    },
    menuIconContainer: {
        color: "#ffffff",
        backgroundColor: "#330066",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        marginLeft: -5
    },

    menuIcon: {
        color: "#000000"
    },
    contentContainer: {
        padding: 20
    },
    infoText: {
        backgroundColor: "#ffffff",
        textAlign: "center",
        fontSize: 12,
        padding: 5
    },
    infoTextBlock: {
        backgroundColor: "#ffffff",
        paddingBottom: 10,
        color: "#000000",
        marginBottom: 5,
        padding: 5
    },
    map: {
        height: 300,
        width: "100%"
    },
    locationMessage: {
        padding: 10,
        color: "#fff"
    },
    locationMessageText: {
        color: "#fff"
    },
    card: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    boldText: {
        fontWeight: "bold"
    }
})