function largestSubarraySum(array){
    let globalSum = -Infinity
    let localSum = 0
    for(let i = 0; i < array.length; i++){
        const num = array[i]
        localSum = Math.max(num, num + localSum)
        if(localSum > globalSum){
            globalSum = localSum
        }
    }
    if (globalSum < 0){
        return 0
    }
    
    return globalSum
}