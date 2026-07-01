document.addEventListener('DOMContentLoaded', () => {
        // บังคับโหลดไฟล์ใหม่โดยใส่ Timestamp ต่อท้ายชื่อไฟล์
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
    
    apps.forEach(app => {
        // สร้าง Card Elements
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
