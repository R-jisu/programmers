function solution(cacheSize, cities) {
    let answer = 0;
    if(cacheSize === 0) {
        return cities.length*5;
    }
    const arr = new Array(cacheSize);
    const Upper = cities.map(el => el.toUpperCase());
    for (let i = 0; i < Upper.length; i++) {
        const isExist = arr.find(el => el === Upper[i]);
        if(isExist) {
            answer+= 1;
            const index = arr.findIndex(el => el === Upper[i]);
            arr.splice(index,1);
            arr.push(Upper[i]);
        }
        else {
            answer += 5;
            arr.shift();
            arr.push(Upper[i])
        }
    }
    return answer;
}