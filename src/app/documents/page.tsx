
'use client';

import { useState, useEffect } from "react";
import { ArchitectureDiagram } from "@/components/sections/diagrams/architecture-diagram";
import { StakingDiagram } from "@/components/sections/diagrams/staking-diagram";
import { SecurityDiagram } from "@/components/sections/diagrams/security-diagram";
import { RewardingDiagram } from "@/components/sections/diagrams/rewarding-diagram";
import { TokenomicsDiagram } from "@/components/sections/diagrams/tokenomics-diagram";
import { StakingRewardsDiagram } from "@/components/sections/diagrams/staking-rewards-diagram";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookText, GitCommit, FileText, Share2, ShieldCheck, Database, PieChart, TrendingUp, ThumbsUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const documentSections = [
    { id: "introduction", title: "Introduction", icon: <FileText /> },
    { id: "market-analysis", title: "Market Analysis", icon: <TrendingUp /> },
    { id: "challenges-solutions", title: "Challenges & Solutions", icon: <ThumbsUp /> },
    { id: "technical-architecture", title: "Technical Architecture", icon: <GitCommit /> },
    { id: "smart-contracts", title: "Smart Contracts & Security", icon: <ShieldCheck /> },
    { id: "rewarding-system", title: "Rewarding System", icon: <Zap /> },
    { id: "solana-integration", title: "Solana Integration", icon: <Share2 /> },
    { id: "staking", title: "Staking Mechanism", icon: <Database /> },
    { id: "tokenomics-details", title: "Tokenomics", icon: <PieChart /> },
    { id: "conclusion", title: "Conclusion", icon: <BookText /> },
];

