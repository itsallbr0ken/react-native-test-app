import React from 'react';
import { Text, View, Button, Image, StyleSheet, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    Content,
    List,
    ListItem
} from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class About extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Latest Information",
        drawerIcon: () => {
            return (
                <Icon name="list" size={25} />


            )
        }
    }

    openLink(webUrl) {
        console.log("Opening URL");
        return Linking.openURL(webUrl).catch(() => null);

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


                        <Text style={styles.headerText}>Useful Links</Text>
                    </View>

                    <View style={styles.infoText}>

                        <List>
                            <ListItem onPress={() => this.openLink("http://ymlaen.org/wp/wp-content/uploads/2018/10/Summer-2018-Newsletter.pdf")}>
                                <Text>Summer Newsletter - 2018</Text>
                            </ListItem>
                            <ListItem onPress={() => this.openLink("http://ymlaen.org/wp/wp-content/uploads/2018/10/FAQ1-Branch.pdf")}>
                                <Text>FAQs</Text>
                            </ListItem>
                            <ListItem onPress={() => this.openLink("http://ymlaen.org/wp/wp-content/uploads/2018/10/YMLAEN-Info-Leaflet-2018.pdf")}>
                                <Text>Branch Information Sheet</Text>
                            </ListItem>
                            <ListItem onPress={() => this.openLink("http://join2.unison.org.uk/")}>
                                <Text>Online join link</Text>
                            </ListItem>

                            <ListItem onPress={() => this.openLink("https://benefits.unison.org.uk/")}>
                                <Text>UNISON Benefits</Text>
                            </ListItem>

                            <ListItem onPress={() => this.openLink("https://www.unison.org.uk/get-help/services-support/legal-services/")}>
                                <Text>Legal Services</Text>
                            </ListItem>

                            <ListItem onPress={() => this.openLink("https://www.unison.org.uk/about/what-we-do/fairness-equality/retired-members/about/")}>
                                <Text>Retired Members</Text>
                            </ListItem>

                            <ListItem onPress={() => this.openLink("https://www.unison.org.uk/about/what-we-do/fairness-equality/black-members/")}>
                                <Text>Black Members</Text>
                            </ListItem>

                            <ListItem onPress={() => this.openLink("https://www.unison.org.uk/about/what-we-do/fairness-equality/lgbt/")}>
                                <Text>LGBT/Equality</Text>
                            </ListItem>

                            <ListItem onPress={() => this.openLink("https://www.unison.org.uk/about/what-we-do/fairness-equality/women/")}>
                                <Text>Women Members</Text>
                            </ListItem>

                            <ListItem onPress={() => this.openLink("https://www.unison.org.uk/about/what-we-do/fairness-equality/young-members/")}>
                                <Text>Young Members</Text>
                            </ListItem>
                        </List>
                    </View>
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
    }
})