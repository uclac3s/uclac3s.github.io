#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

echo "[Main] process html pages"
python html_preprocessor.py

echo "[Main] git commit and push"
git add .
git commit -m "auto update"
git push
