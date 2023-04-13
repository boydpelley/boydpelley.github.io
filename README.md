========== half past nine (Official Site) ==========

Contributers: Boyd Pelley
Version: 3.0
SITE INDEX LOCATED WITHIN THE HALF PAST NINE FOLDER

====================================================


Description

	This site is for the band half past nine, who was formally referred to as Jester. Designed and written by one of the members, this site will give the viewer a good idea on what they should be expecting should expect when they look into the band. This site contains only HTML, CSS, and JavaScript. There are 5 pages on the site, the index (or main page), a page with original songs, a performances page, the gear we use, and a page for social media.

Please note that relative links and other names for images contain the name "Jester" as the photos were taken, nameed, etc. when the band was referred to Jester at the time.


IMPORTANT NOTES

	This Assignment reuses code from Assignment 2, the HTML and CSS, although there were a few modifications, such as the colouring of the pages, and a few id and class names.
	
	The wireframe for this assignment may not be 100% true to how it was desgined. For example the mobile site was modified on the our gear page from a 1X4 to its original 2X2 tables, due to the fact that I couldn't modify the table dimensions.

	It may seem like the mobile and tablet sites aren't that different, but they do have their differences, particularily in the differences of the font sizes between the two devices.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


PUBLIC WEBSITE CAN BE FOUND AT:
boydpelley.github.io


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Relative Links

***index.html***
The favicon is located at "photos/favicon.png"
The external stylesheet is located at "external/stylesheet.css"
The index page is located at "index.html"
The originals page is located at "pages/originals.html"
The performances page is located at "pages/performances.html"
The our gear page is located at "pages/our gear.html"
The socials page is located at "pages/socials.html"
The photo with alt "Ethan headshot" is located at "photos/Ethan.JPG"
The photo with alt "Boyd headshot" is located at "photos/Boyd.JPG"
The photo with alt "Nolan (cursed) headshot" is located at "photos/Nolan.JPG"
The photo with alt "Cameron headshot" is locateed at "photos/Cameron.JPG"
The photo with alt "Ethan and Boyd shot on film" is located at "photos/boyd and ethan.jpeg"
The photo with alt "A bunch of guitars picked up from the pawn shop" is located at "photos/the 'shitcasters'.jpg"
The photo with alt "Ethan with Boyd's guitar" is located at "

***originals.html***
The favicon is located at "../photos/favicon.png"
The external stylesheet is located at "../external/stylesheet.css"
The index page is located at "../index.html"
The originals page is located at "originals.html"
The performances page is located at "performances.html"
The our gear page is located at "our gear.html"
The socials page is located at "socials.html"
The photo with alt "ethan boyd and cam together" is located at "../photos/ethan boyd and cam.jpg"
The audio for Deja Vu is located at "../audio/230222_deja_mix4.mp3"
The photo with alt "nice photo of ethan and cam" is located at "../photos/young ethan and cam.JPG"
The audio for Outta Luck is located at "../audio/outtaluck_mix5.3.mp3"
The photo with alt "boyd walking" is located at "../photos/boydwalking.JPG"
The audio for untitled is located at "../audio/230203_bp_mix2.mp3"
The photo with alt "little drummer boy" is located at "../photos/little drummer boyd.JPG"
The audio for Hurts my Head is located at "../audio/Hurts my head(Mix3).mp3"

***performances.html***
The favicon is located at "../photos/favicon.png"
The external stylesheet is located at "../external/stylesheet.css"
The index page is located at "../index.html"
The originals page is located at "originals.html"
The performances page is located at "performances.html"
The our gear page is located at "our gear.html"
The socials page is located at "socials.html"
The photo with alt "poster for under the underground" is located at "../photos/under the underground.jpg"
The video for Harvey live is located at "../videos/harvey live.MOV"
The video for Car Port live is located at "../videos/6_ Car Port (live).mp4"

***our gear.html***
The favicon is located at "../photos/favicon.png"
The external stylesheet is located at "../external/stylesheet.css"
The index page is located at "../index.html"
The originals page is located at "originals.html"
The performances page is located at "performances.html"
The our gear page is located at "our gear.html"
The socials page is located at "socials.html"


