# Run this once to delete the dead shadcn UI components and lib/utils
# After running, delete this script too.

$ui = "src/components/ui"
$keep = "sonner.tsx"

Get-ChildItem "$ui/*.tsx" | Where-Object { $_.Name -ne $keep } | Remove-Item -Force

$libUtils = "src/lib/utils.ts"
if (Test-Path $libUtils) { Remove-Item $libUtils -Force }

# Clean up empty lib folder if nothing left
$libDir = "src/lib"
if ((Get-ChildItem $libDir -ErrorAction SilentlyContinue | Measure-Object).Count -eq 0) {
    Remove-Item $libDir -Force
}

Write-Host "Done. Remaining ui/ files:"
Get-ChildItem "$ui"
