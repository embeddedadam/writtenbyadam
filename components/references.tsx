import React from "react";

interface Reference {
  description: string;
  link: string;
}

interface ReferencesProps {
  sources: Reference[];
}

const References: React.FC<ReferencesProps> = ({ sources }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">References</h2>
      <ul className="list-disc list-inside mb-4">
        {sources.map((source, index) => (
          <li key={index}>
            <a
              href={source.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              {source.description}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default References;
