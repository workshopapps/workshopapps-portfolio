import Head from "next/head";
import Image from "next/image";
import gritty from "./../public/gritty.png";
import team1 from "./../public/team1.png";
import peter from "./../public/peter.png";
import team2 from "./../public/team2.png";
import team3 from "./../public/team3.png";
import sarah from "./../public/sarah.png";
import team4 from "./../public/team4.png";
import stephen from "./../public/stephen.png";
import style from "../styles/Teams.module.css";
import { useState } from "react";

export default function About() {
  const [changeImage1, setChangeImage1] = useState(false)
  const [changeImage2, setChangeImage2] = useState(false)
  const [changeImage3, setChangeImage3] = useState(false)
  const [changeImage4, setChangeImage4] = useState(false)
  
  return (
    <div>
      <Head>
        <title>Workshop Apps | Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={style.teams}>
        <h1>MEET OUR TEAM</h1>
        <div className={style.cards}>
          <figure className={style.card}>
            <Image
              onMouseOver={() => setChangeImage1(!changeImage1)}
              onMouseLeave={()=> setChangeImage1(!changeImage1)}
              src={changeImage1 ? gritty : team1}
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
              onMouseOver={() => setChangeImage2(!changeImage2)}
              onMouseLeave={()=> setChangeImage2(!changeImage2)}
              src={changeImage2 ? peter : team2}
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
                onMouseOver={() => setChangeImage3(!changeImage3)}
                onMouseLeave={()=> setChangeImage3(!changeImage3)}
                src={changeImage3 ? sarah : team3 }
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
              onMouseOver={() => setChangeImage4(!changeImage4)}
              onMouseLeave={()=> setChangeImage4(!changeImage4)}
              src={changeImage4 ? stephen : team4}
              alt="Picture of the author"
              width="100%"
              height="100%"
              />
            <figcaption>
              <h3>Stephen Johnson</h3>
              <p>Developer</p>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
