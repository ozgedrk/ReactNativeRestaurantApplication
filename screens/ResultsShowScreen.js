import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Yelp from '../API/Yelp'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultsShowScreen({ route }) {
 
  const [result, setResult] = useState(null)
  const id = route.params.id;

  const getResult = async(id) =>{
      const response = await Yelp.get(`/${id}`);
      setResult(response.data);
  }
  useEffect(()=>{
    getResult(id);
  } , [])

  if(!result){
    return null;
  }

  return (
    <View style={styles.icon} >
      <Text style={styles.title} >{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View>
      {
        result.is_closed ? (<AntDesign name="closecircleo" size={50} color="black" /> 
      ) : ( <MaterialIcons name="delivery-dining" size={50} color="black" />
      )}
      </View>

      <FlatList
         data = {result.photos}
         renderItem={({item}) => {
            return (
               <Image style={styles.image} 
                source={{ uri: item }} />
            );
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    margin: 10, 
    height: 180,
    borderRadius: 20,
  },
  title:{
    alignSelf: 'center',
    fontSize: 25,
    marginVertical: 10,

  },
  phone:{
    alignSelf: 'center',
    fontSize: 20,
  },
  icon:{
    alignSelf: 'center',
  }
})