import React, { Component, useState } from 'react';
import { View ,Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './mosque.style';
import { COLORS } from '../../../constants';
import useFetch from '../../../hook/useFetch';
import MosqueCard from '../../common/cards/mosque/MosqueCard';


const Mosque=()=> {

  const router=useRouter();
  const mosque="Mosquée";
  const {data,isloading,error}=useFetch(
    'mosque/find/all/',{
      taille:2,
    }
  )
  //console.log(error);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Mosque</Text>
        <TouchableOpacity onPress={() => router.push(`/voirplus/${mosque}`)}>
          <Text style={styles.headerBtn}>voir plus</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isloading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Une erreur c'est produite</Text>
        ) : (
          data?.map((mosque) => (
            <MosqueCard 
                 mosque={mosque}
                 key={`mosque-${mosque?.id}`}
                 handleNavigate={() => router.push(`/mosque-details/${mosque?.id}`)}
               />
          ))
        )
      }
      </View>

    </View>
  )

  }
export default Mosque
