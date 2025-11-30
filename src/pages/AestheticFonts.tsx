import FontPage from "./FontPage";
import { getPageConfig } from "@/lib/fontPages";

const AestheticFonts = () => {
  const config = getPageConfig("aesthetic")!;
  return <FontPage config={config} />;
};

export default AestheticFonts;
