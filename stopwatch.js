document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.querySelector('.timer-display');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');

    let timer = null;
    let secondsCount = 0;
    let isRunning = false;
    

    document.querySelector('.smooth-scroll').addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href'); //href: /index.html#stopwatch || (Just did this to see how Javascript works for scroll behavior that used in css)
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
    

    function updateDisplay() {

        timerDisplay.textContent = secondsCount * 3;
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(function() {
                secondsCount++; 
                updateDisplay(); 
                
                // Check if we've reached 30 seconds
                if (secondsCount * 3 >= 30) {
                    clearInterval(timer);  
                    isRunning = false;  // Stop the timer at 30 seconds
                }
            }, 1000); 
        }
    }

                
    function stopTimer() {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
        }
    }

    function resetTimer() {
        stopTimer();
        secondsCount = 0;
        updateDisplay();
    }
    

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);
    
    updateDisplay();
});