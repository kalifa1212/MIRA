import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    //alignItems: "center",
    flexDirection: "row",
    padding: SIZES.xSmall,
    //padding:'5px',
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    //backgroundColor:COLORS.gray,
    ...SHADOWS.medium,
    //shadowColor: COLORS.white,
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:5
    },
    shadowOpacity:0.2,
    shadowRadius:10,
    elevation:10
  },
  shadowProp:{
    shadowColor:"#000",
    shadowOffset:{
      width:-2,
      height:4
    },
    shadowOpacity:0.2,
    shadowRadius:3
  },
  logoContainer: {
    width: '20%' ,
    height: 100,
    //backgroundColor: COLORS.gray2,
    borderRadius: SIZES.medium,
    //justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: '90%',
    height: '100%',
  },
  details: {
    flex: 1,
    flexDirection: "row",

  },
  detailsElements:{
    flex:1,
    flexDirection:"row-reverse",
    alignSelf:"flex-end",
    //borderWidth:2
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.xSmall,
    //borderColor:'black',
    //borderWidth:1
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
