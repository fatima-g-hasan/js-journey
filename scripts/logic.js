//Question 1:

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [70, 68, 72] },
  { name: "Charlie", scores: [100, 100, 100] },
];

function generateReports(students) {
  //O(n) * O(1) = O(n)
  return students.map((student) => {
    //students.map is O(n)
    const total = student.scores.reduce((sum, score) => sum + score, 0); //student.score.reduce is O(1)
    const average = total / student.scores.length;

    let grade = "";

    if (average >= 90) {
      //O(1)
      grade = "A";
    } else if (average >= 80) {
      grade = "B";
    } else if (average >= 70) {
      grade = "C";
    } else if (average >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }

    return {
      name: student.name,
      average,
      grade,
    };
  });
}

console.log(generateReports(students)); // O(1)

//Question 2:

class BankAccount {
  constructor(ownerName, initialBalance) {
    // O(1)
    this.ownerName = ownerName;
    this.balance = initialBalance;
    this.history = [];
  }

  deposit(amount) {
    // O(1)
    this.balance += amount;
    console.log(
      `The deposited amount in ${this.ownerName}'s account is $${amount}`
    );
    this.history.push(
      `The deposited amount in ${this.ownerName}'s account is $${amount}`
    );
  }

  withdraw(amount) {
    // O(1)
    this.balance -= amount;
    console.log(
      `The amount withdrew from ${this.ownerName}'s account is $${amount}`
    );
    this.history.push(
      `The amount withdrew from ${this.ownerName}'s account is $${amount}`
    );
  }

  transferTo(anotherAccount, amount) {
    // O(1)
    if (amount > this.balance) {
      console.log("Not enough balance");
      this.history.push("Can't transfer to balance, insufficient funds");
    } else {
      this.balance -= amount;
      anotherAccount.balance += amount;
      console.log(
        `${this.ownerName} transferred $${amount} to ${anotherAccount.ownerName}`
      );
      this.history.push(
        `${this.ownerName} transferred $${amount} to ${anotherAccount.ownerName}`
      );
      anotherAccount.history.push(
        `${anotherAccount.ownerName}'s account received $${amount} from ${this.ownerName}`
      );
    }
  }

  getSummary() {
    // O(1)
    console.log(`${this.ownerName}'s balance is $${this.balance} `);
  }

  printHistory() {
    // O(n)
    console.log(`${this.ownerName}'s Transaction History:`);
    this.history.forEach((info) => {
      console.log(info);
    });
  }
}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300);
acc1.transferTo(acc2, 200);
acc1.getSummary();
acc2.getSummary();
acc1.deposit(100);
acc1.getSummary();
acc1.transferTo(acc2, 100);
acc1.printHistory();
acc2.printHistory();

//Question 3:

const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const text = taskInput.value;

  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
