---
layout: base.njk
title: Contact Page
---

    <h2>Form Data</h2>
    <div id="formData"></div>

    <script>
        // Get query parameters from the URL
        const urlParams = new URLSearchParams(window.location.search);

        // Extract form data
        const firstName = urlParams.get('FirstName');
        const surname = urlParams.get('Surname');
        const email = urlParams.get('email');
        const freetext = urlParams.get('freetext');

        // Display the form data on the page
        const formDataDiv = document.getElementById('formData');
        formDataDiv.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Surname:</strong> ${surname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Free Text:</strong> ${freetext}</p>
        `;
    </script>
