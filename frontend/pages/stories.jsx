import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import heroImg from "./../public/about-hero-image.png";
import style from "../styles/Stories.module.css";
import Section from "../components/section";

export default function Stories() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section className={style.main__container}>
        {/* hero  */}
        <div className={style.flex__container}>
          <div className={`${style.card} ${style.description}`}>
            <h1 className={style.card__title}>Our Stories</h1>
            <p>
              We do things <span className={style.yellow}>differently</span>{" "}
              here.
            </p>
          </div>
          <div className={style.card}>
            <Image
              src={heroImg}
              alt="Picture of the video"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        {/* hero end  */}
        <div className={style.stories}>
          <header>
            <h2>Excited to share our stories</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis, odio eveniet cupiditate dolorum modi ratione, magni
              corrupti laborum placeat officia ipsa nobis inventore maxime
              suscipit natus laboriosam, vero cum deserunt?
            </p>
          </header>

          <div className={style.videos}>
            <iframe
              src="https://www.youtube.com/embed/Yf111xeKw3E?list=PLL0ge2KQPI3WPYwonCVd95EK_wyNe5c8q"
              title="Prototyping in Figma"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/rx7cgfJXmuE?list=PLL0ge2KQPI3WPYwonCVd95EK_wyNe5c8q"
              title="Color and Contrast"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/tIvsNlfXAyk?list=PLL0ge2KQPI3WPYwonCVd95EK_wyNe5c8q"
              title="Principles of Good UI - Must Know"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className={style.footer_btn}>
          <a
            href="https://www.youtube.com/@LearnWithHNG"
            className={style.contact__submit__btn}
            target="_blank"
          >
            More stories
          </a>
        </div>
      </Section>
    </div>
  );
}
