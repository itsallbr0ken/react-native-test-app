import React from 'react';
import { Platform, Text, View, Button, Image, StyleSheet, Linking, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    Content,
    List,
    ListItem
} from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class Officers extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Branch Officers",
        drawerIcon: () => {
            return (
                <Icon name="users" size={20} />


            )
        }
    }

    openLink(webUrl) {
        console.log("Opening URL");
        return Linking.openURL(webUrl).catch(() => null);

    }
    render() {

        var officers = [
            { name: "Mark Jones", position: "Branch Chair" },
            { name: "Philip Warlow", position: "Branch Secretary" },
            { name: "Denise Thomas", position: "Branch Black Members Officer" },
            { name: "Philip Warlow", position: "Branch Communications Officer" },
            { name: "Dyfrig Roberts", position: "Branch Disabilities Officer" },
            { name: "Bridget Cassidy", position: "Branch Education Co-ordinator" },
            { name: "Pat Jones", position: "Branch Equalities Coordinator" },
            { name: "Ben Gregory", position: "Branch International Officer (Job Share)" },
            { name: "Mariam Kamish", position: "Branch International Officer (Job Share)" },
            { name: "Philip Warlow", position: "Branch Labour Link Officer" },
            { name: "Bridget Cassidy", position: "Branch Lifelong Learning Co-ordinator" },
            { name: "Pat Jones", position: "Branch LGBT Officer" },
            { name: "Ieuan Davies", position: "Branch Membership Officer" },
            { name: "Dyfrig Roberts", position: "Branch Treasurer" },
            { name: "Mia Hollsing", position: "Branch Women’s Officer" },
            { name: "Denise Thomas", position: "Branch Welfare Officer" },
            { name: "Amber O Hara", position: "Branch Young Member's Officer" },
        ];

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


                        <Text style={styles.headerText}>Branch Officers 2018/2019</Text>
                    </View>

                    <List style={styles.list} dataArray={officers} renderRow={(item) =>


                        <ListItem style={styles.officer}>
                            <Text style={styles.officerName}>
                                {item.name}
                            </Text>
                            <Text style={styles.position}>
                                {item.position}
                            </Text>

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
        marginTop: getStatusBarHeight(),
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