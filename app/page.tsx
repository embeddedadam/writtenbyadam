import Head from "next/head";
import EmailForm from "@/components/emailForm";
import CustomizedTimeline from "@/components/timeline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adam Gałecki</title>
        <meta
          name="description"
          content="Adam Gałecki is a software engineer with a background in robotics, currently leveraging generative AI to enhance learning experiences. Explore articles on technology, entrepreneurship, and personal growth."
        />
        <meta
          name="keywords"
          content="Adam Gałecki, software engineer, robotics, generative AI, Braincast, technology, entrepreneurship, personal growth"
        />
        <meta name="author" content="Adam Gałecki" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Adam Gałecki - Software Engineer & Founder of Braincast"
        />
        <meta
          property="og:description"
          content="Adam Gałecki is a software engineer with a background in robotics, currently leveraging generative AI to enhance learning experiences. Explore articles on technology, entrepreneurship, and personal growth."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container mx-auto flex flex-col justify-center items-center min-h-screen p-4">
        <div className="max-w-3xl w-full">
          <section className="mb-8 px-4 sm:px-6 lg:px-8">
            <p className="leading-relaxed text-center sm:text-left">
              I&#39;m Adam Gałecki, software engineer and founder. Over the
              years I have written code for security systems, electric cars,
              smart devices, and websites. Currently, I am building Braincast, a
              platform designed to help people quickly learn information from
              the web. I write about technology, entrepreneurship, and personal
              growth.
            </p>
          </section>
          <div className="mb-16 px-4 sm:px-6 lg:px-8">
            <CustomizedTimeline />
          </div>
          <div className="mt-12 px-4 sm:px-6 lg:px-8">
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  );
}
