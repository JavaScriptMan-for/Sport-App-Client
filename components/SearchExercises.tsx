import { FC, useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setSearchString, fullFilterExercises } from "../store/search.reducer";

import search_img from "../assets/icons/search.png"
import { FiltersIcon } from "../assets/icons/filters"

const SearchExercises: FC = () => {
    const dispatch = useAppDispatch()
    const { search_string } = useAppSelector(state => state.search)

    useEffect(() => {
        dispatch(fullFilterExercises())
    }, [search_string])

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={search_string} onChangeText={(text) => dispatch(setSearchString(text))} placeholder="Найти упражнение из списка..."/>
            <Image style={styles.icon} source={search_img}/>
        </View>
    )
}

export default SearchExercises

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginBottom: 10
    },
    input: {
        padding: 10,
        fontSize: 24,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    icon: {
        position: 'absolute',
        width: 40,
        height: 45,
        right: 35
    }
})