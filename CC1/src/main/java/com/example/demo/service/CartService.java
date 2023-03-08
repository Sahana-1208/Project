package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.models.Cart;
import com.example.demo.repositories.CartRepo;

@Service
public class CartService {
	@Autowired
	CartRepo repository;
	
	public List<Cart> getCart(){
		return repository.findAll();
	}
	
	public String addToCart(Cart cart) {
		repository.save(cart);
		return "Product added to your cart successfully";
	}
	
	public Cart updateCart(Cart cart) {
		repository.save(cart);
		return cart;
	}
	
	public String deleteProductById(int id) {
		repository.deleteById(id);
		return "Product is removed from your cart";
	}
	
//	public String deleteProductByParam(int id) {
//		repository.deleteById(id);
//		return "Product is removed from your cart";
//	}
//	
//	public Optional<Cart> getProductById(int id){
//		return repository.findById(id);
//	}
//
//	public List<Cart> getCartSorted(String field){
//		return repository.findAll(Sort.by(Sort.Direction.ASC,field));
//	}
//	
//	public List<Cart> getCartWithPagination(int offset,int pageSize){
//		Page<Cart> cart=repository.findAll(PageRequest.of(offset, pageSize));
//		return cart.getContent();
//	}
//	
//	public List<Cart> getCartWithPaginationAndSorting(int offset,int pageSize,String field){
//		Page<Cart> cart=repository.findAll(PageRequest.of(offset, pageSize,Sort.by(field)));
//		return cart.getContent();
//	}
}
