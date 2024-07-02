import Heading from "@/components/heading";
import References from "@/components/references";
import React from "react";

const Page: React.FC = () => {
  const references = [
    {
      description:
        "Andreas Stöffelbauer's post on How large language models work: from zero to ChatGPT",
      link: "https://medium.com/@andreas.stoeffelbauer?source=post_page-----91c362f5b78f--------------------------------",
    },
    {
      description: "Series of videos by Andrej Karpathy on YouTube",
      link: "https://www.youtube.com/@AndrejKarpathy",
    },
  ];

  return (
    <div className="container max-w-3xl py-6 lg:py-10 mx-auto">
      <Heading title="Understanding Large Language Models (LLMs)" />
      <References sources={references} />
    </div>
  );
};

export default Page;
