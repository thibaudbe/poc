# Create options

output='galerie.html'
directory=

while getopts :d: option
do
  case "$option" in
    d)
      echo "$option"
      directory=1
      ;;
    *)
      echo "Unvalid option"
      ;;
  esac
done

/*
# Test code to verify command line processing

if [ "$directory" = "1" ]; then
  echo "directory = $directory"
else
  echo "OOPS, no directory"
fi
echo "output = $output"


# Préparation des fichiers et dossiers

echo '' > $output

if [ ! -e thumbnails ]
then
  mkdir thumbnails
fi


# Generate thumbnails

function getThumbnails {
  for image in `ls *.png *.jpg *.jpeg *.gif 2>/dev/null`
  do
    convert $image -thumbnail '200x200>' thumbnails/$image
    echo '<a href="'$image'"><img src="thumbnails/'$image'"/></a>'>> $output
  done
}

function initPage {
  cat <<- _EOF_
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" >
    <head>
      <title>Ma galerie</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <style type="text/css">
        a img { border:0; }
        a { text-decoration: none; }
      </style>
    </head>
    <body>
      <p>$(getThumbnails)</p>
    </body>
  </html>
  _EOF_
}

initPage >> $output
*/
