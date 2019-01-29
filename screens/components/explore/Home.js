import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native";
import StarRating from 'react-native-star-rating';


class Home extends Component {
    render() {
        const {width,rating,price,name,type}= this.props;
        return (
            <View style={{width:width/2 - 30,height:width/2 - 30,borderWidth:0.5,borderColor:'#dddddd'}}>
            <View style={{flex:1}}>
                <Image style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                    source={require('../../../assets/home.jpg')}
                    />
            </View>
            <View style={{flex:1 ,paddingHorizontal:10,alignItems:'flex-start',justifyContent:'space-evenly'}}>
                    <Text style={{fontSize:10,color:'#b63838'}}>{type}</Text>
                    <Text style={{fontSize:12,fontWeight:'bold'}}>{name}</Text>
                    <Text style={{fontSize:10}}>{price}</Text>
                    <StarRating 
                    disable={true}
                    maxStars={5}
                    rating={rating}
                    starSize={10}
                    />
            </View>
      </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});