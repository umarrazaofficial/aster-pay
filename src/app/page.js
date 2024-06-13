import styles from "./page.module.css";
import Globalreach from "./_components/globalreach";
import Aboutus from "./_components/aboutus";
import FAQ from "./_components/faq";
import Sendmoney from "./_components/sendmoney";
import Blogs from "./_components/blogs";
import NavBar from "./_components/NavBar";
import WelcomePage from "./_components/WelcomePage";
import Process from "./_components/process";
import Help from "./_components/help";
import Security from "./_components/security";
import WhyPage from "./_components/WhyPage";
import ImportantQuestions from "./_components/important";
import Bar from "./_components/Bar";
import Connect from "./_components/connect";
import Footer from "./_components/Footer";
import Discover from "./_components/discover";
import Calculate from "./_components/calculate";

function Page() {
  return (
    <main className={styles.main}>
      <NavBar />
      <WelcomePage />
      <Bar />
      <WhyPage />
      <Discover />
      <Globalreach />
      <Sendmoney />
      <Process />
      <Calculate />
      <ImportantQuestions />
      <Security />
      <Help />
      <Connect />
      <Aboutus />
      <Blogs />
      <FAQ />
      <Footer />
    </main>
  );
}

export default Page;
