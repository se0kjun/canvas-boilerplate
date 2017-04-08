# canvas-boilerplate

## How to use

it has already implemented a fundamental method so you only write the code in following two method: **init and render**.

**init method** is called only once when complete to load a page. **render** is called every frame so you implement anything you want to render.


```js

function init() {
    // start
    canvas = document.getElementById("canvas_context");
    canvasCtx = canvas.getContext('2d');
    
    document.getElementById("canvas_context").addEventListener("click", function(e) {
        // click event
        // xpos : e.pageX - (document.getElementById("canvas_context").offsetLeft - window.pageXOffset)
        // ypos : e.pageY - (document.getElementById("canvas_context").offsetTop - window.pageYOffset)
    });
    
    animate();
}

```

```js

function render() {
    // tick
}

```
