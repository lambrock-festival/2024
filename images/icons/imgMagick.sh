#!/bin/bash

mkdir -p images_webp
mkdir -p images_compress
mkdir -p images_old

for file in *.png *.jpeg *.jpg; do
    if [[ -f "$file" ]]; then
        convert "$file" -quality 80 "images_webp/${file%.*}.webp"
        mv -i "$file" images_old
        convert "images_old/$file" -resize 50% "images_compress/$file"
    fi
done
