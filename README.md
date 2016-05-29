Podqueue UI -- core
===================

This is the non-platform-specific parts of podqueue's UI.

## Architecture

There are 2 main things that the core does

1. Manage the API interaction and state
2. Manage local storage of podcasts

It does this with:

1. A Redux app (with action creators, reducers, etc)
2. A Worker (can be a serviceworker on the web, but can run on the UI thread where serviceworker is unavailable, like native mobile apps)

These parts communicate via message passing.
