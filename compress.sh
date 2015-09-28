#!/bin/bash

folder=$(pwd)
#p=$folder/img/event1
#p=$folder/members
#p=$folder/advisors
p=gallery
cd $p

for img in *.jpg; do
    #convert -quality 75 "$img" converted/${name%.jpg}.jpg
    if [ ! -e $folder/compressed/"$img" ]
    then
	RESULTS_SIZE=`stat -c %s $img`
	if [ "$RESULTS_SIZE" -gt 102400 ]
	then
		echo "new added: $img"
		#convert -quality 75 "$img" $folder/compressed/"$img"
    		convert -quality 50 -resize 50% "$img" $folder/compressed/"$img"
	fi
    fi
done

