package com.example.jdbc.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jdbc.exception.Resourcenotfoundexception;
import com.example.jdbc.model.Inventory;
import com.example.jdbc.repository.InventoryRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class inventorycontroller {

	@Autowired
	private InventoryRepository invRepo;
	
	//display all
	@GetMapping("/allinventory")
	public List<Inventory> getAllInventory()
	{
		return invRepo.findAll();
	}
	// display single item by id
	@GetMapping("/inventory/{id}")
	public ResponseEntity<Inventory> getInventoryById(@PathVariable int id)
	{
		Inventory i=invRepo.findById(id).orElseThrow(() -> new Resourcenotfoundexception("item not found"));
		return ResponseEntity.ok(i);
	}
	// display single item by name
	@GetMapping("/inventories/{name}")
	public List<Inventory> getInventoryByName(@PathVariable String name)
	{
		
		return invRepo.findByName(name);
	}
	// delete item
	@DeleteMapping("/delete/{id}")
	public String deleteItem(@PathVariable("id")int id)
	{
		invRepo.findById(id).orElseThrow(()-> new Resourcenotfoundexception("item not found"));
		invRepo.deleteById(id);
		return "" + id;
	}
	// add item
	@PostMapping("/additem")
	public Inventory newInventory(@RequestBody Inventory s)
	{
		
		return invRepo.save(s);
	}
	// update item
	@PutMapping("/updateitem/{id}")
	public ResponseEntity<Inventory> updateItem(@PathVariable int id, @RequestBody Inventory In)
	{
		Inventory i=invRepo.findById(id).orElseThrow(() -> new Resourcenotfoundexception("item not found"));
		i.setName(In.getName());
		i.setDescription(In.getDescription());
		i.setSize(In.getSize());
		i.setPrice(In.getPrice());
		i.setSku(In.getSku());
		Inventory updatedItem=invRepo.save(i);
		return ResponseEntity.ok(updatedItem);
	}
}
