import Heading from "@/components/heading";
import React from "react";
import Head from "next/head";

const Page: React.FC = () => {
  return (
    <div className="container max-w-3xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10 mx-auto">
      <Head>
        <title>
          Python 3.12 → 3.13. What is changing in September? | Python Updates
        </title>
        <meta
          name="description"
          content="Explore the key changes in Python 3.13, including the new interactive shell, improved error messages, and typing improvements."
        />
      </Head>
      <Heading title="Python 3.12 → 3.13. What is changing in September?" />
      <p className="mb-4">
        In the next September, a new Python version will be released to the world. I’ve selected a few key changes that are worth elaborating on and getting to know.
      </p>
      <p className="mb-4">
        <strong>1. Better Interactive Interpreter</strong>
      </p>
      <p className="mb-4">
        Python will be using a new interactive shell which means that when we use Python from the terminal we will get a new:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Colorized prompts.</li>
        <li>Multiline editing with history preservation.</li>
        <li>Interactive help browsing using F1 with a separate command history.</li>
        <li>History browsing using F2 that skips output as well as the <a href="https://docs.python.org/3.13/glossary.html#term-0">[>>>]</a> and <a href="https://docs.python.org/3.13/glossary.html#term-...">[…]</a> prompts.</li>
        <li>“Paste mode” with F3 makes pasting larger blocks of code easier.</li>
        <li>Possible to use commands: help, exit, and quit without the need to use call parentheses.</li>
      </ul>
      <p className="mb-4">
        <strong>2. Improved Error Messages</strong>
      </p>
      <p className="mb-4">
        From 3.13, the error messages will be colorized alongside the traceback, but what is most valuable in my eyes is that when the wrong keyword argument is passed to the function, the error message will suggest a proper one.
      </p>
      <p className="mb-4">
        <strong>3. Support for Marking Deprecations</strong>
      </p>
      <p className="mb-4">
        Decorator <code>@deprecated</code> will be released. From this point, you will be able to mark function, class, or overload as deprecated and the message will be displayed during runtime and by the static types checkers.
      </p>
      <p className="mb-4">
        <strong>4. Typing Improvements</strong>
      </p>
      <p className="mb-4">
        <code>TypeIs()</code> → used for the situations where the function will return the type of the argument that is being passed to the function
      </p>
      <pre className="mb-4 bg-gray-100 p-2">
        <code>
          def is_str(val: str) -> TypeIs[str]:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return isinstance(val, str)
        </code>
      </pre>
      <p className="mb-4">
        <code>ReadOnly()</code> → special typing construct to mark variables of TypedDict as read-only. For example
      </p>
      <pre className="mb-4 bg-gray-100 p-2">
        <code>
          class Movie(TypedDict):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;title: ReadOnly[str]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;year: int<br /><br />
          def mutate_movie(m: Movie) -> None:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;m["year"] = 1992  # allowed<br />
          &nbsp;&nbsp;&nbsp;&nbsp;m["title"] = "The Matrix"  # typechecker error
        </code>
      </pre>
      <p className="mb-4">
        <strong>5. Other Changes</strong>
      </p>
      <p className="mb-4">
        There are quite a lot of things changing regarding how Python code works underneath, for example, changes regarding JIT compiler, incremental garbage collection, and support for mobile platforms, but I will not describe them since they are not interfering with the direct usage of it for most developers.
      </p>
      <p className="mb-4">
        For more, feel free to visit official Python documentation page: <a href="https://docs.python.org/3.13/whatsnew/" className="text-blue-500">https://docs.python.org/3.13/whatsnew/</a>
      </p>
    </div>
  );
};

export default Page;