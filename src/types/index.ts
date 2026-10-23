export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  institution: string;
  navItems: NavItem[];
}

export type AssetCategory =
  | "branding"
  | "engineering"
  | "events"
  | "trips"
  | "team"
  | "sponsors";

export interface ImageAsset {
  id: string;
  src: string;
  category: AssetCategory;
  title: string;
  alt: string;
  width: number;
  height: number;
  fileSizeBytes: number;
  format: "jpeg" | "jpg" | "png" | "webp";
  caption?: string;
  verifiedSource: string;
}

export interface VideoAsset {
  id: string;
  title: string;
  category: AssetCategory;
  originalFileName: string;
  width: number;
  height: number;
  fps: number;
  durationSeconds: number;
  fileSizeBytes: number;
  posterSrc: string;
  hostingStatus: "local-raw" | "external-stream-recommended";
  description: string;
  verifiedSource: string;
}
