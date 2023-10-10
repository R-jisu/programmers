function solution(players, callings) {
  const kPlayervScore = {};
  const kScorevPlayer = {};
  const result = players.slice();
  players.map((player, idx)=> {
    kPlayervScore[player] = idx;
    kScorevPlayer[idx] = player;
  })
  kScorevPlayer
  kPlayervScore
  callings.map(players => {
    //불린 사람의 스코어
    const playersPreScore = kPlayervScore[players];
    //밀린 사람 이름
    const 밀린사람 = kScorevPlayer[playersPreScore-1];
    // 결과에서 불린 사람의 스코어 자리에 밀린 사람 넣기
    result[playersPreScore] = 밀린사람;
    // 불린 사람의 스코어 -1 자리에 불린 사람 넣기
    result[playersPreScore-1] = players
    //기존 해시 테이블 업데이트
    kScorevPlayer[playersPreScore] = 밀린사람;
    kScorevPlayer[playersPreScore-1] = players;
    kPlayervScore[players] = playersPreScore-1;
    kPlayervScore[밀린사람] = playersPreScore;
  })
  return result;
}