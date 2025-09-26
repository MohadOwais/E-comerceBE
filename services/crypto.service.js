const crypto = require("crypto-js");
const config = require("rc")("lambda", {
  encryption: {
    authentication: "Owais@123",
  },
});

module.exports = {
  encrypt: (input, passwordKey) => {
    const result = crypto.AES.encrypt(input, config.encryption[passwordKey]);
    return result.toString();
  },
  decrypt: (input, passwordKey) => {
    // Decode the URL-encoded string (if necessary)
    const decodedInput = decodeURIComponent(input);

    // Ensure input is in the correct format for AES decryption (base64)
    const result = crypto.AES.decrypt(
      decodedInput,
      config.encryption[passwordKey]
    );

    // If result is not in UTF8, try to return base64 string as it is
    const decryptedText = result.toString(crypto.enc.Utf8);
    if (!decryptedText) {
      console.error("Failed to decrypt or malformed data.");
      return null; // Return null if decryption failed
    }

    return decryptedText;
  },
};
