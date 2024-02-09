#!/bin/bash

# Define an array of npm packages to install
packages=(
  "express@latest"
  "node-wav-player@latest"
  "play-sound@latest"
  "wallpaper@latest"
)

# Loop through the array and install each package
for package in "${packages[@]}"; do
  npm install "$package"
done

# Output completion message
echo "All npm packages installed successfully."
