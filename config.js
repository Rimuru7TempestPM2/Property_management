const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxcX1L9t3xW_C-rwuf_KfXiWhflOFvMqiMrlD7Fsd1HKJ7BHat7A79YdNMcydTAI0zN/exec";

// FETCH BILL
async function fetchBill() {
    const id = document.getElementById('houseSearch').value.trim().toUpperCase();
    if (!id) return;

    const res = await fetch(`${SCRIPT_URL}?id=${id}`);
    const json = await res.json();

    if (json.status === "success") {
        document.getElementById('billResult').classList.remove('hidden');
        document.getElementById('resName').innerText = json.data.name;
        document.getElementById('resTotal').innerText = json.data.total;
        
        const statusEl = document.getElementById('resStatus');
        statusEl.innerText = json.data.status;
        statusEl.className = json.data.status.includes("PAID") ? "bg-green-100 text-green-700 p-2" : "bg-red-100 text-red-700 p-2";
        
        // Show if there is a remaining gap in Column N
        const gap = parseFloat(json.data.owed);
        document.getElementById('resGap').innerText = gap > 0 ? `Still Owed: ${gap} KES` : "";
    } else {
        alert("House ID not found.");
    }
}

// SUBMIT PAYMENT VERIFICATION
async function submitPayment() {
    const houseId = document.getElementById('houseSearch').value.toUpperCase();
    const amount = document.getElementById('payAmount').value;
    const mpesa = document.getElementById('payCode').value.toUpperCase();

    if (!houseId || !amount || !mpesa) return alert("Fill all payment details!");

    const data = { type: 'payment', houseId, amount, mpesaCode: mpesa };
    
    await fetch(SCRIPT_URL, { method: 'POST', body: JSON.stringify(data) });
    alert("Payment submitted for verification. Please wait for the caretaker to approve.");
}

// SUBMIT COMPLAINT
async function submitComplaint() {
    const houseId = document.getElementById('houseSearch').value.toUpperCase();
    const desc = document.getElementById('compDesc').value;

    if (!houseId || !desc) return alert("Enter House ID and Description");

    const data = { type: 'complaint', houseId, description: desc };
    
    await fetch(SCRIPT_URL, { method: 'POST', body: JSON.stringify(data) });
    alert("Complaint received. We will look into it soon.");
}
