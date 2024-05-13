import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UseResults from '../Hooks/UseResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [searchAPI, results, errorMessage] = UseResults();
  const [term, setTerm] = useState('')
  //console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  }
  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : <>
            {results.length == 0  ? (
              <></> 
              ) : ( 
              <>     
           <ResultsList 
             title='Cheap Restaurants' 
             results={filterResultsByPrice('₺')}
           />
           <ResultsList 
             title='Normal Price Restaurants' 
             results={filterResultsByPrice('₺₺')} 
           />
           <ResultsList 
             title='Expensive Restaurants' 
             results={filterResultsByPrice('₺₺₺')} 
           />
           </> )}
       </>
     }

    </View>
  );
}

const styles = StyleSheet.create({});
