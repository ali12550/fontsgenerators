import FontPage from "./FontPage";
import { getPageConfig } from "@/lib/fontPages";

const AbcSymbols = () => {
  const config = getPageConfig("abc-symbols")!;
  return <FontPage config={config} />;
};

export default AbcSymbols;
