import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <Container size="narrow" className="text-center">
        <div className="inline-flex items-center gap-2 rounded-[2px] border border-border bg-surface-secondary px-3 py-1 font-mono text-xs text-steel">
          <span className="h-1.5 w-1.5 rounded-[1px] bg-accent-red" />
          <span>ERR // 404 NOT FOUND</span>
        </div>

        <h1 className="mt-4 text-3xl font-black uppercase tracking-tight text-text-primary sm:text-5xl">
          Page Not Located
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary leading-relaxed">
          The requested engineering record or route does not exist within the current system deployment.
        </p>

        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary" size="md">
            Return to Design Preview
          </Button>
        </div>
      </Container>
    </div>
  );
}
