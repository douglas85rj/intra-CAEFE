import * as React from "react"
import {Layout} from "../layout/Layout"
import { Feed } from "../components/Feed";
import { ProfileHeader } from "../components/ProfileHeader";

const items = Array.from({ length: 20 }, (_, index) => ({
  title: `Title ${index}`,
  link: `https://google.com/${index}`,
  image: "https://loremflickr.com/400/400",
}));

export default function Home() {
  return (
    <Layout>
      <header>
        <ProfileHeader
        
          bio="Lorem ipsufgndsgiof didfgmjidfogmdfg Lorem ipsufgndsgiof didfgmjidfogmdfg Lorem ipsufgndsgiof didfgmjidfogmdfg Lorem ipsufgndsgiof didfgmjidfogmdfg"
          link="https://google.com"
          name="Douglas Souza"
          publishCount={90} username={""} avatar={""} role={""}        
        />
      </header>
      <div className="feed-container">
        <Feed items={items} />
      </div>
    </Layout>
  );
}