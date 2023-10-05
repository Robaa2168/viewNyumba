import Home_V2 from "./(home)/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Home - View Nyumba",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V2 />
    </Wrapper>
  );
}
