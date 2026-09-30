# AgriSahayak

## Agriculture & AgriTech Mobile Application for Farmer Self-Service

AgriSahayak is a farmer-centric digital agriculture platform designed to provide accessible, practical, and intelligent agricultural assistance through a simple self-service interface.

The application combines crop recommendation, weather information, farmer data management, historical crop records, and offline-first data entry into a unified platform. It is designed to remain useful even in areas with unreliable internet connectivity by allowing farmers to enter and save field information offline and synchronize it when connectivity is restored.

---

## Key Features

### 1. Farmer Authentication
- Secure farmer registration and login.
- Individual farmer profiles.
- Farmer-specific crop records and historical data.
- Session-based access to saved information.

### 2. Crop Recommendation
- Accepts soil and environmental parameters such as:
  - Soil type
  - Nitrogen (N)
  - Phosphorus (P)
  - Potassium (K)
  - Temperature
  - Rainfall
- Generates suitable crop recommendations based on the provided conditions.
- Supports both online backend recommendations and an offline browser-based fallback.

### 3. Live Weather Information
- Current weather information based on the selected location.
- Weather search by city.
- Multi-day weather forecast.
- Designed to assist farmers in making informed agricultural decisions.

### 4. Online and Offline Data Entry

AgriSahayak follows an **offline-first approach** to support farmers in areas with limited or unstable connectivity.

#### Online Mode
When an internet connection is available, farmers can:

- Register or log in.
- Enter agricultural field data.
- Access live weather information.
- Generate crop recommendations.
- Save crop records to the backend.
- Retrieve previously saved crop information.

#### Offline Mode
When an internet connection is unavailable, farmers can:

- Continue using the application in offline mode.
- Enter field and crop information.
- Generate recommendations using the local fallback system.
- Save agricultural records directly on the device.
- Continue working without an active internet connection.

#### Automatic Synchronization
When internet connectivity becomes available again:

1. Offline records are detected.
2. Pending records are placed in the synchronization queue.
3. The records are submitted to the backend.
4. Successfully synchronized records are associated with the farmer account.
5. The records become available in the farmer's historical crop data.

---

## 5. Previous Crop Data

AgriSahayak maintains historical agricultural information for future reference.

Farmers can:

- View previously saved crop records.
- Review soil and environmental parameters.
- Track previously recommended crops.
- Access historical records for future agricultural planning.
- Distinguish between synchronized and pending offline records.

---

## 6. Multilingual Support

The application provides multilingual support to improve accessibility for farmers.

Supported languages include:

- English
- Hindi
- Telugu
- Tamil

The interface is designed so that important application information can be presented in the selected language.

---

# System Architecture

AgriSahayak is divided into two independent components:

```text
AgriSahayak/
│
├── backend/
│   └── Spring Boot REST API
│
└── frontend/
    └── HTML + CSS + JavaScript UI