# brute force solution to find the maximum sum in subarray

inputArray = [2, 2, 1, 1, -2, 2]

bucket = 0
maxSum = -999

for i in range(len(inputArray)-1 , -1, -1):
    bucket = bucket + 1
    for j in range(0, i+1, 1):
        sum = 0
        for k in range(j, bucket + j, 1):
            sum = sum + inputArray[k]
        if(sum > maxSum):
            maxSum = sum


print("maxSum ==== ", maxSum)
        