import React from 'react';
import { Platform, Text, View, Button, Image, StyleSheet, Dimensions } from "react-native";
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
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class Events extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Events",
        drawerIcon: () => {
            return (
                <Icon name="calendar" size={25} />
            )
        }
    }
    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.menuIconContainer}>
                            <Text style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}>
                                <FAIcon
                                    name="bars"
                                    size={24}
                                />
                            </Text>
                        </View>


                        <Text style={styles.headerText}>Events</Text>
                    </View>

                    <Agenda
                        style={styles.agenda}
                        // the list of items that have to be displayed in agenda. If you want to render item as empty date
                        // the value of date key kas to be an empty array []. If there exists no value for date key it is
                        // considered that the date in question is not yet loaded
                        items={
                            {
                                '2018-10-27': [{ title: "2018 National Disabled Members' Conference", location: "Brighton", date: "27th Oct 2018" }],
                                '2018-11-06': [{ title: "2018 National LGBT Conference", location: "Harrogate", date: "6th Nov 2018" }],
                                '2018-11-27': [{ title: "YMLAEN Branch Stewards Forum", location: "Transport House, 1 Cathedral Road, Cardiff", date: "27th Nov 2018" }],
                                '2019-01-18': [{ title: "2019 Black Members Conference", location: "Llandudno", date: "18th Jan 2019" }],
                                '2019-02-14': [{ title: "2019 National Women's Conference", location: "Bournemouth", date: "14th Feb 2019" }],
                                '2019-03-01': [{ title: "2019 Community Conference and Seminar", location: "Southport", date: "1st Mar 2019" }],
                            }}
                        renderItem={(item, firstItemInDay) => {
                            return (
                                <Card>
                                    <CardItem header bordered>
                                        <Text>{item.date}</Text>
                                    </CardItem>
                                    <CardItem header bordered>
                                        <Body>
                                            <Text>{item.title}</Text>
                                            <Text><Icon name="location-arrow" />  {item.location}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>);
                        }}
                        renderEmptyData={() => {
                            return (<Card style={styles.initialInformation}>
                                <CardItem bordered>
                                    <Body>
                                        <Text>Dates with a dot below them contain events.</Text>
                                    </Body>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>

                                        <Text>To view the event details please press on the event.</Text>

                                    </Body>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>

                                        <Text>To expand the calendar please press on the down arrow.</Text>
                                    </Body>
                                </CardItem>
                            </Card>);
                        }}
                        rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
                        hideKnob={false}
                        renderKnob={() => { return (<Icon name="chevron-down" />); }}
                        loadItemsForMonth={(month) => { console.log('trigger items loading') }}
                    />


                </View>
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
        fontSize: 25,
        textAlign: "left",
        alignItems: "center",
        justifyContent: "flex-start",
        fontWeight: "bold",
        flexDirection: 'row',
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
        fontSize: 22,
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
        height: Dimensions.get('window').height,
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
    agenda: {
        height: Dimensions.get('window').height,
        width: "100%"
    },
    initialInformation: {
        marginLeft: 10,
        marginRight: 10
    }
})