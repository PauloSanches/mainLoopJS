MainLoopJS
==========

A javascript library for handler RequestAnimationFrame

## Getting Started
Just create an instance of MainLoopJS and pass params
````js
var mainLoop = new snch.MainLoopJS('id',30,onCallback);
mainLoop.start();
````

## Params

| Parameter     | Description       |
|---------------|-------------------|
| id            | Instance name     |
| frame rate    | Frames per second |
| callback      | Function return   |

## Methods

| Method   | Description    |
|----------|----------------|
| start    | Start loop     |
| stop     | Stop loop      |
