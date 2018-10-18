import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableHighlight,
    Image
} from "react-native";
import {
    Container,
    Content,
    Icon,
    Button
} from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: "Home",
        drawerIcon: ({ tintColor }) => {
            return (
                <FAIcon name="home" size={25} />
            )
        }
    }

    openLink(iosUrl, webUrl, andUrl) {
        Linking.canOpenURL(iosUrl).then(supported => {
            if (supported) {
                if (Platform.OS == "ios") {
                    return Linking.openURL(iosUrl).catch(() => null);
                } else {
                    return Linking.openURL(andUrl).catch(() => null);
                }
            } else {
                if (webUrl != null) {
                    return Linking.openURL(webUrl).catch(() => null);
                }
            }
        });
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


                        <Text style={styles.headerText}>YMLAEN UNISON Branch</Text>
                    </View>

                    <View style={styles.mainContent}>

                        <View style={styles.button}>
                            <TouchableHighlight underlayColor="#eeeeee" style={styles.buttonCircle} onPress={() =>
                                this.openLink(
                                    "http://ymlaen.org/wp/",
                                    null,
                                    "http://ymlaen.org/wp/"
                                )
                            }>
                                <Text><Icon style={styles.icon} active name="globe" /></Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.button}>
                            <TouchableHighlight underlayColor="#eeeeee" style={styles.buttonCircle} onPress={() =>
                                this.openLink(
                                    "twitter://user?screen_name=ymlaen_branch",
                                    "http://twitter.com/ymlaen_branch",
                                    "twitter://user?screen_name=ymlaen_branch"
                                )
                            }>
                                <Text><Icon style={styles.icon} active name="logo-twitter" /></Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.button}>
                            <TouchableHighlight underlayColor="#eeeeee" style={styles.buttonCircle} onPress={() =>
                                this.openLink(
                                    "fb://page?id=1503452143275430",
                                    "http://www.facebook.com/ymlaenbranch",
                                    "fb://page/1503452143275430"
                                )
                            }>
                                <Text><Icon style={styles.icon} active name="logo-facebook" /></Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.button}>
                            <TouchableHighlight underlayColor="#eeeeee" style={styles.buttonCircle} onPress={() =>
                                this.openLink(
                                    "mailto:info@ymlaen.org",
                                    null,
                                    "mailto:info@ymlaen.org"
                                )
                            }>
                                <Text><Icon style={styles.icon} active name="md-mail" /></Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.button}>
                            <TouchableHighlight underlayColor="#eeeeee" style={styles.buttonCircle} onPress={() =>
                                this.openLink(
                                    "telprompt:02920228933",
                                    null,
                                    "tel:02920228933"
                                )
                            }>
                                <Text><Icon style={styles.icon} active name="ios-call" /></Text>
                            </TouchableHighlight>
                        </View>

                    </View>

                    <View style={styles.footer}>
                        <Image
                            source={require("../images/BranchLogo.jpg")}
                        />

                    </View>

                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight(),
        backgroundColor: "#339933"
    },
    header: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
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
        color: "#ffffff"
    },
    mainContent: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
    },
    button: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
    },
    buttonCircle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "#fff",
        //color: "#000",
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: { width: 1, height: 10, },
        shadowColor: 'black',
        shadowOpacity: 0.5,
    },
    icon: {
        fontSize: 40
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        marginTop: 30
    },
});
