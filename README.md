# About sleep&see
<p>sleep&see is a sleep tracker and personal journal web application for users to input details of their sleep, such as sleep and wake times, to gain insights about their sleep health through data visualizations. The web app also includes a resources page that consists of infographics with stats revolving around sleep, and tips on how to promote better sleep health through informative videos and research.</p>

## Developer Information
* Claudine Dulay - UX Gangster
* Aaron Ho - Devilish Developer
* Brian Ho - Big Brain
* John Ho - RizZME Documenter
* Takumi Shimada - Wire(frame) Puppeteer

## Primary Features
* Interactive calendar that lets users input details about their sleep daily
    - Journal section that lets the user documents notes under each night
* Graph based on user input that visualizes sleep spanning across a week
    - Includes calculated averages of slepe duration, sleep time, and wake time
* Log-in to store account information
* External links to resources from journals, links, and videos
<p>

## Persona
![Persona](src/img/persona-1.png)
![Persona](src/img/persona-2.png)

## Testing Protocol
| Key Features 	| Expected Result 	| Testing Steps 	| Known Bugs 	| Workarounds 	|
|---	|---	|---	|---	|---	|
| Calendar View 	| Users can view a displayed calendar that tracks user inputs and diary entries.  	| - Users successfully change the months by using the arrow icons.<br>- Clicking on a date box, opening a side pop-up, then clicking on the clock icon to give drop-down menus of times.<br>- If everything successfully shows and nothing crashed, it successfully works. 	| - Page crash when calendar data is not successfully loaded 	| - Loaded a blank templete as a backup if data is not found 	|
| Logging Time 	| Users can click on any days and successful enter two times of time slept and time woke up. <br>When click on the button 'update time' it show a green success prompt when sucessful updates, otherwise shows a warning prompt if users haven't properly inputed data. 	| - Clicking on a date box opens a side pop-up and shows previous data (if there's any) or blank inputs.<br>- Users can enter a time of time slept and the time woke up then click on 'update time'.<br>- If users properly input data, it shows a green prompt of successful input and that corresponding date on the calendar page has a marker (Blue showcases today's date, grey indicating a previous date). 	| - When submitting time, it doesn't update within the backend to match with other features (showing a marker or weekly summary) 	| - Adding preconditions or adjustments for the data to load properly.<br>- Marker: Make sure the data is correctly console.log when using `handleSubmitTime`<br>- Weekly Summary: Resetting the value of which weekly summary is selected (default on 0) 	|
| 'Diary' Entries 	| Users can create journal entries under the current date, edit its status, and retrieve the notes under the calendar view. 	| - Clicking on a date box opens a side pop-up and shows previous notes (if there's any) or empty notes.<br>- Users can enter any notes as input and click on the `+` button to add note<br>- When the button is clicked, note input isn't empty it success, and note has been added to the list; then it successfully works. 	| - When submitting notes, it doesn't load with the list or doesn't update properly  	| - When loading the page, it puts the notes data in each corresponding date in their useState and make sure the data is being properly updated with console.log  	|
| Login Function 	| Users can store information with an account attached to their email, as well as being able to log in and out of said accou. 	| - Users can freely log in and out of their sleep&see (email) account <br>- Previous sessions and its info on an account can be retrieved<br>- If users log in enter information and then log out. On next login session the information should be there. 	| - Logout button on navbar requires two clicks. For instance, when clicking on logout on nabar, it leads to the logout page in which users have to click a button again to logout again. 	| - Using a `useEFfect` on `logout` page to test if users are login and if so log them out when redirects them to home page. 	|
| Weekly Summary 	| Users can click on a select form to choose a week of the month shown. When clicked on a week it grabs all the data from that particular week and return the average amount of sleep. 	| - Users enters time for each day of a week<br>- Users select that week with the select form<br>- It successfully works when the time shows the averages of the given week. 	| - When already have a week selected and input a new time for that week or switch months, it doesn't update nor reset. 	| - When switching months or inputing new time with 'update time' button, it resets the value of the select form week and useState used to display average hours of sleep. 	|
| Resource Pages 	| Users can access individual resource pages that offer different types of information. Links and videos are embedded on the web pages. 	| - External links go where they are intended<br>- Internal navigation leads to intended pages<br>- Pages are organized with consistent layout 	|  	|  	|