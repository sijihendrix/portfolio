export interface Theme {
  colors: Colors;
}

type Colors = {
  background: string;
  primary: string;
  secondary: string;
  white: string;
  secondPrimary: string;
};
