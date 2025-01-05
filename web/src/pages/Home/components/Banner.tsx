import Card from "../../../components/Card";

import PkuLogo from "../../../assets/banner.png";

export default function Banner() {
  //   return <Card>北京大学新加坡校友会©️</Card>;
  return (
    <Card>
      <img src={PkuLogo} alt="北京大学新加坡校友会" style={{ width: "100%" }} />
    </Card>
  );
}
