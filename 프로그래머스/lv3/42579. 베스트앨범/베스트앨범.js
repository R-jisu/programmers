function solution(genres, plays) {
    const answer = [];
    const 앨범 = [];
    //hashtable
    for (let i = 0; i < genres.length; i++) {
        앨범.push({index: i, genre: genres[i], play: plays[i] });
    }
    // 재생순 합 구하기
    let 재생순장르= {};
    for (let i = 0; i < genres.length; i++) {
        if( 재생순장르[genres[i]]) {
            재생순장르[genres[i]]=재생순장르[genres[i]]+plays[i]; 
        } else {
            재생순장르[genres[i]]=plays[i]; 
        }
    }
    //재생순 정렬해서 최우선 장르 구하기
    const sort재생순=Object.entries(재생순장르)
    sort재생순.sort((a,b)=>b[1]-a[1]);

    sort재생순.map((장르) => {
        let arr = [];
        for (let i = 0; i < 앨범.length; i++) {
            if(장르[0] === 앨범[i].genre) arr.push(앨범[i])
        }
        //재생별로 정렬
        arr.sort((a,b) => b.play - a.play);
        arr.forEach((el, idx) => {
            console.log(el);
            if(idx<2) {
                if(el) {
                    answer.push(arr[idx].index)
                }
            }
        })
    } )
    return answer;
}