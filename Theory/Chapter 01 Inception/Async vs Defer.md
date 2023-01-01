Async and Defer attributes are the boolean attributes which are used along with the script tags to load the external scripts efficiently into our webpage. When you load a web page, there are 2 major things happenning in your browser:

1. HTML Parsing
2. Loading of scripts: 
   Fetching the scripts from network
   Executing the scripts
   
 ## Three Scenarios:
 
 a. Without using async or defer attributes
 
 Let's say, browser is parsing the html and suddenly encounters the script tag, browser stops the html parsing at that point of time and starts the fetching of scripts from network, and then executes the scripts. After scripts are fetched and executed fully, the html parsing would resume.
 
 b. Using Async Attribute
 
 Meanwhile the browser is parsing the html, the scripts are fetched from the network asyncronously. As soon as the scripts are fetched, html parsing pauses and scripts are executed. After scripts are executed fully, html parsing resumes.
 
 c. Using Defer Attribute
 
 Meanwhile the browser is parsing the html, the scripts are fetched from the network parallely. These scripts are executed only after the html parsing is completed.
 
 ![Async vs Defer](https://www.josefzacek.cz/wp-content/uploads/2018/03/whats-the-difference-between-async-vs-defer-attributes.jpg)
 
 ### When to use what?
 
 The Async attribute does not guarantee the order of execution of scripts while defer attribute does.
 In practice, defer is used for scripts that need the whole DOM and/or their relative execution order is important. And async is used for independent scripts, like counters or ads. And their relative execution order does not matter.
 
 Example 1: If the scripts are dependent on each other, then using async attribute might break your code since the scripts are not executed in order.
 
 Example 2: If you have external scripts such as google analytics etc that do not really have any dependency, then async can be used.
 


 
