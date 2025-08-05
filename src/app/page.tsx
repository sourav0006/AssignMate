import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageSquare, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-primary"
    >
      <path d="M12 2l4.9 4.9L22 12l-4.9 4.9L12 22l-4.9-4.9L2 12l4.9-4.9L12 2z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
}


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Logo />
          <span className="text-xl font-bold font-headline text-foreground">AssignSimple</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
            Login
          </Link>
          <Button asChild>
            <Link href="/login">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Delegate Your Tasks. Monetize Your Skills.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    AssignSimple connects students who need help with assignments to those who can provide it, creating a seamless marketplace for academic assistance.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/dashboard">Post an Assignment</Link>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/dashboard">Find Work</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Hero"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                data-ai-hint="collaboration learning"
              />
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Simple Path to Success</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you're a Requester needing help or a Provider looking to earn, our platform makes it easy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline">For Requesters</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Post Your Task:</span> Describe your assignment, set a budget, and upload any necessary files.</li>
                  <li><span className="font-semibold text-foreground">Choose a Provider:</span> Review applications from skilled providers and select the best fit for your task.</li>
                  <li><span className="font-semibold text-foreground">Collaborate & Approve:</span> Chat with your provider, track progress, and release payment upon satisfactory completion.</li>
                </ol>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline">For Providers</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Find Opportunities:</span> Browse assignments posted by requesters in your area of expertise.</li>
                  <li><span className="font-semibold text-foreground">Apply & Get Hired:</span> Submit your application, communicate your skills, and get assigned to projects.</li>
                  <li><span className="font-semibold text-foreground">Deliver & Earn:</span> Complete the work, submit it for approval, and get paid securely.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Everything You Need in One Platform
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our features are designed for seamless collaboration and peace of mind.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm gap-8 pt-12 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <CardTitle>Easy Assignment Posting</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Quickly post tasks with all the details needed for providers to get started.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <CardTitle>Real-time Chat</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Communicate directly with your requester or provider to ensure clarity and success.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                  <CardTitle>Secure Payments</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Our escrow system holds funds until work is approved, guaranteeing fairness for all.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 AssignSimple. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
