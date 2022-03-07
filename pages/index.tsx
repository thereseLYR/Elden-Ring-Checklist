import type { NextPage } from "next";
import Head from "next/head";
import CheckboxContainer from "../components/checkboxContainer";
import { Quests } from "../data/quests";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Elden Ring Checklist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Elden Ring Checklist!</h1>
        {Quests.map((quest) => (
          <CheckboxContainer key={quest.id} quest={quest} />
        ))}
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;