***socials.html***
The favicon is located at "../photos/favicon.png"
The external stylesheet is located at "../external/stylesheet.css"
The index page is located at "../index.html"
The originals page is located at "originals.html"
The performances page is located at "performances.html"
The our gear page is located at "our gear.html"
The socials page is located at "socials.html"
The photo with alt "ethan with the fancy glasses on" is located at "../photos/ethan with glasses on.JPG"
The photo with alt "instagram logo" is located at "../photos/instagram logo.png"


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


HTML Code Documentation

***index.html***
Lines 3-8 contain the head tags for the index, which links the favicon, the stylesheet, metadata, and page name.
Lines 10-23 is the div for "header-frontpage" which contains the photo in the CSS that covers the front page.
Lines 11-22 is for the div "header-to-blur", which had to be in a separate div because I only wanted the navbar blurred not the whole page (explained in CSS documentation).
Lines 12-21 are for the header tags, which contains an h1 header text, and a nav tag which lists the links to the other webpages.
Lines 24-33 contain the div id "who-we-are" which contains h2 header text, and a p tag.
Lines 34-66 contain the div id "each member", which contains 4 seperate divs with the class "member, then 4 separate ids. Within each div there is a photo of the badn member and a p tag.
Lines 68-72 contain the div for the photo gallery, and contains three photos.
Lines 73-78 contain the div for the palette buttons, and contains text and the three buttons to change to the different palettes.

***originals.html***
Lines 3-8 contain the head tags for the index, which links the favicon, the stylesheet, metadata, and page name.
Lines 10-19 contain the header, which has the top title and links to the other pages
Lines 25-80 is a container for all of the original songs, used for being centered in CSS.
Lines 21-36 is a div for the first song with the class "song-text-left" and contains two divs, one containing text, the other an image and an audio element.
Lines 37-52 is a div with the class "song-text-right" and has the same two divs containing.
Lines 53-68 is a div with the class "song-text-left", same as previous.
Lines 69-84 is a div with the class "song-text-right" same divs contained inside.
Line 86 has a h5 header text tag.
Lines 88-93 is the div for the colour-chnager, and is the same as the previous page.

***performances.html***
Lines 3-19 contain the same code with adjusted titles as the previous page.
Lines 20-48 is a div id "under-the-underground", and has a div with a photo and title, and another div that contains two other divs that each contain text and a video.
Lines 49-56 contain div id "live-at-rhs", has a title, p tag, and iframe element.
Lines 57-61 contains a div "future" and contains text.
Lines 63-68 is the div for the colour-chnager, and is the same as the previous pages.

***our gear.html***
Lines 3-19 contain the same code with adjusted titles as the previous page.
Lines 20-22 is a div that contains an ecternal link to a PNG image.
Lines 23-132 contain the table class "the band's gear", and contains 2 rows with 2 data elemts per row.
Lines 26-51 is a div for the first band member's music gear. It contains a <h4></h4> header and an unorderd list. Each type of gear in the list then has nested numbered lists off of that.
Lines 52-75 is a div for the second member's gear, and follows the exact same structure as the previous, the next two will also follow the same structure.
Lines 78-101 for list 3. 
Lines 102-129 for the 4th list.
Lines 134-139 is the div for the colour-chnager, and is the same as the previous pages.

***socials.html***
Lines 3-19 contain the same code with adjusted titles.
Lines 20-57 is a wrapper div that contains all of the content other than the header.
Lines 21-38 contain a div is "form", that has a wrapper within for CSS background styling, and has a p tag, and a form tag that contains a text input, textarea input, and submit button.
Lines 39-44 contains the div "ethan-glasses" and contains a wrapper, imagem and text.
Lines 45-50 is a div for "instagram", contains a wrapper, h4 element, anchor link, and image.
Lines 51-56 is a div for "contact", has a wrapper, h4 header text, and an anchor link that is a mailto link.
Lines 59-64 is the div for the colour-chnager, and is the same as the previous pages.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


