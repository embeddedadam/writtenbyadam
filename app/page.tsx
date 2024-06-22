import EmailForm from "@/components/emailForm";
import CustomizedTimeline from "@/components/timeline";

export default function Home() {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen p-4">
      <div className="max-w-2xl w-full">
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
            I write about technology, entrepreneurship, and personal growth. My
            goal is to share knowledge and inspire others to create meaningful
            projects. Subscribe to get the latest updates.
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
  );
}
