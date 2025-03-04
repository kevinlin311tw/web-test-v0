#!/bin/bash

echo "Starting Node.js server for Microsoft 50-Year Anniversary webpage..."

# Check if Node.js is available
if command -v node &>/dev/null; then
    echo "Using Node.js server..."
    node server.js
else
    echo "Node.js is not installed. Please install Node.js or use run.sh to use Python's built-in server instead."
    exit 1
fi
