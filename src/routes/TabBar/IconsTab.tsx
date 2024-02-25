import {
  AnalysisSvg,
  HomeSvg,
  ProfileSvg,
  SettingsSvg,
} from "@assets/icons/iconsBottomTabBar";

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
    return <AnalysisSvg stroke={color} strokeWidth={2} />;
  } else if (label === "AlarmScreenTab") {
    return <HomeSvg fill={color} />;
  } else if (label === "SettingsScreenTab") {
    return <SettingsSvg />;
  } else if (label === "ProfileScreenTab") {
    return <ProfileSvg />;
  } else {
    return <></>;
  }
}
