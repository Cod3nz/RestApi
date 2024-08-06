// Import the 'crypto' module which provides cryptographic functionalities
import crypto from "crypto";

// Define a constant secret key used in the HMAC (Hash-based Message Authentication Code) generation
const SECRET = "MY-REST-API";

// Function to generate a random string of 128 bytes, encoded in base64
export const random = () => crypto.randomBytes(128).toString("base64");

// Function to create a hashed version of the password using a salt
// The salt and password are concatenated with a '/' separator and hashed using the HMAC SHA-256 algorithm
// The result is then updated with the SECRET and converted to a hexadecimal string
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac("sha256", [salt, password].join("/")).update(SECRET).digest("hex");
}
