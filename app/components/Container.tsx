import clsx from "clsx";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // TODO: add set of backgrounds, instead of classes
  return <div className={className}>{children}</div>;
};

const ContainerInner = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("mx-auto max-w-7xl px-6 py-12", className)}>
      {children}
    </div>
  );
};

Container.Inner = ContainerInner;
