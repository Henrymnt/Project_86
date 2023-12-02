import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";



export default class PostCard extends Component {
constructor(props){
  super(props)
  this.setState={

  }
}  
render(){
    return(
        <TouchableOpacity style={{flex: 1}}
        onPress={() =>
          this.props.navigation.navigate("PostScreen")
          }>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image source={require("../assets/profile_img.png")} style={styles.profileImage}></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}></Image>
                    <View style={styles.captionContainer}>
                        <Text styles={styles.captionText}>{this.props.post.caption}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name="heart" size={RFValue(30)} color="white"/>
                            <Text style={styles.likeText}>7k</Text>
                        </View>
                    </View>
                </View>
        </TouchableOpacity>
    )
}
}

const styles = StyleSheet.create({
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    authorContainer: {
        margin: RFValue(7),
        backgroundColor: "darkgray",
        borderRadius: RFValue(12)
      },
    authorImageContainer: {
        margin: RFValue(10),
        borderRadius: RFValue(12)
      },
    authorNameContainer: {
        margin: RFValue(5),
        borderRadius: RFValue(12)
      },
    captionNameContainer: {
        margin: RFValue(5),
        borderRadius: RFValue(12)
    },
    profileImage: {
        resizeMode: "contain",
        width: "90%",
        alignSelf: "center",
        height: RFValue(50)
    },
    postImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    authorNameText: {
      fontSize: RFValue(18),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    captionText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: 13,
      color: "white",
      paddingTop: RFValue(10)
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    }
  });
  