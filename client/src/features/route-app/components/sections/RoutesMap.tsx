import { Map } from '../basic/Map';

type MapProps = {
  isLoading?: boolean;
};

export const RoutesMap = ({ isLoading }: MapProps): JSX.Element => {
  console.log(isLoading);
  // if (isLoading) {
  //   return (
  //     <div className="w-full h-full">
  //       <div className="flex items-center justify-center h-full">
  //         <div className="w-32 h-32 border-t-2 border-b-2 border-gray-500 rounded-full animate-spin"></div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <section className="w-full h-full flex-grow">
      <Map />
    </section>
  );
};
