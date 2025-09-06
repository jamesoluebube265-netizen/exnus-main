
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getSubmittedMessages } from "../contact/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";

export default async function AdminPage() {
  const messages = await getSubmittedMessages();

  return (
    <div className="w-full py-16 md:py-24">
       <ScrollReveal>
        <div className="text-center mb-10 px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Admin Dashboard
            </h1>
            <p className="text-lg text-foreground/70 max-w-4xl mx-auto">
            View messages submitted through the contact form.
            </p>
        </div>
      </ScrollReveal>
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal delay={200}>
          <Card>
            <CardHeader>
              <CardTitle>Contact Form Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Received At</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((msg, index) => (
                    <TableRow key={index}>
                      <TableCell>{new Date(msg.receivedAt).toLocaleString()}</TableCell>
                      <TableCell>{msg.name}</TableCell>
                      <TableCell>{msg.email}</TableCell>
                      <TableCell>{msg.message}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
               {messages.length === 0 && (
                <div className="text-center py-10 text-foreground/70">
                    No messages have been submitted yet.
                </div>
               )}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
}
