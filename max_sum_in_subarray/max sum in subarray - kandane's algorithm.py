inputArray = [2, 2, 1, 1, -2, 2]

# initializing 
currentMax = globalMax = inputArray[0]

for i in range(1, len(inputArray)):
    currentMax = max(inputArray[i], currentMax + inputArray[i])
    if(currentMax > globalMax):
        globalMax = currentMax
    
print (globalMax)