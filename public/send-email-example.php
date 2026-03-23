<?php
// Set headers to allow your React app to talk to this script
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 1. YOUR SECRET KEYS (Hidden from the browser/Inspect Element)
$service_id = "key";
$template_id = "key";
$public_key = "key";
$private_key = "key";

// 2. Get the form data sent from React
$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);

if ($request) {
    // 3. Prepare the data for EmailJS API
    $data = array(
        'service_id' => $service_id,
        'template_id' => $template_id,
        'user_id' => $public_key,
        'accessToken' => $private_key,
        'template_params' => $request // This carries your form fields (name, email, message)
    );

    // 4. Send the request to EmailJS via cURL (Server-to-Server)
    $ch = curl_init('https://api.emailjs.com/api/v1.0/email/send');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode == 200) {
        echo json_encode(["status" => "success", "message" => "Email sent!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email.", "debug" => $response]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "No data received."]);
}
?>