/**
 * Algorithm Comparison Tool
 * Comprehensive sorting and searching algorithms with time/space complexity analysis
 * Last Updated: 2026
 */

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Collects and validates input data
 * @returns {number[]} Array of numbers from user input
 */
function collectdata() {
    const input = document.getElementById('ip').value.trim();
    
    if (!input) {
        showError('Please enter data separated by commas');
        return [];
    }
    
    const namearr = input.split(",");
    const numarr = [];
    
    for (let str of namearr) {
        const num = Number(str.trim());
        if (isNaN(num)) {
            showError(`Invalid number: "${str.trim()}"`);
            return [];
        }
        numarr.push(num);
    }
    
    return numarr;
}

/**
 * Displays error messages to user
 * @param {string} message - Error message to display
 */
function showError(message) {
    document.getElementById('output').innerHTML = `<span style="color: red; font-weight: bold;">❌ Error: ${message}</span>`;
}

/**
 * Displays result with complexity information
 * @param {string} title - Algorithm name
 * @param {string} result - Result content
 * @param {number} executionTime - Execution time in milliseconds
 * @param {string} timeComplexity - Time complexity notation
 * @param {string} spaceComplexity - Space complexity notation
 * @param {string} notes - Additional notes about the algorithm
 */
function displayResult(title, result, executionTime, timeComplexity, spaceComplexity, notes = '') {
    const complexityInfo = `
        <div style="background-color: #f0f0f0; padding: 15px; border-radius: 8px; margin-top: 10px; font-family: monospace;">
            <strong style="font-size: 18px; color: #333;">⏱️ ${title}</strong><br>
            <span style="color: #28a745;"><strong>Result:</strong> ${result}</span><br>
            <span style="color: #007bff;"><strong>Execution Time:</strong> ${executionTime.toFixed(4)} ms</span><br>
            <span style="color: #ff6b6b;"><strong>Time Complexity:</strong> ${timeComplexity}</span><br>
            <span style="color: #ff6b6b;"><strong>Space Complexity:</strong> ${spaceComplexity}</span>
            ${notes ? `<br><span style="color: #6c757d;"><strong>📌 Note:</strong> ${notes}</span>` : ''}
        </div>
    `;
    document.getElementById('output').innerHTML = complexityInfo;
}

/**
 * Creates a copy of array to avoid mutation in original
 * @param {number[]} arr - Original array
 * @returns {number[]} Copied array
 */
function copyArray(arr) {
    return [...arr];
}

// ============================================
// MERGE SORT
// ============================================

/**
 * Merges two sorted subarrays
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} arr - Main array
 * @param {number} l - Left index
 * @param {number} m - Middle index
 * @param {number} r - Right index
 */
function merge(arr, l, m, r) {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    let i = 0, j = 0, k = l;
    
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
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

/**
 * Merge Sort algorithm - Divide and Conquer
 * Time Complexity: O(n log n) - All cases
 * Space Complexity: O(n) - Requires auxiliary arrays
 * @param {number[]} arr - Array to sort
 * @param {number} l - Left index
 * @param {number} r - Right index
 */
function mergeSortt(arr, l, r) {
    if (l < r) {
        const m = l + Math.floor((r - l) / 2);
        mergeSortt(arr, l, m);
        mergeSortt(arr, m + 1, r);
        merge(arr, l, m, r);
    }
    return arr;
}

/**
 * Merge Sort Wrapper with Performance Analysis
 * Best For: Large datasets requiring guaranteed O(n log n) performance
 * Stable: Yes
 */
function mergesort() {
    const inputArr = collectdata();
    if (inputArr.length === 0) return;
    
    const startTime = performance.now();
    const arr = copyArray(inputArr);
    const ans = mergeSortt(arr, 0, arr.length - 1);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    displayResult(
        'Merge Sort',
        `[${ans.join(', ')}]`,
        executionTime,
        'O(n log n)',
        'O(n)',
        'Divide & Conquer approach. Excellent for linked lists and external sorting.'
    );
}

// ============================================
// QUICK SORT
// ============================================

/**
 * Swaps two elements in array
 * @param {number[]} arr - Array
 * @param {number} i - First index
 * @param {number} j - Second index
 */
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * Partitions array for Quick Sort
 * Time Complexity: O(n)
 * @param {number[]} arr - Array
 * @param {number} low - Low index
 * @param {number} high - High index
 */
function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

/**
 * Quick Sort algorithm - Divide and Conquer
 * Time Complexity: O(n log n) average, O(n²) worst case
 * Space Complexity: O(log n) - Recursion stack
 * @param {number[]} arr - Array to sort
 * @param {number} low - Low index
 * @param {number} high - High index
 */
function quickSortt(arr, low, high) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSortt(arr, low, pi - 1);
        quickSortt(arr, pi + 1, high);
    }
    return arr;
}

