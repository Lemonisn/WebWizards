<?php
session_start();

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["picture"]["name"]);
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

$check = getimagesize($_FILES["picture"]["tmp_name"]);
if ($check !== false) {
    if (move_uploaded_file($_FILES["picture"]["tmp_name"], $target_file)) {
        echo "File uploaded successfully.";

        // Save image path to database
        $conn = new mysqli("localhost", "root", "", "webwizards");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $user_id = $_SESSION["user_id"];
        $stmt = $conn->prepare("UPDATE users SET profile_picture = ? WHERE id = ?");
        $stmt->bind_param("si", $target_file, $user_id);
        $stmt->execute();
        $stmt->close();
        $conn->close();

        $_SESSION["profile_picture"] = $target_file;
        header("Location: profile.html");
        exit();
    } else {
        echo "Error uploading file.";
    }
} else {
    echo "File is not an image.";
}
?>
