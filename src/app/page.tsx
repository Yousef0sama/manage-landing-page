// imports

// components
import About from "@/components/about/about";
import Commnets from "@/components/comments/commnets";
import Footer from "@/components/footer/footer";
import Intro from "@/components/intro/intro";
import Simplify from "@/components/simplify/simplify";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <About />
      <Commnets />
      <Simplify />
      <Footer />
    </main>
  );
}