/**
 * Quick Sort Wrapper with Performance Analysis
 * Best For: General purpose sorting with average O(n log n) performance
 * Stable: No (standard implementation)
 */
function quicksort() {
    const inputArr = collectdata();
    if (inputArr.length === 0) return;
    
    const startTime = performance.now();
    const arr = copyArray(inputArr);
    const ans = quickSortt(arr, 0, arr.length - 1);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    displayResult(
        'Quick Sort',
        `[${ans.join(', ')}]`,
        executionTime,
        'O(n log n) avg, O(n²) worst',
        'O(log n)',
        'In-place sorting. Faster in practice than Merge Sort. Beware of already-sorted data.'
    );
}

// ============================================
// BUBBLE SORT
// ============================================

/**
 * Bubble Sort algorithm - Simple Comparison Sort
 * Time Complexity: O(n²) - All cases
 * Space Complexity: O(1) - In-place
 * Optimized: Early termination if array becomes sorted
 * @param {number[]} arr - Array to sort
 */
function bubbleSortt(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        
        // Optimization: Stop if no swaps occurred
        if (!swapped) break;
    }
    
    return arr;
}

/**
 * Bubble Sort Wrapper with Performance Analysis
 * Best For: Educational purposes, nearly sorted small datasets
 * Stable: Yes
 */
function bubblesort() {
    const inputArr = collectdata();
    if (inputArr.length === 0) return;
    
    const startTime = performance.now();
    const arr = copyArray(inputArr);
    const ans = bubbleSortt(arr);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    displayResult(
        'Bubble Sort',
        `[${ans.join(', ')}]`,
        executionTime,
        'O(n²)',
        'O(1)',
        'Simple but inefficient for large datasets. Uses swapping technique.'
    );
}

// ============================================
// HEAP SORT (NEW)
// ============================================

/**
 * Heapifies a subtree rooted at index i
 * Time Complexity: O(log n)
 * @param {number[]} arr - Array
 * @param {number} n - Size of heap
 * @param {number} i - Index to heapify
 */
function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, n, largest);
    }
}

/**
 * Heap Sort algorithm - Selection Sort variant
 * Time Complexity: O(n log n) - All cases
 * Space Complexity: O(1) - In-place
 * @param {number[]} arr - Array to sort
 */
function heapSortt(arr) {
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify(arr, i, 0);
    }

    return arr;
}

/**
 * Heap Sort Wrapper with Performance Analysis
 * Best For: Guaranteed O(n log n) with O(1) space
 * Stable: No
 */
function heapsort() {
    const inputArr = collectdata();
    if (inputArr.length === 0) return;
    
    const startTime = performance.now();
    const arr = copyArray(inputArr);
    const ans = heapSortt(arr);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    displayResult(
        'Heap Sort',
        `[${ans.join(', ')}]`,
        executionTime,
        'O(n log n)',
        'O(1)',
        'In-place sorting using heap data structure. Guaranteed O(n log n) performance.'
    );
}

// ============================================
// LINEAR SEARCH
// ============================================

/**
 * Linear Search algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} arr - Array to search
 * @param {number} target - Element to find
 * @returns {number} Index if found, -1 otherwise
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return i;
    }
    return -1;
}

/**
 * Linear Search Wrapper with Performance Analysis
 * Best For: Small datasets or unsorted data
 */
