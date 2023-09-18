function solution(n, m, section) {
    let lastPaintIndex = section[0]+m-1;
    let cnt = 1;
    section.map((el) => {
        if(el > lastPaintIndex) {
            cnt+=1;
            lastPaintIndex=el+m-1;
            while(lastPaintIndex > n) {
                lastPaintIndex-=1;
            }
        }
    })
    return cnt;
}