# DynamicDailyCalendar_05
An attempt to create an app that allows the user to enter her/his daily to-dos, saving those to-dos, and keeping track of them using the moment.js software as the days goes  on. 

This is a useful project that was assigned in our Computer Coding Bootcamp and the University of Pennsylvania. It incorporates HTML, CSS, JavaScript, and JQuery, with the emphasis on the latter two in terms of how the app's functionality is handled. 

Thus far, the project is not functionting the way that I would like. The two bugs that I cannot figure out are: 

1. how to have lines other than the '9AM' line sent their information to the console.log, and;
2. how to get the input to stick in local storage. 

I had this second function working, but after making tweaks to other parts of the JavaScript, the only thing that goes to local storage is some strange looking bit of code that does not give the typed-in Value of the Key. 

Despite following step-by-step instructions for how to place screenshots into this README file, I was unable to do so, so I will once again be uploading them separately to the repo in github. 

Shortcomings: several things were required in this project that I failed to achieve, in addition to teh aforementioned bugs above (lines 8 and 9). 

3. I was unable to have the information typed in to any given hour during the workday persist after refreshing the page, and; 
4. I was unable to get the color of the hour block to change with respect to whether or not it was a future time, the present hour, or a past time. With respect to this, I intended to use momentjs.com's formatting to create equations that were dynamically less than, equal to, or greater than the hour given by that source, and using those values to correspond to three different color options for each block. For example, I had intended to use a green for future hour blocks, red for the present hour (as it would not make much sense to add anything to it during that very hour), and a shade of gray for past hour blocks, which I think clearly denotes that those times would no longer be available to adaptation. 

