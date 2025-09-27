
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const accessCode = searchParams.code;
  const correctCode = "203040";

  if (accessCode !== correctCode) {
    return (
      <div className="w-full">
        <div className="header-card text-center mb-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Admin Access
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-foreground/70 max-w-md mx-auto">
              Please enter the access code to view the dashboard.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={200}>
          <div className="max-w-sm mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form className="flex flex-col gap-4">
                  <Input name="code" placeholder="Enter access code" type="password" />
                  <Button type="submit">
                    View Dashboard
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  const messages = await getSubmittedMessages();

  return (
    <div className="w-full space-y-8">
       <div className="header-card text-center">
        <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Admin Dashboard
            </h1>
            <p className="text-lg text-foreground/70 max-w-4xl mx-auto">
            View messages submitted through the contact form.
            </p>
        </ScrollReveal>
      </div>
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
  );
}