const SectionContent = ({ id }: { id: string }) => {
    switch (id) {
        case "introduction":
            return (
                <div className="prose max-w-none prose-invert text-foreground/80">
                    <p>
                      The rapid evolution of decentralized technologies has transformed the way communities and networks operate, placing greater emphasis on user participation and shared governance. Within this landscape, the Exnus protocol introduces an innovative reward system designed to actively incentivize users to contribute meaningfully to the growth and development of the ecosystem. Unlike traditional models that often prioritize passive engagement, Exnus fosters a culture of collaboration and continuous improvement by recognizing and rewarding the diverse efforts of its community members.
                    </p>
                    <p>
                      At its core, the Exnus protocol aims to cultivate a vibrant and inclusive environment where users feel a genuine sense of ownership and belonging. By aligning individual incentives with the collective success of the network, Exnus not only encourages sustained participation but also drives innovation that benefits all stakeholders. This white paper delves into the mechanisms, architecture, and strategic vision behind the protocol, outlining how Exnus stands poised to redefine user engagement within the Web3 space, leveraging the power and scalability of the Solana blockchain. Through this comprehensive exploration, presale investors, community members, and ecosystem participants will gain insight into the unique value proposition of Exnus, its technical foundations, and the roadmap that will guide its evolution into a cornerstone of the ecosystem’s future.
                    </p>
                </div>
            );
        case "market-analysis":
            return (
                <div className="prose max-w-none prose-invert text-foreground/80">
                    <p>
                      The blockchain and Web3 sectors are witnessing unprecedented growth, with decentralized applications (dApps) and ecosystems expanding rapidly. However, despite this growth, many projects face significant challenges in cultivating active and engaged user bases. User retention and meaningful participation remain critical hurdles, often limiting the potential for sustained network effects and long-term success.
                    </p>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Current Landscape</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>User Engagement Deficit:</strong> Many decentralized platforms struggle to maintain high levels of user activity beyond initial onboarding phases. Passive users contribute little to network development, resulting in stagnation.</li>
                      <li><strong>Inadequate Incentive Models:</strong> Existing reward systems frequently focus on token distribution without adequately tying incentives to impactful contributions. This can lead to reward dilution and diminished motivation.</li>
                      <li><strong>Fragmented Ecosystems:</strong> The lack of integrated reward mechanisms that encompass development, governance, and community engagement leads to fragmented user experiences and limited cross-functional collaboration.</li>
                    </ul>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Opportunity for Exnus</h3>
                    <p>
                      The Exnus protocol is positioned to address these challenges by introducing a comprehensive reward system that incentivizes active, quality contributions across multiple facets of the ecosystem. By leveraging Solana’s high-performance blockchain, Exnus can deliver fast, cost-effective transactions that support scalable reward distribution.
                    </p>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Competitive Advantage</h3>
                      <ul className="list-disc pl-6 space-y-2">
                          <li><strong>Holistic Reward Framework:</strong> Unlike many platforms that focus solely on staking or liquidity provision, Exnus rewards a broad spectrum of activities including development, governance, and community building.</li>
                          <li><strong>User Ownership and Empowerment:</strong> By aligning incentives with user contributions, Exnus fosters a sense of ownership that encourages ongoing participation and loyalty.</li>
                          <li><strong>Scalability and Security:</strong> Integration with Solana ensures that the protocol can support a growing user base without compromising security or transaction efficiency.</li>
                      </ul>
                      <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Market Potential</h3>
                      <p>
                          As decentralized ecosystems continue to mature, protocols that effectively engage and reward their communities will capture significant market share. Exnus’s innovative approach positions it to become a leading model for sustainable network growth, driving value for presale investors and community members.
                      </p>
                </div>
            );
        case "challenges-solutions":
            return (
                 <div className="prose max-w-none prose-invert text-foreground/80">
                    <p>The Web3 space, while brimming with potential, faces several inherent challenges that impede the growth and sustainability of decentralized ecosystems. The Exnus protocol is designed specifically to address these obstacles through innovative solutions that foster engagement, security, and scalability.</p>
                    <div className="space-y-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">Challenge 1: Low User Engagement</h4>
                        <p className="mt-1"><strong className="text-primary/80">Problem:</strong> Many decentralized platforms experience low active participation, with users often adopting a passive role. This limits the network’s ability to evolve and adapt dynamically.</p>
                        <p className="mt-1"><strong className="text-primary/80">Exnus Solution:</strong> The Exnus protocol introduces a reward system that incentivizes active contributions such as development, governance participation, and community support. By directly linking rewards to user actions, Exnus motivates continuous involvement and fosters a vibrant ecosystem.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">Challenge 2: Fragmented Incentive Models</h4>
                        <p className="mt-1"><strong className="text-primary/80">Problem:</strong> Current incentive structures are often siloed, rewarding specific actions without integrating the broader spectrum of contributions, leading to user confusion and reduced motivation.</p>
                        <p className="mt-1"><strong className="text-primary/80">Exnus Solution:</strong> Exnus unifies diverse contribution types under a comprehensive reward framework. Whether through code commits, voting, or community engagement, all meaningful efforts are recognized and rewarded, creating a cohesive incentive environment.</p>
                      </div>
                      <div>
                          <h4 className="font-semibold text-lg text-foreground">Challenge 3: Security Vulnerabilities</h4>
                          <p className="mt-1"><strong className="text-primary/80">Problem:</strong> Reward mechanisms can be exploited through malicious activities such as sybil attacks or smart contract vulnerabilities, undermining trust and network integrity.</p>
                          <p className="mt-1"><strong className="text-primary/80">Exnus Solution:</strong> Exnus employs robust smart contract designs with rigorous security audits and leverages Solana’s secure blockchain infrastructure. Permissioned functions, immutable logic, and fail-safe protocols ensure safe and reliable reward distribution.</p>
                      </div>
                      <div>
                          <h4 className="font-semibold text-lg text-foreground">Challenge 4: Scalability Constraints</h4>
                          <p className="mt-1"><strong className="text-primary/80">Problem:</strong> As user bases grow, many protocols face performance bottlenecks, high transaction costs, and latency issues that degrade user experience.</p>
                          <p className="mt-1"><strong className="text-primary/80">Exnus Solution:</strong> By integrating with Solana, known for its high throughput and low fees, Exnus ensures scalable operations that accommodate increasing network activity without compromising speed or cost-efficiency.</p>
                      </div>
                      <div>
                          <h4 className="font-semibold text-lg text-foreground">Challenge 5: Lack of User Ownership</h4>
                          <p className="mt-1"><strong className="text-primary/80">Problem:</strong> Users often feel disconnected from the platforms they participate in, reducing their incentive to contribute meaningfully.</p>
                          <p className="mt-1"><strong className="text-primary/80">Exnus Solution:</strong> Through token rewards and staking mechanisms, Exnus fosters a sense of ownership and alignment between individual contributions and the network’s success, promoting long-term commitment.</p>
                      </div>
                    </div>
                </div>
            );
        case "technical-architecture":
            return (
                <div className="prose max-w-none prose-invert text-foreground/80">
                    <p>The Exnus protocol is engineered with a modular and scalable architecture designed to efficiently manage user contributions, reward calculations, and secure token distribution. Its technical framework ensures high performance, security, and seamless integration with the Solana blockchain.</p>
                    <div className="not-prose my-8">
                      <div className="overflow-hidden p-0 md:p-4 bg-background rounded-lg">
                          <ArchitectureDiagram />
                      </div>
                      <p className="text-center text-sm text-foreground/60 mt-2">Diagram: High-level overview of the Exnus technical architecture.</p>
                    </div>
                      <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Core Components</h3>
                       <ul className="list-disc pl-6 space-y-2">
                          <li><strong>User Contribution Tracking Module:</strong> This module continuously monitors and validates user activities across multiple domains such as development commits, governance votes, and community engagement. It employs cryptographic verification and on-chain/off-chain data aggregation to ensure authenticity and prevent fraudulent claims.</li>
                          <li><strong>Reward Calculation Engine:</strong> The engine dynamically computes rewards based on predefined metrics that consider the type, frequency, and impact of contributions. It supports configurable parameters allowing the protocol to adapt reward models over time to align with evolving ecosystem goals.</li>
                          <li><strong>Smart Contract Layer:</strong> Deployed on Solana, the smart contracts automate the distribution of rewards, enforce protocol rules, and manage staking functionalities. The contracts are optimized for low latency and cost-efficiency, leveraging Solana’s Proof of History (PoH) and parallel processing capabilities.</li>
                          <li><strong>Governance Interface:</strong> A decentralized governance module enables token holders to propose and vote on protocol upgrades, reward adjustments, and ecosystem initiatives, ensuring community-driven development.</li>
                          <li><strong>Analytics and Reporting Dashboard:</strong> Provides real-time insights into user contributions, reward distributions, staking statistics, and overall network health. Transparency is maintained through accessible on-chain data and user-friendly interfaces.</li>
                      </ul>
                      <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Integration Layers</h3>
                       <ul className="list-disc pl-6 space-y-2">
                          <li><strong>Blockchain Layer:</strong> Utilizes Solana’s high-throughput blockchain to ensure secure, fast, and low-cost transaction processing.</li>
                          <li><strong>Off-Chain Services:</strong> Includes APIs and oracles that facilitate data aggregation, off-chain computations, and integration with external platforms within the ecosystem.</li>
                          <li><strong>User Interface Layer:</strong> Web and mobile applications that allow users to interact with the protocol, track their contributions, claim rewards, and participate in governance.</li>
                      </ul>
                       <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Security Measures</h3>
                       <ul className="list-disc pl-6 space-y-2">
                          <li><strong>Immutable Smart Contract Logic:</strong> Ensures that reward mechanisms cannot be tampered with post-deployment.</li>
                          <li><strong>Permissioned Access Controls:</strong> Restricts critical functions to authorized entities to prevent unauthorized manipulation.</li>
                          <li><strong>Automated Auditing Tools:</strong> Continuously monitor transactions and contract interactions to detect anomalies and potential exploits.</li>
                      </ul>
                </div>
            );
        case "smart-contracts":
            return (
                 <div className="prose max-w-none prose-invert text-foreground/80">
                    <p>The Exnus protocol’s smart contract framework is central to its ability to securely and transparently manage user rewards, staking, and governance. Designed with a multi-layered security approach, the contracts ensure trustless interactions and immutable enforcement of protocol rules.</p>
                    <div className="not-prose my-8">
                        <div className="overflow-hidden p-6 md:p-8 bg-background rounded-lg">
                           <SecurityDiagram />
                        </div>
                        <p className="text-center text-sm text-foreground/60 mt-2">Diagram: An overview of the multi-layered security approach for Exnus smart contracts.</p>
                    </div>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Smart Contract Design Principles</h3>
                     <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Modularity:</strong> The protocol is structured into discrete contract modules, each responsible for specific functions such as reward calculation, token distribution, staking management, and governance. This modularity facilitates easier upgrades, maintenance, and auditing.</li>
                        <li><strong>Transparency:</strong> All contract logic and transactions are publicly verifiable on the Solana blockchain, promoting trust and accountability among users and stakeholders.</li>
                        <li><strong>Efficiency:</strong> Contracts are optimized for Solana’s architecture, leveraging parallel processing and Proof of History (PoH) to minimize gas costs and latency.</li>
                    </ul>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Key Contract Modules</h3>
                     <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Reward Distribution Contract:</strong> Automates the calculation and transfer of native tokens to users based on validated contributions. It incorporates dynamic reward algorithms to fairly allocate tokens according to contribution type and impact.</li>
                        <li><strong>Staking Contract:</strong> Enables users to lock their tokens to earn additional rewards and governance rights. It manages staking periods, reward accrual, and withdrawal mechanisms with built-in safeguards against premature unlocking.</li>
                        <li><strong>Governance Contract:</strong> Facilitates decentralized decision-making by allowing token holders to submit proposals, vote, and implement changes to protocol parameters or upgrades.</li>
                        <li><strong>Access Control Contract:</strong> Implements role-based permissions to restrict administrative functions and protect against unauthorized contract interactions.</li>
                    </ul>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Security Measures</h3>
                     <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Comprehensive Audits:</strong> All smart contracts undergo multiple rounds of security audits by reputable third-party firms specializing in blockchain vulnerabilities.</li>
                        <li><strong>Formal Verification:</strong> Critical contract logic is subjected to formal verification processes to mathematically prove correctness and absence of common vulnerabilities.</li>
                        <li><strong>Fail-safe Mechanisms:</strong> Contracts include emergency pause functions and rollback capabilities to mitigate the impact of detected anomalies or attacks.</li>
                        <li><strong>Sybil Attack Prevention:</strong> The protocol incorporates identity verification and contribution validation techniques to prevent manipulation through fake accounts.</li>
                        <li><strong>Immutable Logic:</strong> Once deployed, core contract logic is immutable, ensuring consistent and tamper-proof enforcement of reward and governance rules.</li>
                    </ul>
                </div>
            );
        case "rewarding-system":
            return (
                <div className="prose max-w-none prose-invert text-foreground/80">
                    <p>The Exnus protocol’s rewarding system is a cornerstone of its strategy to drive active participation and sustained growth within the ecosystem. By recognizing and compensating diverse user contributions, Exnus fosters a vibrant, collaborative community where every effort is valued.</p>
                    <div className="not-prose my-8">
                        <div className="overflow-hidden p-6 md:p-8 bg-background rounded-lg">
                           <RewardingDiagram />
                        </div>
                        <p className="text-center text-sm text-foreground/60 mt-2">Diagram: An overview of the types of contributions rewarded by the Exnus Protocol.</p>
                    </div>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Core Principles of the Rewarding System</h3>
                     <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Inclusivity:</strong> Rewards are designed to encompass a wide range of contributions, from technical development to community engagement and governance participation.</li>
                        <li><strong>Fairness:</strong> The system employs transparent algorithms that assess the quality, frequency, and impact of user actions to allocate rewards equitably.</li>
                        <li><strong>Transparency:</strong> Users can track their contributions and corresponding rewards in real-time via the protocol’s analytics dashboard, ensuring clarity and trust.</li>
                    </ul>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Types of Rewarded Contributions</h3>
                     <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Development Contributions:</strong> Users who contribute code commits, bug fixes, feature proposals, and documentation improvements receive tokens proportional to the significance and impact of their work.</li>
                        <li><strong>Community Engagement:</strong> Activities such as moderating forums, creating educational content, organizing events, and supporting new users are rewarded to encourage a supportive ecosystem.</li>
                        <li><strong>Governance Participation:</strong> Voting on proposals, submitting governance initiatives, and active involvement in decision-making processes earn users additional rewards.</li>
                        <li><strong>Staking Participation:</strong> Users who stake their tokens to support network security and stability gain rewards that compound their holdings and enhance governance influence.</li>
                    </ul>
                     <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Reward Distribution Mechanism</h3>
                     <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Dynamic Reward Calculation:</strong> The protocol’s reward engine uses weighted algorithms that factor in contribution type, consistency, and community impact, enabling adaptive incentives aligned with evolving ecosystem priorities.</li>
                        <li><strong>Automated Payouts:</strong> Rewards are distributed automatically through smart contracts on the Solana blockchain, ensuring timely and secure token transfers without manual intervention.</li>
                        <li><strong>Bonus Incentives:</strong> Periodic reward multipliers and special grants are issued to recognize exceptional contributions or to incentivize participation during critical development phases.</li>
                    </ul>
                     <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Creating a Positive Feedback Loop</h3>
                     <p>By rewarding meaningful participation, Exnus cultivates a self-reinforcing cycle where engaged users are motivated to contribute more, attracting new members and accelerating ecosystem growth. This approach not only benefits individual users through token earnings but also enhances the overall health and innovation capacity of the network.</p>
                </div>
            );
        case "solana-integration":
            return (
                <div className="prose max-w-none prose-invert text-foreground/80">
                    <p>The Exnus protocol’s integration with the Solana blockchain is a strategic choice that enhances its performance, security, and scalability within the ecosystem. Solana’s cutting-edge technology provides the foundational infrastructure that enables Exnus to deliver a seamless and efficient user experience.</p>
                     <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Benefits of Solana Integration</h3>
                     <ul className="list-disc pl-6 space-y-2">
                        <li><strong>High Throughput and Low Latency:</strong> Solana’s architecture supports over 65,000 transactions per second (TPS) with sub-second finality, allowing Exnus to process reward distributions, staking operations, and governance votes rapidly and without bottlenecks.</li>
                        <li><strong>Low Transaction Costs:</strong> Minimal gas fees on Solana make frequent user interactions economically viable, encouraging active participation without prohibitive costs.</li>
                        <li><strong>Robust Security Model:</strong> Solana’s Proof of History (PoH) combined with Proof of Stake (PoS) consensus ensures a secure and decentralized environment that safeguards user assets and protocol integrity.</li>
                        <li><strong>Interoperability:</strong> Integration with Solana enables Exnus to interact seamlessly with other projects and services within the Solana ecosystem, fostering collaboration and expanding utility.</li>
                    </ul>
                     <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Technical Integration Details</h3>
                     <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Smart Contract Deployment:</strong> Exnus smart contracts are written in Rust and deployed on Solana’s Sealevel runtime, which supports parallel transaction processing for enhanced scalability.</li>
                        <li><strong>Token Standards:</strong> The native Exnus token adheres to Solana’s SPL token standard, ensuring compatibility with wallets, exchanges, and DeFi platforms.</li>
                        <li><strong>Oracles and Off-Chain Data:</strong> Solana-compatible oracles facilitate secure off-chain data feeds, enabling accurate tracking of user contributions and external metrics essential for reward calculations.</li>
                        <li><strong>Cross-Program Invocations (CPI):</strong> Exnus utilizes Solana’s CPI feature to interact with other on-chain programs, enabling modular functionality and extensibility.</li>
                    </ul>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Impact on User Experience</h3>
                    <p>By leveraging Solana, Exnus offers users fast, cost-effective, and reliable interactions with the protocol. This integration removes common barriers such as high fees and slow confirmations, making participation in rewarding, staking, and governance processes smooth and accessible.</p>
                </div>
            );
        case "staking":
            return (
                <div className="prose max-w-none prose-invert text-foreground/80">
                    <p>The Exnus protocol incorporates a robust staking mechanism designed to incentivize long-term commitment and active participation within the ecosystem. By allowing users to lock their tokens, staking not only rewards loyalty but also strengthens network security and governance.</p>
                     <div className="not-prose my-8">
                        <div className="overflow-hidden p-6 md:p-8 bg-background rounded-lg">
                           <StakingDiagram />
                        </div>
                        <p className="text-center text-sm text-foreground/60 mt-2">Diagram: The staking flow for users and its benefits to the network.</p>
                      </div>
                     <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Staking Features</h3>
                     <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Token Locking:</strong> Users can stake their native Exnus tokens for predetermined periods, during which their tokens are locked and cannot be transferred or sold.</li>
                        <li><strong>Reward Accrual:</strong> Stakers earn additional tokens as rewards, which are distributed proportionally based on the amount and duration of staking. This encourages users to maintain longer staking periods to maximize returns.</li>
                        <li><strong>Governance Rights:</strong> Staked tokens confer voting power in the protocol’s decentralized governance system, empowering users to influence decisions such as protocol upgrades, reward adjustments, and ecosystem initiatives.</li>
                        <li><strong>Flexible Staking Options:</strong> The protocol supports multiple staking tiers with varying lock-up durations and reward rates, providing users with options that balance liquidity needs and reward optimization.</li>
                    </ul>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Security and Fairness</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Slashing Mechanisms:</strong> To discourage malicious behavior or protocol violations, the staking contract includes slashing provisions that can penalize bad actors by reducing their staked tokens.</li>
                        <li><strong>Withdrawal Controls:</strong> Users can withdraw their staked tokens only after the lock-up period expires, preventing premature withdrawals that could destabilize the network.</li>
                        <li><strong>Transparent Accounting:</strong> All staking activities, including deposits, rewards, and withdrawals, are recorded on-chain for full transparency and auditability.</li>
                    </ul>
                     <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Benefits to the Ecosystem</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Network Stability:</strong> By incentivizing token locking, staking reduces circulating supply volatility and enhances the overall stability of the Exnus token economy.</li>
                        <li><strong>Aligned Incentives:</strong> Stakers have a vested interest in the protocol’s success, aligning individual goals with the health and growth of the ecosystem.</li>
                        <li><strong>Enhanced Governance:</strong> Staking empowers active users with governance influence, promoting decentralized and community-driven decision-making.</li>
                    </ul>
                </div>
            );
        case "tokenomics-details":
            return (
                <div className="prose max-w-none prose-invert text-foreground/80">
                    <p>Total Supply: 2.5 Billion Tokens.</p>
                    <p>The total supply of Exnus tokens is strategically allocated to ensure sustainability, community engagement, and rewards for stakeholders. Below is the detailed breakdown of the token allocation:</p>
                    <div className="not-prose my-8">
                        <div className="overflow-hidden p-6 md:p-8 bg-background rounded-lg">
                           <TokenomicsDiagram />
                        </div>
                        <p className="text-center text-sm text-foreground/60 mt-2">Diagram: An overview of the token allocation for the Exnus Protocol.</p>
                    </div>
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Allocation Breakdown</h3>
                    <ul className="list-disc pl-6 space-y-2 mt-6">
                        <li><strong>Staking Rewards (75.8%):</strong> 1.895 Billion Tokens. The largest portion of tokens is set aside for staking rewards, encouraging token holders to participate in network validation and governance while earning additional tokens.</li>
                        <li><strong>Liquidity Provision (8%):</strong> 200 Million Tokens. A substantial allocation to liquidity provision ensures that there will be sufficient tokens available in the market, enhancing trading efficiency and stability.</li>
                        <li><strong>Community Airdrop (8%):</strong> 200 Million Tokens. A significant portion of tokens is reserved for community engagement through airdrops, incentivizing early adopters and community members.</li>
                        <li><strong>Team Allocation (4%):</strong> 100 Million Tokens. A small allocation to the team ensures that the core development group is incentivized and aligned with the long-term success of Exnus Protocol.</li>
                        <li><strong>DAO Treasury (2%):</strong> 50 Million Tokens. The DAO treasury is designed to fund community-driven initiatives and governance proposals, fostering decentralization and community participation.</li>
                        <li><strong>Presale (1.4%):</strong> 35 Million Tokens. This allocation is for early supporters of the project through a presale event.</li>
                        <li><strong>Advisors Allocation (0.8%):</strong> 20 Million Tokens. This allocation rewards strategic advisors for their guidance and expertise in the project's development and market strategy.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Staking Reward Distribution Schedule</h3>
                    <p>
                        The 1.895 billion tokens allocated for staking rewards are subject to a structured vesting schedule to ensure the long-term health and stability of the network. The rewards will be distributed linearly over a period of ten years (120 months) starting from the Token Generation Event (TGE).
                    </p>
                    <div className="not-prose my-8">
                        <div className="overflow-hidden p-6 md:p-8 bg-background rounded-lg">
                           <StakingRewardsDiagram />
                        </div>
                        <p className="text-center text-sm text-foreground/60 mt-2">Diagram: An overview of the staking rewards distribution model.</p>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Total Vesting Period:</strong> 10 years (120 months).</li>
                        <li><strong>Monthly Distribution:</strong> Approximately 15.79 million tokens will be released to the staking rewards pool each month.</li>
                    </ul>
                    <p className="mt-4">
                        This linear distribution model is designed to create a predictable and sustainable rewards flow, preventing market inflation while consistently incentivizing long-term stakers. By aligning rewards with the protocol's growth over an extended period, we ensure that our most committed community members are continuously recognized and compensated for their role in securing the network and participating in governance.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Team Allocation Vesting Schedule</h3>
                    <p>
                        To ensure long-term commitment and alignment with the project's success, the 100 million tokens allocated to the team are subject to a strategic vesting schedule. This structure is designed to foster confidence among our community and stakeholders.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Initial Lock-up Period:</strong> 100% of the team's tokens will be locked for 12 months from the date of the Token Generation Event (TGE). No tokens can be sold or transferred during this time.</li>
                        <li><strong>Initial Unlock:</strong> Following the 12-month lock-up, 50% of the team allocation (50 million tokens) will be unlocked immediately.</li>
                        <li><strong>Linear Vesting:</strong> The remaining 50% of the team allocation (50 million tokens) will vest linearly on a monthly basis over the subsequent 16 months.</li>
                    </ul>
                    <p className="mt-4">
                        This vesting schedule ensures that the team is incentivized to focus on the long-term growth and stability of the Exnus Protocol, aligning their interests with those of our entire community.
                    </p>

                    <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">Community Airdrop Vesting Schedule</h3>
                    <p>
                        To ensure a fair and stable market entry, the 200 million tokens allocated for the community airdrop will be distributed with a structured vesting schedule. This approach rewards early participants while promoting long-term ecosystem health.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Initial Unlock at TGE:</strong> 60% of the airdrop allocation (120 million tokens) will be unlocked and available to claim at the Token Generation Event (TGE).</li>
                        <li><strong>Linear Vesting:</strong> The remaining 40% (80 million tokens) will vest linearly on a monthly basis over the subsequent 8 months. This means an additional 10 million tokens will become available to airdrop recipients each month.</li>
                    </ul>
                    <p className="mt-4">
                        This vesting schedule is designed to empower our community from day one while encouraging sustained engagement and mitigating initial market volatility.
                    </p>
                </div>
            );
        case "conclusion":
            return (
                <div className="prose max-w-none prose-invert text-foreground/80">
                    <p>
                      The Exnus protocol represents a forward-thinking model for decentralized ecosystem growth that prioritizes active user participation and equitable reward distribution. By integrating with Solana’s blockchain and implementing a secure, transparent smart contract infrastructure, Exnus fosters a collaborative community that drives continuous innovation and shared success within the ecosystem. This white paper outlines a comprehensive vision for sustainable network development powered by its users.
                    </p>
                </div>
            );
        default:
            return <p>Section not found.</p>;
    }
};

