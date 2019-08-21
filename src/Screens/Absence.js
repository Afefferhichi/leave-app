import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Header from "../common/Header";
import Icon from "react-native-vector-icons/Ionicons";
import AbsenceCard from "../common/AbsenceCard";

export default class Absence extends Component {
  constructor() {
    super();

    this.state = { expanded: false, expanded2: false };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
  changeLayout2 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded2: !this.state.expanded2 });
  };
  onButtonShow = () => {
    if (this.state.expanded === false) {
      return (
        <View
          style={{
            height: 35,
            width: 35,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 50,
            color: "blue",
            marginBottom: 10,
          }}
        >
          <Icon
            activeOpacity={0.8}
            onPress={this.changeLayout}
            style={styles.Btn}
            name="md-arrow-down"
            size={22}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            height: 35,
            marginBottom: 10,
            width: 35,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 50
          }}
        >
          <Icon
            activeOpacity={0.8}
            onPress={this.changeLayout}
            style={styles.Btn}
            name="md-arrow-up"
            size={22}
          />
        </View>
      );
    }
  };
  onButtonShow2 = () => {
    if (this.state.expanded2 === false) {
      return (
        <View
          style={{
            height: 35,
            width: 35,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 50,
            marginBottom: 10
          }}
        >
          <Icon
            activeOpacity={0.8}
            onPress={this.changeLayout2}
            style={styles.Btn}
            name="md-arrow-down"
            size={22}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            height: 35,
            marginBottom: 10,
            width: 35,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 50
          }}
        >
          <Icon
            activeOpacity={0.8}
            onPress={this.changeLayout2}
            style={styles.Btn}
            name="md-arrow-up"
            size={22}
          />
        </View>
      );
    }
  };

  render() {
    return (
      <View>
        <View
          style={{
            height: 58,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#f3f3f3",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <Icon
            name="md-menu"
            size={30}
            style={{ paddingLeft: 10, paddingRight: 20 }}
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000000" }}>
            Activity Feed
          </Text>
        </View>
        <ScrollView style={{ height: "90%" }}>
          <View style={styles.container}>
            <View style={styles.container}>
              <Header HeaderText="Leave Request" />
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "30%" }}>
                  <Icon name="md-calendar" size={29} style={{ marginLeft: 30 }} />
                </View>
                <View
                  style={{
                    borderWidth: 0,
                    width: " 70%",
                    borderColor: "#f2f2f2",
                    borderLeftColor: "red",
                    borderLeftWidth: 0,
                    marginLeft: 5,
                    marginTop: 5
                  }}
                >
                  <AbsenceCard />
                  {/* {this.onButtonShow()} */}
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>Duration: </Text>
                    <Text>12/01/2018</Text>
                    <View style={{ marginLeft: 40 }}>{this.onButtonShow()}</View>
                  </View>

                  {/* /// */}

                  <View style={styles.btnTextHolder}>
                    <View
                      style={{
                        height: this.state.expanded ? null : 0,
                        overflow: "hidden"
                      }}
                    >
                      {/*  */}
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 5,
                          marginBottom: 5
                        }}
                      >
                        <Text style={{ fontWeight: "bold" }}>From: </Text>
                        <Text>12/01/2018</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 5,
                          marginBottom: 5
                        }}
                      >
                        <Text style={{ fontWeight: "bold" }}>To: </Text>
                        <Text>12/01/2018</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 5,
                          marginBottom: 5
                        }}
                      >
                        <Text style={{ fontWeight: "bold" }}>Absence Type: </Text>
                        <Text>Holliday</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 5,
                          marginBottom: 5
                        }}
                      >
                        <Text style={{ fontWeight: "bold" }}>Entitlement: </Text>
                        <Text>20.0 days</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 5,
                          marginBottom: 5
                        }}
                      >
                        <Text style={{ fontWeight: "bold" }}>Token: </Text>
                        <Text>2.00 Days</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: 5,
                          marginBottom: 5
                        }}
                      >
                        <Text style={{ fontWeight: "bold" }}>Remaning: </Text>
                        <Text>18.00 Days</Text>
                      </View>
                      {/*  */}
                    </View>
                  </View>
                  {/*  */}
                </View>
              </View>
              <View style={styles.btnTextHolder}>
                <View
                  style={{
                    height: this.state.expanded ? null : 0,
                    overflow: "hidden",
                  }}
                >
                  {/*  */}
                  <View
                    style={{
                      height: 40,
                      width: "50%",
                      backgroundColor: "white",
                      flexDirection: "row",
                      alignItems: "center",
                      alignSelf: 'center',
                    }}
                  >
                    <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 90,
                          backgroundColor: "#a39c9b",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: 5,
                          borderRadius: 3,
                          marginRight: 20
                        }}
                        onPress={() =>
                          this.props.navigation.navigate("AbsenceDetail")
                        }
                      >
                        <Text style={{ color: "white" }}>OPEN </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 50,
                          backgroundColor: "#a39c9b",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: 5,
                          borderRadius: 3
                        }}
                      >
                        <Icon name="md-menu" size={30} style={{ color: "white" }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/*  */}
                </View>
              </View>
              {/* second card  */}
              <View style={{ marginTop: 10 }}>
                <Header HeaderText="Exit Request" />
                <View style={{ flexDirection: "row" }}>
                  <View style={{ width: "30%" }}>
                    <Icon name="md-time" size={29} style={{ marginLeft: 30 }}></Icon>

                  </View>
                  <View
                    style={{
                      borderWidth: 0,
                      width: " 70%",
                      borderColor: "#f2f2f2",
                      borderLeftColor: "blue",
                      borderLeftWidth: 0,
                      marginLeft: 5,
                      marginTop: 5
                    }}
                  >
                    <AbsenceCard />
                    {/* {this.onButtonShow()} */}

                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "bold" }}>Duration: </Text>
                      <Text>12/01/2018</Text>
                      <View style={{ marginLeft: 40 }}>{this.onButtonShow2()}</View>
                    </View>

                    {/* /// */}

                    <View style={styles.btnTextHolder}>
                      <View
                        style={{
                          height: this.state.expanded2 ? null : 0,
                          overflow: "hidden"
                        }}
                      >
                        
                        {/*  */}
                        <View
                          style={{
                            flexDirection: "row",
                            marginLeft: 5,
                            marginBottom: 5
                          }}
                        >
                          <Text style={{ fontWeight: "bold" }}>From: </Text>
                          <Text>12/01/2018</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            marginLeft: 5,
                            marginBottom: 5
                          }}
                        >
                          <Text style={{ fontWeight: "bold" }}>To: </Text>
                          <Text>12/01/2018</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            marginLeft: 5,
                            marginBottom: 5
                          }}
                        >
                          <Text style={{ fontWeight: "bold" }}>Absence Type: </Text>
                          <Text>Holliday</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            marginLeft: 5,
                            marginBottom: 5
                          }}
                        >
                          <Text style={{ fontWeight: "bold" }}>Entitlement: </Text>
                          <Text>20.0 days</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            marginLeft: 5,
                            marginBottom: 5
                          }}
                        >
                          <Text style={{ fontWeight: "bold" }}>Token: </Text>
                          <Text>2.00 Days</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            marginLeft: 5,
                            marginBottom: 5
                          }}
                        >
                          <Text style={{ fontWeight: "bold" }}>Remaning: </Text>
                          <Text>18.00 Days</Text>
                        </View>
                        <View
                          style={{
                            height: 40,
                            width: "100%",
                            backgroundColor: "white",
                            flexDirection: "row",
                            alignItems: "center",
                            // justifyContent:'center'
                          }}
                        >
                          <TouchableOpacity
                            style={{
                              height: 30,
                              width: 90,
                              backgroundColor: "#a39c9b",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: 5,
                              borderRadius: 3
                            }}
                            onPress={() =>
                              this.props.navigation.navigate("AbsenceDetail")
                            }
                          >
                            <Text style={{ color: "white" }}>OPEN </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              height: 30,
                              width: 90,
                              backgroundColor: "#a39c9b",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: 5,
                              borderRadius: 3
                            }}
                          >
                            <Icon name="md-menu" size={30} style={{ color: "white" }} />
                          </TouchableOpacity>
                        </View>
                        {/*  */}
                      </View>
                    </View>
                    {/*  */}
                  </View>
                </View>
              </View>
              {/*  */}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  container1: {
    fontSize: 25,
    color: "red",
    padding: 10
  },

  text: {
    fontSize: 17,
    color: "black",
    padding: 10
  },

  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 20
  },

  btnTextHolder: {
    borderWidth: 0,
    backgroundColor: "white"
  },

  Btn: {
    color: "#191970"
  }
});
