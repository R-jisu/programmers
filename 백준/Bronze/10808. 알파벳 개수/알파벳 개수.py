word = input('')
result = [0] * 26
for i in word:
    result[ord(i)-97] += 1
print(" ".join(str(s) for s in result))