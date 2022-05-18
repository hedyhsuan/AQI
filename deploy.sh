#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

npm run build

cd dist


git init
git add -A
git commit -m 'deploy'


#  ssh 模式
git push -f git@github.com:hedyhsuan/AQI.git master:gh-pages
# HTTPS 模式
# git push -f https://github.com/hedyhsuan/AQI.git master:gh-pages

cd -