import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();  // Read the size of the array
        int[] arr = new int[n];
        int sum = 0;
        
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();  // Read array elements
            sum += arr[i];          // Add to sum
        }
        
        System.out.println(sum);     // Print the sum
    }
}
