//import { Col, Container, Row } from "react-bootstrap";
import * as s from "./Book.module.scss";

export default function Book() {
    return (
        <>

            <div className={s.book__container}>
                <div className={s.cover}>
                    <div className={s.book}>
                        <label htmlFor="page-1" className={s.book__page + " " + s.book__page_uno}>
                            <img src="/2023/lupo-ponte.jpg" alt=""></img>
                        </label>
                        <label htmlFor="page-2" className={s.book__page + " " + s.book__page_uno}>
                            <img src="/2023/lupo-ponte.jpg" alt=""></img>
                            {/* <div className={s.page__content}>
                                            <h1 className={s.page__content_title}>I</h1>
                                            <div className={s.page__content_blockquote}>
                                                <p className={s.page__content_blockquote_text}>HARI SELDON — . . . born in the 11,988th year of the Galactic Era; died 12,069. The dates are more commonly given in terms of the current Foundational Era as -79 to the year 1 F.E. Born to middle-className parents on Helicon, Arcturus sector (where his father, in a legend of doubtful authenticity, was a tobacco grower in the hydroponic plants of the planet), he early showed amazing ability in mathematics. Anecdotes concerning his ability are innumerable, and some are contradictory. At the age of two, he is said to have. . . </p>
                                                <p className={s.page__content_blockquote_text}>. . . Undoubtedly his greatest contributions were in the field of psychohistory. Seldon found the field little more than a set of vague axioms; he left it a profound statistical science. . . . </p>
                                                <p className={s.page__content_blockquote_text}>. . . The best existing authority we have for the details of his life is the biography written by Gaal Dornick who, as a young man, met Seldon two years before the great mathematician's death. The story of the meeting . . .</p>
                                                <span className={s.page__content_blockquote_reference}>Encyclopedia Galactica*</span>
                                            </div>
                                            <div className={s.page__content_text}>
                                                <p>His name was Gaal Dornick and he was just a country boy who had never seen Trantor before. That is, not in real life. He had seen it many times on the hyper-video, and occasionally in tremendous three-dimensional newscasts covering an Imperial Coronation or the opening of a Galactic Council. Even though he had lived all his life on the world of Synnax, which circled a star at the edges of the Blue Drift, he was not cut off from civilization, you see. At that time, no place in the Galaxy was. </p>

                                                <p>There were nearly twenty-five million inhabited planets in the Galaxy then, and not one but owed allegiance to the Empire whose seat was on Trantor. It was the last half-century in which that could be said. </p>
                                                <p>To Gaal, this trip was the undoubted climax of his young, scholarly life. He had been in space before so that the trip, as a voyage and nothing more, meant little to him. To be sure, he had traveled previously only as far as Synnax's only satellite in order to get the data on the mechanics of meteor driftage which he needed for his dissertation, but space-travel was all one whether one travelled half a million miles, or as many light years. </p>
                                            </div>
                                            <div className={s.page__number}>3</div>
                                        </div> */}
                        </label>
                        <input type="radio" name="page" id="page-1" />
                        <input type="radio" name="page" id="page-2" />
                        <label className={s.book__page + " " + s.book__page_due}>
                            <div className={s.book__page_front}>
                                {/* <div className={s.page__content}>
                                                <h1 className={s.page__content_book_title}>Foundation</h1>
                                                <h2 className={s.page__content_author}>Isaac Asimov</h2>

                                                <p className={s.page__content_credits}>
                                                    Introduction by
                                                    <span>Paul Krugman</span>
                                                </p>

                                                <p className={s.page__content_credits}>
                                                    Illustrations by
                                                    <span>Alex Wells</span>
                                                </p>

                                                <div className={s.page__content_copyright}>
                                                    <p>The Folio Society</p>
                                                    <p>London - MMXII</p>
                                                </div>
                                            </div> */}
                                <img src="/2023/lupo-ponte.jpg" alt=""></img>
                            </div>
                            <div className={s.book__page_back}>
                                {/* <div className={s.page__content}>
                                                <h1 className={s.page__content_title}>Contents</h1>
                                                <table className={s.page__content_table}>
                                                    <tr>
                                                        <td align="left">Part I</td><td align="left">The Psycohistorians</td><td align="right">3</td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">Part II</td><td align="left">The Encyclopedists</td><td align="right">43</td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">Part III</td><td align="left">The Mayors</td><td align="right">87</td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">Part IV</td><td align="left">The Traders</td><td align="right">147</td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">Part V</td><td align="left">The Merchant Princes</td><td align="right">173</td>
                                                    </tr>
                                                </table>

                                                <div className={s.page__number}>2</div>
                                            </div> */}
                                <img src="/2023/lupo-ponte.jpg" alt=""></img>
                            </div>
                        </label>
                    </div>
                </div>
            </div >

        </>
    );
}