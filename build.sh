#!/bin/bash

tsc
if [ ! -d "../Red7Mobile/GAME_BUILDS/WhiteSunEngine" ]; then
  mkdir "../Red7Mobile/GAME_BUILDS/WhiteSunEngine"
fi
if [ ! -d "../Red7Mobile/GAME_BUILDS/WhiteSunEngine/core" ]; then
  mkdir "../Red7Mobile/GAME_BUILDS/WhiteSunEngine/core"
fi
cp "./build/main.js" "../Red7Mobile/GAME_BUILDS/WhiteSunEngine/core/"
cp "./index.html" "../Red7Mobile/GAME_BUILDS/WhiteSunEngine/"