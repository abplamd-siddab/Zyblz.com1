import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/Services";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import PrivacyPage from "@/pages/Privacy";
import TermsPage from "@/pages/Terms";
import WorkPage from "@/pages/Work";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/work" component={WorkPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WhatsAppButton />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
