import { observer } from "mobx-react-lite";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RouteComponentProps } from "react-router"; // react router or react router native?
import { RootStoreContext } from "../stores/RootStore";
import { CurrentExercise } from "../stores/WorkoutStore";
import { Fab } from "../ui/Fab";
import { HistoryCard } from "../ui/HistoryCard";

interface Props extends RouteComponentProps{}

export const WorkoutHistory: React.FC<Props> = observer(({history}) => {
    const rootStore = React.useContext(RootStoreContext)

    const rows: Array<
    Array<{
      date: string;
      exercises: CurrentExercise[];
    }>
  > = [];

    Object.entries(rootStore.workoutStore.history).forEach(([date, exercises], i) => {

        if (i % 3 === 0){
            rows.push([{
                date,
                exercises
            }])
        } else {
            rows[rows.length - 1].push({
                date,
                exercises
            })
        }
    });

/*
HOW IT USED TO WORK:

// object.entries turns an object into an array; each item is an array is a key, value pair of date, currentExercises

[
    [hc, hc]
    [hc, hc]
    ...
]
*/

    return(
        <View style={styles.container}>
            <FlatList 
            renderItem={({item}) => (
                <View style={styles.row}>
                    {item.map(({date, exercises}) => (
                    <View key={date} style={styles.cardContainer}>
                     <HistoryCard onPress={() => {
                         const parts = date.split('-')
                         history.push(`/workout/${parts[0]}/${parts[1]}/${parts[2]}`);
                        }}
                          header={date} currentExercises={exercises}></HistoryCard>
                    </View>
                    ))}
                {item.length < 3 ? <View style={styles.cardContainer}></View>:null}
                {item.length < 2 ? <View style={styles.cardContainer}></View>:null}

                </View>
            )}
            data={rows} 
            keyExtractor={(item) => item.reduce((pv, cv) => pv + " " + cv.date, "")}>

            </FlatList>
            
            <Fab onPress={() => {
                if (!rootStore.workoutStore.hasCurrentWorkout){

                    const {currentBarbellRow, currentBenchPress, currentDeadlift, currentSquat, currentOverheadPress} = rootStore.workoutStore;
                    const emptySets = ["", "", "", "", ""]

                    if (rootStore.workoutStore.lastWorkoutType === 'b') {
                        
                        rootStore.workoutStore.currentExercises.push(
                            {
                            exercise: "Squat",
                            numSets: 5,
                            reps: 5,
                            sets: [...emptySets],
                            weight: currentSquat
                            },
                            {
                            exercise: "Bench Press",
                            numSets: 5,
                            reps: 5,
                            sets: [...emptySets],
                            weight: currentBenchPress
                            },
                            {
                            exercise: "Deadlift",
                            numSets: 1,
                            reps: 5,
                            sets: ["", "x", "x", "x", "x"],
                            weight: currentDeadlift
                            }
                            );

                            rootStore.workoutStore.currentSquat += 5
                            rootStore.workoutStore.currentBenchPress += 5
                            rootStore.workoutStore.currentDeadlift += 5

                    } else {
                        rootStore.workoutStore.currentExercises.push(
                            {
                            exercise: "Squat",
                            numSets: 5,
                            reps: 5,
                            sets: [...emptySets],
                            weight: currentSquat
                            },
                            {
                            exercise: "Overhead Press",
                            numSets: 5,
                            reps: 5,
                            sets: [...emptySets],
                            weight: currentOverheadPress
                            },
                            {
                            exercise: "Barbell Row",
                            numSets: 5,
                            reps: 5,
                            sets: [...emptySets],
                            weight: currentBarbellRow
                            }
                            );

                            rootStore.workoutStore.currentSquat += 5
                            rootStore.workoutStore.currentOverheadPress += 5
                            rootStore.workoutStore.currentBarbellRow += 5
                    }
    
                        rootStore.workoutStore.lastWorkoutType = 
                            rootStore.workoutStore.lastWorkoutType === "a" ? "b" : "a";
                            
                }



                    history.push('/current-workout')
            }}></Fab>
            
        </View>
    );
});

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    cardContainer: {
        flex: 1,
        padding: 10
    },
    container: {
        flex: 1
    }
})
