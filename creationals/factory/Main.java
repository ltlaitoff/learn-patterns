interface Knife {
	public String name = "";
	public int sharpness = 0;

	public void sharpen();

	public void polish();

	public void packageKnife();
}

public class Main {

	public static void main(String[] args) {
		KnifeStore knifeStoreOne = new FamilyKnifeStore();

		System.out.println(knifeStoreOne.orderKnife("steak"));
		System.out.println(knifeStoreOne.orderKnife("chefs"));

	}
}

abstract class KnifeStore {

	public Knife orderKnife(String type) {
		Knife knife = createKnife(type);

		knife.sharpen();
		knife.polish();
		knife.packageKnife();

		return knife;
	}

	abstract Knife createKnife(String type);
}

class FamilyKnifeStore extends KnifeStore {
	Knife createKnife(String type) {
		if (type.equals("steak")) {
			return new SteakKnife();
		}

		if (type.equals("chefs")) {
			return new ChefsKnife();
		}

		return null;
	}
}

// Factory Object
// class KnifeFactory {
// public Knife orderKnife(String type) {

// if (type.equals("steak")) {
// return new SteakKnife();
// }

// if (type.equals("chefs")) {
// return new ChefsKnife();
// }

// return null;
// }
// }

class SteakKnife implements Knife {
	public String name = "";
	public int sharpness = 0;

	public SteakKnife() {
		name = "SteakKnife";
	}

	public void sharpen() {

	}

	public void polish() {

	}

	public void packageKnife() {

	}
}

class ChefsKnife implements Knife {
	public String name = "";
	public int sharpness = 0;

	public ChefsKnife() {
		name = "ChefsKnife";
	}

	public void sharpen() {
	};

	public void polish() {

	}

	public void packageKnife() {

	}
}