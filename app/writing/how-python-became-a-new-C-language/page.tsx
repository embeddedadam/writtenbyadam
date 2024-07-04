import Heading from "@/components/heading";
import React from "react";
import Head from "next/head";

const Page: React.FC = () => {
  return (
    <div className="container max-w-3xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10 mx-auto">
      <Head>
        <title>
          How Python Became a New C Language? | Programming Language Shift
        </title>
        <meta
          name="description"
          content="Explore how Python is becoming the new C language in the era of AI, and understand the history and future of programming languages."
        />
      </Head>
      <Heading title="How Python Became a New C Language?" />
      <p className="mb-4">
        If you are thinking what the hell, why is this guy comparing two
        different programming languages and paradigms? Then you have the right
        to ask that question.
      </p>
      <p className="mb-4">
        This article will help you understand a little bit about the history of
        programming and how we are in the middle of another shift in software
        engineering.
      </p>
      <p className="mb-4">
        Even though it is very convenient to ignore hardware running our code,
        to some extent we cannot and shouldn’t do that.
      </p>
      <p className="mb-4">
        Back in the days of the first computers and microcontrollers, everything
        was dictated by hardware architecture. Before C, we have written code in
        assembly. What is even worse, every chip and every architecture had its
        own set of instructions that could be used while writing code. It wasn’t
        like today, you learn to code in one language and then can do
        everything, just the matter of library you use. You actually had to know
        the set of instructions for specific chips, know memory restrictions,
        since it was very limited and know a lot about chip peripherals to
        program them in a good way. I had a “pleasure” to work 3 months with
        assembly, for one of my first clients when we had to rewrite this code
        to C. Even though the experience was very humbling I learned a lot, but
        most importantly I started to appreciate C and higher-level programming
        languages. Back then I felt like C is the high-level programming
        language.
      </p>
      <p className="mb-4">
        With the invention of C in the early 1970s humans learned how to detach
        themselves a bit from computer architecture. Keyword “a bit”. What I
        mean by that is that we learned how to write code and then use compilers
        to optimize it for specific hardware architecture, which over the
        decades became a standard, and now if someone knows how to influence bit
        alignment in C by compiler directives, knows what is padding, then a
        person like that is considered experienced low-level engineer.
      </p>
      <p className="mb-4">
        Most importantly the change was gradual and progressed over the years
        with the expansion of electronics. Every device that we are using right
        now, whether it is a phone, microwave, smart band, or car navigation
        display, all of it has C code in production codebase that was compiled
        into assembly or in other words machine code.
      </p>
      <p className="mb-4">
        Okay, Adam, great story, but how does it compare to Python, and why we
        are talking about hardware so much?
      </p>
      <p>I bet you know this word is coming. Artificial intelligence.</p>
      <p className="mb-4">
        Python over the last few years become the go-to tool for most
        engineering work, not only in AI but overall. It has a relatively easy
        syntax and a low entry level in terms of skills. Infrastructure code is
        being written in Python, automated tests are being written in Python,
        the backend of the websites is being written in Python, robotics
        software is being written in Python, and Desktop apps are being written
        in Python. The point of listing these is to show how popular it has
        become already.
      </p>
      <p className="mb-4">
        The next shift has already started due to advancements in AI. If we go
        through the list of the last 3 years of the startup’s funding we can see
        how things will change. Apple announced their AI in the phones, and
        LLM’s companies are racing each other. The humanoid startups are
        growing. We have companies that generate videos and pictures.
      </p>
      <p className="mb-4">
        Everything is fueled by the enormous amounts of GPU farms. The companies
        use data to train models on these GPUs, and that’s why I believe we
        entered the new age when everything that is going to be written will be
        written on the next level of abstraction.
      </p>
      <p className="mb-4">
        Python, despite its high-level nature and convenience, will still be
        influenced by hardware advancements, particularly in AI and machine
        learning applications. The rise of specialized AI hardware like TPUs and
        GPUs necessitates a deeper understanding of how code interacts with
        these components, even if we&apos;re not writing in assembly or C.
      </p>
      <p className="mb-4">
        As AI continues to evolve, the demands on software will increase,
        pushing us to rethink how we write and optimize code. Python&apos;s role
        in this new era is not just as a programming language but as a bridge
        between human logic and machine efficiency. The ease of writing Python
        code, combined with its powerful libraries and frameworks, makes it
        ideal for rapid prototyping and deployment in AI-driven applications.
      </p>
      <p className="mb-4">
        Yet, just like with C, a new generation of engineers will need to
        appreciate the underlying hardware that powers their Python code.
        Understanding how to optimize code for AI processors, how data flows
        through neural networks, and how to efficiently manage memory and
        processing power will become crucial skills.
      </p>
      <p className="mb-4">
        In summary, the shift we are witnessing is not just about the languages
        we use but about the paradigms we adopt. Python is leading the charge in
        the AI revolution, but as with any technological leap, those who
        understand the fundamentals, from hardware to high-level abstractions,
        will be best positioned to innovate and excel. The future of programming
        is here, and it&apos;s an exciting blend of simplicity and
        sophistication, driven by the promise of AGI.
      </p>
      <p className="mb-4">
        After all I also have one more learning. In the same way as engineers
        back in the days could worry that compilers will make their knowledge
        obsolete, we can rethink if AI will make us obsolete. My answer to this
        is obvouly no. It wil change how we write code and how much of it is
        going to be produced. The role of software engineer will evlolve but we
        will not be replaced. We will be replaced by other humans using AI.
      </p>
    </div>
  );
};

export default Page;
