Both Library and Framework are the code written by someone else to help solve problems that occur commonly, in an easier way. They helps to keep the code DRY by providing reusable functions.

Metaphor:               
  A library is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control.

  A framework, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input.

The technical difference between a framework and library lies in a term called inversion of control. 


| Library  | Framework |
| -- | -- |
| When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. | When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed. |
| Library doesn't invert the control of the program.  | Framework does.  |
| Developer calls the library where and when they(developer) need it. | Framework tells the developer what they(framework) need. |
