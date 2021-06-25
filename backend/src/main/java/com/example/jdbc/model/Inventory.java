package com.example.jdbc.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="inventory")
public class Inventory {
	
	@Id
	private int categoryId;
	private String productName;
	private String productDesc;
	private String productSize;
	private float productPrice;
	private String productSku;
	
	
	public Inventory()
	{
		
	}


	public int getCategoryId() {
		return categoryId;
	}


	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public String getProductDesc() {
		return productDesc;
	}


	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}


	public String getProductSize() {
		return productSize;
	}


	public void setProductSize(String productSize) {
		this.productSize = productSize;
	}


	public float getProductPrice() {
		return productPrice;
	}


	public void setProductPrice(float productPrice) {
		this.productPrice = productPrice;
	}


	public String getProductSku() {
		return productSku;
	}


	public void setProductSku(String productSku) {
		this.productSku = productSku;
	}


	public Inventory(int categoryId, String productName, String productDesc, String productSize, float productPrice,
			String productSku) {
		super();
		this.categoryId = categoryId;
		this.productName = productName;
		this.productDesc = productDesc;
		this.productSize = productSize;
		this.productPrice = productPrice;
		this.productSku = productSku;
	}



	
	
}
