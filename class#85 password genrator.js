
    class PasswordGenerator {
  constructor() {
    this.lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    this.uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.numberChars = "0123456789";
    this.specialChars = "!@#$%^&*()_-+=<>?/{}~";
  }

  generateWeakPassword(length) {
    let password = "";
    const charset = this.lowercaseChars;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  }

  generateStrongPassword(length) {
    let password = "";
    const charset = this.lowercaseChars + this.uppercaseChars + this.numberChars;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  }

  generatePasswordWithSpecialChars(length) {
    let password = "";
    const charset = this.lowercaseChars + this.uppercaseChars + this.numberChars + this.specialChars;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  }
}

// Example usage with user input:
const passwordGenerator = new PasswordGenerator();

const passwordType = prompt(
  "Which type of password do you want to generate?\nType 'weak' for weak password, 'strong' for strong password, or 'special' for a password with special characters."
);

const passwordLength = parseInt(prompt("Enter the desired password length:"));

let password;

if (isNaN(passwordLength) || passwordLength <= 0) {
  alert("Invalid password length. Please enter a positive number.");
} else if (passwordType === "weak") {
  password = passwordGenerator.generateWeakPassword(passwordLength);
} else if (passwordType === "strong") {
  password = passwordGenerator.generateStrongPassword(passwordLength);
} else if (passwordType === "special") {
  password = passwordGenerator.generatePasswordWithSpecialChars(passwordLength);
} else {
  alert("Invalid choice. Please choose 'weak', 'strong', or 'special'.");
}

if (password) {
  console.log("Generated Password:", password);
}

  