<?php
// Database connection
$servername = "68.178.145.64";  // Typically localhost for phpMyAdmin
$username = "neucent";         // Default MySQL username
$password = "neucent@123";             // Default MySQL password (usually empty)
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
$message = $_POST['message'];

// Insert data into the database
$sql = "INSERT INTO contact (firstname, lastname, email, phone, message) 
        VALUES ('$fname','$lname','$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('We received your message will reach out to you shortly!');
    window.location.href = 'index.html'; </script>";
    
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
