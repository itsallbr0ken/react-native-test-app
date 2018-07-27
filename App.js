import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Linking,
  ImageBackground
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

export default class App extends Component<Props> {
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
        <ImageBackground
          source={require("./images/city.jpg")}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <Content>
            <Text style={styles.headerText}>YMLAEN UNISON Branch</Text>
            <Text style={styles.infoText}>
              YMLAEN UNISON Branch is in Cardiff and covers the whole of Wales.
              If you have a workplace issue that you need advice about please
              contact the branch. Phone lines are open Monday to Friday 10am
              until 4pm. Outside these times please leave us a message.
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
            </View>

            <Text style={styles.infoText}>
              Transport House, 1 Cathedral Road {"\n"}Cardiff CF11 9SB
            </Text>
          </Content>
        </ImageBackground>
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
  headerText: {
    backgroundColor: "#330066",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    color: "#ffffff",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
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
    textAlign: "center"
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
    backgroundColor: "#ffffff",
    opacity: 0.9
  }
});
