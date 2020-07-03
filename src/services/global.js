// auth-service.js
import { Audio } from "expo-av";
export const global = {
    playNumber: (number) => {
        return new Promise((resolve, reject) => {
            Audio.Sound.createAsync(
                { uri: number.url },
                { shouldPlay: true }
            );
            resolve();
        });
    }
}
