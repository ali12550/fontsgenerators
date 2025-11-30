import FontPage from "./FontPage";
import { getPageConfig } from "@/lib/fontPages";

const NumberFonts = () => {
  const config = getPageConfig("number-fonts")!;
  return <FontPage config={config} />;
};

export default NumberFonts;
