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

const ContainerInner = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-7xl px-6 py-12">{children}</div>;
};

Container.Inner = ContainerInner;
