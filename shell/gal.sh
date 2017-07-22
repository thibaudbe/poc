#!/usr/bin/env bash

###  ------------------------------- ###
###  Helper methods for BASH scripts ###
###  ------------------------------- ###

# Create options

default_filename='galerie.html'
default_directory='.'

while getopts :f:d: option
do
  case "$option" in
    f | --filename )
      filename=$2
      shift ;;
    d | --directory )
      directory=$2
      shift ;;
    * )
      echo "Unvalid option"
      break ;;
  esac
done


# Test code to verify command line processing

if [ "$directory" = ""  ]; then
  directory=$default_directory
fi

if [ "$filename" = "" ]; then
  filename=$default_filename
fi

echo "filename = $filename"
echo "directory = $directory"


# Test file and folder

echo '' > $filename

if [ ! -e thumbnails ]; then
  mkdir thumbnails
fi


# Render HTML

echo '<html>
  <head>
    <title>Ma galerie</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style type="text/css">
      a img { border:0;  }
      a { text-decoration: none;  }
    </style>
  </head>
  <body>
    <p>' >> $filename

for image in `ls $directory/*.png $directory/*.jpg $directory/*.jpeg $directory/*.gif 2>/dev/null`
do
  convert $image -thumbnail '200x200>' thumbnails/$image
  echo '<a href="'$image'"><img src="thumbnails/'$image'"/></a>' >> $filename
done

    echo '</p>
  </body>
</html>' >> $filename

