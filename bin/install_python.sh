#!/bin/bash

# install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# enable homebrew
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >>/Users/"$(whoami)"/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# install python
brew install python

# homebrew and python is installed
echo "HomeBrew and Python is installed now. Great!"
