const popup = document.getElementById('popup');
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const encryptedDataField = document.getElementById('encryptedData');
const decryptButton = document.getElementById('decryptButton');

// Sample data to encrypt
const data = {
    username: "user123",
    password: "securePassword"
};

// Simple encryption function (for demonstration purposes)
function encryptData(data) {
    return btoa(JSON.stringify(data)); // Base64 encoding
}

// Decrypt function
function decryptData(encrypted) {
    return JSON.parse(atob(encrypted)); // Base64 decoding
}

// Open pop-up
openPopupButton.onclick = function() {
    const encrypted = encryptData(data);
    encryptedDataField.value = encrypted;
    popup.style.display = 'flex';
};

// Close pop-up
closePopupButton.onclick = function() {
    popup.style.display = 'none';
};

// Decrypt data
decryptButton.onclick = function() {
    const decrypted = decryptData(encryptedDataField.value);
    alert(`Decrypted Data:\nUsername: ${decrypted.username}\nPassword: ${decrypted.password}`);
};
