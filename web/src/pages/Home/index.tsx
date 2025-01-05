import Banner from "./components/Banner";
import FeeQuery from "./components/FeeQuery";
import Timeline from "./components/Timeline";
import styles from "./styles.module.scss";
import PkuLogo from "../../assets/pkuLogo.svg";

export default function Home() {
  return (
    <div className={styles.home}>
      <img
        src={PkuLogo}
        alt=""
        style={{
          position: "fixed",
          bottom: "-20%",
          right: "-20%",
          width: "100%",
          zIndex: -1,
          opacity: 1,
        }}
      />
      <Banner />
      <FeeQuery />
      <Timeline />
    </div>
  );
}
