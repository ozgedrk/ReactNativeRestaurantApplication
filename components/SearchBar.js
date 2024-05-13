import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({term, onTermChange, onTermSubmit}) {
  return (
    <View style={styles.BackgroundStyle} >

        <AntDesign style={styles.IconStyle} 
                   name="search1" 
                   size={30} 
                   color="black" 
        />

        <TextInput
                style={styles.InputStyle}
                placeholder="Search"
                autoCorrect={false}
                autoCapitalize="none"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
    </View>
  )
}

const styles = StyleSheet.create({
    BackgroundStyle:{
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 20, 
    },
    IconStyle:{
        marginHorizontal: 15,
    },
    InputStyle:{
        flex : 1,
        fontSize: 18,
    },
})