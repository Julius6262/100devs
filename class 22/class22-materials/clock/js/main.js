


// duration, start, stop, reset

// constructor method
function Stopwatch() {
    let timerId, seconds = 0;

    this.start = function() {
        if (!timerId) {
            timerId = setInterval(() => {
                seconds++;
            }, 1000);  // Update every 1 second
        }
    };

    this.stop = function() {
        clearInterval(timerId);
        timerId = null;
    };

    //returns seconds and there by duration
    Object.defineProperty(this, 'seconds', {
        get: function() {return console.log(seconds, "seconds")}
    })
    
    /*this.duration = function() {
        console.log(seconds, "seconds");
    };*/

    this.reset = function() {
        clearInterval(timerId);
        timerId = null;
        seconds = 0;
    };
}