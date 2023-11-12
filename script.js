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
    this.tugriks += 15;
  }

  pourMayonnaise() {
    this.tugriks += 20;
    this.callories += 5;
  }

  calculatePrice() {
    if (this.size === "small") {
      this.price += this.smallHamburger[0];
    } else {
      this.price += this.bigHamburger[0];
    }

    if (this.topping === "cheese") {
      console.log("Cheese", smallHamburger);
      this.price += this.cheeseTopping[0];
      console.log("Cheese", smallHamburger);
    } else if (this.topping === "salad") {
      this.price += this.saladTopping[0];
    } else {
      this.price += this.potatoTopping[0];
    }

    return this.price;
  }

  calculateCallories() {
    if (this.size === "small") {
      this.callories += this.smallHamburger[1];
    } else {
      this.callories += this.bigHamburger[1];
    }

    if (this.topping === "cheese") {
      this.callories += this.cheeseTopping[1];
    } else if (this.topping === "salad") {
      this.callories += this.saladTopping[1];
    } else {
      this.callories += this.potatoTopping[1];
    }

    return this.callories;
  }
}

const size = enterSizeOfHamburger();
const toppig = enterToppingOfHamburger();

const hamburger = new Hamburger(size, toppig);

console.log("Callories of your hamburger = ", hamburger.calculateCallories());
console.log("Price of your hamburger = ", hamburger.calculatePrice());

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
}
