#!/usr/bin/env sh

cat << "EOF"


▀█▀ █ █▄░█ █▄█ █▀▄ █▀▀ █▀▀ █▀▀ █▄░█ █▀▄ █▀▀ █▀█   █▄▄ █░█ █ █░░ █▀▄ █▀▀ █▀█
░█░ █ █░▀█ ░█░ █▄▀ ██▄ █▀░ ██▄ █░▀█ █▄▀ ██▄ █▀▄   █▄█ █▄█ █ █▄▄ █▄▀ ██▄ █▀▄

Coded by sanat gupta

EOF

echo "Initializing Shell...."
echo "starting build framwork...[/]"
echo "let's build!!!"
sleep 2s
rm -rf build
mkdir build

yarn bundle

mv background.bundle.js content-script.bundle.js background.bundle.js.map content-script.bundle.js.map engine.bin build

cp manifest.json build
cp -R icons build

echo "Done now go to chrome://extensions and drag n drop the build folder"