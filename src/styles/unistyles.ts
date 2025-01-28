import { StyleSheet } from "react-native-unistyles";
import breakpoints from "./breakpoints";
import { darkTheme, lightTheme } from "./themes";

const appThemes = {
  light: lightTheme,
  other: darkTheme
}

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

type AppBreakpoints = typeof breakpoints
type AppThemes = typeof appThemes

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes {}
    export interface UnistylesBreakpoints extends AppBreakpoints {}
}



  StyleSheet.configure({
    settings: {
        initialTheme: 'light',
    },
    
    breakpoints,
    themes: appThemes
})
