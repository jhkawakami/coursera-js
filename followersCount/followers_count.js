let count = 0; // Initializing count to 0

function increaseCount(){
    count++; // Increase count by 1

    displayCount(); // Display the count
    checkCountValue(); // check out value and display messages if it hits milestone
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count; // Display the count in the span with id 'countDisplay'
}

function checkCountValue(){
    if (count === 10){
        alert("You gained 10 followers! Congratulations!");
    }
    else if (count === 20){
        alert("You gained 20 followers! Congratulations!");
    }
}

function resetCount(){
    count = 0;

    displayCount();
    alert("The Followers Count has been Reset");
}