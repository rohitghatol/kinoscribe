KinoScribe - 3D Presentations
==========
Introduction
============
KinoScribe is a 3D Presentation framework built using Polymer.js (Google's Web Component's Library). Using KinoScribe you can create 3D Presentations in which you can layout your side in 3D using 
 * Custom Layout - You define all 3D Coordinates, Rotations etc
 * Preset Layouts - Where you use one of the Preset Layouts like "Left to Right", "Top to Bottom", "Box", "Spiral", "Album"



Video Demo
======
<a href="http://www.youtube.com/watch?feature=player_embedded&v=l4Dauw3oJ1o
" target="_blank"><img src="http://img.youtube.com/vi/l4Dauw3oJ1o/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="480" height="360" border="10" /></a>

Home Page
=========
Visit - http://www.kinoscribe.com for live demo

Code Examples
=============
Visit - http://www.kinoscribe.com for live demo

Browser Compatibility
=========
* Chrome
* Firefox

Yet to be tested on Safari and IE 10+

Usage
======
```
<!doctype html>
<html>
<head>
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
    <title>kino-slides Demo</title>

    <script src="../platform/platform.js"></script>
    <link rel="import" href="kinoscribe.html">
    <style>
        kino-slide .slide{
            display: block;
            width: 800px;
            height: 600px;
            padding: 40px 60px;
            background-color: white;
            border: 1px solid rgba(0, 0, 0, .3);
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, .1);
            color: rgb(102, 102, 102);
            text-shadow: 0 2px 2px rgba(0, 0, 0, .1);
            font-family: 'Open Sans', Arial, sans-serif;
            font-size: 30px;
            line-height: 36px;
            letter-spacing: -1px;
        }
    </style>
</head>
<body unresolved>


<kino-pres>
    <kino-slide x="1000" type="transition" >
        <section class="slide">
            Slide 1
        </section>
    </kino-slide>

    <kino-slide x="2500" z="-1000">
        <section class="slide">
            Slide 2
        </section>
    </kino-slide>

    <kino-slide x="4000" z="-2000" scale="3">
        <section class="slide">
            Slide 3
        </section>
    </kino-slide>

    <kino-slide x="5500" z="-3000" rotateZ="45">
        <section class="slide">
            Slide 4
        </section>
    </kino-slide>

    <kino-slide x="7000"  rotateX="90" rotateY="90">
        <section class="slide">
            Slide 5
        </section>

    </kino-slide>
    <kino-slide x="8500" z="-1000" >
        <section class="slide">
            Slide 6
        </section>
    </kino-slide>



</body>
</html>

```
Authors
=========
 * Rohit Ghatol - @rohitghatol
 * Nikhil Walvekar - @walvekarnikhil

Project Setup
==============
If you are a Developer and want to play with the code. Here is how you setup this Project.

 * Checkout polymer-projects project - $>git clone https://github.com/rohitghatol/polymer-projects
 * On Windows - Run the command cmd>checkout-components.cmd 
 * On Linux/Mac - Run the command cmd>checkout-components.sh
 
Running the Demo
-----------------

In my case I use WebStorm, I right click on kinoscribe/demo.html and click on "Open in Brower"
I see the following url opens up in chrome

* http://localhost:63342/polymer-projects/kinoscribe/demo.html

 
References
===========

This Project is inspired from  [Impress.js](https://github.com/bartaz/impress.js/) created by [Bartek Szopka](https://github.com/bartaz)
