#!/usr/bin/env bash

# add seminars first
python gen_seminarJs.py > seminars.js

git add *
git commit -m "auto update"
git push
