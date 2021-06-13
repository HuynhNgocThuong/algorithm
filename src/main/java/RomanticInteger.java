import java.util.HashMap;
import java.util.Map;
public class RomanticInteger {
    
        public static void main(String[] args) {
            Integer sum = 0;
            Map<String, Integer> map = new HashMap<>();
            map.put("I", 1);
            map.put("V", 5);
            map.put("X", 10);
            map.put("L", 50);
            map.put("C", 100);
            map.put("D", 500);
            map.put("M", 1000);

            String input = "MCMIXVV";
            Integer size = input.length();
            String current = null;
            String next = null;
            Boolean nextLoop = false;

            for(int idx = 0; idx < size; idx++) {

                current = String.valueOf(input.charAt(idx));
                if(idx+1 < size) {
                    next = String.valueOf(input.charAt(idx+1));
                }

                if(next != null) {
                    if(map.get(current) >= map.get(next)) {
                        sum += map.get(current);
                    } else {
                        sum += map.get(next) - map.get(current);
                        idx++;
                    }
                } else {
                    sum += map.get(current);
                }

            }
            System.out.println(sum);
        }

}
