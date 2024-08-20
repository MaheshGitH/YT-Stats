import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
  customClass?: string;
}

const DetailSection = ({ heading, children, customClass }: Props) => {
  return (
    <span className={"flex gap-4 " + customClass}>
      <p className="text-secondary font-medium ">{heading}</p>
      <pre className={customClass}>{children}</pre>
    </span>
  );
};

export default DetailSection;
