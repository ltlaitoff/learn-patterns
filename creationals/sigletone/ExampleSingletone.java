public class ExampleSingletone {
	public static void main(String[] args) {
		Singletone singletone1 = Singletone.getInstance();
		singletone1.setVariable(5);
		System.out.println(singletone1.getVariable());

		Singletone singletone2 = Singletone.getInstance();
		System.out.println(singletone2.getVariable());
	}
}

class Singletone {

	private static Singletone uniqueInstance = null;
	private int variable = 0;

	private Singletone() {

	}

	public static Singletone getInstance() {
		if (uniqueInstance == null) {
			uniqueInstance = new Singletone();
		}

		return uniqueInstance;
	}

	public int getVariable() {
		return variable;
	}

	public void setVariable(int number) {
		variable = number;
	}

}
