class Hamburger {
  // [0] = Tugrikov; [1] = Callories;

  constructor(size, topping) {
    this.size = size;
    this.topping = topping;
    this.tugriks = 0;
    this.callories = 0;

    this.smallHamburger = [50, 20];
    this.bigHamburger = [100, 40];

    this.cheeseTopping = [10, 20];
    this.saladTopping = [20, 5];
    this.potatoTopping = [15, 10];
  }

  sprinkleSeasoning() {
    this.reset();
    this.tugriks += 15;
  }

  pourMayonnaise() {
    this.reset();
    this.tugriks += 20;
    this.callories += 5;
  }

  calculatePrice() {
    if (this.size === "small") {
      this.tugriks += this.smallHamburger[0];
    } else {
      this.tugriks += this.bigHamburger[0];
    }

    switch (this.topping) {
      case "cheese":
        this.tugriks += this.cheeseTopping[0];
        break;
      case "salad":
        this.tugriks += this.saladTopping[0];
        break;
      case "potato":
        this.tugriks += this.potatoTopping[0];
        break;
    }

    return this.tugriks;
  }

  calculateCallories() {
    if (this.size === "small") {
      this.callories += this.smallHamburger[1];
    } else {
      this.callories += this.bigHamburger[1];
    }

    switch (this.topping) {
      case "cheese":
        this.callories += this.cheeseTopping[1];
        break;
      case "salad":
        this.callories += this.saladTopping[1];
        break;
      case "potato":
        this.callories += this.potatoTopping[1];
        break;
    }

    return this.callories;
  }

  reset() {
    this.tugriks = 0;
    this.callories = 0;
  }
}

const size = enterSizeOfHamburger();
const toppig = enterToppingOfHamburger();

const hamburger = new Hamburger(size, toppig);

console.log("Callories of your hamburger = ", hamburger.calculateCallories());
console.log("Price of your hamburger = ", hamburger.calculatePrice());

hamburger.pourMayonnaise();

console.log(
  "\n\nCallories of your hamburger after added mayonnaise = ",
  hamburger.calculateCallories()
);
console.log(
  "Price of your hamburger after added mayonnaise = ",
  hamburger.calculatePrice()
);

function enterSizeOfHamburger() {
  let sizeOfhamburger = prompt("Enter size of hamburger:", "");
  sizeOfhamburger = sizeOfhamburger.toLowerCase();

  while (sizeOfhamburger !== "small" && sizeOfhamburger !== "big") {
    sizeOfhamburger = prompt("Enter size of hamburger:", "");
    sizeOfhamburger = sizeOfhamburger.toLowerCase();
  }

  return sizeOfhamburger;
}

function enterToppingOfHamburger() {
  let toppingOfhamburger = prompt(
    "Enter topping which you want to add: cheese, salad, potato",
    ""
  );
  toppingOfhamburger = toppingOfhamburger.toLowerCase();

  while (
    toppingOfhamburger !== "cheese" &&
    toppingOfhamburger !== "salad" &&
    toppingOfhamburger !== "potato"
  ) {
    toppingOfhamburger = prompt(
      "Enter topping which you want to add: cheese, salad, potato",
      ""
    );
    toppingOfhamburger = toppingOfhamburger.toLowerCase();
  }

  return toppingOfhamburger;
}
