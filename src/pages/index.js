import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Card from "../components/Card";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Homepage" description="Avalanche Dev Docs">
      <main className={styles.main}>
        <br />
        <h1
          align="center"
          style={{
            fontWeight: "700",
            marginBottom: "0px",
            fontSize: "x-large",
          }}
        >
          Welcome to Avalanche Dev Docs
        </h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="/build/subnet/hello-subnet"
                header={{
                  label: "🚀 Launch Your First Subnet",
                }}
                body={{
                  label:
                    "Start your Subnet development journey by creating a subnet in under five minutes",
                }}
              />

              <Card
                to="intro"
                header={{
                  label: "🔺 Learn about Avalanche",
                }}
                body={{
                  label:
                    "Discover how Subnets and Avalanche Consensus are revolutionizing Web3",
                }}
              />

              <Card
                to="/nodes/validate/add-a-validator"
                header={{
                  label: "😎 Become a Validator",
                }}
                body={{
                  label:
                    "Join Avalanche's Proof-of-Stake protocol to help secure the network and earn rewards",
                }}
              />

              <Card
                to="reference"
                header={{
                  label: "💻 View Avalanche APIs",
                }}
                body={{
                  label:
                    "Access low-level protocol interfaces to build your custom dapp",
                }}
              />

              <Card
                to="/build/dapp/launch-dapp"
                header={{
                  label: "🛠️ Launch Your Dapp on Avalanche",
                }}
                body={{
                  label:
                    "Learn everything you need to deploy an EVM-compatible smart contract",
                }}
              />

              <Card
                to="https://github.com/ava-labs/hypersdk"
                header={{
                  label: "🛠️ HyperSDK",
                }}
                body={{
                  label:
                    "Opinionated Framework for Building Hyper-Scalable Blockchains on Avalanche",
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <main className={styles.main}>
        <br />
        <h1
          align="center"
          style={{
            fontWeight: "700",
            marginBottom: "0px",
            fontSize: "x-large",
          }}
        >
          Learn with Avalanche Academy
        </h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="https://academy.avax.network/course/avalanche-fundamentals?utm_source=avalanche-dev-docs&utm_medium=website&utm_content=learn-avalanche"
                header={{
                  label: "🔺 Avalanche Fundamentals",
                }}
                body={{
                  label:
                    "Beginner-friendly course to get a high level overview of Avalanche Consensus, Subnets, and VM",
                }}
              />

              <Card
                to="https://academy.avax.network/course/subnet-architecture?utm_source=avalanche-dev-docs&utm_medium=website&utm_content=learn-avalanche"
                header={{
                  label: "🌐 Subnet Architecture",
                }}
                body={{
                  label:
                    "Explore Avalanche's Subnet Architecture designed for Scalability and Enterprise Adoption",
                }}
              />

              <Card
                to="https://academy.avax.network/course/customize-evm?utm_source=avalanche-dev-docs&utm_medium=website&utm_content=learn-avalanche"
                header={{
                  label: "🛠️ Customize the EVM",
                }}
                body={{
                  label:
                    "Learn to Customize Ethereum Virtual Machine and Launch Your Personalized Blockchain on Avalanche",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
