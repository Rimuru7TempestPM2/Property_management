const BusinessConfig = {
    businessName: "GHOST-ROOF APARTMENTS", // Replace with actual building name
    tagline: "Official Tenant Utility & Rent Portal",
    primaryColor: "#059669", // Professional Emerald Green
    whatsappNumber: "2547XXXXXXXX", // Caretaker's Number
    
    // Payment Details for the Automated Receipt
    paymentDetails: {
        type: "M-Pesa Buy Goods",
        tillNumber: "3305607",
        officialName: "LANDLORD NAME/PROPERTY MGMT"
    },

    // The Spreadsheet URL
    webAppUrl: "https://script.google.com/macros/s/AKfycbxcX1L9t3xW_C-rwuf_KfXiWhflOFvMqiMrlD7Fsd1HKJ7BHat7A79YdNMcydTAI0zN/exec", 
    
    // Floor Prefix Mapping
    floors: {
        "0": "NV", // Ground
        "1": "OR", // 1st
        "2": "LY", // 2nd
        "3": "SR", // 4th (You mentioned 4th is SR)
        "4": "GV"  // 5th
    }
};

window.config = Object.freeze(BusinessConfig);
