import Head from "next/head";
import Image from 'next/image'
import team1 from './../public/team1.png'
import team2 from './../public/team2.png'
import team3 from './../public/team3.png'
import team4 from './../public/team4.png'
import style from "../styles/Teams.module.css"

export default function About() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={style.teams}>
                <h1>MEET OUR TEAM</h1>
                <div className={style.cards}>
                    <figure className={style.card}>
                        <Image
                        src={team1}
                        alt="Picture of Gritty Grammer"
                        width="100%"
                        height="100%"
                            />
                        <figcaption>
                            <h3>Gritty Grammer</h3>
                            <p>Investor</p>
                        </figcaption>
                    </figure>
                    <figure className={style.card}>
                        <Image
                        src={team2}
                        alt="Picture of Peter Griffin"
                        width="100%"
                        height="100%"
                            />
                        <figcaption>
                            <h3>Peter Griffin</h3>
                            <p>Photographer</p>
                        </figcaption>
                    </figure>
                    <figure className={style.card}>
                        <Image
                        src={team3}
                        alt="Picture of Stephen Essien"
                        width="100%"
                        height="100%"
                            />
                        <figcaption>
                            <h3>Sarah Shobowale</h3>
                            <p>Product Manager</p>
                        </figcaption>
                    </figure>
                    <figure className={style.card}>
                        <Image
                        src={team4}
                        alt="Picture of the author"
                        width="100%"
                        height="100%"
                            />
                        <figcaption>
                            <h3>Stephen Essien</h3>
                            <p>Developer</p>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    )
}