import React, { Component } from 'react';
import {View ,Text,TouchableOpacity,Image} from 'react-native';
import { useState } from 'react';
//import styles from './mosqueCard.style';
import useFetch from '../../../../hook/useFetch';
import utilities from '../../../../hook/utilities';
import { COLORS, SIZES } from './constant';

const MosqueCard=({mosque,handleNavigate})=> {
  
  const {BearerKey,ipAdresse}=utilities();
  
  const [isVendredi,setIsVendredi]=useState("oui");

    return (
      <TouchableOpacity 
      style={styles.container} 
      onPress={handleNavigate}
      activeOpacity={0.8}
  >
      {/* Image de la mosquée */}
      <Image
          source={{uri:`http://${ipAdresse}:8080/muslimApi/v1/image/display/${mosque.id}/mosque`}}
          resizeMode='cover'
          style={styles.image}
      />

      {/* Contenu de la carte */}
      <View style={styles.content}>
          {/* Titre et description */}
          <View style={styles.header}>
              <Text style={styles.title}>{mosque.nom}</Text>
              <Text style={styles.description} numberOfLines={2}>
                  {mosque.description ? mosque.description : "Aucune description disponible"}
              </Text>
          </View>

          {/* Localisation & Vendredi */}
          <View style={styles.footer}>
              <Text style={styles.location}>
                  📍 {mosque.localisation?.ville}, {mosque.localisation?.pays}
              </Text>
              
              <View style={styles.vendrediContainer}>
                  <Text style={styles.vendrediText}>{mosque.isVendredi ? "✅ Oui" : "❌ Non"}</Text>
                  <Text style={styles.vendrediLabel}>Prière du vendredi</Text>
              </View>
          </View>
      </View>
  </TouchableOpacity>
    )
  }
  const styles = {
    container: {
        backgroundColor: COLORS.white,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: SIZES.medium,
        elevation: 3, // Ombre Android
        shadowColor: '#000', // Ombre iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    content: {
        padding: SIZES.medium,
    },
    header: {
        marginBottom: SIZES.small,
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    description: {
        fontSize: SIZES.medium,
        color: COLORS.gray,
        marginTop: 5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.medium,
    },
    location: {
        fontSize: SIZES.medium,
        color: COLORS.darkGray,
    },
    vendrediContainer: {
        alignItems: 'center',
    },
    vendrediText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: mosque => (mosque.isVendredi ? COLORS.green : COLORS.red),
    },
    vendrediLabel: {
        fontSize: 12,
        color: COLORS.gray,
    },
};
export default MosqueCard

