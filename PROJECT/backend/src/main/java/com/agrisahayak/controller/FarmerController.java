package com.agrisahayak.controller;

import com.agrisahayak.model.*;
import com.agrisahayak.store.DataStore;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/farmer")
@CrossOrigin(origins="*")
public class FarmerController {
    private final DataStore store;
    public FarmerController(DataStore store){this.store=store;}

    @PostMapping("/register")
    public Object register(@RequestBody Map<String,String> body){
        try{
            String name=body.getOrDefault("name","").trim(), phone=body.getOrDefault("phone","").trim(), pass=body.getOrDefault("password","");
            if(name.isBlank()||phone.isBlank()||pass.length()<4) return Map.of("success",false,"message","Name, phone and a 4+ character password are required.");
            Farmer f=store.register(name,phone,pass);
            return Map.of("success",true,"farmer",Map.of("id",f.id,"name",f.name,"phone",f.phone));
        }catch(Exception e){return Map.of("success",false,"message",e.getMessage());}
    }

    @PostMapping("/login")
    public Object login(@RequestBody Map<String,String> body){
        Farmer f=store.login(body.getOrDefault("phone","").trim(),body.getOrDefault("password",""));
        if(f==null)return Map.of("success",false,"message","Invalid phone number or password.");
        return Map.of("success",true,"farmer",Map.of("id",f.id,"name",f.name,"phone",f.phone));
    }

    @GetMapping("/{farmerId}/crops")
    public Object crops(@PathVariable String farmerId){return Map.of("success",true,"records",store.farmerCrops(farmerId));}

    @PostMapping("/{farmerId}/crops")
    public Object saveCrop(@PathVariable String farmerId,@RequestBody CropRecord record){
        try{record.farmerId=farmerId; return Map.of("success",true,"record",store.saveCrop(record));}
        catch(Exception e){return Map.of("success",false,"message","Could not save crop record.");}
    }
}
