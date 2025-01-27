import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links_group}>
                <AppLink to={'/'} className={cls.link} theme={AppLinkTheme.SECONDARY}>Home</AppLink>
                <AppLink to={'/about'} className={cls.link} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    )
}
