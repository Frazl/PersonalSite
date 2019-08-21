python3 build.py
mv ./blogs.json ./src/blogs.json
mv ./projects.json ./src/projects.json
npm run build
rm /var/www/personal
cp ./build /var/www/personal -r
chmod +755 /var/www/personal -R