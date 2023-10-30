#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git checkout -b gh-pages
git add -A
git commit -m 'Deploy New Version'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/andy922200/CV-Resume.git gh-pages

# remove dist folder
cd ..
rm -rf dist