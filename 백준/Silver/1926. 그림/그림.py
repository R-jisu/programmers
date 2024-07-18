from collections import deque
graph = []
visited = set([])

cnt = 0
max = 0

def dfs(start_x, start_y, graph):
    global cnt
    global visited
    dx = [1,0,-1,0]
    dy = [0,1,0,-1]
    size = 1
    cnt += 1
    visited.add((start_x, start_y))
    queue = deque([(start_x, start_y)])
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = dx[i] + x
            ny = dy[i] + y
            if(0 <= nx < x_size and 0 <= ny < y_size):
                if (nx,ny) not in visited and graph[nx][ny] == 1:
                    visited.add((nx,ny))
                    queue.append((nx,ny))
                    size += 1
    return size

ex_input = list(map(int,input().split(' ')))
x_size, y_size = ex_input

for i in range(x_size):
    graph.append(list(map(int,input().split(' '))))

for i in range(x_size):
    for j in range(y_size):
        if graph[i][j] == 1 and (i,j) not in visited:
            size = dfs(i,j,graph=graph)
            if max < size: max = size

print(cnt)
print(max)
