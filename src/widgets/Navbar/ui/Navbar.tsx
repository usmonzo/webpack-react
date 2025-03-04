import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t }=useTranslation()
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links_group}>
                <AppLink to={'/'} className={cls.link} theme={AppLinkTheme.SECONDARY}>{t("Главная")}</AppLink>
                <AppLink to={'/about'} className={cls.link} theme={AppLinkTheme.SECONDARY}>{t("О нас")}</AppLink>
            </div>
        </div>
    )
}
