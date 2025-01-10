import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<ThemeSwitcher className={cls.theme_button}/>
			<div className={cls.links_group}>
				<AppLink to={'/'} className={cls.link} theme={AppLinkTheme.SECONDARY}>Home</AppLink>
				<AppLink to={'/about'} className={cls.link} theme={AppLinkTheme.SECONDARY}>About</AppLink>
			</div>
		</div>
	)
}