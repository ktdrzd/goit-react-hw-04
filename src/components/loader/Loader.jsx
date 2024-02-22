// import style from "./Loader.module.css";
import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <MutatingDots
        visible={true}
        height="200"
        width="200"
        color="#fff"
        secondaryColor="#fff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

// export default Loader;


