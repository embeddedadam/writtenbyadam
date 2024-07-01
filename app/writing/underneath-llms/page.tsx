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
      <p className="mb-4">
        I thought that when talking about AI we should have a basic
        understanding of it rather than thinking that we can prompt and get text
        information about something and not care what is happening in the black
        box. It is not going to be math backed up, but rather a high-level
        overview on what is happening during the usage of LLMs.
      </p>
      <p className="mb-4">In this article, we will:</p>
      <ol className="list-decimal list-inside mb-4 ml-4">
        <li>Get a high-level overview of how LLMs and ChatGPT are working</li>
        <li>Go through a basic C implementation of how LLMs are built</li>
        <li>Discuss how things will progress further</li>
      </ol>
      <p className="mb-4">
        One thing that all of the chat-based companies did pretty intelligently
        was to convince people these chats can reason very well on their own, at
        least it feels like this. In reality, this is a piece of software glued
        together to perform specified tasks and that&apos;s why it feels like
        this. But how? What does it mean?
      </p>
      <p>To get ahead, first, I will need to explain to you a few terms.</p>

      <div className="mt-6"></div>
      <h2 className="text-2xl font-bold mb-2">Machine Learning</h2>
      <hr className="border-gray-400 w-full mb-4" />
      <p>
        It is a subfield of artificial intelligence that focuses on recognizing
        patterns in various data sets and extrapolating them for further usage.
        Imagine you have specific behaviors of ducks, alpacas, and tigers. In
        that case, your algorithm could learn the set of behaviors in animals
        and then based on that will be able to classify if a specific form of
        life is an animal. In very broad terms, this is the mechanism that is
        essential to machine learning.
      </p>

      <div className="mt-6"></div>
      <h2 className="text-2xl font-bold mb-2">Deep Learning</h2>
      <hr className="border-gray-400 w-full mb-4" />
      <p>
        It is a subfield of machine learning focused on unstructured data
        inspired by artificial neural networks loosely inspired by the human
        brain. Neural networks are mainly used to capture complex patterns in
        data, making them powerful tools for tasks like image recognition,
        natural language processing, and predictive modeling.
      </p>

      <div className="mt-6"></div>
      <h2 className="text-2xl font-bold mb-2">Large Language Models</h2>
      <hr className="border-gray-400 w-full mb-4" />
      <p className="mb-4">
        These models are directly correlated with ML in text, all sorts of text.
        Let's unwrap it.
      </p>
      <p>
        What if ML would work only on text? How to make it work? Well, the
        answer is not that complicated.
      </p>
      <p className="mb-4">
        Based on the current words we can try to classify what word will come
        next in a text, which actually to some extent makes it easier for us
        because the full text is a self-validating algorithm. Based on which
        word was produced we can loop that into the training set once again and
        iterate. But how to train data based on text in our algorithms?
      </p>
      <p className="mb-4">
        For that, we have the help of tokenization and text embedding, which are
        NLP techniques that can store text in matrices of numbers. How?
      </p>
      <p>
        In large language models (LLMs), text is stored and processed as
        matrices through a method called <strong>tokenization</strong> followed
        by <strong>embedding</strong>. Here&apos;s how it works:
      </p>

      <div className="mt-6"></div>
      <h3 className="text-xl font-bold mb-2">Tokenization:</h3>
      <hr className="border-gray-400 w-full mb-4" />
      <ul className="mb-4 ml-4">
        <li>
          <strong>Subword Tokenization:</strong> Text is split into smaller
          units like words, subwords, or characters using algorithms like Byte
          Pair Encoding (BPE) or WordPiece. This helps in handling
          out-of-vocabulary words and rare words.
          <br />
          <strong>Example:</strong> The sentence &quot;Machine learning is
          great&quot; might be tokenized into [&quot;Machine&quot;,
          &quot;learning&quot;, &quot;is&quot;, &quot;great&quot;] or
          [&quot;Mach&quot;, &quot;ine&quot;, &quot;learning&quot;,
          &quot;is&quot;, &quot;great&quot;].
        </li>
      </ul>

      <div className="mt-6"></div>
      <h3 className="text-xl font-bold mb-2">Embedding Layer:</h3>
      <hr className="border-gray-400 w-full mb-4" />
      <ul className="mb-4 ml-4">
        <li>
          <strong>Initialization:</strong> Each token is mapped to a unique
          vector (embedding) from a learned embedding matrix. This matrix is
          initialized randomly and refined during model training.
        </li>
        <li>
          <strong>Dimensionality:</strong> Each token is represented as a
          fixed-dimensional vector.
        </li>
      </ul>

      <div className="mt-6"></div>
      <h3 className="text-xl font-bold mb-2">Embedding Matrix:</h3>
      <hr className="border-gray-400 w-full mb-4" />
      <ul className="mb-4 ml-4">
        <li>
          <strong>Structure:</strong> A large matrix where each row corresponds
          to the embedding of a unique token from the vocabulary.
        </li>
        <li>
          <strong>Size:</strong> If the vocabulary has V tokens and each
          embedding vector is d dimensions, the embedding matrix is V×d.
        </li>
      </ul>

      <div className="mt-6"></div>
      <h3 className="text-xl font-bold mb-2">Conversion Process:</h3>
      <hr className="border-gray-400 w-full mb-4" />
      <ul className="mb-4 ml-4">
        <li>
          <strong>Lookup:</strong> For a given input text, each token is
          converted to its corresponding vector by looking up the embedding
          matrix.
        </li>
        <li>
          <strong>Matrix Representation:</strong> The entire text is then
          represented as a sequence of these vectors, forming a matrix where
          each row is a token&apos;s embedding.
        </li>
      </ul>

      <div className="mt-6"></div>
      <h3 className="text-xl font-bold mb-2">
        Positional Encoding (for models like Transformers):
      </h3>
      <hr className="border-gray-400 w-full mb-4" />
      <ul className="mb-4 ml-4">
        <li>
          <strong>Addition:</strong> Since embeddings alone do not capture word
          order, positional encodings are added to the token embeddings to
          incorporate the position of each token in the sequence.
        </li>
        <li>
          <strong>Purpose:</strong> Helps the model understand the order and
          position of words in the text.
        </li>
      </ul>

      <div className="mt-6"></div>
      <h2 className="text-2xl font-bold mb-2">Example</h2>
      <hr className="border-gray-400 w-full mb-4" />
      <p>For the sentence &quot;Machine learning is great&quot;:</p>
      <ul className="mb-4 ml-4">
        <li>
          <strong>Tokenization:</strong> Tokens: [&quot;Machine&quot;,
          &quot;learning&quot;, &quot;is&quot;, &quot;great&quot;]
        </li>
        <li>
          <strong>Embedding Lookup:</strong>
          <br />
          <div className="flex justify-center">
            <pre className="mb-4">
              {`Machine -> [0.1, 0.2, ..., 0.8]
learning -> [0.3, 0.7, ..., 0.6]
is -> [0.4, 0.5, ..., 0.9]
great -> [0.6, 0.1, ..., 0.4]`}
            </pre>
          </div>
          <div className="flex justify-center">
            <pre>
              {`[[0.1, 0.2, ..., 0.8],
 [0.3, 0.7, ..., 0.6],
 [0.4, 0.5, ..., 0.9],
 [0.6, 0.1, ..., 0.4]]`}
            </pre>
          </div>
        </li>
      </ul>
      <p className="mb-4">
        How are they able to train models on such an enormous amount of data
        found on the whole internet?
      </p>
      <p className="mb-4">
        The answer is straightforward. Neural Networks and GPUs, a lot of GPUs.
      </p>
      <p className="mb-4">
        A GPU is basically a processing unit designed for high computation,
        which is why your computer relies on it when you play extremely
        realistic video games. Every pixel needs to be calculated, and GPUs are
        designed specifically for this.
      </p>
      <p>
        This is also the reason why Nvidia stocks are so hot right now. When
        everyone is digging for gold in the AI space, Nvidia is selling shovels
        for that.
      </p>

      <div className="mt-6"></div>
      <h2 className="text-2xl font-bold mb-2">What are neural networks?</h2>
      <hr className="border-gray-400 w-full mb-4" />
      <p>
        Neural Networks are a subset of algorithms in ML as well. The main
        difference is that they are able to work on enormous amounts of data and
        create much more complicated models. Unfortunately, training such models
        takes a lot of resources (power, GPUs, money) and this is the reason why
        these tech companies needed to raise such an enormous amount of money to
        create their own models.
      </p>
      <p className="mb-4">
        Their fundamental structure is quite straightforward. They comprise a
        series of interconnected &quot;neurons&quot; arranged in layers, through
        which an input signal travels to predict the outcome variable.
        Essentially, they resemble multiple layers of linear regression stacked
        together, with non-linearities introduced between the layers, enabling
        the neural network to capture complex, non-linear relationships.
      </p>
      <p className="mb-4">
        Neural networks are often many layers deep (hence the name Deep
        Learning), which means they can be extremely large.
      </p>
      <p className="mb-4">
        If you are smart, you are now able to see why LLMs are named
        &quot;large&quot;. It is simply due to neural networks with the amount
        of data being trained on and the number of &quot;neurons&quot; in the
        network.
      </p>

      <References sources={references} />
    </div>
  );
};

export default Page;
