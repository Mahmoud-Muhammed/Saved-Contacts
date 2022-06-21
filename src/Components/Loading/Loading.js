import React from "react";
import Lottie from "react-lottie";

import pageloading from "../../Assets/Lottie/page-loading-animation.json";

const Loading = () => {
  const defaultOptionsLoading = {
    loop: true,
    autoplay: true,
    animationData: pageloading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptionsLoading} />;
};

export default Loading;
