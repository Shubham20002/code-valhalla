#!/bin/bash
set -e

echo "Installing backend..."
cd backend
npm install
cd ..

echo "Installing frontend..."
cd frontend
npm install
echo "Building frontend..."
npm run build
cd ..

echo "Build complete!"