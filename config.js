const SCRIPT_URL = "PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE";
const OWNER_WA = "2547XXXXXXXX"; // Your WhatsApp number starting with 254

async function fetchBill() {
    const id = document.getElementById('houseSearch').value.trim().toUpperCase();
    if(!id) return alert("Enter House ID");
    
    const response = await fetch(`${SCRIPT_URL}?id=${id}`);
    const res = await response.json();

    if(res.status === "success") {
        document.getElementById('billResult').classList.remove('hidden');
        document.getElementById('resID').innerText = id;
        document.getElementById('resTotal').innerText = res.data.total;
        
        const statusDiv = document.getElementById('resStatus');
        statusDiv.innerText = res.data.status;
        statusDiv.className = res.data.status.includes("PAID") ? 
            "bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase" : 
            "bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase";
    } else {
        alert("House ID not found.");
    }
}

async function submitPayment() {
    const houseId = document.getElementById('houseSearch').value.toUpperCase();
    const name = document.getElementById('payName').value;
    const phone = document.getElementById('payPhone').value;
    const amount = document.getElementById('payAmount').value;
    const code = document.getElementById('payCode').value.toUpperCase();

    if(!houseId || !name || !amount || !code) return alert("Fill all payment fields!");

    const data = { type: 'payment', houseId, tenantName: name, tenantPhone: phone, amount, mpesaCode: code };
    await fetch(SCRIPT_URL, { method: 'POST', body: JSON.stringify(data) });

    const text = `*PAYMENT VERIFICATION*\nHouse: ${houseId}\nName: ${name}\nAmount: KES ${amount}\nCode: ${code}`;
    window.open(`https://wa.me/${OWNER_WA}?text=${encodeURIComponent(text)}`, '_blank');
}

async function submitComplaint() {
    const houseId = document.getElementById('houseSearch').value.toUpperCase();
    const name = document.getElementById('compName').value;
    const desc = document.getElementById('compDesc').value;

    if(!houseId || !name || !desc) return alert("Fill all complaint fields!");

    const data = { type: 'complaint', houseId, tenantName: name, description: desc };
    await fetch(SCRIPT_URL, { method: 'POST', body: JSON.stringify(data) });
    alert("Complaint logged. We'll check it soon.");
}
