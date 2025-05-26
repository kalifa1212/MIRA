import React, { useEffect,Component, useState } from 'react';
import { View ,Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './mosque.style';
import { COLORS } from '../../../constants';
import useFetch from '../../../hook/useFetch';
import MosqueCard from '../../common/cards/mosque/MosqueCard';
import { MosqueControllerApi,Configuration } from '../../../hook/rn-client';
import axiosInterceptor from '../../../app/services';


const Mosque=()=> {

  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const config = new Configuration({});
  const mosqueController = new MosqueControllerApi(config,config.basePath,axiosInterceptor);
  const router=useRouter();
  const mosque="Mosquée";

  useEffect(() => {
    mosqueController.countAll()
    .then(rest =>{console.log(rest.data)})
    .catch(err=>{
      console.log(err)
    })
    mosqueController.findAll2()
      .then(res => {
        setData(res.data.content); // ou res.data selon ta réponse
        setIsloading(false);
      })
      .catch(err => {
        setError(err);
        setIsloading(false);
      });
  }, []);

  if (isloading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

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
