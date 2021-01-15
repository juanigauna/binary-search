function binarySearch({ array, target }) {
    let start: number = 0 
    let end:number = array.length - 1
    let tries: number = 1
    let arraySorted = array.sort()
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (arraySorted[middle] === target) {
            return {
                found: {
                    target: arraySorted[middle],
                    index: middle
                }
            }
        } else if (arraySorted[middle] > target) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        tries++
    }
    return {
        found: {},
        error: 'Target not found :('
    }
}
export default binarySearch