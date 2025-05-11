# Resend Email Integration

This repository demonstrates how to integrate **Resend** API to send emails from a Node.js application. The project includes a basic setup for sending an email with HTML content using Resend, and it also showcases the use of environment variables for securely managing API keys.

## Project Structure

- **`email-template.html`**: Contains the HTML email template with placeholders for dynamic content (e.g., username, call-to-action link).
- **`send-email.js`**: The main script that reads the HTML template, replaces placeholders, and sends the email using Resend API.
- **`sample.js`**: A basic file with a minimal setup or example for testing purposes.

## Prerequisites

- Node.js installed on your machine.
- A Resend account to get your API key.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/resend-email-integration.git
   cd resend-email-integration
   ```

2. **Initialize the project**:
   If you haven’t already, initialize your Node.js project and install the required dependencies:

   ```bash
   npm init -y
   npm install resend dotenv
   ```

3. **Set up your `.env` file**:
   In the project root, create a `.env` file and add your Resend API key:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Customize the Email Template**:
   - Open **`email-template.html`** and update the content with your own email copy.
   - The template includes placeholders like `{{username}}`, `{{cta_link}}`, and `{{unsubscribe_link}}`, which will be replaced dynamically in the script.

## Usage

1. **Run the `send-email.js` script**:

   Once everything is set up, run the `send-email.js` script to send a test email:

   ```bash
   node send-email.js
   ```
