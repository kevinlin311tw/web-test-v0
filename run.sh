#!/bin/bash

echo "Starting local server for Microsoft 50-Year Anniversary webpage..."

# Function to check if port is available
port_is_available() {
    # Try to establish a connection to the port
    if nc -z localhost "$1" >/dev/null 2>&1; then
        # Connection succeeded, port is in use
        return 1
    else
        # Connection failed, port is available
        return 0
    fi
}

# Find an available port starting from 8000
PORT=8000
while ! port_is_available $PORT; do
    echo "Port $PORT is in use, trying next port..."
    PORT=$((PORT+1))
done

echo "Using port $PORT"

# Check if python3 is available
if command -v python3 &>/dev/null; then
    echo "Using Python 3 server on http://localhost:$PORT"
    echo "If you see SSL/TLS handshake errors, they can be safely ignored."
    echo "Press Ctrl+C to stop the server."
    # Use 0.0.0.0 instead of :: to avoid IPv6 issues
    python3 -m http.server $PORT --bind 0.0.0.0
# Check if python is available
elif command -v python &>/dev/null; then
    echo "Using Python server on http://localhost:$PORT"
    echo "If you see SSL/TLS handshake errors, they can be safely ignored."
    echo "Press Ctrl+C to stop the server."
    python -m SimpleHTTPServer $PORT
# Check if npx is available
elif command -v npx &>/dev/null; then
    echo "Using npx http-server on http://localhost:$PORT"
    npx http-server -p $PORT
else
    echo "Could not find Python or Node.js to start a server."
    echo "Please install Python or Node.js, or simply open the index.html file directly in your browser."
    exit 1
fi
