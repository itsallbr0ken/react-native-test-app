import React from 'react';
import { Text, View, Button, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    Content
} from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class About extends React.Component {
    static navigationOptions = {
        tabBarLabel: "About Us",
        drawerIcon: () => {
            return (
                <Icon name="info" size={30} />


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


                    <Text style={styles.headerText}>About Us</Text>
                </View>
            
            <View style={styles.infoText}>
                <Text style={styles.infoTextBlock}>

                    Welcome to YMLAEN-FORWARD, the UNISON branch that supports everyone who works in the not for profit sector in Wales. UNISON is the largest union in the sector, with more than 60,000 members across the UK, working in every type of job across all grades.
</Text><Text style={styles.infoTextBlock}>
                    At Ymlaen-Forward we have no distractions. We only support workers in the not for profit sector. We are 100% dedicated to the not for profit sector in Wales. And we are proud to champion and campaign for a sector that is the pre-eminent provider of critical public services in Wales.
</Text><Text style={styles.infoTextBlock}>
                    These are the unique ingredient that makes UNISON the trade union of choice for everyone who works in the not for profit sector in Wales whether you work in a large national charity or housing association with hundreds of employees or a small-grant aided projects as a part-timer.
</Text><Text style={styles.infoTextBlock}>
                    We are big enough to know, have time enough to care and are skilled enough to support, whatever grade or position you hold. Ymlaen-Forward UNISON Branch membership is the single place that support workers, CEO’s, housing officers, nurses, campaign officers and thousands of others jointly call home. Join us today.
</Text><Text style={styles.infoTextBlock}>
                    This is a website which is more than a public relations shop window for UNISON. It is a website we want you to return to regularly.
                    
            </Text>
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
        padding:5
    },
    infoTextBlock:{
        backgroundColor: "#ffffff",
        paddingBottom:10,
        color:"#000000",
        marginBottom:5,
        padding:5
    }
})