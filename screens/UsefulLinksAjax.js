import React from 'react';
import { Platform, Text, View, Button, Image, StyleSheet, Linking, Dimensions, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    Content,
    List,
    ListItem
} from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FAIcon from 'react-native-vector-icons/FontAwesome';
import HTMLView from 'react-native-htmlview';

const regex = /(<([^>]+)>)/ig;

export default class Links extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Useful Links",
        drawerIcon: () => {
            return (
                <Icon name="list" size={20} />


            )
        }
    }

    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        return fetch("https://itsallbroken.team-hamster.co.uk/wp-json/wp/v2/posts?categories=4&page=1&per_page=30&orderby=title&order=asc")
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson
                    },
                    function () { }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    openLink(webUrl) {
        return Linking.openURL(webUrl).catch(() => null);
    }



    removeTags(str) {
        return str.replace(regex, '');
    }

    render() {

        console.log(this.state.dataSource);

        var officers = [
            { title: "Summer Newsletter - 2018", url: "http://ymlaen.org/wp/wp-content/uploads/2018/10/Summer-2018-Newsletter.pdf" },
            { title: "FAQs", url: "http://ymlaen.org/wp/wp-content/uploads/2018/10/FAQ1-Branch.pdf" },
            { title: "Branch Information Sheet", url: "http://ymlaen.org/wp/wp-content/uploads/2018/10/YMLAEN-Info-Leaflet-2018.pdf" },
            { title: "Join us", url: "http://join2.unison.org.uk/" },
            { title: "UNISON Benefits", url: "https://benefits.unison.org.uk/" },
            { title: "Legal Services", url: "https://www.unison.org.uk/get-help/services-support/legal-services/" },
            { title: "Retired Members", url: "https://www.unison.org.uk/about/what-we-do/fairness-equality/retired-members/about/" },
            { title: "Black Members", url: "https://www.unison.org.uk/about/what-we-do/fairness-equality/black-members/" },
            { title: "LGBT/Equality", url: "https://www.unison.org.uk/about/what-we-do/fairness-equality/lgbt/" },
            { title: "Women Members", url: "https://www.unison.org.uk/about/what-we-do/fairness-equality/women/" },
            { title: "Young Members", url: "https://www.unison.org.uk/about/what-we-do/fairness-equality/young-members/" },
            { title: "Welfare", url: "https://www.unison.org.uk/get-help/services-support/there-for-you/" },
            { title: "Disabled Members", url: "https://www.unison.org.uk/about/what-we-do/fairness-equality/disabled-members/" }

        ];

        if (this.state.isLoading) {
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

                        <View style={{ flex: 1, padding: 15 }}>
                            <ActivityIndicator size="large" color="#ffffff" />
                        </View>
                    </Content>
                </Container>
            );
        }

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

                    <List style={styles.list} dataArray={this.state.dataSource} renderRow={(item) =>


                        <ListItem style={styles.officer} onPress={() => this.openLink(this.removeTags(item.excerpt.rendered).trim())}>
                            {console.log("Title:", item.title.rendered, "URL:", this.removeTags(item.excerpt.rendered))}
                            <HTMLView
                                value={item.title.rendered}
                                stylesheet={styles.officerName}
                            />

                        </ListItem>
                    }>
                    </List>

                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
        backgroundColor: "#339933",
    },
    headerContainer: {
        backgroundColor: "#330066",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 20,
        textAlign: "left",
        alignItems: "center",
        justifyContent: "flex-start",
        fontWeight: "bold",
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
    officer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    position: {
        fontSize: 12

    },
    officerName: {
        fontWeight: "bold"
    },
    list: {
        backgroundColor: "#fff",
        height: Platform.OS === 'ios' ? Dimensions.get('window').height - 110 : "auto",
    }
})