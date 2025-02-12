import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import MosqueCard from '../../common/cards'; // Assure-toi que MosqueCard est bien importé

const SearchResults = ({ mosques, loading, onNavigate }) => {
  return (
    <View style={{ padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <FlatList
          data={mosques}
          keyExtractor={(item) => item.id ? item.id.toString() : item.name}
          renderItem={({ item }) => (
            <MosqueCard
              mosque={item}
              handleNavigate={() => onNavigate(item.id)} // Naviguer avec l'ID de la mosquée
            />
          )}
          ListFooterComponent={() => (loading ? <ActivityIndicator size="large" color="#007bff" /> : null)}
        />
      )}
    </View>
  );
};

export default SearchResults;
