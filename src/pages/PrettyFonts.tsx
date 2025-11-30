import FontPage from "./FontPage";
import { getPageConfig } from "@/lib/fontPages";

const PrettyFonts = () => {
  const config = getPageConfig("pretty")!;
  return <FontPage config={config} />;
};

export default PrettyFonts;
