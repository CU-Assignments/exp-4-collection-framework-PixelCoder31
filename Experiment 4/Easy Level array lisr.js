import java.util.ArrayList;
import java.util.Scanner;

class Employee {
    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Name: " + name + ", Salary: " + salary;
    }
}

public class EmployeeManagement {
    private ArrayList<Employee> employeeList;
  
    public EmployeeManagement() {
        employeeList = new ArrayList<>();
    }
    public void addEmployee(int id, String name, double salary) {
        Employee employee = new Employee(id, name, salary);
        employeeList.add(employee);
        System.out.println("Employee added successfully!");
    }

    public boolean updateEmployee(int id, String name, double salary) {
        for (Employee employee : employeeList) {
            if (employee.getId() == id) {
                employee.setName(name);
                employee.setSalary(salary);
                System.out.println("Employee updated successfully!");
                return true;
            }
        }
        return false;
    }

    public boolean removeEmployee(int id) {
        for (Employee employee : employeeList) {
            if (employee.getId() == id) {
                employeeList.remove(employee);
                System.out.println("Employee removed successfully!");
                return true;
            }
        }
        return false;
    }

    public Employee searchEmployee(int id) {
        for (Employee employee : employeeList) {
            if (employee.getId() == id) {
                return employee;
            }
        }
        return null; 
    }

    public void displayEmployees() {
        if (employeeList.isEmpty()) {
            System.out.println("No employees found.");
        } else {
            System.out.println("\nEmployee Details:");
            for (Employee employee : employeeList) {
                System.out.println(employee);
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        EmployeeManagement manager = new EmployeeManagement();

        while (true) {
            System.out.println("\nEmployee Management System:");
            System.out.println("1. Add Employee");
            System.out.println("2. Update Employee");
            System.out.println("3. Remove Employee");
            System.out.println("4. Search Employee");
            System.out.println("5. Display All Employees");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                
                    System.out.print("Enter ID: ");
                    int id = scanner.nextInt();
                    scanner.nextLine(); // Consume newline
                    System.out.print("Enter Name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter Salary: ");
                    double salary = scanner.nextDouble();
                    manager.addEmployee(id, name, salary);
                    break;

                case 2:
                
                    System.out.print("Enter Employee ID to update: ");
                    int updateId = scanner.nextInt();
                    scanner.nextLine(); // Consume newline
                    System.out.print("Enter New Name: ");
                    String newName = scanner.nextLine();
                    System.out.print("Enter New Salary: ");
                    double newSalary = scanner.nextDouble();
                    if (!manager.updateEmployee(updateId, newName, newSalary)) {
                        System.out.println("Employee with ID " + updateId + " not found.");
                    }
                    break;

                case 3:
                
                    System.out.print("Enter Employee ID to remove: ");
                    int removeId = scanner.nextInt();
                    if (!manager.removeEmployee(removeId)) {
                        System.out.println("Employee with ID " + removeId + " not found.");
                    }
                    break;

                case 4:

                    System.out.print("Enter Employee ID to search: ");
                    int searchId = scanner.nextInt();
                    Employee employee = manager.searchEmployee(searchId);
                    if (employee != null) {
                        System.out.println("Employee found: " + employee);
                    } else {
                        System.out.println("Employee with ID " + searchId + " not found.");
                    }
                    break;

                case 5:
                  
                    manager.displayEmployees();
                    break;

                case 6:
              
                    System.out.println("Exiting the program.");
                    scanner.close();
                    System.exit(0);
                    break;

                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }
}
