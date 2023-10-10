function solution(wallpaper) {
  const answer = wallpaper.slice();
  const dragStart = [51 , 51];
  // 처음 행 렬 최소값
  const dragEnd = [0, 0];
  // 마지막 행 렬 최대값
  answer.forEach((arr, row) => {
    for (let col = 0; col < arr.length; col++) {
      if(arr[col] === '#') {
        if(dragStart[0] >= row) dragStart[0] = row;
        if(dragEnd[0] <= row) dragEnd[0] = row+1;
        if(dragStart[1] >= col) dragStart[1] = col;
        if(dragEnd[1] <= col) dragEnd[1] = col+1;
      }
    }
  })
  return [...dragStart, ...dragEnd];  
}