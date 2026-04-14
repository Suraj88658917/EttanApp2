import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Image
} from "react-native";

import Logoo from "../../assets/images/Logoo.svg";
import { COLORS } from "../../utils/colors";

import Part1 from "../../assets/images/part1.svg";
import Part4 from "../../assets/images/part4.svg";
import Part5 from "../../assets/images/part5.svg";

const { width } = Dimensions.get("window");


const data = [
  {
    id: "1",
    assets: Part1,
    title: "View Your Children’s Progress",
    subtitle:
      "Parents can easily see and manage data for \nboth of their children in one place."
  },
  {
    id: "2",
    assets: Part4, 
    title: "Parent & Teacher \nRemarks",
    subtitle:
      "Collect feedback from parents and teachers \nbased on children’s activities and progress."
  },
  {
    id: "3",
    assets: Part5, 
    title: "Create Activities, Track Progress",
    subtitle:
      "Teachers can assign activities and easily monitor each child’s learning progress."
  }
];
const OnboardingScreen = ({ navigation }) => {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item }) => {
 
    return (
      <View style={styles.card}>
       
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    );
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1
      });
    } else {
      navigation.replace("LoginScreen");
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Logoo width={107} height={34.5} />

        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x /
            e.nativeEvent.layoutMeasurement.width
          );
          setCurrentIndex(index);
        }}
      />

      <View style={styles.bottomRow}>

        <View style={styles.dotsContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index && styles.activeDot
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === data.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LightBlue
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 50
  },

  skip: {
    fontFamily: "Poppins-Regular",
    fontSize: 15
  },

  card: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom:90
  },

  title: {
    fontSize: 22,
    fontFamily: "Poppins-Bold",
    marginTop: 30,
    textAlign: "center"
  },

  subtitle: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    marginTop: 10,
    textAlign: "center",
    color: "#555",
    paddingHorizontal: 20
  },

  bottomRow: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  dotsContainer: {
    flexDirection: "row"
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginRight: 1
  },

  activeDot: {
    backgroundColor: "#ff9b00",
    width: 16
  },

 button: {
  backgroundColor: "#ff9b00",
  width: 140,            
  height: 45,         
  borderRadius: 9,
  justifyContent: "center",
  alignItems: "center"
},
  buttonText: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    
  },
  imageContainer: {
  justifyContent: "center",
},
});