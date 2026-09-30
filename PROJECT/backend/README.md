# AgriSahayak Backend

Spring Boot REST API for the AgriSahayak farmer self-service application.

## Requirements
- Java 17+
- Maven 3.9+
- Internet is needed for the live weather/geocoding endpoints.

## Run
From this `backend` folder:

```powershell
mvn org.springframework.boot:spring-boot-maven-plugin:3.5.5:run
```

The API starts at `http://localhost:8080`.

## Main APIs
- `POST /api/farmer/register` — create farmer account
- `POST /api/farmer/login` — login
- `GET /api/farmer/{farmerId}/crops` — previous crop records
- `POST /api/farmer/{farmerId}/crops` — save crop record
- `POST /api/crop-recommendation` — crop recommendation
- `GET /api/weather` — weather data
- `GET /api/geocode` — city search
- `GET /api/health` — API health check

Farmer and crop data are created automatically in a `data/` folder when the backend runs.
