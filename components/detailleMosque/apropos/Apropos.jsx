import { View, Text } from "react-native";

import styles from "./apropos.style";

const Apropos = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Autre Information relative</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>Quartier: {data.quartier} </Text>
      </View>
    </View>
  );
};

export default Apropos;