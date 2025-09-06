import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Zap } from "lucide-react";

export default function ProtocolDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-card/80 backdrop-blur-xl border-white/10 text-white">
        <DialogHeader>
          <div className="flex items-center gap-2 font-headline text-2xl font-bold mb-4">
            <Zap className="h-7 w-7 text-primary" />
            <span className="text-white">Exnus Protocol</span>
          </div>
          <DialogTitle className="text-2xl font-bold text-accent">
            Redefining User Engagement in Web3
          </DialogTitle>
          <DialogDescription className="text-white/70 pt-2">
            An innovative reward system on Solana designed to incentivize meaningful contributions and foster a vibrant, collaborative ecosystem.
          </DialogDescription>
        </DialogHeader>
        <div className="prose prose-invert text-white/80 max-w-none">
          <p>
            The Exnus protocol introduces an innovative reward system designed to actively incentivize users to contribute meaningfully to the growth and development of the ecosystem. Unlike traditional models that often prioritize passive engagement, Exnus fosters a culture of collaboration and continuous improvement by recognizing and rewarding the diverse efforts of its community members.
          </p>
          <p>
            At its core, the Exnus protocol aims to cultivate a vibrant and inclusive environment where users feel a genuine sense of ownership and belonging. By aligning individual incentives with the collective success of the network, Exnus not only encourages sustained participation but also drives innovation that benefits all stakeholders.
          </p>
          <h4 className="text-accent">What We Are Building:</h4>
          <ul>
            <li><strong>Holistic Reward Framework:</strong> Rewarding a broad spectrum of activities, including development, governance, and community building.</li>
            <li><strong>User Ownership:</strong> Aligning incentives with meaningful contributions to cultivate a strong sense of ownership.</li>
            <li><strong>Scalability and Efficiency:</strong> Leveraging the high-performance Solana blockchain for rapid, low-cost transactions.</li>
            <li><strong>Robust Security:</strong> Ensuring a secure and reliable reward distribution system through rigorous smart contract audits and permissioned functions.</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
