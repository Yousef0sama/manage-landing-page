// imports

// components
import FeatureComponent from "./feature";

// utills

import { features } from "@/constants/features";

const FeaturesFetch: React.FC = () => {

  return (
      <>
        {features.map((feature) => (
          <FeatureComponent key={feature.id} {...feature} />
        ))}
      </>
  );
};

export default FeaturesFetch;