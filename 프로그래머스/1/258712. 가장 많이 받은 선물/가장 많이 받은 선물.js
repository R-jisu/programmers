function solution(friends, gifts) {
  const table = {};
  const answer = [];
  friends.forEach((name, idx) => {
    table[name] = { 준선물: {}, 받은선물: 0, 선물지수: 0 };
    answer[idx] = 0;
  });

  gifts.forEach((gift) => {
    const [give, get] = gift.split(" ");
    table[get].받은선물 += 1;
    table[get].선물지수 -= 1;
    table[give].선물지수 += 1;
    if (!table[give].준선물[get]) table[give].준선물[get] = 1;
    else table[give].준선물[get] += 1;
  });

  friends.forEach((me, idx) => {
    friends.forEach((friend) => {
      if (me === friend) return;
      if (table[friend].준선물[me] === undefined) table[friend].준선물[me] = 0;
      if (table[me].준선물[friend] === undefined) table[me].준선물[friend] = 0;
      if (table[me].준선물[friend] > table[friend].준선물[me]) {
        answer[idx] += 1;
      } else if (table[me].준선물[friend] === table[friend].준선물[me]) {
        if (table[me].선물지수 > table[friend].선물지수) answer[idx] += 1;
      }
    });
  });

  const result = Math.max(...answer);
  return result;
}