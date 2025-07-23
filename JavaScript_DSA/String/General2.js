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
