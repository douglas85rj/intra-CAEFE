import React from "react";
import { Layout } from "../layout/Layout";
import { ProfileHeader } from "../components/ProfileHeader";
import { Feed } from "../components/Feed";

const items = Array.from({ length: 10 }, (_, index) => ({
  title: `Title ${index}`,
  link: `https://google.com/${index}`,
  image: "https://picsum.photos/200/300",
}));

export default function Home() {
  return (
    <Layout>
      <header>
        <ProfileHeader
          avatar="https://i.ibb.co/0J6zpk4/logo-caefe-novo.png"
          bio="Lorem ipsufgndsgiof didfgmjidfogmdfg Lorem ipsufgndsgiof didfgmjidfogmdfg Lorem ipsufgndsgiof didfgmjidfogmdfg Lorem ipsufgndsgiof didfgmjidfogmdfg"
          link="https://google.com"
          name="Núcleo de Tecnologia"
          publishCount={10}
          role="Analista de sistemas"
          username="Douglas Souza"
        />
      </header>
      <div className="feed-container">
        <Feed items={items} />
      </div>
    </Layout>
  );
}
