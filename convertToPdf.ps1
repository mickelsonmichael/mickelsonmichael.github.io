Write-Output "Beginning conversion in current directory..."

$currentPath = Split-Path -Parent $MyInvocation.MyCommand.Path

$word_app = New-Object -ComObject Word.Application

Get-ChildItem -Path $currentPath -Filter *Resume*.doc? | ForEach-Object {
    Write-Output "Converting $($_.BaseName)"

    $doc = $word_app.Documents.Open($_.FullName)
    $pdfName = "$($_.DirectoryName)\$($_.BaseName).pdf"
    $doc.SaveAs([ref] $pdfName, [ref] 17)
    $doc.Close()
}

Write-Output "Done."
$word_app.Quit()