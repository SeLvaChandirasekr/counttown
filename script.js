document.addEventListener("DOMContentLoaded", function() {
    function countdown(callback) {
        var countdownDisplay = document.getElementById("countdown-display");

        setTimeout(function () {
            countdownDisplay.textContent = 10;
            setTimeout(function () {
                countdownDisplay.textContent = 9;
                setTimeout(function () {
                    countdownDisplay.textContent = 8;
                    setTimeout(function () {
                        countdownDisplay.textContent = 7;
                        setTimeout(function () {
                            countdownDisplay.textContent = 6;
                            setTimeout(function () {
                                countdownDisplay.textContent = 5;
                                setTimeout(function () {
                                    countdownDisplay.textContent = 4;
                                    setTimeout(function () {
                                        countdownDisplay.textContent = 3;
                                        setTimeout(function () {
                                            countdownDisplay.textContent = 2;
                                            setTimeout(function () {
                                                countdownDisplay.textContent = 1;
                                                callback();
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    countdown(function () {
        var countdownDisplay = document.getElementById("countdown-display");
        countdownDisplay.textContent = "Happy Independence Day!";
    });
});
