# @relive/core

Deals with loading code and running the server instance.

Creates a server with two main routes: /ui and /sse.

## /ui
displays and renders the live animations.

## /sse
handles communications between the remote ui instance and the viewer instance. (Server Side Events are used, not websockets.)
