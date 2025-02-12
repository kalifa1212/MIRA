import { View, Text } from "react-native";

import styles from "./actualite.style";

const Actualite = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Actualité de la mosque</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>Pas d'actualité recente</Text>
      </View>
    </View>
  );
};

export default Actualite;