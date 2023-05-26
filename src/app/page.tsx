// import styles from "./styles.module.scss"
import Image from "next/image";
import trace from "../../public/trace.png";
import circles from "../../public/circles.svg";
import aboutUs from "../../public/aboutUs.png";
import styles from "./styles.module.scss";
import Button from "@/components/button/Button";
import { companyInfo, services, testimonials } from "@/database/database";
import ServiceCard from "@/components/serviceCard/serviceCard";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className={styles.welcomeSection}>
        <div className={styles.info}>
          <div>
            <Image src={trace} alt="trace" className={styles.trace} />{" "}
            <span className={styles.greeting}>
              Welcome to <span className={styles.companyName}>Our Company</span>
            </span>
          </div>
          <h2>Impact the World by Taking Action</h2>
          <p>
            Objectively foster extensible scenarios and business innovation.
            Energistically predominate prospective experiences with strategic
            initiatives.
          </p>
          <Button />
        </div>
        <div className={styles.imagesContainer}>
          <Image
            className={styles.gridImg1}
            width="140"
            height="163"
            src="https://lacounty.gov/wp-content/uploads/2022/03/shutterstock_1701981856-scaled.jpg"
            alt="working"
          />
          <Image
            className={styles.gridImg2}
            width="140"
            height="163"
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/14D67/production/_126315358_gettyimages-598261008.jpg"
            alt="working"
          />
          <Image
            className={styles.gridImg3}
            width="260"
            height="342"
            src="https://imageio.forbes.com/specials-images/imageserve/63c404e302c13907ab36e737/Professional-woman-working-from-home/960x0.jpg?format=jpg&width=960"
            alt="working"
          />
          <Image
            className={styles.circles}
            src={circles}
            alt="decorativeCircles"
          />
        </div>
      </section>
      <ul className={styles.services}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
      <section className={styles.aboutUs}>
        <div className={styles.info}>
          <div>
            <Image src={trace} alt="trace" className={styles.trace} />{" "}
            <span className={styles.greeting}>About us</span>
          </div>
          <h2>Insights About Our Company</h2>
          <p>
            Let our experts prepare a free home analysis for you! Just fill out
            our form. Surround yourself with the luxury and quality of one of
            Saskatoon premier home builder. At Properties we take pride in
            building you everything you need to call The Meadows home.
          </p>
          <Link className={styles.learnMore} href={""}>
            {" "}
            {`-> Learn More`}
          </Link>
          <ul className={styles.projects}>
            {companyInfo.insights.map((insight) => (
              <li key={insight.id}>
                <p>{insight.name}</p>
                <span>{insight.number}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.aboutUsImgContainer}>
          <Image width="350" src={aboutUs} alt="About Us" />
          <Image
            className={styles.circles}
            src={circles}
            alt="decorativeCircles"
          />
        </div>
      </section>
      <section className={styles.ourTeam}>
        <div className={styles.headWrapper}>
          <Image src={trace} alt="trace" className={styles.trace} />{" "}
          <span className={styles.greeting}>Our Team</span>
          <h2>Our Team</h2>
        </div>
        <ul className={styles.teamContainer}>
          {companyInfo.people.map((member) => (
            <li key={member.id}>
              <Image
                src={member.image}
                width="204"
                height="180"
                alt={member.name}
              />
              <div className={styles.employeeInfo}>
                <p>{member.name}</p>
                <p>{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.testimonials}>
        <div className={styles.headWrapper}>
          <Image src={trace} alt="trace" className={styles.trace} />{" "}
          <span className={styles.greeting}>Testimonials</span>
          <h2>Customers Talk About Us</h2>
        </div>
        <p>
          Customer support represents the resources within your company that
          provide technical assistance to consumers after they purchase a
          product or service.
        </p>
        <div className={styles.carrousselWrapper}>
          <button>{`<`}</button>
          <ul className={styles.carroussel}>
            {testimonials.map((testimonial) => (
              <li key={testimonial.id} className={styles.depoiment}>
                <p>{testimonial.testimonial}</p>
                <div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width="50"
                    height="50"
                  />
                  <div>
                    <p>{testimonial.name}</p>
                    <p>{testimonial.from}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button>{`>`}</button>
        </div>
      </section>
    </>
  );
}
