import {Header} from "@/app/_components/Header";
import {Hero} from "@/app/_components/Hero";
import {Spacing} from "@/app/_components/Spacing";
import {Status} from "@/app/_components/Status";

export default function Home() {
  return (
    <main>
        <Header/>
        <Spacing size="md"/>
        <Hero/>
        <Spacing size={"md"}/>
        <Status/>
    </main>
  );
}
