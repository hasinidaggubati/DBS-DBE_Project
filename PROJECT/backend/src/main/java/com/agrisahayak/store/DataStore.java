package com.agrisahayak.store;

import com.agrisahayak.model.*;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import java.nio.file.*;
import java.util.*;

@Component
public class DataStore {
    private final ObjectMapper mapper = new ObjectMapper();
    private final Path dir = Paths.get("data");
    private final Path farmersFile = dir.resolve("farmers.json");
    private final Path cropsFile = dir.resolve("crop_records.json");

    public DataStore(){ try { Files.createDirectories(dir); init(farmersFile); init(cropsFile); } catch(Exception e){ throw new RuntimeException(e); } }
    private void init(Path p) throws Exception { if(!Files.exists(p)) Files.writeString(p,"[]"); }

    public synchronized List<Farmer> farmers() {
        try{return mapper.readValue(farmersFile.toFile(),new TypeReference<List<Farmer>>(){});}
        catch(Exception e){return new ArrayList<>();}
    }
    public synchronized List<CropRecord> crops() {
        try{return mapper.readValue(cropsFile.toFile(),new TypeReference<List<CropRecord>>(){});}
        catch(Exception e){return new ArrayList<>();}
    }
    private synchronized void save(Path p,Object o) throws Exception { mapper.writerWithDefaultPrettyPrinter().writeValue(p.toFile(),o); }

    public synchronized Farmer register(String name,String phone,String password) throws Exception {
        List<Farmer> fs=farmers();
        for(Farmer f:fs) if(f.phone.equals(phone)) throw new IllegalArgumentException("Phone number already registered");
        Farmer f=new Farmer(UUID.randomUUID().toString(),name,phone,password); fs.add(f); save(farmersFile,fs); return f;
    }
    public synchronized Farmer login(String phone,String password) {
        return farmers().stream().filter(f->f.phone.equals(phone)&&f.password.equals(password)).findFirst().orElse(null);
    }
    public synchronized List<CropRecord> farmerCrops(String farmerId) {
        List<CropRecord> out=new ArrayList<>();
        for(CropRecord c:crops()) if(farmerId.equals(c.farmerId)) out.add(c);
        out.sort((a,b)->String.valueOf(b.createdAt).compareTo(String.valueOf(a.createdAt)));
        return out;
    }
    public synchronized CropRecord saveCrop(CropRecord c) throws Exception {
        List<CropRecord> cs=crops();
        if(c.id==null||c.id.isBlank()) c.id=UUID.randomUUID().toString();
        if(c.createdAt==null||c.createdAt.isBlank()) c.createdAt=java.time.Instant.now().toString();
        cs.removeIf(x->x.id.equals(c.id)); cs.add(c); save(cropsFile,cs); return c;
    }
}
