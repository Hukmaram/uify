import { FC, useEffect, useState } from "react";

import { CopyBlock, dracula } from "react-code-blocks";

interface CodeTabProps {
  path: string;
}

const CodeTab: FC<CodeTabProps> = ({ path: filePath }) => {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    async function fetchComponentCode() {
      try {
        const response = await fetch(
          `http://localhost:3001/component-code?filePath=${encodeURIComponent(
            filePath,
          )}`,
        );
        const componentCode = await response.text();
        setCode(componentCode);
      } catch (error) {
        console.error("Error fetching component code:", error);
        setCode(null);
      }
    }

    fetchComponentCode();
  }, [filePath]);
  return (
    <div className="relative w-full">
      <CopyBlock
        text={code || ""}
        language="javascript"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
        customStyle={{
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          padding: "0.5rem",
          margin: "0",
          borderRadius: "0.25rem",
          border: "1px solid #d2d6dc",
          backgroundColor: "#f7f7f7",
        }}
      />
    </div>
  );
};
export default CodeTab;
