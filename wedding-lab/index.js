function myFunction() {
    var guests = parseInt(prompt("How many guests do you have?"));
    var tables = parseInt(prompt("How many tables do you want?"));

    if (isNaN(guests)||isNaN(tables)||guests < 0||tables < 0) {
        alert("Please enter valid and positive numbers!");
        return;
    }

    var guestsPerTable = Math.floor (guests / tables);
    var remainingGuests = guests % tables;

    if (remainingGuests === 0) {
        document.getElementById("messageContainer").innerHTML = ("Your " + guests + " guests will be seated as follows: " + tables + " tables with " + guestsPerTable + " guests.");
    } else {
        document.getElementById("messageContainer").innerHTML = ("Your " + guests + " guests will be seated as follows: " + (tables - remainingGuests) + " tables with " + guestsPerTable + " guests and " + remainingGuests + " tables with " + (guestsPerTable + 1) + " guests.");
    }
}