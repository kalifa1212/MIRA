import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, View ,Text,TextInput,TouchableOpacity, SafeAreaView} from 'react-native'
import { useSearchParams } from 'expo-router';
import MosqueCard from '../components/common/cards/mosque/MosqueCard'
import PredicationCard from '../components/common/cards/predication/PredicationCard'
import utilities from '../hook/utilities'

const globalSearch = () => {
    const {BearerKey,ipAdresse}=utilities();
    //const { mosques, loading } = useSearchParams(); // Accéder aux paramètres passés dans l'URL

  const mosquesData = JSON.parse(mosques); // Convertir la chaîne JSON en tableau

  return (
    <View style={{ padding: 20 }}>
      {loading === 'true' ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <FlatList
          data={mosquesData}
          keyExtractor={(item) => item.id ? item.id.toString() : item.name}
          renderItem={({ item }) => (
            <MosqueCard
              mosque={item}
              handleNavigate={() => alert(`Naviguer vers ${item.name}`)} // Exemples de fonction de navigation
            />
          )}
          ListFooterComponent={() => (loading === 'true' ? <ActivityIndicator size="large" color="#007bff" /> : null)}
        />
      )}
    </View>
  );
}

export default globalSearch