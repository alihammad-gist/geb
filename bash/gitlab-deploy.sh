gatsby build --prefix-paths && 
echo 'commiting changes in the repository' &&
git add -A && 
git commit -m 'pushing website' && 
echo 'pushing master branch to gitlab server' &&
git push gitlab master