function search() {
    const inputArr = collectdata();
    if (inputArr.length === 0) return;
    
    const searchValue = prompt('Enter the number to search:');
    if (searchValue === null) return;
    
    const target = Number(searchValue);
    if (isNaN(target)) {
        showError('Please enter a valid number');
        return;
    }
    
    const startTime = performance.now();
    const index = linearSearch(inputArr, target);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    const result = index !== -1 ? `Found at index ${index}` : 'Not found';
    
    displayResult(
        'Linear Search',
        result,
        executionTime,
        'O(n)',
        'O(1)',
        'Scans array sequentially. Works on unsorted data.'
    );
}

// ============================================
// BINARY SEARCH (NEW)
// ============================================

/**
 * Binary Search algorithm (requires sorted array)
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param {number[]} arr - Sorted array to search
 * @param {number} target - Element to find
 * @returns {number} Index if found, -1 otherwise
 */
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target)
            return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return -1;
}

/**
 * Binary Search Wrapper with Performance Analysis
 * Best For: Large sorted datasets
 */
function binarysearch() {
    const inputArr = collectdata();
    if (inputArr.length === 0) return;
    
    const searchValue = prompt('Enter the number to search:');
    if (searchValue === null) return;
    
    const target = Number(searchValue);
    if (isNaN(target)) {
        showError('Please enter a valid number');
        return;
    }
    
    // Sort array for binary search
    const sortedArr = copyArray(inputArr).sort((a, b) => a - b);
    
    const startTime = performance.now();
    const index = binarySearch(sortedArr, target);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    const result = index !== -1 ? `Found at sorted index ${index}` : 'Not found';
    
    displayResult(
        'Binary Search',
        result,
        executionTime,
        'O(log n)',
        'O(1)',
        'Requires sorted array. Exponentially faster than linear search for large datasets.'
    );
}

// ============================================
// MIN/MAX FINDING
// ============================================

/**
 * Finds minimum element in array
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} arr - Array
 * @returns {number} Minimum value
 */
function findMin(arr) {
    if (arr.length === 0) return null;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

/**
 * Finds maximum element in array
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} arr - Array
 * @returns {number} Maximum value
 */
function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

/**
 * Finds both min and max in single pass
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} arr - Array
 * @returns {Object} Object with min and max properties
 */
function findMinMax(arr) {
    if (arr.length === 0) return { min: null, max: null };
    
    let min = arr[0], max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    
    return { min, max };
}

/**
 * Min/Max Finding Wrapper with Performance Analysis
 */
function minmax() {
    const inputArr = collectdata();
    if (inputArr.length === 0) return;
    
    const startTime = performance.now();
    const { min, max } = findMinMax(inputArr);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    const result = `Max: ${max}, Min: ${min}`;
    
    displayResult(
        'Min/Max Finding',
        result,
        executionTime,
        'O(n)',
        'O(1)',
        'Single pass algorithm finds both extremes efficiently.'
    );
}

// ============================================
// DATASET ANALYSIS
// ============================================

/**
 * Analyzes dataset properties
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function analyze() {
    const inputArr = collectdata();
    if (inputArr.length === 0) return;
    
    const startTime = performance.now();
    
    const count = inputArr.length;
    const sum = inputArr.reduce((a, b) => a + b, 0);
    const avg = sum / count;
    const { min, max } = findMinMax(inputArr);
    const range = max - min;
    
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    const result = `
        Count: ${count} | Sum: ${sum} | Average: ${avg.toFixed(2)} | 
        Min: ${min} | Max: ${max} | Range: ${range}
    `;
    
    displayResult(
        'Dataset Analysis',
        result,
        executionTime,
        'O(n)',
        'O(1)',
        'Comprehensive statistics in single pass.'
    );
}

// ============================================
// UTILITY FUNCTION FOR VALIDATION
// ============================================

/**
 * Validates if string contains special characters
 * @param {string} str - String to validate
 * @returns {boolean} True if special chars found
 */
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/;
    return specialChars.test(str);
}
