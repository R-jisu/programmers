function solution(k, dungeons) {
    let answer = 0;
    const 스테미나 = k;
    const 던전 = dungeons.slice();
    const visit = new Array(던전.length).fill(false);
    const dfs = (스테미나, cnt) => {
        //만약에 k가 최소 필요 피로도([i][0])보다 작으면 x;
        //다음던전 ㄱㄱ
        for (let i = 0; i < 던전.length; i++) {
            if(!visit[i] && 스테미나 >= 던전[i][0]) {
                visit[i] = true;
                dfs(스테미나 - 던전[i][1], cnt+1);
                visit[i]=false;
            } 
        }
        answer = answer >= cnt ? answer : cnt;
    }
    dfs(스테미나, 0);
    return answer;
}