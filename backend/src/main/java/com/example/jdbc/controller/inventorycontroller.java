package com.example.jdbc.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
}
