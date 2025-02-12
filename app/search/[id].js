import React from 'react';
import { ActivityIndicator,Animated, FlatList, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MosqueCard from '../../components/common/cards/mosque/MosqueCard';
import utilities from '../../hook/utilities';
import PredicationCard from '../../components/common/cards/predication/PredicationCard';
import { COLORS } from '../../constants';


const GlobalSearch = () => {
  const router = useRouter();
  const { BearerKey, ipAdresse } = utilities();
  const { searchType, data, loading } = useLocalSearchParams();

  // Convertir la chaîne JSON en objet
  const parsedData = data ? JSON.parse(data) : [];

  const renderItem = ({ item }) => {
    if (searchType === 'mosque') {
      return <MosqueCard mosque={item} handleNavigate={() => router.push(`/mosque-details/${item.id}`)} />;
    } else if (searchType === 'predication') {
      return <PredicationCard item={item} handleCardPress={() => router.push(`/predication-details/${item.id}`)} />;
    }
    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Stack.Screen pour personnaliser l'entête */}
      <Stack.Screen
        options={{
          headerTitle: searchType === 'mosque' ? 'Résultats des Mosquées' : 'Résultats des Prédications',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={{ flex: 1, padding: 20 }}>
        {loading === 'true' ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : (
          <Animated.FlatList
        data={parsedData}
        keyExtractor={(item) => item.id ? item.id.toString() : item.name}
        renderItem={renderItem}
        //style={{ opacity: listOpacity }} // L'animation de la liste
       // ListFooterComponent={() => loading ? <ActivityIndicator size="large" color={COLORS.primary} /> : null}
      />
        )}
      </View>
    </SafeAreaView>
  );
};

export default GlobalSearch;
