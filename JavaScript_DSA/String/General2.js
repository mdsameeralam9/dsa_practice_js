// generateRandomString
function generateRandomString(length, options = {}) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  // Default to including all character types if no options specified
  const includeUppercase = options.uppercase !== false;
  const includeLowercase = options.lowercase !== false;
  const includeNumbers = options.numbers !== false;
  const includeSpecial = options.special === true;
  
  let characters = '';
  if (includeUppercase) characters += uppercase;
  if (includeLowercase) characters += lowercase;
  if (includeNumbers) characters += numbers;
  if (includeSpecial) characters += special;
  
  // If no character set was selected, default to lowercase
  if (!characters) characters = lowercase;
  
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Example usage:
// All character types (default): generateRandomString(10)
// Only lowercase: generateRandomString(10, { uppercase: false, numbers: false })
// Only numbers: generateRandomString(10, { uppercase: false, lowercase: false })
// Include special characters: generateRandomString(10, { special: true })
// Only special characters: generateRandomString(10, { uppercase: false, lowercase: false, numbers: false, special: true })


// checkPasswordStrength
function checkPasswordStrength(password) {
  // Initialize score
  let score = 0;
  
  // Check length
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  
  // Check for different character types
  if (/[A-Z]/.test(password)) score += 1; // Uppercase
  if (/[a-z]/.test(password)) score += 1; // Lowercase
  if (/[0-9]/.test(password)) score += 1; // Numbers
  if (/[^A-Za-z0-9]/.test(password)) score += 1; // Special characters
  
  // Determine strength based on score
  if (score >= 5) return "Strong";
  if (score >= 3) return "Medium";
  return "Weak";
}

// Example usage:
// checkPasswordStrength("password") // "Weak"
// checkPasswordStrength("Password123") // "Medium"
// checkPasswordStrength("P@ssw0rd123!") // "Strong"

// second approach
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Example usage:
// const randomStr = generateRandomString(10); // generates a random string of length 10
