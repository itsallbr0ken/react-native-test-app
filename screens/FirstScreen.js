import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Linking,
    ImageBackground,
    Image
} from "react-native";
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Icon,
    Right,
    List,
    ListItem,
    Body,
    Left,
    Button
} from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default class FirstScreen extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: "Home",
        drawerIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                    name="home"
                    size={24}
                    style={{ color: tintColor }}>

                </MaterialIcons>
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

                        <Button onPress={() => this.props.navigation.openDrawer()} style={styles.menuIconContainer}>
                            <Icon style={styles.menuIcon} active name="list" />
                        </Button>


                        <Text style={styles.headerText}>YMLAEN UNISON Branch</Text>
                    </View>
                    <Text style={[styles.infoText, styles.infoTop]}>




                        YMLAEN UNISON branch provides support to all members employed in the Community & Voluntary Sector in Wales. The branch office in Cardiff assists members from all corners of Wales. If you have a workplace issue that you need advice about please contact the branch. Phone lines are open Monday to Friday 10am until 4pm. Outside these times please leave us a message.
            </Text>

                    <View style={styles.buttonContainer}>
                        <Button
                            iconLeft
                            light
                            block
                            style={styles.button}
                            onPress={() =>
                                this.openLink(
                                    "telprompt:02920228933",
                                    null,
                                    "tel:02920228933"
                                )
                            }
                        >
                            <Icon style={styles.icon} active name="ios-call" />
                            <Text style={styles.buttonLabel}>Call Us</Text>
                        </Button>

                        <Button
                            iconLeft
                            light
                            block
                            style={styles.button}
                            onPress={() =>
                                this.openLink(
                                    "mailto:info@ymlaen.org",
                                    null,
                                    "mailto:info@ymlaen.org"
                                )
                            }
                        >
                            <Icon style={styles.icon} active name="md-mail" />
                            <Text style={styles.buttonLabel}>Email Us</Text>
                        </Button>

                        <Button
                            iconLeft
                            light
                            block
                            style={styles.button}
                            onPress={() =>
                                this.openLink(
                                    "fb://page?id=1503452143275430",
                                    "http://www.facebook.com/ymlaenbranch",
                                    "fb://page/1503452143275430"
                                )
                            }
                        >
                            <Icon style={styles.icon} active name="logo-facebook" />
                            <Text style={styles.buttonLabel}>Find us on Facebook</Text>
                        </Button>

                        <Button
                            iconLeft
                            light
                            block
                            style={styles.button}
                            onPress={() =>
                                this.openLink(
                                    "twitter://user?screen_name=ymlaen_branch",
                                    "http://twitter.com/ymlaen_branch",
                                    "twitter://user?screen_name=ymlaen_branch"
                                )
                            }
                        >
                            <Icon style={styles.icon} active name="logo-twitter" />
                            <Text style={styles.buttonLabel}>Find us on Twitter</Text>
                        </Button>

                        <Button
                            iconLeft
                            light
                            block
                            style={styles.button}
                            onPress={() =>
                                this.openLink(
                                    "http://ymlaen.org/wp/",
                                    null,
                                    "http://ymlaen.org/wp/"
                                )
                            }
                        >
                            <Icon style={styles.icon} active name="globe" />
                            <Text style={styles.buttonLabel}>Visit us Online</Text>
                        </Button>


                    </View>

                    <Text style={styles.infoText}>
                        Transport House, 1 Cathedral Road {"\n"}Cardiff CF11 9SB
            </Text>
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
        flex: 1,
        width: "10%",
        color: "#000000"
    },
    headerText: {
        color: "#ffffff",
        textAlign: "center",
        width: "80%",
        fontSize: 22
    },
    menuIconContainer: {
        color: "#000000",
        fontSize: 24,
        backgroundColor: "#ffffff",
        padding: 0,
        borderRadius: 5
    },
    menuIcon: {
        color: "#000000"
    },
    contentContainer: {
        padding: 20
    },
    infoText: {
        color: "#ffffff",
        backgroundColor: "#339933",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: "center",
        fontSize: 12
    },
    button: {
        backgroundColor: "#330066",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        opacity: 1
        // shadowColor: "#aaaaaa",
        // shadowOffset: { width: 0, height: 0 },
        // shadowRadius: 5,
        // shadowOpacity: 1
    },
    icon: {
        color: "#fff",
        flex: 1,
        textAlign: "center"
    },
    buttonLabel: {
        color: "#fff",
        flex: 4,
        textAlign: "left"
    },
    buttonContainer: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#ffffff"
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    infoTop: {
        fontSize: 14
    }
});
