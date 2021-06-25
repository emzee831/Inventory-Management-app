package com.example.jdbc.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="inventory2")
public class Inventory {
	
	@Id
	private int id;
	private String name;
	private String description;
	private String size;
	private float price;
	private String sku;
	
	
	
	
	public Inventory() {

	}


	public int getId() {
		return id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getSize() {
		return size;
	}


	public void setSize(String size) {
		this.size = size;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}


	public String getSku() {
		return sku;
	}


	public void setSku(String sku) {
		this.sku = sku;
	}


	public void setId(int id) {
		this.id = id;
	}


	public Inventory(int id, String name, String description, String size, float price, String sku) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.size = size;
		this.price = price;
		this.sku = sku;
	}



//	git pull // 
//	git checkout -b newbranch 
	
}
