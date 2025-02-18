import java.util.concurrent.atomic.AtomicInteger;

class Seat {
    private boolean isBooked;
    private final int seatNumber;

    // Constructor to initialize a seat
    public Seat(int seatNumber) {
        this.seatNumber = seatNumber;
        this.isBooked = false;
    }

    // Synchronized method to book a seat
    public synchronized boolean bookSeat(String customerType) {
        if (!isBooked) {
            isBooked = true;
            System.out.println(customerType + " booked seat number " + seatNumber);
            return true;
        } else {
            System.out.println("Seat " + seatNumber + " is already booked.");
            return false;
        }
    }

    public int getSeatNumber() {
        return seatNumber;
    }
}

class BookingThread extends Thread {
    private Seat seat;
    private String customerType;

    // Constructor to initialize thread
    public BookingThread(Seat seat, String customerType) {
        this.seat = seat;
        this.customerType = customerType;
    }

    @Override
    public void run() {
        // Try booking the seat based on the customer type (VIP or Regular)
        if (!seat.bookSeat(customerType)) {
            System.out.println(customerType + " couldn't book seat " + seat.getSeatNumber());
        }
    }
}

public class TicketBookingSystem {
    public static void main(String[] args) {
        // Create a set of seats (10 seats for this example)
        Seat[] seats = new Seat[10];
        for (int i = 0; i < seats.length; i++) {
            seats[i] = new Seat(i + 1);
        }

        // Create booking threads for VIP and Regular customers
        BookingThread[] threads = new BookingThread[15]; // Let's assume 15 customers trying to book tickets

        // Assign threads with varying priorities (VIP customers have higher priority)
        int index = 0;
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) { // VIP customers trying to book odd numbered seats
                threads[index++] = new BookingThread(seats[i], "VIP");
                threads[index - 1].setPriority(Thread.MAX_PRIORITY); // VIP gets max priority
            } else { // Regular customers trying to book even numbered seats
                threads[index++] = new BookingThread(seats[i], "Regular");
                threads[index - 1].setPriority(Thread.NORM_PRIORITY); // Regular gets normal priority
            }
        }

        // Start all threads
        for (BookingThread thread : threads) {
            thread.start();
        }

        // Wait for all threads to finish
        for (BookingThread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("\nTicket Booking Process Complete.");
    }
}
