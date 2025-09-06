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
            Pioneering the Future of Decentralized Collaboration
          </DialogTitle>
          <DialogDescription className="text-white/70 pt-2">
            Exnus is a revolutionary protocol on Solana that redefines ecosystem participation by rewarding meaningful contributions.
          </DialogDescription>
        </DialogHeader>
        <div className="prose prose-invert text-white/80 max-w-none">
          <h4 className="text-accent text-lg font-semibold mt-6 mb-2">
            What We Are Building
          </h4>
          <p>
            At Exnus, we are engineering a robust framework to address the core challenges of Web3: low user engagement and fragmented incentives. Our protocol is designed to cultivate a vibrant, self-sustaining community by recognizing and rewarding a wide spectrum of contributions—from development and governance to community building. We are creating an environment where every user is empowered to become a true stakeholder.
          </p>

          <h4 className="text-accent text-lg font-semibold mt-6 mb-2">
            Our Core Mission
          </h4>
          <p>
            Our mission is to build a truly decentralized ecosystem where value is generated and shared by its active participants. By leveraging Solana’s high-performance blockchain, we provide a scalable, secure, and efficient platform for collaboration. Exnus moves beyond passive token-holding and transforms users into vital partners in innovation and growth.
          </p>

          <h4 className="text-accent text-lg font-semibold mt-6 mb-2">
            Key Innovations:
          </h4>
          <ul>
            <li><strong>Holistic Rewards:</strong> A unified system that values all forms of positive engagement.</li>
            <li><strong>True Ownership:</strong> Aligning protocol success with the rewards of its contributors.</li>
            <li><strong>Scalable & Secure:</strong> Built on Solana for high-speed, low-cost, and secure operations.</li>
            <li><strong>Decentralized Governance:</strong> Empowering the community to guide the protocol's future.</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
