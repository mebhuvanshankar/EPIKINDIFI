function openDeviceInfo(device) {
    let description;

    switch (device) {
        case 'MobilePhone':
            description = `<h2>Mobile Phone</h2>
                <p>The mobile phone is a portable communication device that allows users to make calls, send messages, and use apps. Popular brands include Apple, Samsung, and Google.</p>`;
            break;
        case 'Laptop':
            description = `<h2>Laptop</h2>
                <p>Laptops are portable computers that offer functionality similar to desktops, but with the added benefit of portability. Brands like Dell, HP, and Apple are well known.</p>`;
            break;
        case 'Desktop':
            description = `<h2>Desktop</h2>
                <p>Desktop computers are stationary devices commonly used for work, gaming, and entertainment. They offer greater customization and upgradability compared to laptops.</p>`;
            break;
        case 'Tablet':
            description = `<h2>Tablet</h2>
                <p>Tablets are portable touchscreen devices larger than a mobile phone, ideal for media consumption and light computing tasks. Brands include Apple (iPad) and Samsung (Galaxy Tab).</p>`;
            break;
        case 'Smartwatch':
            description = `<h2>Smartwatch</h2>
                <p>Smartwatches are wearable devices that combine timekeeping with features such as fitness tracking, messaging, and notifications. Popular models include the Apple Watch and Samsung Galaxy Watch.</p>`;
            break;
        default:
            description = `<h2>Device Info</h2><p>No description available for the selected device.</p>`;
            break;
    }

    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${device}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f9f9f9;
                }
                .content {
                    max-width: 800px;
                    margin: auto;
                    text-align: center;
                    border: 2px solid #007bff;
                    padding: 20px;
                    border-radius: 8px;
                    background-color: #ffffff;
                }
            </style>
        </head>
        <body>
            <div class="content">
                ${description}
            </div>
        </body>
        </html>
    `);
}
