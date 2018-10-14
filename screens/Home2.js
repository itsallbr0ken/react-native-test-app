import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Linking,
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
                <FAIcon name="home" size={30} />
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
    }
});
