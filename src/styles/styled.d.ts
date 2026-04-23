// Libraries
import "styled-components";

// Theme
import { lightTheme } from "../theme/theme";
import type { ThemeType } from "../theme/theme.types";


// This is needed to extend the DefaultTheme interface of styled-components
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}