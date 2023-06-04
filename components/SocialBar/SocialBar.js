import styles from './SocialBar.module.scss';
// import { faFacebookF, faInstagram, faTelegram, faGoogle } from '@fortawesome/free-brands-svg-icons';
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import fb from '@/public/images/icons/fb.webp';
import ig from '@/public/images/icons/ig.webp';
import tg from '@/public/images/icons/tg.webp';
import mail from '@/public/images/icons/mail.webp';

export default function SocialBar() {
    const socialMedia = [
        { href: 'https://www.facebook.com/lambrockfestival', icon: faFacebookF, label: 'Facebook', style: styles.fb, src: fb },
        { href: 'http://instagram.com/_u/lambrockfestival/', icon: faInstagram, label: 'Instagram', style: styles.ig, src: ig },
        { href: 'https://t.me/lambrockfestival', icon: faTelegram, label: 'Telegram', style: styles.tg, src: tg },
        { href: 'mailto:lambrockfest@gmail.com', icon: faGoogle, label: 'eMail', style: styles.mail, src: mail },
    ];
    return (
        <div className={styles.main}>
            {socialMedia.map(({ href, icon, label, style, src }, index) => (
                <a href={href} target='_blank' className={`${styles.icon} ${style}`} key={index}>
                    <ExportedImage
                        src={src}
                        alt="social"
                        //layout="fixed"
                        width={32}
                        height={32}
                    />
                    <span>{label}</span>
                </a>
            ))}
        </div>
    );
};
