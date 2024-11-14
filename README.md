# Events :
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events


# JavaScript Execution Context :

While reading through HTML, if the browser encounters JavaScript code to run via a <script> tag or an attribute that contains JavaScript code like onClick, it sends it to its JavaScript engine.

The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the "Execution Context".

The Execution Context contains the code that's currently running, and everything that aids in its execution.

During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed

There are two kinds of Execution Context in JavaScript:

---- Global Execution Context (GEC) -------

Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).

The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.

For every JavaScript file, there can only be one GEC.

---- Function Execution Context (FEC) ----------

whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.

Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

# Async javascript
<img width="902" alt="image" src="https://github.com/user-attachments/assets/c77c704e-3e00-4193-bfb9-7a154f6d649d">

# Promise

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
