type Props = {
  children: React.ReactNode;
  header: React.ReactNode;
  description: React.ReactNode;
};
export const Container: React.FC<Props> = ({
  children,
  description,
  header,
}) => {
  return (
    <div className="container py-[80px] space-y-14">
      <div className="space-y-6">
        <h2 className="font-bold text-7xl leading-[100px] max-w-2xl">
          {header}
        </h2>
        <p className="col-start-1 text-2xl text-gray-600 max-w-xl">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};
