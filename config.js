const CONFIG = {
    // 1. Your Deployment URL from Apps Script
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxcX1L9t3xW_C-rwuf_KfXiWhflOFvMqiMrlD7Fsd1HKJ7BHat7A79YdNMcydTAI0zN/exec",

    // 2. Spreadsheet Column Mapping (Based on your screenshots)
    // We map the Header Name to the Index (0 is A, 1 is B, etc.)
    COLUMNS: {
        HOUSE_ID: 0,      // Column A
        TENANT_NAME: 2,   // Column C
        BASE_RENT: 4,     // Column E
        TRASH_FEE: 5,     // Column F
        TOTAL_DUE: 10,    // Column K (The "Waiting for Water" formula)
        STATUS: 11,       // Column L (PAID/UNPAID)
        AMOUNT_OWED: 13   // Column N (The Auditor/Gap)
    },

    // 3. System Settings
    CURRENCY: "KES",
    WATER_RATE: 150
};

export default CONFIG;
