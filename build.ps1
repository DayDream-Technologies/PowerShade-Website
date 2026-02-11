<#
.SYNOPSIS
    Build script for PowerShade React website

.DESCRIPTION
    PowerShell script to manage development, building, and deployment
    of the PowerShade React (Vite) website.

.PARAMETER Dev
    Start the development server

.PARAMETER Build
    Build the production version

.PARAMETER Export
    Build and export static site for GitHub Pages

.PARAMETER Clean
    Remove build artifacts and dependencies

.PARAMETER Install
    Install npm dependencies

.EXAMPLE
    .\build.ps1 -Dev
    Starts the development server at http://localhost:3000

.EXAMPLE
    .\build.ps1 -Export
    Builds and outputs static site to the 'dist' folder
#>

param(
    [switch]$Dev,
    [switch]$Build,
    [switch]$Export,
    [switch]$Clean,
    [switch]$Install
)

$ErrorActionPreference = "Stop"

function Write-Status {
    param([string]$Message)
    Write-Host "`n>> $Message" -ForegroundColor Cyan
}

# Clean build artifacts
if ($Clean) {
    Write-Status "Cleaning build artifacts..."
    
    $foldersToRemove = @("dist", "node_modules")
    foreach ($folder in $foldersToRemove) {
        if (Test-Path $folder) {
            Write-Host "  Removing $folder..."
            Remove-Item -Recurse -Force $folder
        }
    }
    
    Write-Host "Clean complete!" -ForegroundColor Green
}

# Install dependencies
if ($Install) {
    Write-Status "Installing dependencies..."
    npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "Dependencies installed!" -ForegroundColor Green
}

# Development server
if ($Dev) {
    Write-Status "Starting development server..."
    Write-Host "Open http://localhost:5173 in your browser" -ForegroundColor Yellow
    npm run dev
}

# Production build
if ($Build) {
    Write-Status "Building for production..."
    npm run build
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "Build complete!" -ForegroundColor Green
}

# Static export for GitHub Pages
if ($Export) {
    Write-Status "Building and exporting static site..."
    
    # Set production environment
    $env:NODE_ENV = "production"
    
    npm run build
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Export failed" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "`nStatic site built to 'dist' folder!" -ForegroundColor Green
    Write-Host "Deploy the 'dist' folder contents to GitHub Pages or Amplify" -ForegroundColor Yellow
}

# Show help if no parameters
if (-not ($Dev -or $Build -or $Export -or $Clean -or $Install)) {
    Write-Host @"

PowerShade Build Script
=======================

Usage: .\build.ps1 [options]

Options:
  -Dev      Start development server (http://localhost:5173)
  -Build    Build production version
  -Export   Build and export static site for GitHub Pages
  -Clean    Remove dist and node_modules folders
  -Install  Install npm dependencies

Examples:
  .\build.ps1 -Install          # First time setup
  .\build.ps1 -Dev              # Start developing
  .\build.ps1 -Export           # Build for deployment
  .\build.ps1 -Clean -Install   # Fresh start

"@ -ForegroundColor Cyan
}
