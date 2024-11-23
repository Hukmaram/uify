import { FC } from "react";

interface PreviewTabProps {
  component: FC;
}

const PreviewTab: FC<PreviewTabProps> = ({ component: Component }) => {
  return (
    <div className="min-h-80 min-w-fit flex items-center justify-center border rounded">
      <Component />
    </div>
  );
};

export default PreviewTab;
