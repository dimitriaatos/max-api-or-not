# Max API or Not
A module that allows error-free running of *Node for Max* scripts, that use `max-api`, outside of *Cycling '74's Max*. Meant to be loaded instead of `max-api`.

## Installation
`npm install max-api-or-not`

## How it works
When `max-api-or-not` is required in a script run by a `[node.script]` object, it returns the `max-api`. When loaded on other environments, where `max-api` is absent, `max-api-or-not` will export an object that is identical to `max-api`, concerning structure and types, but has no functionality.
