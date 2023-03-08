package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Cart;
import com.example.demo.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {
	@Autowired
	CartService service;
	
	@CrossOrigin
	@GetMapping("")
	public List<Cart> read(){
		return service.getCart();
	}
	
	@CrossOrigin
	@PostMapping("")
	public String create(@RequestBody Cart cart) {
		service.addToCart(cart);
		return "Added to your cart!";
	}
	
	@CrossOrigin
	@PutMapping("/{id}")
	public Cart update(@RequestBody Cart cart) {
		return service.updateCart(cart);
	}
	
	@CrossOrigin
	@DeleteMapping("/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteProductById(id);
	}
	
}
