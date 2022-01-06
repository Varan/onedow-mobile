import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "mobx-persist";
import { createContext } from "react";
import { WorkoutStore } from "./WorkoutStore";
import { WorkoutTimerStore } from "./WorkoutTimerStore";


const hydrate = create({
    storage: AsyncStorage,   // or AsyncStorage in react-native.
                            // default: localStorage
    jsonify: true  // if you use AsyncStorage, here shoud be true
                    // default: true
})

// when we make a new root store, it hydrates the wworkoutTimer and workout stores; 
// if they are stored in local/async storage, and if they are then it'll save values as they change over time
export class RootStore{
    workoutStore = new WorkoutStore(this)
    workoutTimerStore = new WorkoutTimerStore()

    constructor(){
        hydrate('workoutTimer', this.workoutTimerStore).then(() => {
            if (this.workoutTimerStore.isRunning){
                this.workoutTimerStore.measure();
            }
        });
        hydrate('workout', this.workoutStore);
    }
}

export const RootStoreContext = createContext(new RootStore());