import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { imageAssets, videoAssets } from "@/data/assets";

export const metadata: Metadata = {
  title: "Asset Catalog & Media Gallery",
  description: "Verified RevCrew branding, engineering photography, event media, and video registry.",
};

export default function AssetsPage() {
  const categories = [
    { key: "branding", label: "Brand Identity", desc: "Logos, transparent emblems, and club banners" },
    { key: "engineering", label: "Engineering & FMAE", desc: "National competition photos and technical scrutineering" },
    { key: "events", label: "Events & Showcase", desc: "Campus bike exhibition and superbike showcase photography" },
    { key: "trips", label: "Trips & Expeditions", desc: "Convoy rides and Pawna Lake expedition captures" },
  ] as const;

  return (
    <div className="flex-1 py-12 md:py-20">
      <Container size="default" className="space-y-16">
        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-[2px] border border-border bg-surface-secondary px-3 py-1 font-mono text-xs text-steel">
              <span className="h-1.5 w-1.5 rounded-[1px] bg-accent-red" />
              <span>PHASE 3 // ASSET REPOSITORY</span>
            </div>
            <Button href="/" variant="outline" size="sm">
              Back to Design Preview
            </Button>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-text-primary">
            Asset Catalog & Media Registry
          </h1>
          <p className="max-w-3xl text-sm sm:text-base text-text-secondary leading-relaxed">
            Verified repository of authentic RevCrew digital assets. All media has been
            inspected, normalized into web-friendly naming structures, and cataloged with
            accurate resolutions and file metadata for upcoming page integrations.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-2">
            <div className="rounded-[2px] border border-border bg-surface-secondary p-3">
              <span className="text-xs font-mono text-steel uppercase">Total Images</span>
              <p className="text-xl font-bold font-mono text-text-primary mt-1">{imageAssets.length}</p>
            </div>
            <div className="rounded-[2px] border border-border bg-surface-secondary p-3">
              <span className="text-xs font-mono text-steel uppercase">Verified Videos</span>
              <p className="text-xl font-bold font-mono text-text-primary mt-1">{videoAssets.length}</p>
            </div>
            <div className="rounded-[2px] border border-border bg-surface-secondary p-3">
              <span className="text-xs font-mono text-steel uppercase">Categories</span>
              <p className="text-xl font-bold font-mono text-text-primary mt-1">4 Active</p>
            </div>
            <div className="rounded-[2px] border border-border bg-surface-secondary p-3">
              <span className="text-xs font-mono text-steel uppercase">Verification</span>
              <p className="text-xl font-bold font-mono text-accent-red mt-1">100% Genuine</p>
            </div>
          </div>
        </div>

        {/* Categorized Image Galleries */}
        {categories.map((cat) => {
          const items = imageAssets.filter((a) => a.category === cat.key);
          if (items.length === 0) return null;

          return (
            <section key={cat.key} aria-labelledby={`category-${cat.key}`} className="space-y-6">
              <SectionHeading
                eyebrow={`// CATEGORY // ${cat.key.toUpperCase()}`}
                title={cat.label}
                description={cat.desc}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((asset) => (
                  <Card key={asset.id} variant="default" className="overflow-hidden p-0">
                    {/* Media Frame */}
                    <div className="relative aspect-[16/10] w-full bg-[#0d0e10] border-b border-border flex items-center justify-center p-2">
                      <Image
                        src={asset.src}
                        alt={asset.alt}
                        width={asset.width}
                        height={asset.height}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* Metadata Card Body */}
                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-tight text-text-primary">
                          {asset.title}
                        </h3>
                        {asset.caption && (
                          <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                            {asset.caption}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-border-subtle space-y-1 font-mono text-[11px] text-steel">
                        <div className="flex justify-between">
                          <span>Dimensions:</span>
                          <span className="text-text-primary">{asset.width} × {asset.height} px</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Format:</span>
                          <span className="uppercase text-text-primary">{asset.format}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>File Size:</span>
                          <span className="text-text-primary">{(asset.fileSizeBytes / 1024).toFixed(1)} KB</span>
                        </div>
                        <div className="flex justify-between pt-1 text-[10px] text-steel/80">
                          <span className="truncate max-w-[200px]" title={asset.src}>Path: {asset.src}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}

        {/* Video Registry Section */}
        <section aria-labelledby="videos-registry" className="space-y-6">
          <SectionHeading
            eyebrow="// VIDEO ASSETS & STREAMING"
            title="Video Media Registry"
            description="High-definition and 4K footage inspected and verified. Poster frames have been extracted for responsive web playback."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {videoAssets.map((vid) => (
              <Card key={vid.id} variant="default" className="overflow-hidden p-0">
                <div className="relative aspect-[16/9] w-full bg-[#0d0e10] border-b border-border">
                  <Image
                    src={vid.posterSrc}
                    alt={`${vid.title} video poster frame`}
                    width={vid.width}
                    height={vid.height}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 rounded-[2px] bg-bg-primary/90 px-2 py-0.5 font-mono text-[11px] text-text-primary border border-border">
                    {vid.durationSeconds}s • {vid.fps} fps
                  </div>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-tight text-text-primary">
                      {vid.title}
                    </h3>
                    <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                      {vid.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border-subtle space-y-1 font-mono text-[11px] text-steel">
                    <div className="flex justify-between">
                      <span>Native Resolution:</span>
                      <span className="text-text-primary">{vid.width} × {vid.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Raw File Size:</span>
                      <span className="text-text-primary">{(vid.fileSizeBytes / (1024 * 1024)).toFixed(1)} MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Source File:</span>
                      <span className="text-text-primary truncate max-w-[160px]" title={vid.originalFileName}>
                        {vid.originalFileName}
                      </span>
                    </div>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 rounded-[2px] bg-surface-elevated border border-border px-2 py-1 text-[10px] text-steel w-full">
                        <span className="h-1.5 w-1.5 rounded-[1px] bg-accent-red" />
                        Production Next Step: Stream Host (Cloudflare/Mux/YouTube)
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Summary Notes */}
        <div className="rounded-[2px] border border-border bg-surface-secondary p-6 text-xs text-text-secondary space-y-2 font-mono">
          <p className="text-text-primary font-bold uppercase tracking-wider">
            {"// PHASE 3 AUDIT & ARCHIVAL INTEGRATION SUMMARY"}
          </p>
          <ul className="list-disc pl-4 space-y-1 text-steel">
            <li>Branding assets: Master square emblem, round crest badge, transparent logo, 4K banner, horizontal banner, and trailer poster.</li>
            <li>Engineering assets: Authentic FMAE Moto Student national competition photos, technical inspection, and paddock assembly.</li>
            <li>Event & Trip media: Authentic action stills extracted from genuine campus exhibition and Pawna Lake expedition ride videos.</li>
            <li>Sponsors and Team folders in Drive were audited and confirmed empty; no speculative assets were created.</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
