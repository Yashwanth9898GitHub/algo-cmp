# 🔍 Algorithm Comparison & Analysis Tool

A comprehensive, interactive web application to visualize and compare sorting algorithms, searching algorithms, and analyze datasets in real-time. Built with vanilla JavaScript, HTML, and CSS.

**Live Demo:** [https://algo-cmp.vercel.app](https://algo-cmp.vercel.app)

---

## 📋 Table of Contents

- [Features](#-features)
- [Algorithms Included](#-algorithms-included)
- [Getting Started](#-getting-started)
- [How to Use](#-how-to-use)
- [Algorithm Complexities](#-algorithm-complexities)
- [Project Structure](#-project-structure)
- [Performance Analysis](#-performance-analysis)
- [Responsive Design](#-responsive-design)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

✅ **Real-time Performance Metrics** - Execution time in milliseconds  
✅ **Time & Space Complexity Display** - Big O notation for every algorithm  
✅ **Multiple Sorting Algorithms** - Merge, Quick, Bubble, and Heap Sort  
✅ **Advanced Searching** - Linear and Binary Search  
✅ **Dataset Analysis** - Min/Max finder and comprehensive statistics  
✅ **Input Validation** - Error handling for invalid inputs  
✅ **Professional UI** - Gradient design with smooth animations  
✅ **Fully Responsive** - Works on desktop, tablet, and mobile  
✅ **Educational Focus** - Detailed algorithm explanations  

---

## 🔧 Algorithms Included

### **Sorting Algorithms**

| Algorithm | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity | Stable | Best For |
|-----------|:-----:|:-----:|:-----:|:-----:|---------|
| **Merge Sort** | O(n log n) | O(n log n) | O(n) | ✅ Yes | Large datasets, guaranteed performance |
| **Quick Sort** | O(n log n) | O(n²) | O(log n) | ❌ No | General purpose, fast in practice |
| **Bubble Sort** | O(n²) | O(n²) | O(1) | ✅ Yes | Educational, nearly sorted data |
| **Heap Sort** | O(n log n) | O(n log n) | O(1) | ❌ No | Guaranteed performance, limited memory |

### **Searching Algorithms**

| Algorithm | Time Complexity | Space Complexity | Prerequisites | Best For |
|-----------|:-----:|:-----:|---------|---------|
| **Linear Search** | O(n) | O(1) | None | Small or unsorted data |
| **Binary Search** | O(log n) | O(1) | Sorted array | Large sorted datasets |

### **Analysis Operations**

| Operation | Time Complexity | Space Complexity |
|-----------|:-----:|:-----:|
| **Min/Max Finding** | O(n) | O(1) |
| **Dataset Analysis** | O(n) | O(1) |

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies required!

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Yashwanth9898GitHub/algo-cmp.git
cd algo-cmp
```

2. **Open in browser**
```bash
# Simply open index.html
open index.html

# Or serve locally (optional)
python -m http.server 8000
# Then visit http://localhost:8000
```

---

## 📖 How to Use

### Basic Steps

1. **Enter Data**
   - Input numbers separated by commas (e.g., `64, 34, 25, 12, 22`)
   - Click any algorithm button

2. **View Results**
   - Sorted/searched output
   - Execution time in milliseconds
   - Time & Space complexity
   - Algorithm-specific notes

3. **Analyze Data**
   - Find minimum/maximum values
   - Get comprehensive dataset statistics
   - Single-pass efficient algorithms

### Example Usage

**Input:** `5, 2, 8, 1, 9`

**Merge Sort Result:**
```
Result: [1, 2, 5, 8, 9]
Execution Time: 0.1234 ms
Time Complexity: O(n log n)
Space Complexity: O(n)
Note: Divide & Conquer approach. Excellent for linked lists and external sorting.
```

---

## 📊 Algorithm Complexities

### Sorting Algorithms Comparison

#### **Merge Sort** 🏅
- **Best Case:** O(n log n)
- **Average Case:** O(n log n)
- **Worst Case:** O(n log n)
- **Space:** O(n)
- **Stable:** Yes
- **In-place:** No
- **Use When:** You need guaranteed O(n log n) performance, stability matters, or sorting linked lists

#### **Quick Sort** ⚡
- **Best Case:** O(n log n)
- **Average Case:** O(n log n)
- **Worst Case:** O(n²) - with poor pivot selection
- **Space:** O(log n) - recursion stack
- **Stable:** No
- **In-place:** Yes
- **Use When:** You want fast average-case performance, have good pivot selection, or memory is limited

#### **Bubble Sort** 🎓
- **Best Case:** O(n) - already sorted with optimization
- **Average Case:** O(n²)
- **Worst Case:** O(n²)
- **Space:** O(1)
- **Stable:** Yes
- **In-place:** Yes
- **Use When:** Learning algorithms, data is nearly sorted, or simplicity is priority

#### **Heap Sort** 💎
- **Best Case:** O(n log n)
- **Average Case:** O(n log n)
- **Worst Case:** O(n log n)
- **Space:** O(1)
- **Stable:** No
- **In-place:** Yes
- **Use When:** You need guaranteed O(n log n) with O(1) space, or memory is critical

### Searching Algorithms Comparison

#### **Linear Search** 📍
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- **Works on:** Sorted or unsorted data
- **Best for:** Small datasets, unsorted arrays
- **Pros:** Simple, works on any data
- **Cons:** Slow for large datasets

#### **Binary Search** 🎯
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)
- **Works on:** Sorted data only
- **Best for:** Large sorted datasets
- **Pros:** Exponentially faster, efficient
- **Cons:** Requires sorted array

---

## 🗂️ Project Structure

```
algo-cmp/
├── index.html          # Main HTML structure
├── code.js             # Core algorithm implementations
├── style.css           # Professional styling & responsive design
├── img.png             # Algorithm visualization image
└── README.md           # Documentation (you are here)
```

### File Descriptions

#### `index.html`
- Clean, semantic HTML structure
- Organized button groups by algorithm category
- Accessible form inputs with proper labels
- Output section for results display

#### `code.js`
- **Core Algorithms:**
  - `mergeSortt()`, `merge()` - Merge Sort implementation
  - `quickSortt()`, `partition()`, `swap()` - Quick Sort
  - `bubbleSortt()` - Bubble Sort with optimization
  - `heapSortt()`, `heapify()` - Heap Sort

- **Search Algorithms:**
  - `linearSearch()` - Sequential search
  - `binarySearch()` - Binary search for sorted arrays

- **Analysis Functions:**
  - `findMin()`, `findMax()` - Find extremes
  - `findMinMax()` - Both in single pass
  - `analyze()` - Comprehensive statistics

- **Utility Functions:**
  - `collectdata()` - Parse and validate input
  - `displayResult()` - Format output with complexity info
  - `showError()` - Error handling
  - `copyArray()` - Non-mutating operations

#### `style.css`
- **Design:** Gradient background, modern buttons
- **Layout:** Flexbox-based responsive design
- **Accessibility:** High contrast, focus states
- **Responsive:** Mobile-first approach
- **Animation:** Smooth transitions and fade-ins

---

## ⚙️ Performance Analysis

### Execution Time Factors

1. **Array Size** - Larger arrays = longer execution
2. **Data Distribution** - Nearly sorted vs. random affects Quick Sort
3. **Algorithm Choice** - O(n²) vs O(n log n) performance gap
4. **Browser/Device** - Hardware capabilities affect timing

### Benchmark Guide

| Array Size | Bubble Sort | Quick Sort | Merge Sort | Binary Search |
|:----------:|:-----:|:-----:|:-----:|:-----:|
| 10 | < 0.1ms | < 0.1ms | < 0.1ms | < 0.1ms |
| 100 | ~0.5ms | ~0.2ms | ~0.3ms | < 0.1ms |
| 1000 | ~5ms | ~1ms | ~2ms | < 0.1ms |
| 10000 | ~50ms | ~10ms | ~15ms | < 0.1ms |

*Note: Actual times vary by browser, device, and data distribution*

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1024px+) - Full layout with all features
- **Tablet** (768px - 1023px) - Stacked buttons, optimized spacing
- **Mobile** (< 768px) - Single column, touch-friendly buttons

### Mobile Optimizations
- Large, easy-to-tap buttons
- Full-width input field
- Readable font sizes
- Proper spacing and padding

---

## 🔍 Code Quality Features

✅ **JSDoc Comments** - Full documentation for every function  
✅ **Input Validation** - Comprehensive error checking  
✅ **Error Handling** - User-friendly error messages  
✅ **DRY Principles** - Reusable utility functions  
✅ **Performance** - Non-mutating original arrays  
✅ **Accessibility** - ARIA labels, semantic HTML  
✅ **Browser Support** - Works on all modern browsers  

---

## 📈 Learning Outcomes

This tool helps you understand:

- How different sorting algorithms perform in practice
- Time complexity vs. space complexity trade-offs
- Why algorithm choice matters for large datasets
- Divide & Conquer approach (Merge Sort, Quick Sort)
- Heap data structure (Heap Sort)
- Binary search efficiency
- Input validation and error handling
- Professional web application development

---

## 🐛 Known Limitations

- Execution times are approximate (browser-dependent)
- Binary Search requires manual array sorting
- Very large arrays (>100,000 elements) may slow visualization
- Linear Search searches for hardcoded value 5 (enhancement pending)

---

## 🚀 Future Enhancements

- [ ] Real-time visualization with animation
- [ ] Custom search value input for all search algorithms
- [ ] Comparison mode (run 2 algorithms side-by-side)
- [ ] More sorting algorithms (Insertion, Selection, Shell Sort)
- [ ] Average case analysis with multiple runs
- [ ] Data distribution options (random, sorted, reverse)
- [ ] Copy results to clipboard
- [ ] Dark mode toggle
- [ ] Download results as CSV

---

## 💡 Tips & Best Practices

### When to Use Each Algorithm

**Merge Sort:**
- Guaranteed O(n log n) performance needed
- Stability is important
- Sorting linked lists
- External sorting (large files)

**Quick Sort:**
- General-purpose fast sorting
- In-place sorting required
- Average case performance is good
- Avoid on already-sorted data without good pivot selection

**Bubble Sort:**
- Learning algorithm fundamentals
- Tiny datasets (< 20 items)
- Nearly sorted data with optimization
- Educational demonstrations

**Heap Sort:**
- Guaranteed O(n log n) with O(1) space
- Real-time systems with memory constraints
- When stability doesn't matter

**Linear Search:**
- Unsorted arrays
- Small datasets
- When simplicity matters most

**Binary Search:**
- Large sorted datasets
- Many searches on same data
- When performance is critical

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Jitta Yashwanth Reddy**
- GitHub: [@Yashwanth9898GitHub](https://github.com/Yashwanth9898GitHub)
- Project: [algo-cmp](https://github.com/Yashwanth9898GitHub/algo-cmp)

---

## 📚 References & Resources

- [Big O Notation Guide](https://en.wikipedia.org/wiki/Big_O_notation)
- [Sorting Algorithms Comparison](https://en.wikipedia.org/wiki/Sorting_algorithm)
- [Search Algorithms](https://en.wikipedia.org/wiki/Search_algorithm)
- [Algorithm Visualization](https://visualgo.net/)

---

## ⭐ Show Your Support

If you found this tool helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting issues
- 💬 Suggesting improvements
- 📢 Sharing with others learning algorithms

---

**Last Updated:** August 20, 2026  
**Version:** 2.0.0  
**Status:** ✅ Active & Maintained

