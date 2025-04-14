//Question 1:

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [70, 68, 72] },
  { name: "Charlie", scores: [100, 100, 100] },
];

function generateReports(students) {
  return students.map((student) => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    const average = total / student.scores.length;

    let grade = "";

    if (average >= 90) {
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

console.log(generateReports(students));

//Question 2:

class BankAccount {
  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`The deposited amount is ${amount}`);
    console.log(`The total amount is ${this.balance}`);
  }

  withdraw(amount) {
    this.balance -= amount;
    console.log(`The amount withdrew is ${amount}`);
    console.log(`The total amount is ${this.balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (amount > this.balance) {
      console.log("Not enough balance");
    } else {
      this.balance -= amount;
      anotherAccount.balance += amount;
      console.log(`Transferred ${amount} to ${anotherAccount.ownerName}`);
      console.log(`New balance is ${this.balance}`);
    }
  }

  getSummary() {
    console.log(`${this.ownerName}'s balance is ${this.balance} `);
  }
}
