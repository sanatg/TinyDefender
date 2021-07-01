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

mkdir build

yarn bundle

mv background.bundle.js content-script.bundle.js background.bundle.js.map content-script.bundle.js.map engine.bin build

cp -R icons paywall_scripts build

cp manifest.json build

echo "Done now go to chrome://extensions and drag n drop the build folder"