document.addEventListener('DOMContentLoaded', () => {
    // บังคับโหลดไฟล์ใหม่โดยใส่ Timestamp ต่อท้ายชื่อไฟล์ ป้องกันปัญหา Cache
    fetch(`apps.json?v=${new Date().getTime()}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => renderApps(data))
    .catch(error => console.error('Error loading apps:', error));
});

function renderApps(apps) {
    const container = document.getElementById('app-container');
    if (!container) return; // ป้องกัน Error หากไม่มี Container ในหน้า HTML
    
    // เคลียร์พื้นที่ด้านในก่อนเผื่อกรณีมีการโหลดซ้ำ
    container.innerHTML = ''; 

    // ใช้การต่อ String หรือสร้างการ์ดพร้อมกันเพื่อ Performanceที่ดีขึ้น
    apps.forEach(app => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-icon">${app.icon}</div>
            <h2 class="card-title">${app.title}</h2>
            <p class="card-desc">${app.description}</p>
            <a href="${app.url}" class="card-btn" target="_blank" rel="noopener noreferrer">เปิดใช้งานระบบ</a>
        `;
        
        container.appendChild(card);
    });
}
