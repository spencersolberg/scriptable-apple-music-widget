# Apple Music Widget
Apple Music Widget built in Scriptable for iOS
## What is it?
This is a script for the iOS app, [Scriptable](https://apps.apple.com/us/app/scriptable/id1405459188) which creates a widget. I'm trying to get the widget design to look as close as it can to the stock music widget, while providing a little more customization on how it's used.

![](readme/widget_example.jpg)

Currently the widget supports songs, albums, and Apple Music playlists. Apple Music playlists are playlists that consist only of songs that can be found on Apple Music. This widget does not support songs, albums, or playlists that contain media uploaded from iTunes or other sources.

As of right now, I only support the small (2x2) widget.
## How do I set it up?
### Step 0
Make sure you've installed both [Scriptable](https://apps.apple.com/us/app/scriptable/id1405459188), and [Shortcuts](https://apps.apple.com/us/app/shortcuts/id915249334). These are the only two apps you will need.
### Step 1
Add the helper Shortcut to your Shortcuts library. The easiest way to do this is by visiting [this iCloud link](https://www.icloud.com/shortcuts/b09317d3d98743bebd8f99e811b22fd8) on your iPhone.

You'll also want to add the widget script to your Scriptable library. You can create a new script in the app and then copy and paste [the script](https://raw.githubusercontent.com/heyitzspencer/scriptable-apple-music-widget/main/Apple%20Music%20Widget.js).
### Step 2
Find the song, album, or playlist you want to use, and copy the link.

You can do this by tapping the three dots in the top right, tapping share, and then copy.
| Three Dots                     | Share                         | Copy                            |
| :----------------------------: | :---------------------------: | :-----------------------------: |
|  ![](readme/copy_step_one.png) | ![](readme/copy_step_two.png) | ![](readme/copy_step_three.png) |
### Step 3
Run the helper Shortcut, which will tell you the rest of what you need to know