CSS Code Documentation

*** general CSS (lines 1-97) ***
Lines 6-10 is the :root, and contains variablesfor the main background color, border color, and div background.
Lines 12-14 is to edit the body tag, and sets the background color to the variable for the background color.
Lines 16-18 is for the image tag, and sets the border color to the variable for the border color.
Lines 20-22 set the background color of the the applicable divs with the class, "backgrounded", and sets the background color of the divs to the applicable variable.
Lines 24-28 changes the colour-changer div, present on every page. It changes the display to flex, ajusts the margins, and justification.
Lines 30-33 changes the buttons on the colour changer div.
Lines 35-38 edits the @font-face, changing the font to poppins-light.
Lines 40-43 is a general selector that changes the font-face to poppins-light, and changes the color to a cream white.
Lines 45-47 centers every h1 element, or every page title.
Lines 49-54 edits the nav, setting the width to the whole age, and setting the display settings to flex settings.
Lines 56-65 changes the a elements that are direct children of the nav tag, floating them left, width 20% so they are equal width apart, text-alignment is centered, no text decoration, text to bold, padding and margin settings.
Lines 67-71 changes a elements that are hovered that are direct children of nav tags, changing the colour when hovered, only when the screen width is at LEAST 1000px wide.
Lines 75-95 contains code that makes so when the screen is smaller than 1000px is adds borders around the nav links, changes the font size across every page, and adjusts the input and textarea.

*** index CSS (lines 98-219) ***
Lines 101-106 change the id "index" the margins and padding settings adjusted.
Lines 109-119 set the header on the frontpage to the photo of the band. 
Lines 121-124 blur the navbar.
Lines 126-130 changes the the top title color and font weight.
Lines 132-135 changes the max width of the "who-we-are" section and centers it.
Lines 137-152 changes the member section and member divs so they are placed in a 2X2 grid if the screen size is over 1000px.
Lines 155-163 changes the member class to felx, and changes images that are children of the member class to resize when the page size is adjusted.
Lines 165-189 edits the "gallery" id, which contains three photos, and places them into a grid, and edits the borders, grid-area, etc.
Lines 191-195 makes it so that if a screen is between the sizes of 600px and 1000px, or tablets, the text on the who we are sections gets bigger.
Lines 197-217 makes it so that when the scrren is under 1000px, the gallery gets changed to a column direction flex, and it edits the width of the photos.

*** originals CSS (lines 220-270) ***
Lines 224-227 changes the the max width of the originals-container and centers it with margins.
Lines 229-231 changes the song-text-left class to display flex.
Lines 233-236 affects the photo-and-player class if it is a child of the song-text-left class, changing the margins, and floating the class to the right side.
Lines 238-241 changes the song-text-right class to flex display and flexes in the row reverse direction.
Lines 243-245 changes the photo-and-player class if it is a child of the song-text-right class by adjusting the margins.
Lines 247-252 changes all photos with attribute, class = "single-cover" changing the border, margins, and padding.
Lines 254-259 changes the p elements that are direct children of the originals-text class by setting display to flex, height to 100%, changing the alignment.
Lines 261-263 changes the h5 elements, center aligning them.
Lines 265-269 changes the width of the img and audio elements if the screen size is under 1000px.

*** performances CSS (lines 271-366) ***
Lines 275-279 sets display to flex column wise, and changes padding.
Lines 281-286 changes the display to flex, rounds the border, adds padding and margins.
Lines 288-292 changes the photo-under id by text-aligning center, flex-shrink and width.
Lines 294-297 changes the border of the image in the photo-under div.
Lines 299-302 changes the display to flex and row wraps the songs-container div.
Lines 302-310 makes it so that the video elements are set to flex when the screen width is over 1000px wide.
Lines 312-318 changes the div elements that are direct children of the songs-container id, setting display to flex, changing the flex elements and padding
Lines 320-325 changes the live-at-rhs id, setting to flex, flex settings, rounding the corners.
Lines 327-338 changes the child elements of the live-at-rhs id, setting their respective flex percentages, algining text.
Lines 340-357 changes the flex direction of each performance div to column, so they stack on top of each other, only when the screen size is BELOW 1000px.
Lines 359-365 changes the text elements of the bottom div.

