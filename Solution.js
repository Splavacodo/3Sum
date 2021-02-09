let threeSum = () => { 
    const results = []; 
    //if the list of nums doesn't have more than three elements return nothing
    if(nums.length < 3) return results; 
    //sorting the array before looking for numbers that works would help
    nums.sort((a, b) => a - b); 
    //since there is no target in the arguments, need to initialize
    let target = 0; 
    
    //loop until the third to last num
    for(let i = 0; i < nums.length - 2; i++) {
        //if the num at index i is greater than the target, go to next index
        //since positive numbers can't add up to 0
        if(nums[i] > target) break;
        //need to check for repeats
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let y = i + 1; //y is the second number, x y z
        //z will be the last element which will decrement, checking if it adds up to target
        //(i + y) + z = 0
        let z = nums.length - 1;
        while(y < z) {
            //init var to keep track of sum
            let sum = nums[i]  + nums[y] + nums[z];
            if(sum === target) {
                results.push([nums[i], nums[y], nums[z]]); 
                while(nums[y] === nums[y + 1]) y++; //check if y + 1 is a duplicate, if it is increment
                while(nums[z] === nums[z - 1]) z--; //check if z - 1 is a duplicate, if it is decrement
                y++; 
                z--; 
            } else if(sum < target) {
                y++; 
            } else {
                z--; 
            }
        }
    }
    return results; 
}
