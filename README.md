## Website Performance Optimization portfolio project

### Instructions

* Open index.html in your browser, and check that it has a [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) score of at least 90 for mobile and desktop.

* Open views/pizza.html and

  * use the timeline in developer tools to check that the page renders with a consistent frame rate of 60 fps when scrolling.

  * use the console to check that time to resize pizzas is less than 5 ms using the pizza size slider in the page.

### Steps I Took To Achieve Project Objectives

* To achieve a PageSpeed score of at least 90 for mobile and desktop for index.html, I inlined the contents of CSS/style.css and discarded the empty file. I optimized all images using responsive_images grunt task.  I marked both google analytics scripts as well as the js/perfmatters script as async to prevent parser blocking.  I deferred the loading of the non-critical CSS/print.css file, and optimized the delivery of google web fonts using Web Font Loader.

* To render views/pizza.html with a consistent frame rate at 60 FPS when scrolling, I made the following optimizations to updatePositions in views/js/main.js: I replaced the querySelectorAll method with getElementsByClassName, removed items.length and scrollTop calculations from the for-loop and cached them in variables outside the loop, and replaced addEventListener with requestAnimationFrame to prevent layout thrashing.

* To reduce time to resize pizzas to less than 5 ms using the pizza slider in views/pizza.html, I made the following optimizations to resizePizzas in views/js/main.js: I discarded the determineDx function, since it was non-essential. I moved the contents of the sizeSwitcher function to inside the changePizzaSizes function and made some changes there; I replaced the return statements with the variable newWidth, I changed the corresponding values from percentages to integers, and incorporated break statements. Here, I again replaced the querySelectorAll method with getElementsByClassName, I removed the .length calculation from the for-loop and cached it in a variable outside the loop, then used the loop to set the width of the pizza containers equal to newWidth, converted to a percentage.








