import styles from './Footer.module.css'
import {
    AppIcon,
    AppStoreIcon,
    FacebookIcon,
    GooglePlayIcon,
    InstagramIcon,
    OperatorIcon,
    PhoneIcon, TelegramIcon
} from "../svgComponents/SvgIcons";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.apps}>
                    <a href="https://play.google.com/store/apps/details?id=uz.turontelecom.cinerama" target={'_blank'}>
                        <GooglePlayIcon />
                    </a>
                    <a href="https://apps.apple.com/us/app/cinerama/id1460449822" target={'_blank'}>
                        <AppStoreIcon />
                    </a>
                    <a href="/">
                        <AppIcon />
                        <p className={styles.appText}><span>Our&nbsp;</span><span>app</span></p>
                    </a>
                </div>
                <div className={styles.info}>
                    <a href="https://t.me/cineramasupport"
                       className={styles.support} target={'_blank'}>
                        <OperatorIcon className={styles.icon}/>
                        @cineramasupport</a>
                </div>
                <div className={styles.info}>
                    <a className={styles.tel} href="tel:1132">
                        <PhoneIcon/>
                        1132</a>
                    <a className={styles.tel} href="tel:+998712527477">
                        <PhoneIcon />
                        (+998) 71 252 74 77
                    </a>
                </div>
                <div className={styles.info}>
                    <div className={styles.mediaIcons}>
                        <a href="//facebook.com/Cinerama.uz/"
                           title="Facebook"
                           target={'_blank'}
                           className={styles.facebookIcon}>
                            <FacebookIcon />
                        </a>
                        <a
                            href="//instagram.com/cinerama.uz/"
                            title="Instagram"
                            target={'_blank'}
                            className={styles.telegramIcon}>
                            <InstagramIcon />
                        </a>
                        <a
                            href="//t.me/cineramauzofficial"
                            target={'_blank'}
                            title="Telegram"
                            className={styles.telegramIcon}>
                            <TelegramIcon/>
                        </a>
                    </div>
                    <a
                        href="//tn.uz"
                        target={'_blank'}
                        className={styles.copyright}>
                        <span>© 2011-2022. </span><span>Turon Telecom</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer