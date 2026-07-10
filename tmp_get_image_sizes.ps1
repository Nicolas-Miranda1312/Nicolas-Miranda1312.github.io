$files = @('proyecto-01/01.jpg','proyecto-02/01.jpg')
foreach ($f in $files) {
  $path = Resolve-Path $f
  $img = [System.Drawing.Image]::FromFile($path)
  Write-Output "$f $($img.Width)x$($img.Height)"
  $img.Dispose()
}
