function collectdata() {
    var namearr;
    var input = document.getElementById('ip').value;
    namearr = input.split(",");
    var numarr = [];
    namearr.forEach(str => {
        numarr.push(Number(str));
    });
    return numarr;
}
/*********************************
 merge algotithm from google{DAA}
 ********************************/
function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    var i = 0;
    var j = 0;
    var k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    return arr;
}

function mergeSortt(arr, l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSortt(arr, l, m);
    mergeSortt(arr, m + 1, r);
    return merge(arr, l, m, r);
}


/*********************************
 merge code execution time calculation 
********************************/
function mergesort() {
    var startTime = performance.now();
    var inputArr = collectdata();
    var ans = mergeSortt(inputArr, 0, inputArr.length);
    var endTime = performance.now();
    var executionTime = endTime - startTime;
    document.getElementById('output').innerHTML = ans + "<br>Execution time: " + executionTime + " milliseconds";
}

/*********************************
 quick/partition algotithm from google{DAA}
 ********************************/

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}

function quickSortt(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSortt(arr, low, pi - 1);
        quickSortt(arr, pi + 1, high);
    }
    return arr;
}

function quicksort() {
    var startTime = performance.now();
    var inputArr1 = collectdata();
    var ans1 = quickSortt(inputArr1, 0, inputArr1.length);
    var endTime = performance.now();
    var executionTime = endTime - startTime;
    document.getElementById('output').innerHTML = ans1 + "<br>Execution time: " + executionTime + " milliseconds";
}

/*********************************
 bubble algotithm from google{DAA}
 ********************************/
function bubbleSortt(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

function bubblesort() {
    var startTime = performance.now();
    var inputArr2 = collectdata();
    var ans2 = bubbleSortt(inputArr2);
    var endTime = performance.now();
    var executionTime = endTime - startTime;
    document.getElementById('output').innerHTML = ans2 + "<br>Execution time: " + executionTime + " milliseconds";
}

/*****************************************************
 calculation of number of elements in a  given dataset
 ****************************************************/
function analyze() {
    var startTime = performance.now();
    var inputArr3 = collectdata();
    var ans3 = inputArr3.length;
    var endTime = performance.now();
    var executionTime = endTime - startTime;
    document.getElementById('output').innerHTML = "Number of words=" + ans3 + "<br>Execution time: " + executionTime + " milliseconds";
}

/*********************************
 search algotithm from google{DAA}
 ********************************/
function searchh(arr, n, x) {
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == x)
            return "found";

    return "not found";
}

function search() {
    var startTime = performance.now();
    var inputArr4 = collectdata();
    var ans4 = searchh(inputArr4, inputArr4.length, 5);
    var endTime = performance.now();
    var executionTime = endTime - startTime;
    document.getElementById('output').innerHTML = ans4 + "<br>Execution time: " + executionTime + " milliseconds";
}

function Min(arr) {
    var len = arr.length, min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
};

function Max(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
};

function minmax() {
    var startTime = performance.now();
    var inputArr5 = collectdata();
    var ans5 = Max(inputArr5);
    var ans6 = Min(inputArr5);
    var endTime = performance.now();
    var executionTime = endTime - startTime;
    var s1 = "Maximum element=" + ans5 + " Minimum element=" + ans6;
    document.getElementById('output').innerHTML = s1 + "<br>Execution time: " + executionTime + " milliseconds";
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/;
    return specialChars.test(str);
}
