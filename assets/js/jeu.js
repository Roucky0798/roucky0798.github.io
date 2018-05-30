//scroll to 400 pixels down from the top
TweenLite.to(window, 2, {scrollTo:40000});

//or to scroll to the element with the ID "#someID":
TweenLite.to(window, 2, {scrollTo:"#someID"});

//or to specify which axis (x or y), use the object syntax:
TweenLite.to(window, 2, {scrollTo:{y:400, x:250}});