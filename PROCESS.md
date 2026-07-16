Here is my documentation of the process it took to build YearGuessr. Every hour I line out what happened and what changed in my code.

Hour 1:
First I have set the title of the page, and inserted an input field and a "guess" button for the player. Then I got to work on the index.js part. I created a new class named "image", and made a image url randomizer from the image URLs I have picked from wikimedia commons (just to make sure they are copyright free). In the next hour I will handle the logic part, to determine and display the correctness of the guess. Perhaps I will also make the webpage more aesthetic using fonts and colors.

Hour 2:
I've spent this entire hour getting the logic right. During this time I have managed to get "three lives to guess" function work and I have also made several functions regarding the "loading of next image" of the "correct years".

Hour 3:
This hour I have spent my time enhancing the features of the logic. For example, I have coded the feature that determines if the guessed year was earlier or later than the correct year, to give the user some feedback. I have also tried to code the feature, where you can't guess an image more than one time, so when you click on next you won't get the same image ever again (except if you refresh of course). But I didn't finish that yet, since this feature is surprisingly difficult to integrate. Another current issue is the fact that for some reason, the first time you guess the image, the "correct year" the program returns is wrong. I hope I'll have both of those issues fixed by the end of hour 5.

Hour 4:
In this hour I have added some more images, so it's 10 in total now. I've set them all as comments for now tho in order to trouble shoot. Next I have fixed the problem with the wrong year in the first guess, which I have explained previously. I have also styled the page a little bit so it looks nicer (blue background and white monospace font). Next I will try to fix the problem with the availibility of photos.