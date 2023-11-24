
import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';

import StarRating from 'react-native-star-rating';

export default function Details() {
    
  const index = useRoute().params.index;

  const filmes = useSelector((states) => states.FilmeReducer.data);
  
  const dispatch = useDispatch();
  
  const handleStars = (qtd)=>{
    dispatch({
      type:'SET_RATING',
      payload:{
        index: index,
        stars: qtd,
      },
    });
    
  };
  return (

    // CONTEÚDO DA DETAILS
    
    <View style={styles.container}>
      <Image source={{uri:filmes[index].poster}} style={styles.image} />

      <Text style={styles.title}>{filmes[index].title} </Text>
      <Text style={styles.text}> Data de Lançamento: {filmes[index].released} </Text>
      <Text style={styles.text}>Sinopse: {filmes[index].plot} </Text>
      
      <StarRating
        maxStars={5}
        rating={filmes[index].rating}
        selectedStar={(qtd)=>handleStars(qtd)}

      />
    </View>
  )
}

// ESTILIZAÇÃO DA PÁGINA >>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
},
image:{
  width: '100%',
  height: 480,
  marginBottom: 10,
},
title:{
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
},
text:{
  fontSize: 16,
  marginBottom: 8,
},
});