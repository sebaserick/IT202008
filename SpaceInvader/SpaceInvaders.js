<!DOCTYPE html>
<html>
	<head>
		<title>Space Invaders</title>
		<link rel="stylesheet" type="text/css" href="css/core.css">
		<link rel="stylesheet" type="text/css" href="css/typeography.css">
		<style>
	
			/* Styling needed for a fullscreen canvas and no scrollbars. */
			body, html { 
		    width: 100%;
		    height: 100%;
		    margin: 0;
		    padding: 0;
		    overflow: hidden;
			}
 
			/* Here's where we'll put Space Invader styles... */
		</style>
	</head>
	<body>
		<!-- this is where the Space Invaders HTML will go... */ -->
		<script src="js/starfield.js"></script>
		<script src="js/spaceinvaders.js"></script>
		<script>

function Game() {
 this.config = {
    gameWidth: 400,
    gameHeight: 300,
    fps: 50
};

this.lives = 3;
this.width = 0;
this.height = 0;
this.gameBound = {left: 0, top: 0, right: 0, bottom: 0};
 

this.stateStack = [];
this.pressedKeys = {};
this.gameCanvas =  null;
}

Game.prototype.initialise = function(gameCanvas) {
 this.gameCanvas = gameCanvas;
this.width = gameCanvas.width;
    this.height = gameCanvas.height;
  this.gameBounds = {
        left: gameCanvas.width / 2 - this.config.gameWidth / 2,
        right: gameCanvas.width / 2 + this.config.gameWidth / 2,
        top: gameCanvas.height / 2 - this.config.gameHeight / 2,
        bottom: gameCanvas.height / 2 + this.config.gameHeight / 2,
    };
};

Game.prototype.currentState = function() {
    return this.stateStack.length > 0 ? this.stateStack[this.stateStack.length - 1] : null; 

Game.prototype.moveToState = function(state) {
	 if(this.currentState()) {
	 if(this.currentState().leave) {
           this.currentState().leave(game);
        }
        
        this.stateStack.pop();
    }
	 if(state.enter) {
        state.enter(game);
    }
 	 this.stateStack.push(state);
}; 
 
Game.prototype.pushState = function(state) {

	 if(state.enter) {
        state.enter(game);
    }
	this.stateStack.push(state);
};
Game.prototype.popState = function() {

	 if(this.currentState()) {
        if(this.currentState().leave) {
            this.currentState().leave(game);
        }
	
	 this.stateStack.pop();
    }
}; 
 	
		</script>
	</body>
</html> 
<?php
ini_set('display_errors',1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();

