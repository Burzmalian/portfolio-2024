import clsx from "clsx";

export const Container = ({
  children,
  className,
  as,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => {
  const Component = as || "div";
  return <Component className={className}>{children}</Component>;
};

const ContainerInner = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("mx-auto max-w-6xl px-6 py-10 sm:p-12", className)}>
      {children}
    </div>
  );
};

Container.Inner = ContainerInner;
