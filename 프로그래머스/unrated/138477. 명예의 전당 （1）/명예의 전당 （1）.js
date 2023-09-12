function solution(k, scores) {
    const 명예의전당 = [];
    const result = [];
    scores.map((score, idx) => {
        if(idx < k) {
            명예의전당.push(score);
            result.push(Math.min(...명예의전당));
        }
        else {
            let 명전sort = 명예의전당.sort((a,b)=> b-a);
            if(명전sort[k-1] < score) {
                명예의전당.push(score);
                명전sort= 명예의전당.sort((a,b)=> b-a);
            } 
            result.push(명전sort[k-1])
        }
    })
    return result;
}