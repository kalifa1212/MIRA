import React, { useEffect, useState } from "react";
import { 
  Text, View, SafeAreaView, ScrollView, ActivityIndicator, 
  RefreshControl, TouchableOpacity, StyleSheet 
} from 'react-native';
import { useRouter, Stack, useLocalSearchParams } from 'expo-router';
import { COLORS, SIZES, icons } from '../../constants';
import axios from 'axios';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import utilities from "../../hook/utilities";
import { Ionicons } from '@expo/vector-icons';

const PredicationDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [imam, setImam] = useState([]);
  const [mosque, setMosque] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const { BearerKey, ipAdresse } = utilities();
  const [test, setTest] = useState(false);

  const onRefresh = () => {
    // Logic to refresh data
  };

  useEffect(() => {
    const handleSearch = async () => {
      setIsloading(true);
      setData([]);
      try {
        const options = {
          method: "GET",
          url: `http://${ipAdresse}:8080/muslimApi/v1/predication/${params.id}`,
          headers: {
            'Authorization': 'Bearer ' + BearerKey
          },
        };
        const response = await axios.request(options);
        setData(response.data);
        if (response.data.idImam !== 0) {
          handleImamMosque(response.data.idImam, "utilisateur/find/id/", false);
        }
        if (response.data.idMosque !== 0) {
          handleImamMosque(response.data.idMosque, "mosque/find/", true);
        }
        setTest(true);
      } catch (error) {
        setError(error);
      } finally {
        setIsloading(false);
      }
    };

    const handleImamMosque = async (id, endPoint, isMosque) => {
      try {
        const options = {
          method: "GET",
          url: `http://${ipAdresse}:8080/muslimApi/v1/${endPoint}${id}`,
          headers: {
            'Authorization': 'Bearer ' + BearerKey
          },
        };
        const response = await axios.request(options);
        if (isMosque) {
          setMosque(response.data);
        }
        setImam(response.data);
      } catch (error) {
        console.log(error, "*****", endPoint, " ", id);
      }
    };

    handleSearch();
  }, [test]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: true,
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: ''
        }} 
      />
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={styles.scrollViewContent}
      >
        {isloading ? (
          <ActivityIndicator size="large" color={COLORS.primary} style={styles.loader} />
        ) : error ? (
          <Text style={styles.errorText}>Une erreur est survenue</Text>
        ) : (
          <View style={styles.contentContainer}>
            <Text style={styles.predicationTitle}>Thème: {data.theme}</Text>
            <View style={styles.predicationDetails}>
              <DetailRow label="Type" value={data.type} />
              <DetailRow label="Date" value={data.date} />
              <DetailRow label="Prédicateur" value={imam.nom} />
              <DetailRow label="Lieu" value={mosque.nom} />
              <DetailRow label="Autres informations" value={data.info} />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}: </Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: COLORS.red,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  contentContainer: {
    paddingHorizontal: SIZES.padding,
  },
  predicationTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.primary,
    marginVertical: 20,
  },
  predicationDetails: {
    marginTop: 10,
    paddingBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkGray,
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    color: COLORS.gray,
    flex: 2,
  },
});

export default PredicationDetails;
