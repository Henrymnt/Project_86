import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
  };
  

import PostCard from "./PostCard";

let posts = require("./tempposts.json");

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {}
      }

      async loadFont() {
        await Font.loadAsync(fonts);
        this.setState({ fontLoaded: true });
      }
    
      componentDidMount() {
        this.loadFont();
      }

renderItem = ({item: posts}) => {
        return <PostCard posts={posts} navigation={this.props.navigation} />;
      };
    
keyExtractor = (item, index) => index.toString();

render(){
    return(
        <View style={{flex: 1, backgroundColor: "white"}}>
            <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require("../assets/logo.png")} style={styles.iconImage}></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                    keyExtractor={this.keyExtractor}
                    data={posts}
                    renderItem={this.renderItem}
                    />
                </View>
        </View>
    )
}
}
const styles = StyleSheet.create({
	droidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
	},
    appTitle: {
        flex: 0.08,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: 'center',
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
    },
    iconImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    cardContainer:{
        flex: 0.8
    }
})