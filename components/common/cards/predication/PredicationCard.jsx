import React, { Component } from 'react';
import {View ,Text,TouchableOpacity,Image} from 'react-native';
//import styles from './predicationCard.style';


const PredicationCard=({item,selectedPredication,handleCardPress})=> {
 //const handleCardPress =()=> {}
    return (
      <TouchableOpacity 
            style={styles.container} 
            onPress={handleCardPress}
            activeOpacity={0.8}
        >
            {/* Type de prédication */}
            <Text style={styles.type}>{item.type}</Text>

            {/* Titre */}
            <Text style={styles.title} numberOfLines={1}>{item.theme}</Text>

            {/* Description */}
            <Text style={styles.description} numberOfLines={2}>
                {item.description ? item.description : "Aucune description disponible"}
            </Text>

            {/* Date de prédication */}
            <Text style={styles.date}>{item.date}</Text>
        </TouchableOpacity>
    )
  }

  const styles = {
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        elevation: 3, // Ombre Android
        shadowColor: "#000", // Ombre iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    type: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#007bff",
        textTransform: 'uppercase',
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#333",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "#6c757d",
        marginBottom: 8,
    },
    date: {
        fontSize: 12,
        color: "#555",
        fontStyle: 'italic',
        textAlign: "right",
    },
};

export default PredicationCard