*** our gear CSS (lines 367-410) ***
Lines 371-375 changes the png-pedals id and the-band-gear id, setting display to flex, centering, padding.
Lines 377-380 changes the table and its elements, adding a border around.
Lines 382-384 changes h4 elements that are direct children of td elements, aligning text to the center.
Lines 386-388 changes the list elements that are children of both ordered and unordered lists, removing the list style type.
Lines 390-396 changes the first line of list elements that are direct children of unordered lists, chaning the font color from white to light green.
Lines 398-403 changes the display to flex, changes the flex elements, and the alignment for the end div.
Lines 405-409 change the font size of the list elements if the screen is under 1000px wide.

*** socials CSS (lines 411-492) ***
Lines 415-421 changes the display to flex, flex propertiesm, justify-content, and margins of the socials-content id.
Lines 423-430 sets the width to 100%, changes the display to flex, as well changes the flex elements and the alignment.
Lines 432-435 changes the label tags that are general siblings to the input tag, and adjacent siblings to the textarea, changing the margin values and float.
Lines 437-447 changes the form-wrapper id and the ethan-wrapper id, and the instagram-wrapper id adjusting the margins and padding adjusted.
Lines 449-465 changes the display to flex, changing the width, alignment, flex properties.
Lines 467-469 changes the text color of attribute type "submit".
Lines 471-473 changes the input tags and textarea tags color.
Lines 475-477 changes a elements that are direct children of h4 tags, changing the color to red.
Lines 479-483 changes the display to flex
Lines 485-483 changes the display to flex in column when the width goes below 1000px.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


JavaScript Documentation

*** FOR FURTHER NOTES, REFER TO THE SOURCE CODE ***

The first thing modified with javascript which were lines 26-52, changes the color palettes of the website by changing the colours set the variables. This satisfies the colour changer in part 4.

The second part are lines 59-92, which makes it so that if the use clicks more than one audio element, then the other ones (if turned on) get paused. It puts all of the audio elements into an array, cycles through and pauses them. This satisfies the conditional in part 4.

The third part are lines 94-167 make it so that it checks if the user enter in invalid names, or leave the input and/or textarea blank. It utilizes Event Listeners to get the job done, and makes the applicable box turn red, as well as display error on the screen. This satisfies the Event Listener part in part 4.

Thr fourth part is lines 170-181 make it so that it confirms that the user is going to another page, and if the user clicks confirm, it brings them to the instagram page, and if not, it doesn't. This satisfies the notification in Part 4.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Citations

Freepik, N/A. Instagram Logo 87390. (N/A). Retrieved February 9, 2023 from https://www.flaticon.com/free-icon/instagram-logo_87390

Roland US, 2013. blues-pedal-combo. (September 2013). Retreived March 6, 2023 from http://i2.wp.com/www.rolandus.com/blog/wp-content/uploads/2013/09/blues-pedal-combo.png



----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Asset List

***audio***
230203_bp_mix2.mp3
230222_deja_mix5.mp3
Hurts my head (Mix3).mp3
outtaluck_mix5.3.mp3

***external***
Poppins-Light.ttf
script.js
stylesheet.css

***pages***
originals.html
our gear.html
performances.html
socials.html

***photos***
boyd and ethan.jpeg
Boyd.JPG
boydwalking.jpg
Cameron.JPG
ethan boyd and cam.jpg
ethan holding guitar.JPG
ethan with glasses on.JPG
Ethan.JPG
favicon.png
instagram logo.png
jester_performing.jpg
little drummer boy.JPG
Nolan.JPG
the 'shitcasters'.jpg
under the underground.jpg
young ethan and cam.JPG

***videos***
6_ Car Port(live).mp4
harvey live.mov

index.html
