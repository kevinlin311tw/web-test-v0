# Local Setup Guide

There are several ways to view the Microsoft 50-Year Anniversary webpage locally:

## Option 1: Direct File Opening

The simplest method is to directly open the HTML file in your web browser:

1. Open your file explorer/finder
2. Navigate to the `/Users/keli/demo/demo-3` directory
3. Double-click on `index.html`
4. The webpage should open in your default web browser

Note: This method works well for basic viewing but might have limitations with some browser security features.

## Option 2: Using the provided run script

We've created a convenient script to start a local server:

1. Open a terminal/command prompt
2. Navigate to the project directory:
   ```
   cd /Users/keli/demo/demo-3
   ```
3. Make the script executable (if not already):
   ```
   chmod +x run.sh
   ```
4. Run the script:
   ```
   ./run.sh
   ```
5. Open your browser and visit: `http://localhost:8000` (or another port if 8000 is in use)

## Option 3: Using Python's built-in server manually

If you have Python installed, you can use its built-in HTTP server:

1. Open a terminal/command prompt
2. Navigate to the project directory:
   ```
   cd /Users/keli/demo/demo-3
   ```
3. For Python 3, run:
   ```
   python3 -m http.server 8000 --bind 127.0.0.1
   ```
   For Python 2, run:
   ```
   python -m SimpleHTTPServer 8000
   ```
4. Open your browser and visit: `http://localhost:8000`

## Option 4: Using Node.js with http-server

If you have Node.js installed, you can use the http-server package:

1. Install http-server globally (if you haven't already):
   ```
   npm install -g http-server
   ```
2. Navigate to your project directory:
   ```
   cd /Users/keli/demo/demo-3
   ```
3. Start the server:
   ```
   http-server -p 8000
   ```
4. Open your browser and visit: `http://localhost:8000`

## Option 5: Using Visual Studio Code Live Server extension

If you use Visual Studio Code:

1. Install the "Live Server" extension by Ritwick Dey
2. Open your project folder in VS Code
3. Right-click on `index.html` in the file explorer
4. Select "Open with Live Server"
5. The webpage will automatically open in your default browser

## Troubleshooting

### SSL/TLS Handshake Errors
If you see errors like this in your terminal:
```
code 400, message Bad request version ('\\x02i\\x00*JJ\\x13\\x01\\x13\\x02...')
```
These are SSL/TLS handshake attempts against your non-HTTPS server. These errors:
- Can be safely ignored
- Don't affect webpage functionality
- Are often caused by browser extensions or system services

### If images don't appear:
- Make sure the image paths are correct 
- Check that the `src/assets/images/` directory exists and contains the image files
- When using a server, image paths should be relative to the project root

### If scripts or styles don't load:
- Check browser console for any errors (F12 or right-click > Inspect > Console)
- Verify that the file paths in your HTML are correct
