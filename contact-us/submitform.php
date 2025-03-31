<?php
// Database connection
$servername = "localhost";  // Typically localhost for phpMyAdmin
$username = "root";         // Default MySQL username
$password = "";             // Default MySQL password (usually empty)
$dbname = "neucent";        // Name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$fname= $_POST['firstname'];
$lname= $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$budgetrange = $_POST['budget_range'];
$message = $_POST['message'];

// Insert data into the database
$sql = "INSERT INTO projectquote (firstname, lastname, email, phone, budget_range, message) 
        VALUES ('$fname','$lname','$email', '$phone', '$budgetrange', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('We received your message will reach out to you shortly!');
    window.location.href = 'index.html'; </script>";
    
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
