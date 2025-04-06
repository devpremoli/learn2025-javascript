/* 
🧠 UNDERSTANDING ASYNCHRONOUS JAVASCRIPT — FINAL CLARIFIED NOTE

❗️KEY TRUTH:
Callbacks, Promises, and async/await DO NOT make code asynchronous.
They are only ways to HANDLE results of asynchronous operations.

---

📘 DEFINITIONS — FOR TOTAL CLARITY

🔹 Asynchronous:
A style of execution where the program does **not wait** for an operation to complete.
Instead, it **continues running other code**, and handles the result later.

🔹 Asynchronous Operation:
A task that **takes time**, and is **handled outside the main JS thread**.
Examples:
  - `setTimeout`, `fetch`, `fs.readFile`, network request, file access

🔹 Asynchronous Function:
A function that **initiates an async operation**, but returns immediately.
It does **not block** the main thread.
Examples:
  - `setTimeout(() => {...}, 1000)`
  - Your own function that starts a `Worker`, I/O, etc.

🔹 Callback:
A function passed as an argument to **be called later**, when the async task completes.

🔹 Promise:
An object representing a value that **will be available later**.
Used to avoid deeply nested callbacks.

🔹 async/await:
Syntactic sugar to **write Promise-based code like synchronous code**.

🔹 Event Loop:
The system that checks if the call stack is empty, and moves callbacks from the queue to be executed.

🔹 Web APIs / Node APIs:
The *real* workers. They do the heavy async lifting:
- Timers, HTTP, Filesystem, etc.

---

✅ HOW ASYNC WORKS INTERNALLY:
1. JS calls something like setTimeout(), fetch(), or fs.readFile()
2. These are handled by the Web API / Node API layer, not the JS engine
3. That layer does the time-consuming work in the background
4. When complete, it places the callback into the Callback Queue
5. The Event Loop pushes that callback into the Call Stack when it's empty

This allows JavaScript to run other code while it waits.

---

🔥 BUILDING CUSTOM ASYNC FUNCTIONS

You can build your own async functions using actual async APIs (like worker threads).
This is an example using worker_threads to perform CPU-heavy work in parallel without blocking the main thread.
*/

import { Worker } from "worker_threads";

function runHeavyTask(n) {
  const worker = new Worker("./worker.js", { workerData: n });

  console.log("Worker started...");

  worker.on("message", (result) => {
    console.log("Fibonacci result:", result);
  });

  worker.on("error", (err) => {
    console.error("Worker error:", err);
  });

  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error(`Worker exited with code ${code}`);
    } else {
      console.log("Worker finished successfully");
    }
  });
}

console.log("Before calling runHeavyTask()");
runHeavyTask(40);
console.log("Hello world after runHeavyTask()");
