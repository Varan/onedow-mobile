import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface Props{
    onXPress: ()  => void;
    currentTime: string;
    percent: string;
}

export const WorkoutTimer: React.FC<Props> = ({onXPress, currentTime, percent}) => {
    console.log(percent)
    return(
        <View style={styles.container}>
            <View style={[styles.line, {width: percent}]}></View>
            <View style={styles.row}>
            <Text style={styles.timeText}>{currentTime}</Text>
            <TouchableOpacity onPress={onXPress}>
                <Text style={styles.x}>x</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: '100%',
        backgroundColor: '#486550'
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 30
    },
    x: {
        color: '#B2A1A1',
        fontSize: 20
    },
    timeText: {
        color: '#fff',
        fontSize: 18
    },
    line: {
        height: 3,
        backgroundColor: '#B2A1A1'
    }

})
