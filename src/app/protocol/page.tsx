import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Zap } from "lucide-react";
import { ArchitectureDiagram } from "@/components/sections/diagrams/architecture-diagram";
import { StakingDiagram } from "@/components/sections/diagrams/staking-diagram";

export default function ProtocolPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Header />
      <main className="flex-grow">
        <div className="text-center pt-16 md:pt-24 mb-12">
          <div className="inline-flex items-center gap-3 font-headline text-3xl font-bold mb-4">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-foreground">Exnus Protocol</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-accent text-glow mb-4">
            Technical Whitepaper
          </h1>
          <p className="text-lg text-foreground/70 max-w-4xl mx-auto px-4">
            An in-depth exploration of the mechanisms, architecture, and strategic vision behind the protocol.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-black mx-auto">
          <div className="a4-page">
            <section id="introduction">
              <h2 className="text-3xl font-bold text-accent border-b border-accent/30 pb-2 mb-4">[ 1 ] Introduction</h2>
              <p>
                The rapid evolution of decentralized technologies has transformed the way communities and networks operate, placing greater emphasis on user participation and shared governance. Within this landscape, the Exnus protocol introduces an innovative reward system designed to actively incentivize users to contribute meaningfully to the growth and development of the ecosystem. Unlike traditional models that often prioritize passive engagement, Exnus fosters a culture of collaboration and continuous improvement by recognizing and rewarding the diverse efforts of its community members.
              </p>
              <p>
                At its core, the Exnus protocol aims to cultivate a vibrant and inclusive environment where users feel a genuine sense of ownership and belonging. By aligning individual incentives with the collective success of the network, Exnus not only encourages sustained participation but also drives innovation that benefits all stakeholders. This white paper delves into the mechanisms, architecture, and strategic vision behind the protocol, outlining how Exnus stands poised to redefine user engagement within the Web3 space, leveraging the power and scalability of the Solana blockchain. Through this comprehensive exploration, presale investors, community members, and ecosystem participants will gain insight into the unique value proposition of Exnus, its technical foundations, and the roadmap that will guide its evolution into a cornerstone of the ecosystem’s future.
              </p>
            </section>
          </div>
          <div className="a4-page">
            <section id="market-analysis">
              <h2 className="text-3xl font-bold text-accent border-b border-accent/30 pb-2 mb-4">[ 2 ] Market Analysis</h2>
              <p>
                The blockchain and Web3 sectors are witnessing unprecedented growth, with decentralized applications (dApps) and ecosystems expanding rapidly. However, despite this growth, many projects face significant challenges in cultivating active and engaged user bases. User retention and meaningful participation remain critical hurdles, often limiting the potential for sustained network effects and long-term success.
              </p>
              <h3 className="text-2xl font-semibold text-accent mt-6 mb-3">Current Landscape</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>User Engagement Deficit:</strong> Many decentralized platforms struggle to maintain high levels of user activity beyond initial onboarding phases. Passive users contribute little to network development, resulting in stagnation.</li>
                <li><strong>Inadequate Incentive Models:</strong> Existing reward systems frequently focus on token distribution without adequately tying incentives to impactful contributions. This can lead to reward dilution and diminished motivation.</li>
                <li><strong>Fragmented Ecosystems:</strong> The lack of integrated reward mechanisms that encompass development, governance, and community engagement leads to fragmented user experiences and limited cross-functional collaboration.</li>
              </ul>
              <h3 className="text-2xl font-semibold text-accent mt-6 mb-3">Opportunity for Exnus</h3>
              <p>
                The Exnus protocol is positioned to address these challenges by introducing a comprehensive reward system that incentivizes active, quality contributions across multiple facets of the ecosystem. By leveraging Solana’s high-performance blockchain, Exnus can deliver fast, cost-effective transactions that support scalable reward distribution.
              </p>
            </section>
          </div>
          <div className="a4-page">
            <section id="challenges-solutions">
              <h2 className="text-3xl font-bold text-accent border-b border-accent/30 pb-2 mb-4">[ 3 ] Web3 Challenges and Exnus Solutions</h2>
              <p>The Web3 space, while brimming with potential, faces several inherent challenges that impede the growth and sustainability of decentralized ecosystems. The Exnus protocol is designed specifically to address these obstacles through innovative solutions that foster engagement, security, and scalability.</p>
              <div className="space-y-4 mt-6">
                <p><strong>Challenge 1: Low User Engagement.</strong> Exnus introduces a reward system that incentivizes active contributions such as development, governance participation, and community support, motivating continuous involvement.</p>
                <p><strong>Challenge 2: Fragmented Incentive Models.</strong> Exnus unifies diverse contribution types under a comprehensive reward framework. All meaningful efforts are recognized and rewarded, creating a cohesive incentive environment.</p>
                <p><strong>Challenge 3: Security Vulnerabilities.</strong> Exnus employs robust smart contract designs with rigorous security audits and leverages Solana’s secure blockchain infrastructure to ensure safe reward distribution.</p>
                <p><strong>Challenge 4: Scalability Constraints.</strong> By integrating with Solana, Exnus ensures scalable operations that accommodate increasing network activity without compromising speed or cost-efficiency.</p>
                <p><strong>Challenge 5: Lack of User Ownership.</strong> Through token rewards and staking, Exnus fosters a sense of ownership, aligning individual contributions with the network’s success and promoting long-term commitment.</p>
              </div>
            </section>
          </div>
          <div className="a4-page">
            <section id="technical-architecture">
              <h2 className="text-3xl font-bold text-accent border-b border-accent/30 pb-2 mb-4">[ 4 ] Technical Architecture</h2>
              <p>The Exnus protocol is engineered with a modular and scalable architecture designed to efficiently manage user contributions, reward calculations, and secure token distribution. Its technical framework ensures high performance, security, and seamless integration with the Solana blockchain.</p>
              <div className="not-prose my-8 text-black">
                <div className="overflow-hidden p-6 md:p-8">
                    <ArchitectureDiagram />
                </div>
                <p className="text-center text-sm text-black/60 mt-2">Diagram: High-level overview of the Exnus technical architecture.</p>
              </div>
                <h3 className="text-2xl font-semibold text-accent mt-6 mb-3">Core Components</h3>
                 <ul className="list-disc pl-6 space-y-2">
                    <li><strong>User Contribution Tracking Module:</strong> Monitors and validates user activities across multiple domains.</li>
                    <li><strong>Reward Calculation Engine:</strong> Dynamically computes rewards based on the type, frequency, and impact of contributions.</li>
                    <li><strong>Smart Contract Layer:</strong> Deployed on Solana to automate reward distribution, enforce rules, and manage staking.</li>
                    <li><strong>Governance Interface:</strong> A decentralized module for token holders to propose and vote on protocol upgrades.</li>
                    <li><strong>Analytics Dashboard:</strong> Provides real-time insights into contributions, rewards, and network health.</li>
                </ul>
            </section>
          </div>
          <div className="a4-page">
            <section id="smart-contracts">
                <h2 className="text-3xl font-bold text-accent border-b border-accent/30 pb-2 mb-4">[ 5 ] Smart Contract Design and Security</h2>
                <p>The Exnus protocol’s smart contract framework is central to its ability to securely and transparently manage user rewards, staking, and governance. Designed with security, efficiency, and scalability in mind, the smart contracts ensure trustless interactions and immutable enforcement of protocol rules.</p>
                <h3 className="text-2xl font-semibold text-accent mt-6 mb-3">Security Measures</h3>
                 <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Comprehensive Audits:</strong> All smart contracts undergo multiple rounds of security audits by reputable third-party firms.</li>
                    <li><strong>Formal Verification:</strong> Critical contract logic is subjected to formal verification processes to mathematically prove correctness.</li>
                    <li><strong>Fail-safe Mechanisms:</strong> Contracts include emergency pause functions and rollback capabilities to mitigate the impact of attacks.</li>
                    <li><strong>Sybil Attack Prevention:</strong> Incorporates identity verification and contribution validation to prevent manipulation through fake accounts.</li>
                    <li><strong>Immutable Logic:</strong> Core contract logic is immutable, ensuring consistent and tamper-proof enforcement of rules.</li>
                </ul>
            </section>
          </div>
          <div className="a4-page">
            <section id="rewarding-system">
                <h2 className="text-3xl font-bold text-accent border-b border-accent/30 pb-2 mb-4">[ 6 ] Rewarding System</h2>
                <p>The Exnus protocol’s rewarding system is a cornerstone of its strategy to drive active participation and sustained growth. By recognizing and compensating diverse user contributions, Exnus fosters a vibrant, collaborative community where every effort is valued.</p>
                <h3 className="text-2xl font-semibold text-accent mt-6 mb-3">Types of Rewarded Contributions</h3>
                 <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Development:</strong> Code commits, bug fixes, feature proposals, and documentation.</li>
                    <li><strong>Community Engagement:</strong> Moderating forums, creating content, organizing events, and supporting new users.</li>
                    <li><strong>Governance:</strong> Voting on proposals and active involvement in decision-making.</li>
                    <li><strong>Staking:</strong> Locking tokens to support network security and stability.</li>
                </ul>
            </section>
          </div>
          <div className="a4-page">
            <section id="solana-integration">
                <h2 className="text-3xl font-bold text-accent border-b border-accent/30 pb-2 mb-4">[ 7 ] Integration with Solana Blockchain</h2>
                <p>The Exnus protocol’s integration with the Solana blockchain is a strategic choice that enhances its performance, security, and scalability. Solana’s cutting-edge technology provides the foundational infrastructure that enables Exnus to deliver a seamless and efficient user experience.</p>
                 <h3 className="text-2xl font-semibold text-accent mt-6 mb-3">Benefits of Solana Integration</h3>
                 <ul className="list-disc pl-6 space-y-2">
                    <li><strong>High Throughput:</strong> Over 65,000 TPS with sub-second finality.</li>
                    <li><strong>Low Costs:</strong> Minimal gas fees make frequent user interactions economically viable.</li>
                    <li><strong>Robust Security:</strong> Proof of History (PoH) and Proof of Stake (PoS) consensus safeguard assets.</li>
                    <li><strong>Interoperability:</strong> Seamless interaction with other projects in the Solana ecosystem.</li>
                </ul>
            </section>
          </div>
          <div className="a4-page">
            <section id="staking">
                <h2 className="text-3xl font-bold text-accent border-b border-accent/30 pb-2 mb-4">[ 8 ] Staking Mechanism</h2>
                <p>The Exnus protocol incorporates a robust staking mechanism designed to incentivize long-term commitment and active participation. By allowing users to lock their tokens, staking not only rewards loyalty but also strengthens network security and governance.</p>
                 <div className="not-prose my-8 text-black">
                    <div className="overflow-hidden p-6 md:p-8">
                       <StakingDiagram />
                    </div>
                    <p className="text-center text-sm text-black/60 mt-2">Diagram: The staking flow for users and its benefits to the network.</p>
                  </div>
                 <h3 className="text-2xl font-semibold text-accent mt-6 mb-3">Staking Features</h3>
                 <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Token Locking:</strong> Stake tokens for predetermined periods.</li>
                    <li><strong>Reward Accrual:</strong> Earn additional tokens based on the amount and duration of staking.</li>
                    <li><strong>Governance Rights:</strong> Staked tokens confer voting power in the decentralized governance system.</li>
                    <li><strong>Flexible Options:</strong> Multiple staking tiers with varying lock-up durations and reward rates.</li>
                </ul>
            </section>
          </div>
          <div className="a4-page">
            <section id="tokenomics-details">
              <h2 className="text-3xl font-bold text-accent border-b border-accent/30 pb-2 mb-4">[ 9 ] Tokenomics</h2>
              <p>Total Supply: 2.5 Billion Tokens.</p>
              <p>The total supply of Exnus tokens is strategically allocated to ensure sustainability, community engagement, and rewards for stakeholders. Below is the detailed breakdown of the token allocation:</p>
              
              <h3 className="text-2xl font-semibold text-accent mt-6 mb-3">Allocation Breakdown</h3>
              <ul className="list-disc pl-6 space-y-2 mt-6">
                <li><strong>Community Airdrop (4%):</strong> 100 Million Tokens. A significant portion of tokens is reserved for community engagement through airdrops, incentivizing early adopters and community members.</li>
                <li><strong>Pre-sale Allocation (28%):</strong> 700 Million Tokens. The pre-sale serves as a crucial fundraising mechanism that allows investors to acquire tokens at an early stage, providing liquidity for the project’s development and marketing efforts.</li>
                <li><strong>Team Allocation (2.4%):</strong> 60 Million Tokens. A small allocation to the team ensures that the core development group is incentivized and aligned with the long-term success of Exnus Protocol.</li>
                <li><strong>DAO Treasury (2%):</strong> 50 Million Tokens. The DAO treasury is designed to fund community-driven initiatives and governance proposals, fostering decentralization and community participation.</li>
                <li><strong>Liquidity Provision (16%):</strong> 400 Million Tokens. A substantial allocation to liquidity provision ensures that there will be sufficient tokens available in the market, enhancing trading efficiency and stability.</li>
                <li><strong>Advisors Allocation (0.8%):</strong> 20 Million Tokens. This allocation rewards strategic advisors for their guidance and expertise in the project's development and market strategy.</li>
                <li><strong>Staking Rewards (46.8%):</strong> 1.170 Billion Tokens. The largest portion of tokens is set aside for staking rewards, encouraging token holders to participate in network validation and governance while earning additional tokens.</li>
              </ul>
              <p className="mt-4">The Exnus Protocol tokenomics is carefully crafted to ensure a balanced and sustainable ecosystem. The pre-sale is a pivotal opportunity for early investors to participate in the project's growth, as it provides access to tokens before they become limited and potentially more expensive after the pre-sale concludes.</p>
              <p className="mt-4">As interest in the Exnus token grows and its utility in the ecosystem expands, we anticipate an increase in demand, ultimately leading to a scarcity that enhances its value. We encourage all potential investors to seize the opportunity to participate in the upcoming pre-sale event.</p>

            </section>
          </div>
          <div className="a4-page">
            <section id="conclusion">
              <h2 className="text-3xl font-bold text-accent border-b border-accent/30 pb-2 mb-4">[ 10 ] Conclusion</h2>
              <p>
                The Exnus protocol represents a forward-thinking model for decentralized ecosystem growth that prioritizes active user participation and equitable reward distribution. By integrating with Solana’s blockchain and implementing a secure, transparent smart contract infrastructure, Exnus fosters a collaborative community that drives continuous innovation and shared success within the ecosystem. This white paper outlines a comprehensive vision for sustainable network development powered by its users.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    