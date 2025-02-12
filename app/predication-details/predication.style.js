import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES,SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  container: {
  // marginVertical: SIZES.medium,
    // justifyContent: "center",
    // alignItems: "center",
    //backgroundColor:"blue"
    //width: 250,
    padding: SIZES.xSmall,
    //backgroundColor:COLORS.gray2,
    borderRadius: SIZES.medium,
    //justifyContent: "space-between",
    //...SHADOWS.medium,
    //shadowColor: COLORS.white,
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    //color: "#B3AEC6",
    
  },
  column: {
   margin:5,
   padding:5,
   flexDirection:"row",
   justifyContent: "center",
   alignItems: "center"
  },
  textStyle:{
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.bold,

  },
  display:{
    marginTop:10,
    padding:5,
    flexDirection:"row",
    //borderWidth:2,
    //borderRadius:10,
    //borderColor:COLORS.primary
  },
  display1:{
    flexDirection:'column',
    backgroundColor:COLORS.white
  },
  logoBox: {
    width: 250,
    height: 250, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: "90%",
    height: "90%",
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});

export default styles;
