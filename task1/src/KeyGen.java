import java.util.*;

public class KeyGen {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int key = input.nextInt();
        findKey(key);

    }

    public static void findKey(int key){
    int goodKey=0;
        if(key>0&&key<=10e9) {

                ArrayList<Integer> numbers = cutKey(key);
                Integer temp[] = new Integer[numbers.size()];
                Integer temp2[] = new Integer[numbers.size()];
                Set<Integer> results = new TreeSet<Integer>();

                for (int i = 0; i < temp.length; i++) {
                    temp[i] = numbers.get(i);
                    temp2[i] = numbers.get(i);
                }


                for (int i = 0; i < numbers.size(); i++) {
                    for (int j = 0; j < 10; j++) {

                        if (i == 0 && j == 0) {
                            temp[i] = 1;
                        } else {
                            temp[i] = j;
                        }

                        int sum = 0;
                        for (int k = 0; k < temp.length; k++) {
                            sum += temp[k];
                        }
                        if (sum % 9 == 0) {
                            results.add(createNum(temp));
                        }
                        temp[i] = temp2[i];
                    }
                }

                Object arrayR[] = results.toArray();
                for (int i = 0; i < results.size(); i++) {
                    System.out.println((Integer) arrayR[i]);
                }
            }

            if(key%9==0){
                System.out.println(key);
            }
    }

    public static ArrayList<Integer> cutKey(int key){
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        int temp;
        int key1=key;

        while(key1!=0){
            temp = key1%10;
            numbers.add(temp);
            key1=key1/10;
        }
        ArrayList<Integer> numbersR = new ArrayList<Integer>();
        for(int i=0;i<numbers.size();i++)
        {
            numbersR.add(numbers.get(numbers.size()-i-1));
        }
        return numbersR;
    }

    public static int createNum(Integer[]mas){
        StringBuffer tempKey = new StringBuffer("");
        for (int i = 0; i < mas.length; i++) {
        tempKey.insert(tempKey.length(),mas[i].toString());
        }
        return Integer.parseInt(tempKey.toString());

    }
}
