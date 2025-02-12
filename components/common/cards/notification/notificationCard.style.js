import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container:{
    width: "90%",
    padding: SIZES.xSmall,
    backgroundColor: COLORS.white ,
    borderRadius: SIZES.medium,
    //margin:"30px",
    marginLeft:15,
    justifyContent: "center",
    //alignItems: "center",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
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
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    //color: "#B3AEC6",
    
  },
  column: {
   flexDirection:"row",
   justifyContent: "space-between",
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob, item) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
