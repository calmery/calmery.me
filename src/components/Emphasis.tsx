import clsx from "clsx";

export const Emphasis: React.FC<{ children: string }> = ({ children }) => {
  return (
    <span
      className={clsx("bg-gray", "mx-4", "px-4", "rounded", "text-emphasis")}
    >
      {children}
    </span>
  );
};
