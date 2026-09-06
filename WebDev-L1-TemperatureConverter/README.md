# Web Development & Designing — Level 1 Task 3: Temperature Converter Website

**OASIS INFOBYTE Internship (OIBSIP)**  
**Project Name:** Interactive Temperature Converter  
**Track:** Web Development & Designing  
**Level:** Level 1  
**Task Number:** Task 3 (Final Level 1 Task)  

---

## 📌 Project Overview
A lightweight, precision-engineered web application that performs scientific temperature conversions across Celsius (°C), Fahrenheit (°F), and Kelvin (K). Built with semantic HTML5, modern CSS3, and vanilla JavaScript without external runtime dependencies. The application includes input validation, simultaneous multi-unit output, dynamic formula displays, and strict physical limit verification (Absolute Zero boundary protection).

---

## 🎯 Objectives
- Create a user-friendly and centered temperature conversion utility.
- Provide a numeric input field with a unit selection dropdown (Celsius, Fahrenheit, Kelvin).
- Implement a dedicated "Convert" button that triggers calculations.
- Display converted output values with clear unit labels and underlying mathematical formulas.
- Implement strict validation to reject empty and non-numeric inputs with user-friendly error messages.
- Enforce thermodynamic boundaries by detecting and rejecting values below Absolute Zero.
- Deliver a 100% responsive, accessible interface on both mobile and desktop viewports.

---

## 🛠️ Technologies Used
- **HTML5:** Semantic form and structure (`<main>`, `<header>`, `<section>`, `<input>`, `<select>`, `<button>`)
- **CSS3:** Flexbox, CSS Grid, custom gradient backgrounds, responsive typography, state transitions
- **Vanilla JavaScript (ES6+):** Pure DOM manipulation, event listeners, input sanitization, and mathematical algorithms (zero external frameworks or libraries)

---

## 🧮 Conversion Formulas

| From Unit | To Celsius (°C) | To Fahrenheit (°F) | To Kelvin (K) |
| :--- | :--- | :--- | :--- |
| **Celsius (°C)** | — | `(°C × 9/5) + 32` | `°C + 273.15` |
| **Fahrenheit (°F)** | `(°F − 32) × 5/9` | — | `((°F − 32) × 5/9) + 273.15` |
| **Kelvin (K)** | `K − 273.15` | `((K − 273.15) × 9/5) + 32` | — |

---

## 🛡️ Validation & Absolute-Zero Handling

### 1. Non-Numeric & Empty Input Protection
- Checks whether the input is empty or evaluates to `NaN`.
- Highlights the input field with a red border (`.input-error-state`) and displays a clear message:  
  *"Please enter a valid numerical temperature."*

### 2. Physical Absolute Zero Limits
Thermodynamic temperature cannot decrease below Absolute Zero (0 Kelvin). The application checks input against known physical minimums before computing:
- **Celsius:** Value must not be less than **−273.15 °C**.  
  *Error:* `"Physical Limit Violation: Temperature cannot be below Absolute Zero (-273.15 °C)."`
- **Fahrenheit:** Value must not be less than **−459.67 °F**.  
  *Error:* `"Physical Limit Violation: Temperature cannot be below Absolute Zero (-459.67 °F)."`
- **Kelvin:** Value must not be less than **0 K**.  
  *Error:* `"Physical Limit Violation: Kelvin temperature cannot be negative (Absolute Zero is 0 K)."`

---

## 📂 Folder Structure
```text
OIBSIP/
└── WebDev-L1-TemperatureConverter/
    ├── index.html       # Semantic converter markup
    ├── style.css        # Responsive styling and layout
    ├── script.js        # Vanilla JS conversion and validation logic
    ├── README.md        # Comprehensive documentation
    └── screenshots/     # Desktop and mobile preview screenshots
```

---

## 🚀 How to Run Locally
No server, installation, or Node dependencies are required.

1. **Direct File Open:**
   - Navigate to `OIBSIP/WebDev-L1-TemperatureConverter/`.
   - Double-click `index.html` to open directly in Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.

2. **VS Code Live Server:**
   - Open the `OIBSIP` repository folder in VS Code.
   - Right-click `OIBSIP/WebDev-L1-TemperatureConverter/index.html` &rarr; **Open with Live Server**.

---

## 🧪 Comprehensive Test Cases

| Test Case | Input Value | Selected Unit | Expected Output 1 | Expected Output 2 | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Celsius to F & K** | `25` | Celsius | `77 °F` | `298.15 K` | Pass |
| **Fahrenheit to C & K** | `98.6` | Fahrenheit | `37 °C` | `310.15 K` | Pass |
| **Kelvin to C & F** | `300` | Kelvin | `26.85 °C` | `80.33 °F` | Pass |
| **Zero Temperature** | `0` | Celsius | `32 °F` | `273.15 K` | Pass |
| **Freezing Point F** | `32` | Fahrenheit | `0 °C` | `273.15 K` | Pass |
| **Absolute Zero Limit C** | `-273.15` | Celsius | `-459.67 °F` | `0 K` | Pass |
| **Absolute Zero Limit K** | `0` | Kelvin | `-273.15 °C` | `-459.67 °F` | Pass |
| **Below Absolute Zero C** | `-300` | Celsius | Error Banner Shown | Results Hidden | Pass |
| **Below Absolute Zero F** | `-500` | Fahrenheit | Error Banner Shown | Results Hidden | Pass |
| **Negative Kelvin** | `-10` | Kelvin | Error Banner Shown | Results Hidden | Pass |
| **Empty Input** | `""` | Any | Error Banner Shown | Results Hidden | Pass |
| **Decimal Precision** | `36.6` | Celsius | `97.88 °F` | `309.75 K` | Pass |

---

## 📸 Screenshots
*(Include screenshots of your desktop view and mobile responsive view here)*

- `screenshots/desktop-view.png`
- `screenshots/mobile-view.png`

---

## 🎓 Credits & Acknowledgements
- Developed as part of the **OASIS INFOBYTE Internship Program (OIBSIP)**.
- Track: **Web Development & Designing** (Level 1, Task 3 — Final Level 1 Milestone).
