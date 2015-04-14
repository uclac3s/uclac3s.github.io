#!/bin/bash

folder=$(pwd)
p=$folder/img/event1
cd $p

for img in *.jpg; do
    #convert -quality 75 "$img" converted/${name%.jpg}.jpg
    if [ ! -e $folder/compressed/"$img" ]
    then
	echo "new added: $img"
    	convert -quality 75 -resize 50% "$img" $folder/compressed/"$img"
    fi
done