const SectionNavigation = ({ currentIndex, onNavigate }: { currentIndex: number, onNavigate: (id: string) => void }) => {
    const prevSection = currentIndex > 0 ? documentSections[currentIndex - 1] : null;
    const nextSection = currentIndex < documentSections.length - 1 ? documentSections[currentIndex + 1] : null;

    return (
        <div className="mt-12 flex justify-between border-t pt-8">
            {prevSection ? (
                <Button variant="outline" asChild>
                    <a href={`#${prevSection.id}`} onClick={() => onNavigate(prevSection.id)}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        <div>
                            <div className="text-xs text-foreground/70">Previous</div>
                            <div className="text-foreground font-semibold">{prevSection.title}</div>
                        </div>
                    </a>
                </Button>
            ) : <div></div>}
            {nextSection ? (
                <Button variant="outline" asChild>
                     <a href={`#${nextSection.id}`} onClick={() => onNavigate(nextSection.id)} className="text-right">
                        <div>
                            <div className="text-xs text-foreground/70">Next</div>
                            <div className="text-foreground font-semibold">{nextSection.title}</div>
                        </div>
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            ) : <div></div>}
        </div>
    );
}

export default function ProtocolPage() {
    const [activeSectionId, setActiveSectionId] = useState(documentSections[0].id);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            const section = documentSections.find(s => s.id === hash);
            if (section) {
                setActiveSectionId(section.id);
            } else {
                setActiveSectionId(documentSections[0].id);
            }
            window.scrollTo(0, 0);
        };
        
        handleHashChange(); // Initial check
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const handleNavigate = (id: string) => {
        setActiveSectionId(id);
        window.scrollTo(0, 0);
    }
    
    const activeIndex = documentSections.findIndex(s => s.id === activeSectionId);
    const activeSection = documentSections[activeIndex];

    return (
        <div className="space-y-8">
            <div className="header-card text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Technical Documents
                </h1>
                <p className="text-lg text-foreground/70 max-w-4xl mx-auto">
                An in-depth exploration of the mechanisms, architecture, and strategic vision behind the protocol.
                </p>
            </div>

            <div className="flex gap-8">
                <aside className="hidden lg:block w-1/4">
                    <Card className="sticky top-24 p-4">
                        <nav className="flex flex-col gap-2">
                            {documentSections.map(section => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigate(section.id);
                                    }}
                                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                                        activeSectionId === section.id
                                        ? "bg-secondary text-foreground font-medium"
                                        : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                                    }`}
                                >
                                    {section.icon}
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </Card>
                </aside>

                <div className="w-full lg:w-3/4">
                     {activeSection && (
                        <Card className="p-6 md:p-8" key={activeSection.id}>
                            <ScrollReveal>
                                <section id={activeSection.id}>
                                    <h2 className="text-3xl font-bold text-primary mb-6">
                                        {activeSection.title}
                                    </h2>
                                    <SectionContent id={activeSection.id} />
                                    <SectionNavigation currentIndex={activeIndex} onNavigate={handleNavigate}/>
                                </section>
                            </ScrollReveal>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
