import {
  AnalysisSvg,
  HomeSvg,
  ProfileSvg,
  SettingsSvg,
} from "@assets/icons/iconsBottomTabBar";
import { IconAlarm } from "./IconAlarm";

interface IIconsTabBar {
  color: string;
  label:
    | "HomeScreenTab"
    | "AnalysisScreenTab"
    | "AlarmScreenTab"
    | "SettingsScreenTab"
    | "ProfileScreenTab";
}

export function IconsTabBar({ color, label }: IIconsTabBar) {
  if (label === "HomeScreenTab") {
    return <HomeSvg stroke={color} strokeWidth={2} />;
  } else if (label === "AnalysisScreenTab") {
    return <AnalysisSvg stroke={color} strokeWidth={1} />;
  } else if (label === "AlarmScreenTab") {
    return <IconAlarm />;
  } else if (label === "SettingsScreenTab") {
    return <SettingsSvg stroke={color} strokeWidth={2} />;
  } else if (label === "ProfileScreenTab") {
    return <ProfileSvg stroke={color} strokeWidth={2} />;
  } else {
    return <></>;
  }
}
