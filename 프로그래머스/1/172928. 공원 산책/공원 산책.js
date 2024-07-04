function solution(park, routes) {
    let start = []
    const xLimit = park[0].length;
    const yLimit = park.length;
    park.forEach((row,y) => {
        row.split('').forEach((col,x) => {
            if (col == "S"){
                start = [y,x]
            }
        })
    });
    let currPos = [...start]
    let flag = false
    routes.forEach(route => {
        const [head, cnt] = route.split(" ")
        let cursor = [...currPos]; 
        for (let i = 0; i < Number(cnt); i++) {
            switch (head) {
                case 'E':
                    cursor[1] += 1
                    break;
                case 'W':
                    cursor[1] -= 1
                    break;
                case 'S':
                    cursor[0] += 1
                    break; 
                case 'N':
                    cursor[0] -= 1
                    break;
            }
            if(cursor[0] >= yLimit || cursor[0] < 0 || cursor[1] >= xLimit || cursor[1] < 0) {
                flag = true
            } else {
                if (park[cursor[0]][cursor[1]] === "X") flag = true;
            }
            
        }
        if (!flag) currPos = cursor
        flag = false
    })
    return currPos;
}
