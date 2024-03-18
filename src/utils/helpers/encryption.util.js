import bcrypt from "bcrypt";

class EncryptionUtil {
  constructor() {}
  /**
   * Hashes a plain text password using bcrypt.
   *
   * @param {string} plainText - The plain text password to be hashed.
   * @returns {Promise<string>} - A promise that resolves to the hashed password.
   */
  async hashPlainText(plainText) {
    try {
      const hashedPassword = await bcrypt.hash(plainText, 10);
      return hashedPassword;
    } catch (error) {
      // Log the error for debugging purposes
      console.error("Error hashing plain text password:", error);
    }
  }

  /**
   * Compares a plain text password with a hashed password using bcrypt.
   *
   * @param {string} plainText - The plain text password to be compared.
   * @param {string} hash - The hashed password to compare against.
   * @returns {Promise<boolean>} - A promise that resolves to true if passwords match, false otherwise.
   */
  async comparePlainAndHashText(plainText, hash) {
    try {
      const isMatch = await bcrypt.compare(plainText, hash);
      // Return true if the passwords match, false otherwise
      return isMatch;
    } catch (error) {
      // Log the error for debugging purposes
      console.error("Error comparing plain text and hashed passwords:", error);
    }
  }
}

export default EncryptionUtil;
