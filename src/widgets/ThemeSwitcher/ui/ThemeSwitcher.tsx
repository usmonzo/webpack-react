import { Theme, useTheme } from "app/providers/ThemeProvider"
import DarkTheme from "shared/assets/icons/sunOff.svg"
import LightTheme from "shared/assets/icons/sunOn.svg"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ThemeButton } from "shared/ui/Button/ui/Button"

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames("", {}, [className])}
        >
            {theme === Theme.DARK ? <LightTheme /> : <DarkTheme />}
        </Button>
    );
};
