import FontPage from "./FontPage";
import { getPageConfig } from "@/lib/fontPages";

const CuteFonts = () => {
  const config = getPageConfig("cute")!;
  return <FontPage config={config} />;
};

export default CuteFonts;
