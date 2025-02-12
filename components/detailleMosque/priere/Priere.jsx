import { View, Text } from "react-native";

import styles from "./priere.style";

const Priere = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Heure des Prières</Text>

      <View style={{flexDirection:"column"}}>
        <View style={styles.heur}>
          <Text style={styles.heurText}>Fajr : </Text>
          <Text style={styles.heurText2}>{data.soub}</Text>
        </View>
        <View style={styles.heur}>
          <Text style={styles.heurText}>Zouhr : </Text>
          <Text style={styles.heurText2}>{data.zour}</Text>
        </View>
        <View style={styles.heur}>
          <Text style={styles.heurText}>Asr : </Text>
          <Text style={styles.heurText2}>{data.asr}</Text>
        </View>
        <View style={styles.heur}>
          <Text style={styles.heurText}>Magrhib : </Text>
          <Text style={styles.heurText2}>{data.magrib}</Text>
        </View>
        <View style={styles.heur}>
          <Text style={styles.heurText}>Icha : </Text>
          <Text style={styles.heurText2}>{data.icha}</Text>
        </View>
        <View style={styles.heur}>
          <Text style={styles.heurText}>Djoum : </Text>
          <Text style={styles.heurText2}>{data.djouma}</Text>
        </View>
        <View style={styles.heur}>
          <Text style={styles.heurText}>balte : </Text>
          <Text style={styles.heurText2}>{data.balte}</Text>
        </View>
      </View>
    </View>
  );
};

export default Priere;