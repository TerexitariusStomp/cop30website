<#
  Sets up WSL2 (Ubuntu), installs Node.js via nvm inside WSL, installs Codex CLI,
  and prepares your project path. Run in an elevated PowerShell (Administrator).
#>

$ErrorActionPreference = "Stop"

function Is-Admin {
  $id = [Security.Principal.WindowsIdentity]::GetCurrent()
  $p = New-Object Security.Principal.WindowsPrincipal($id)
  return $p.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

$projectWinPath = "C:\Users\terex\Documents\cop30website\Amazon-Clone-Project-codebase"
$projectWslPath = "/mnt/c/Users/terex/Documents/cop30website/Amazon-Clone-Project-codebase"

 # Check installed distros first (no admin required)
$distros = (wsl --list --quiet) 2>$null

if (-not $distros) {
  if (-not (Is-Admin)) {
    Write-Host "WSL is not initialized. Please re-run this script as Administrator to install and enable WSL." -ForegroundColor Yellow
    Write-Host "Tip: Right-click PowerShell and choose 'Run as administrator', then run:" -ForegroundColor Yellow
    Write-Host "powershell -ExecutionPolicy Bypass -File `"$PSScriptRoot\setup-codex-wsl.ps1`"" -ForegroundColor Yellow
    exit 1
  }

  Write-Host "Enabling WSL and VM Platform features..." -ForegroundColor Cyan
  & dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart | Out-Null
  & dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart | Out-Null

  Write-Host "Setting WSL2 as the default version..." -ForegroundColor Cyan
  wsl --set-default-version 2 2>$null | Out-Null

  Write-Host "No WSL distro found. Installing Ubuntu..." -ForegroundColor Cyan
  wsl --install -d Ubuntu
  Write-Host "Complete Ubuntu first-run (create username/password). Reboot if prompted, then re-run this script." -ForegroundColor Yellow
  exit 0
}

try {
  Write-Host "Updating WSL kernel..." -ForegroundColor Cyan
  wsl --update | Out-Null
} catch {}

$bash = @'
set -euo pipefail

echo "[WSL] Updating apt and installing dependencies..."
sudo apt-get update -y
sudo apt-get install -y ca-certificates curl git build-essential wslu

if [ ! -d "$HOME/.nvm" ]; then
  echo "[WSL] Installing nvm..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

if ! command -v node >/dev/null 2>&1; then
  echo "[WSL] Installing Node LTS..."
  nvm install --lts
fi

echo "[WSL] Node version:" $(node -v)
echo "[WSL] NPM version:" $(npm -v)

if ! npm list -g --depth=0 2>/dev/null | grep -q "@openai/codex@"; then
  echo "[WSL] Installing Codex CLI globally..."
  npm i -g @openai/codex
fi

if [ -d "__PROJECT__" ]; then
  echo "[WSL] Project directory detected: __PROJECT__"
else
  echo "[WSL] Warning: Project directory not found: __PROJECT__"
fi

echo "[WSL] Codex CLI installed. To launch:"
echo "    cd __PROJECT__ && codex"
'@

$bash = $bash.Replace("__PROJECT__", $projectWslPath)

Write-Host "Installing Node + Codex inside WSL..." -ForegroundColor Cyan
wsl -e bash -lc $bash

Write-Host "Setup complete. To launch Codex now, run:" -ForegroundColor Green
Write-Host "wsl -e bash -lc 'cd $projectWslPath; codex'" -ForegroundColor Green
