 import java.util.ArrayList;
import java.util.HashMap;

class ProductManager {
    // List to store product names
    private ArrayList<String> products;
    // Map to store product prices
    private HashMap<String, Double> priceList;

    public ProductManager() {
        products = new ArrayList<>();
        priceList = new HashMap<>();
    }

    // Add a product
    public void addProduct(String name, double price) {
        products.add(name);
        priceList.put(name, price);
    }

    // Remove a product
    public void removeProduct(String name) {
        products.remove(name);
        priceList.remove(name);
    }

    // Get product price
    public double getPrice(String name) {
        return priceList.getOrDefault(name, 0.0);
    }

    // Display all products and prices
    public void displayProducts() {
        for (String product : products) {
            System.out.println("Product: " + product + ", Price: " + priceList.get(product));
        }
    }
}

public class ProductExample {
    public static void main(String[] args) {
        ProductManager manager = new ProductManager();

        // Adding products
        manager.addProduct("Laptop", 899.99);
        manager.addProduct("Smartphone", 499.99);
        manager.addProduct("Headphones", 29.99);

        // Displaying products
        System.out.println("All Products:");
        manager.displayProducts();

        // Removing a product
        manager.removeProduct("Headphones");

        // Displaying products after removal
        System.out.println("\nAfter Removal:");
        manager.displayProducts();

        // Getting the price of a product
        System.out.println("\nPrice of Laptop: $" + manager.getPrice("Laptop"));
    }
}
