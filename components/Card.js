import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Card from "Card";

const Card = ({ style }) => {
  const [cardItems, setCardItems] = useState([<Card />]);

  return (
    <View style={[styles.card, style]}>
      <Carousel
        style={styles.carousel}
        width={337}
        height
        vertical={true}
        mode="normal"
        autoPlay={false}
        loop={true}
        data={cardItems}
        renderItem={({ item }) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: 337,
    height: 96,
  },
  card: {
    width: 337,
    height: 96,
  },
});

export default Card;
