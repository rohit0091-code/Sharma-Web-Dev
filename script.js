const form = document.getElementById('eventForm');
const list = document.getElementById('eventContainer');
const clearBtn = document.getElementById('clearAllBtn');
const sampleBtn = document.getElementById('addSampleBtn');
const keyDisplay = document.getElementById('keyPressed');


form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

 
    const card = document.createElement('div');
    card.className = 'event-item';
    card.innerHTML = `
        <h3>${title}</h3>
        <p>Date: ${date} | <b>${category}</b></p>
        <button class="delete-btn">Delete</button>
    `;


    list.appendChild(card);
    form.reset();
    
  
    if(list.querySelector('.empty-msg')) list.querySelector('.empty-msg').remove();
});


list.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});

// 4. CLEAR ALL BUTTON
clearBtn.onclick = function() {
    list.innerHTML = '<p class="empty-msg">No events yet.</p>';
};

// 5. SAMPLE EVENTS BUTTON
sampleBtn.onclick = function() {
    const sample = document.createElement('div');
    sample.className = 'event-item';
    sample.innerHTML = `<h3>DOM Manipulation </h3><p>2026-5-02</p><button class="delete-btn">Delete</button>`;
    list.appendChild(sample);
    if(list.querySelector('.empty-msg')) list.querySelector('.empty-msg').remove();
};

// 6. KEYBOARD TRACKING
window.onkeydown = function(e) {
    keyDisplay.innerText = e.key;
};