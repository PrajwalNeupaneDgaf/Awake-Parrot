import fetch from "node-fetch";
//const fetch = require('node-fetch')

async function pingAPI() {
    const apiUrl = "https://parrot-backend-m0g3.onrender.com/awake";  // Replace with your actual API

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "GitHub Actions",
            },
        });

        const data = await response.text();
        console.log("API Response:", data);
    } catch (error) {
        console.error("Error calling API:", error);
    }
}

pingAPI();
