$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$portableNode = Join-Path $PSScriptRoot '.tools/node-v22.23.3-win-x64'
if (Test-Path -LiteralPath $portableNode) {
    $env:Path = "$portableNode;$env:Path"
}
npm.cmd run dev -- --port 5173 --strictPort
