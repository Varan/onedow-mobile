import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props{
    onPress: () => void;
}

export const Fab: React.FC<Props> = ({onPress}) => {

    return(
        <TouchableOpacity onPress={onPress} style={styles.fab}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fab:{
        width: 40,
        height: 40,
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 10,
        right: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 18,
        marginLeft: 2,
        marginBottom: 2
    }
})
