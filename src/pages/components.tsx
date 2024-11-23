import PreviewTab from "../components/preview-tab";
import CodeTab from "../components/code-tab";
import { FC, useState } from "react";

interface ComponentProps {
  component: FC;
  path: string;
  name: string;
  description: string;
}

const Components: FC<ComponentProps> = ({
  component: Component,
  path,
  name,
  description,
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  return (
    <div className="flex flex-col w-full p-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">{name}</h1>
        <p className="mb-8">{description}</p>
      </div>
      <div className="flex gap-4">
        <button
          className={`py-2 px-4 text-sm font-medium rounded ${
            activeTab === "preview" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium rounded ${
            activeTab === "code" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>
      <div className="bg-white p-3 mt-2 flex-1 rounded-md max-w-[1200px] overflow-auto">
        {activeTab === "preview" && <PreviewTab component={Component} />}
        {activeTab === "code" && <CodeTab path={path} />}
      </div>
    </div>
  );
};
export default Components;
