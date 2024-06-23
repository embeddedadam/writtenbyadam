import Head from "next/head";
import EmailForm from "@/components/emailForm";
import CustomizedTimeline from "@/components/timeline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adam Gałeckit</title>
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
        {/* <meta property="og:image" content="/path-to-image.jpg" /> */}
        {/* <meta property="og:url" content="https://www.adamgalecki.com/" /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container mx-auto flex justify-center items-center min-h-screen p-4">
        <div className="max-w-3xl w-full">
          <section className="mb-8">
            <p className="leading-relaxed">
              I&#39;m Adam Gałecki, software engineer with a background in
              robotics. Over the years I have written code for security systems,
              electric cars, smart devices, and websites. Currently, I am the
              founder of Braincast, leveraging generative AI to enhance learning
              experiences.
            </p>
          </section>
          <section className="mb-12">
            <p className="leading-relaxed">
              I write about technology, entrepreneurship, and personal growth.
              My goal is to share knowledge and inspire others to create
              meaningful work.
            </p>
          </section>
          <div className="mb-16">
            <CustomizedTimeline />
          </div>
          <div className="mt-12">
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  );
}
