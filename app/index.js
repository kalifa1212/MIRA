import {useState} from 'react';
import {View,Text,ScrollView, SafeAreaView} from 'react-native';
import { Stack,useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';


import {COLORS,icons,images,SIZES} from '../constants';
import {Mosque,Predication,ScreenHeaderBtn,Welcome} from '../components'

const Home = () => {
    const router = useRouter();
    const [searchTerm,setSearchTerm]= useState("");
    const item="G";
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: true,
                    headerRight: () => (
                        <Feather 
                            name="bell" 
                            size={24} 
                            color="#000" 
                            onPress={() => router.push(`/notification/${item}`)  }
                             
                        />
                    ), 
                    headerTitle: "Muslim Application",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <Predication />
                    <Mosque />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Home;