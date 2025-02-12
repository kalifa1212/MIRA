import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    // marginTop: SIZES.xLarge,
    // marginBottom:SIZES.large,
    padding:5,
    //backgroundColor:"blue"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    //marginTop: SIZES.medium,
    //margin:SIZES.medium,
    //height:250,
    //backgroundColor:"red"
  },
});

export default styles;
