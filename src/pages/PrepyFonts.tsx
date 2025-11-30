import FontPage from "./FontPage";
import { getPageConfig } from "@/lib/fontPages";

const PrepyFonts = () => {
  const config = getPageConfig("preppy")!;
  return <FontPage config={config} />;
};

export default PrepyFonts;
