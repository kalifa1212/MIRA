import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'
import { Feather } from '@expo/vector-icons';

import { Stack, useRouter, useLocalSearchParams } from 'expo-router'

import  ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn'
import PredicationCard from '../../components/common/cards/predication/PredicationCard'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'
import utilities from '../../hook/utilities'


let test=0;
const VoirPlusPredi = () => {
   
    const {BearerKey,ipAdresse}=utilities();
    const params = useLocalSearchParams();
    const router = useRouter()

    const [totalPages,setTotalPages]= useState();
    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    //const BearerKey="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxMTIyNTQ5MywiaWF0IjoxNzExMTg5NDkzfQ.KCc_HCYPUGRVSbjCI23lY7R_jcrYAors6EBfga76WgY";
    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: "GET",
                url: `http://${ipAdresse}:8080/muslimApi/v1/predication/all`,
                headers: {
                    'Authorization':'Bearer '+BearerKey
                },
                params: {
                    //nom:params.id,
                    page: test,
                    taille:5,
                },
            };
            const response = await axios.request(options);
            setSearchResult(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            setSearchError(error);
            //console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };
   

    const handlePagination = (direction) => {
        let test1=test;
        test1=test1-1;
        
            if (direction === 'left' && page > 1 ) {
                setPage(page - 1)
                test=test-1
                handleSearch()
            } else if (direction === 'right') {
                
                if(totalPages>page){
                test=test+1
                setPage(page + 1)
                handleSearch()
                }
            }
    }
    useEffect(() => {
        test=0
        handleSearch()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <Feather 
                            name="arrow-left"
                            size={24} 
                            color="#000" 
                            onPress={() => router.back()  }
                             
                        />
                ),
                headerTitle:"Liste Predication"
            }}
        />
        
        <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    
                    <PredicationCard
                        item={item}
                        handleCardPress={() =>  router.push(`/predication-details/${item.id}`)}
                    />
                )}
                keyExtractor={(item) => item?.id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>Predication </Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops une erreur c'est produite</Text>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />

    </SafeAreaView>
    )
}

export default VoirPlusPredi