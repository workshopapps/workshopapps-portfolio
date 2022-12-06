import Head from "next/head";
import Image from 'next/image'
import heroImg from './../public/about-hero-image.png'
import quote from './../public/quote-icon.png'
import invertedQuote from './../public/quote-inverted.png'
import team from './../public/team.png'
import Link from 'next/link'
import style from "../styles/About.module.css"

export default function About() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={style.main__container}>
        {/* hero  */}
        <div className={ style.flex__container }>
          <div className={ `${style.card} ${style.description}`}>
            <h1 className={ style.card__title }>Who We Are</h1>
            <p>We help you build and grow your startup. With our 300+ projects we have the experience you need to among the 10% successful start ups</p>
          </div>
          <div className={ style.card }>
            <Image
              src={heroImg}
              alt="Picture of the author"
              width="100%"
              height="100%"
            />
            </div>
        </div>

        {/* quote  */}
        <div className={style.about__quote}>
          <div className={style.quote__icon__container}>
            <Image
                src={invertedQuote}
                alt="Picture of the author"
                width="100%"
                height="100%"
              />
          </div>
          <p>90% of startups are failing, with our 300+ portfolio experience we will prevent mistakes of failed start ups and make it the top 10%</p>
          <div className={style.quote__icon__container2}>
                <Image
                src={quote}
                alt="Picture of the author"
                width="100%"
                height="100%"
                />
          </div>
        </div>

        {/* Our team */}
        <div className={style.about__team}>
          <div className={style.img__container}>
                <Image
                src={team}
                alt="Picture of the author"
                width="100%"
                height="100%"
                />
          </div>
          <div className={style.img__description}>
              <h1>Our teams job</h1>
              <p>We have the best team, from designers to markets we select the very best of candidates out of our participant pool of diverse background and knowledge. </p>
          </div>
        </div>

        {/* facts  */}
        <div className={style.about__facts}>
          <div className={style.about__facts__card}>
            <h3>Facts 1</h3>
            <p>We have worked with 12+ clients</p>
          </div>
          <div className={style.about__facts__card}>
            <h3>Facts 1</h3>
            <p>We have worked with 12+ clients</p>
          </div>
          <div className={style.about__facts__card}>
            <h3>Facts 1</h3>
            <p>We have worked with 12+ clients</p>
          </div>
          <div className={style.about__facts__card}>
            <h3>Facts 1</h3>
            <p>We have worked with 12+ clients</p>
          </div>
        </div>
        {/* portfolio  */}
        <div className={style.about__portfolio}>
          <h2>Our 300+ portfolio projects</h2>
          <p>We help you build and grow your startup. With our 300+ projects we have the experience you need to among the 10% successful start ups</p>

          <Link href="/portfolio">See our portfolio</Link>
        </div>
        </section>
    </div>
  );
}
