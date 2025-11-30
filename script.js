// DOM Elements
const calendar = document.getElementById('calendar');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Get current date for calendar logic
const today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth(); // 0 = January, 11 = December

function createCalendarDoors() {
    for (let day = 1; day <= 24; day++) {
        const doorData = calendarData[day];
        const doorElement = document.createElement('div');
        
        // Determine if the door can be opened
        const canOpen = (currentMonth === 11 && currentDate >= day) || doorData.canOpen;
        const isOpened = localStorage.getItem(`door_${day}`) === 'opened';
        
        // Set door classes
        let doorClasses = ['calendar-door'];
        
        if (isOpened) {
            doorClasses.push('opened');
        } else if (!canOpen) {
            doorClasses.push('locked');
        } else {
            doorClasses.push(doorData.type);
        }
        
        // Special styling for Christmas Day
        if (day === 24) {
            doorClasses.push('special');
        }
        
        doorElement.className = doorClasses.join(' ');
        
        // Create door content
        doorElement.innerHTML = `
            <div class="door-content">
                <div class="door-number">${day}</div>
                <div class="door-icon">${doorData.icon}</div>
                <div class="door-title">${doorData.title}</div>
            </div>
        `;
        
        // Add click event listener
        if (canOpen && !isOpened) {
            doorElement.addEventListener('click', () => openDoor(day));
        } else if (isOpened) {
            doorElement.addEventListener('click', () => showDoorContent(day));
        } else {
            doorElement.addEventListener('click', () => showLockedMessage(day));
        }
        
        calendar.appendChild(doorElement);
    }
}

function openDoor(day) {
    const doorData = calendarData[day];
    
    // Mark door as opened
    localStorage.setItem(`door_${day}`, 'opened');
    
    // Show the modal with content
    showDoorContent(day);
    
    // Update the door appearance
    const doorElement = document.querySelector(`.calendar-door:nth-child(${day})`);
    doorElement.classList.remove('milestone', 'memory', 'surprise', 'special');
    doorElement.classList.add('opened');
    
    // Add celebration effect
    createCelebrationEffect();
}

function showDoorContent(day) {
    const doorData = calendarData[day];
    
    modalBody.innerHTML = `
        <div class="modal-icon">${doorData.icon}</div>
        <h2 class="modal-title">${doorData.title}</h2>
        <p class="modal-message">${doorData.message}</p>
        ${day === 24 ? '<div style="font-size: 2rem; margin-top: 1rem;">🎄❤️🎅💕👼</div>' : ''}
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function showLockedMessage(day) {
    const doorData = calendarData[day];
    
    modalBody.innerHTML = `
        <div class="modal-icon">🔒</div>
        <h2 class="modal-message">Not Yet, my cutiee <3333</h2>
        <p class="modal-message">This door opens on December ${day}th. I know you're excited (im too!!), but you gotta wait ✨💕</p>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function createCelebrationEffect() {
    // Create floating hearts effect
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.fontSize = '2rem';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'floatUp 3s ease-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                document.body.removeChild(heart);
            }, 3000);
        }, i * 100);
    }
}

// CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(0);
            opacity: 1;
        }
        50% {
            transform: translateY(-50vh) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Modal close functionality
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Keyboard close functionality
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Initialize the calendar
document.addEventListener('DOMContentLoaded', () => {
    createCalendarDoors();
});
