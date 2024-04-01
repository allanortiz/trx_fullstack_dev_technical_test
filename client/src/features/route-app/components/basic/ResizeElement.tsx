type ResizeElementProps = {
  onClick?: () => void;
};

export const ResizeElement = ({ onClick }: ResizeElementProps): JSX.Element => {
  return (
    <div
      className="grid place-items-center max-lg:w-full lg:h-full lg:pl-2 lg:pr-3 max-lg:pt-2 max-lg:pb-3 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-[3px] w-16 lg:h-16 lg:w-[3px] bg-gray-200 rounded-full"></div>
    </div>
  );
};
