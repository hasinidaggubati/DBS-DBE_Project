package com.agrisahayak.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AgriController {

    private final RestClient client = RestClient.create();

    @GetMapping("/health")
    public Map<String, Object> health() {
        return Map.of("status", "ok", "service", "AgriSahayak API");
    }

    @PostMapping("/crop-recommendation")
    public Map<String, Object> crop(@RequestBody Map<String, Object> in) {
        double n = num(in, "nitrogen");
        double p = num(in, "phosphorus");
        double k = num(in, "potassium");
        double temp = num(in, "temperature");
        double rain = num(in, "rainfall");
        String soil = String.valueOf(in.getOrDefault("soil", "loamy")).toLowerCase();

        List<Map<String,Object>> candidates = new ArrayList<>();
        add(candidates, "Rice", score(
                soil, temp, rain, n, p, k, 20, 35, 150, 90, 80, 120, 60, 40, 60));
        add(candidates, "Wheat", score(
                soil, temp, rain, n, p, k, 10, 25, 80, 70, 65, 90, 35, 20, 45));
        add(candidates, "Maize", score(
                soil, temp, rain, n, p, k, 18, 32, 70, 75, 55, 80, 45, 25, 50));
        add(candidates, "Cotton", score(
                soil, temp, rain, n, p, k, 21, 35, 60, 70, 55, 85, 40, 20, 55));
        add(candidates, "Groundnut", score(
                soil, temp, rain, n, p, k, 20, 32, 50, 65, 45, 70, 30, 20, 45));
        add(candidates, "Millet", score(
                soil, temp, rain, n, p, k, 22, 38, 40, 60, 35, 60, 25, 10, 40));

        candidates.sort((a,b) -> Double.compare((double)b.get("score"), (double)a.get("score")));
        return Map.of(
                "success", true,
                "recommendation", candidates.get(0),
                "alternatives", candidates.subList(1, Math.min(4, candidates.size())),
                "inputs", in
        );
    }

    private double score(String soil, double t, double rain, double n, double p, double k,
                         double tMin, double tMax, double rainMin,
                         double nTarget, double pTarget, double kTarget,
                         double nWeight, double pWeight, double kWeight) {
        double s = 0;
        s += rangeScore(t, tMin, tMax) * 30;
        s += rangeScore(rain, rainMin, rainMin + 120) * 30;
        s += nutrientScore(n, nTarget) * nWeight / 2.0;
        s += nutrientScore(p, pTarget) * pWeight / 2.0;
        s += nutrientScore(k, kTarget) * kWeight / 2.0;
        if (soil.contains("loam") || soil.contains("alluvial")) s += 8;
        if (soil.contains("black") && t >= 20 && t <= 35) s += 8;
        if (soil.contains("sandy") && rain < 120) s += 5;
        return Math.round(Math.min(100, s) * 10.0) / 10.0;
    }

    private double rangeScore(double x, double min, double max) {
        if (x >= min && x <= max) return 1;
        double d = x < min ? min - x : x - max;
        return Math.max(0, 1 - d / Math.max(1, max - min));
    }

    private double nutrientScore(double x, double target) {
        return Math.max(0, 1 - Math.abs(x - target) / Math.max(target, 1));
    }

    private void add(List<Map<String,Object>> list, String crop, double score) {
        list.add(Map.of("crop", crop, "score", score));
    }

    private double num(Map<String,Object> m, String k) {
        Object v = m.get(k);
        if (v == null) return 0;
        try { return Double.parseDouble(v.toString()); } catch (Exception e) { return 0; }
    }

    @GetMapping(value="/geocode", produces=MediaType.APPLICATION_JSON_VALUE)
    public Object geocode(@RequestParam String city) {
        String url = "https://geocoding-api.open-meteo.com/v1/search?name=" +
                java.net.URLEncoder.encode(city, java.nio.charset.StandardCharsets.UTF_8) +
                "&count=5&language=en&format=json";
        return client.get().uri(url).retrieve().body(Object.class);
    }

    @GetMapping(value="/weather", produces=MediaType.APPLICATION_JSON_VALUE)
    public Object weather(@RequestParam double latitude, @RequestParam double longitude) {
        String url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude +
                "&longitude=" + longitude +
                "&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m" +
                "&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code" +
                "&forecast_days=7&timezone=auto";
        return client.get().uri(url).retrieve().body(Object.class);
    }
}
