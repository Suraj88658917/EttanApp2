import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from "../../assets/images/Button.svg";
import {COLORS} from "../../utils/colors";
import Permission from "../../assets/images/location.svg"
import LocationButton from "../../assets/images/locationButton"
import PushNotification from "../../assets/images/pushNotification.svg"
import NotificationButton from "../../assets/images/NotificationButton.svg";
import NotificationButton1 from "../../assets/images/NotificationButton1.svg";
import PushNotification1 from "../../assets/images/pushNotification1.svg";
import LinearGradient from "react-native-linear-gradient";


const PermissionScreen = ({navigation}) => {
  return (
     <LinearGradient
          colors={[COLORS.DarkBlue, COLORS.LightBlue]}
           start={{ x: 1, y: 1 }}
           end={{ x: 0, y: 1 }}
          style={styles.container}
        >

    <View style={{marginTop:20}}>
         <Button width={40} height={40}/>
     <Text style={{fontFamily:"Poppins-Bold" , fontSize:22 , marginTop:20}}>Enable Permission</Text>
     <Text style={{fontFamily:"Poppins-Regular" , fontSize:13}}>To provide you with the best experience, we {"\n"}need a few permissions</Text>
    </View>

     <View style={{
        flexDirection:"row" ,
         marginTop:20,
         backgroundColor:"#e2e2f9",
         justifyContent:"center",
         padding:10,
         borderRadius:10
         }}>
        <Permission width={35} height={35}/>
        <View style={{paddingHorizontal:10}}>
            <Text style={{fontFamily:"Poppins-Medium" , fontSize:13}}>Location Access</Text>
        <Text style={{fontFamily:"Poppins-Regular" , fontSize:12 }}>Find nearby bakeries and get accurate {"\n"}delivery estimates</Text>
       <TouchableOpacity style={{marginTop:10}}>
         <LocationButton width={120} height={35}/>
       </TouchableOpacity>
        </View>
     </View>

     <View style={{
        flexDirection:"row" ,
         marginTop:10,
          backgroundColor:"#f4ebfa",
         justifyContent:"center",
         padding:10,
         borderRadius:10
         }}>
        <PushNotification width={35} height={35}/>
        <View style={{paddingHorizontal:10}}>
            <Text style={{fontFamily:"Poppins-Medium" , fontSize:13}}>Push Notification</Text>
        <Text style={{fontFamily:"Poppins-Regular" , fontSize:12 }}>Get real-time updates on your orders and {"\n"}special offers</Text>
       <TouchableOpacity style={{marginTop:10}}>
         <NotificationButton width={135} height={35}/>
       </TouchableOpacity>
        </View>
     </View>

     <View style={{
        flexDirection:"row" ,
         marginTop:10,
          backgroundColor:"#e5faec",
         justifyContent:"center",
         padding:10,
         borderRadius:10
         }}>
        <PushNotification1 width={35} height={35}/>
        <View style={{paddingHorizontal:10}}>
            <Text style={{fontFamily:"Poppins-Medium" , fontSize:13}}>Push Notification</Text>
        <Text style={{fontFamily:"Poppins-Regular" , fontSize:12 }}>Get real-time updates on your orders and{"\n"} special offers</Text>
       <TouchableOpacity style={{marginTop:10}}>
         <NotificationButton1 width={135} height={35}/>
       </TouchableOpacity>
        </View>
     </View>

     <View style={{marginTop:40 , gap:10 , alignItems:"center"}}> 
        <TouchableOpacity
        onPressOut={() => navigation.replace("LoginScreen")}
         style={{
            backgroundColor:"#E1E1E1",
            width:200,
            height:50,
            justifyContent:"center",
            alignItems:"center",
            borderRadius:10
         }}>
            <Text style={{fontFamily:"Poppins-Regular" , fontSize:15}}>Continue</Text>
        </TouchableOpacity>
        <Text style={{fontFamily:"Poppins-Regular" , textAlign:"center" , fontSize:12}}>You can change these permissions later in your device{"\n"} settings
</Text>
     </View>
    </LinearGradient>
  )
}

export default PermissionScreen

const styles = StyleSheet.create({
    container :{
        flex:1 ,
        backgroundColor:COLORS.white,
        paddingHorizontal:20
    }
})