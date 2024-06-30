#!/usr/bin/sh

set -e
npm run build
cd dist
git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:AmrYasserSaber/IEEE-Website.git master:gh-pages

cd -