import * as s from './Countdown.module.scss';
import { useState, useEffect } from 'react';

const Countdown = () => {
    const [countdown, setCountdown] = useState(calculateCountdown());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    function calculateCountdown() {
        const targetDate = new Date('June 16, 2023 18:00:00').getTime();
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff < 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return (
        <>
            <div className={s.all}>
                <div className={s.container}>
                    {/* <img src="/2023/lupo_vettoriale_bianco-su-nero.svg" className={s.logo}></img> */}
                    <div className={s.content}>
                        <h1><span>Lambrock </span> Festival <span>X</span></h1>
                        <p>Giugno <span>16/17/18 </span></p>
                        <div className={s.lanchtime}>
                            <div>
                                <p>{countdown.days}</p>
                                <span>Giorni</span>
                            </div>
                            <div>
                                <p>{countdown.hours}</p>
                                <span>Ore</span>
                            </div>
                            <div>
                                <p>{countdown.minutes}</p>
                                <span>Minuti</span>
                            </div>
                            <div>
                                <p>{countdown.seconds}</p>
                                <span>Secondi</span>
                            </div>
                        </div>
                        {/* <button type="button">Iscriviti agli Workshops</button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Countdown;