import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, LogBox} from "react-native";
import * as Font from "expo-font";
import DropDownPicker from "react-native-dropdown-picker"

let fonts = {
    "Bubblegum-Sans": require("../assets/BubblegumSans-Regular.ttf")
  };

export default class CreatePost extends Component {
constructor() {
    super();
    this.state = {
        fontLoaded: false,
        previewImage: "img1"
    };
}

async loadFont() {
    await Font.loadAsync(fonts);
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFont();
  }

render(){
    if (this.state.fontsLoaded) {
    let previewImages = {
        img1: require("../assets/image1.png"),
        img2: require("../assets/image2.png"),
        img3: require("../assets/image3.png"),
        img4: require("../assets/image4.png"),
        img5: require("../assets/image5.png"),
        };
    return(
        <View style={{flex: 1}}>         
            <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require("../assets/logo.png")} style={styles.iconImage}></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>New Post</Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image source={previewImages[this.state.previewImage]} style={styles.previewImage}></Image>
                        <View style={{height: RFValue(this.state.dropdownHeight)}}>
                            <DropDownPicker
                                items={[
                                    {label: "Image 1", value: "img1"},
                                    {label: "Image 2", value: "img2"},
                                    {label: "Image 3", value: "img3"},
                                    {label: "Image 4", value: "img4"},
                                    {label: "Image 5", value: "img5"}
                                ]}
                                containerStyle={{
                                    height: 40,
                                    borderRadius: 20,
                                    marginBottom: 10
                                }}
                                style={{backgroundColor: "transparent"}}
                                itemStyle={{justifyContent: "flex-start"}}
                                dropDownStyle={{backgroundColor: "darkgray"}}
                                labelStyle={{color: "white"}}
                                arrowStyle={{color: "white"}}
                                defaultValue={this.state.previewImage}
                                onOpen={()=>{
                                    this.setState({dropDownHeight: 170})
                                }}
                                onClose={()=>{
                                    this.setState({dropDownHeight: 40})
                                }}
                                onChangeItem={item=>
                                    this.setState({
                                        previewImage: item.value
                                    })
                                }/>
                        </View>
                        <TextInput
                            style={styles.inputFont}
                            onChangeText={caption=>this.state({caption})}
                            placeholder={"Enter Caption"}
                            placeholderTextColor="white"
                            multiline={true}
                            numberOfLines={3}
                        />
                    </ScrollView>
                </View>
        </View>
      )
    }
  }
}
const styles = StyleSheet.create({
	droidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
	},
    appTitle: {
        flex: 0.08,
        flexDirection: "row",
      },
      appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
      },
      iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
      },
      appTitleTextContainer: {
        flex: 0.75,
        justifyContent: "center",
      },
      appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans",
      },
      fieldsContainer: {
        flex: 0.9,
      },
      previewImage: {
        width: "90%",
        height: RFValue(250),
        alignSelf: "center",
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: "contain",
      },
      inputFont: {
        height: RFValue(40),
        marginTop: RFValue(40),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(5),
        paddingLeft: RFValue(10),
        color: "white",
        fontFamily: "Bubblegum-Sans",
      }
})