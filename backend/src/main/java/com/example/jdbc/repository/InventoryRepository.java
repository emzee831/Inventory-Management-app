package com.example.jdbc.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jdbc.model.Inventory;

import java.util.List;


@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer>{

	List<Inventory> findByName(String name);

	
}
