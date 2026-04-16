import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
} from "react-native";
import React, { useState } from "react";

import Button from "../../assets/images/Button.svg";
import { COLORS } from "../../utils/colors";
import Permission from "../../assets/images/location.svg";
import LocationButton from "../../assets/images/locationButton";
import NotificationButton1 from "../../assets/images/NotificationButton1.svg";
import PushNotification1 from "../../assets/images/pushNotification1.svg";
import PushNotification from "../../assets/images/pushNotification.svg";
import NotificationButton from "../../assets/images/NotificationButton.svg"

import LinearGradient from "react-native-linear-gradient";
import Geolocation from "@react-native-community/geolocation";

const PermissionScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [notificationPermission, setNotificationPermission] = useState(null);

  const requestNotificationPermission = async () => {
    if (Platform.OS === "android") {
      if (Platform.Version >= 33) {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
          );

          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          return false;
        }
      } else {
        return true;
      }
    }
    return true;
  };

  //  Camera Permission
  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  //  Location Permission
  const requestLocationPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      getLocation();
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  return (
    <LinearGradient
      colors={[COLORS.DarkBlue, COLORS.LightBlue]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Header */}
      <View style={{ marginTop: 20 }}>
        <Button width={40} height={40} />
        <Text style={styles.title}>Enable Permission</Text>
        <Text style={styles.subtitle}>
          To provide you with the best experience, we {"\n"}
          need a few permissions
        </Text>
      </View>

      {/*  Location */}
      <View style={styles.card}>
        <Permission width={35} height={35} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.heading}>Location Access</Text>
          <Text style={styles.desc}>
            Find nearby bakeries and get accurate {"\n"}delivery estimates
          </Text>

          <TouchableOpacity
            onPress={requestLocationPermission}
            style={{ marginTop: 10 }}
          >
            <LocationButton width={120} height={35} />
          </TouchableOpacity>

          {location && (
            <Text style={styles.success}>
              Lat: {location.latitude} | Lng: {location.longitude}
            </Text>
          )}
          
        </View>
      </View>
               // notification permission
      <View style={styles.card}>
        <PushNotification width={35} height={35} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.heading}>Push Notifications</Text>
          <Text style={styles.desc}>
            Get real-time updates on your orders and special offers
          </Text>

          <TouchableOpacity
            onPress={async () => {
              const permission = await requestNotificationPermission();
              setNotificationPermission(permission);
            }}
            style={{ marginTop: 10 }}
          >
            <NotificationButton width={120} height={35} />
          </TouchableOpacity>

          {notificationPermission === true && (
            <Text style={{ color: "green", fontSize: 12 }}>
              Notification Allowed
            </Text>
          )}

          {notificationPermission === false && (
            <Text style={{ color: "red", fontSize: 12 }}>
              Notification Denied
            </Text>
          )}
        </View>
      </View>

      {/* Camera */}
      <View style={styles.card}>
        <PushNotification1 width={35} height={35} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.heading}>Camera Access</Text>
          <Text style={styles.desc}>
            Capture photos for better experience
          </Text>

          <TouchableOpacity
            onPress={async () => {
              const permission = await requestCameraPermission();
              setHasPermission(permission);
            }}
            style={{ marginTop: 10 }}
          >
            <NotificationButton1 width={135} height={35} />
          </TouchableOpacity>

          {hasPermission === true && (
            <Text style={styles.success}>
              Camera Permission Granted
            </Text>
          )}

          {hasPermission === false && (
            <Text style={styles.error}>
              Camera Permission Denied
            </Text>
          )}
        </View>
      </View>

      {/* Continue */}
      <View style={{ marginTop: 40, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.replace("LoginScreen")}
          style={styles.btn}
        >
          <Text style={{ fontFamily: "Poppins-Regular" }}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          You can change these permissions later in settings
        </Text>
      </View>
    </LinearGradient>
  );
};

export default PermissionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    marginTop: 20,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
  },
  heading: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
  },
  desc: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  success: {
    color: "green",
    fontSize: 12,
    marginTop: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  card: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#e2e2f9",
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#E1E1E1",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  footer: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },
});