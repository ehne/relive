# @relive/core

Deals with loading code and running the server instance.

Creates a server with two main routes: /ui and /sse.

## /ui
displays/renders the live animations and the remote.

###### /ui/viewer
renders the animations

###### /ui/remote
controls the rendering of animations


## /sse
handles communications between the remote ui instance and the viewer instance. (Server Side Events are used, not websockets.)

###### /sse/events (GET)
returns the eventstream

###### /sse/toggle/:animName (POST)
toggles whether or not the animName is playing
