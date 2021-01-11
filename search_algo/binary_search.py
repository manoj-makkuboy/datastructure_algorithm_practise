input_array = [1, 12, 33, 44, 55, 66, 77, 88, 99]


def binary_search(arr, x):
    n = len(arr)
    break_point = n//2
    l1 = 0
    l2 = break_point
    r1 = break_point + 1
    r2 = n - 1

    if(arr[l1] == x):
        return l1
    if(arr[l2] == x):
        return l2
    if(arr[r1] == x):
        return r1
    if(arr[r2] == x):
        return r2
    if(arr[l1] < x < arr[l2]):
        sub_array = arr[l1 : (l2 + 1)] 

        if(len(sub_array) == 2):
            return "not found"

        return binary_search(sub_array, x)
    if(arr[r1] < x < arr[r2]):
        sub_array = arr[r1 : (r2 + 1)]

        if(len(sub_array) == 2):
            return "not found"
            
        return binary_search(sub_array, x)
    return "not found"

print("index of the given value is ", binary_search(input_array, 55))

