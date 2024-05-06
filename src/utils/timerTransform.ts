export function TimerTransform(mediaInSeconds: number) : string {
    if(mediaInSeconds >= 3600){
        const hours = Math.floor(mediaInSeconds / 3600)
        const hourMod = Math.floor(mediaInSeconds % 3600)
        const minutes = Math.floor(hourMod / 60)
        const seconds = Math.floor(hourMod % 60)
        return  `${hours <= 9 ? '0': ''}${hours}:${minutes <= 9 ? '0': ''}${minutes}:${seconds <= 9 ? '0': ''}${seconds}`
    } else {
        const hourMod = Math.floor(mediaInSeconds % 3600)
        const minutes = Math.floor(hourMod / 60)
        const seconds = Math.floor(hourMod % 60)
        return  `${minutes <= 9 ? '0': ''}${minutes}:${seconds <= 9 ? '0': ''}${seconds}`
    }
}