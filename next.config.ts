import type { NextConfig } from "next";
import { defaultLocale } from "./app/i18n/config";

const nextConfig: NextConfig = {
  // Every route lives under /[locale], so `app/[locale]/layout.tsx` is the root
  // layout and there is no page at `/`. Send bare visits to the default
  // language. (Accept-Language negotiation would need middleware, which the
  // Cloudflare/vinext target does not run — the in-app switcher covers it.)
  async redirects() {
    return [{ source: "/", destination: `/${defaultLocale}`, permanent: false }];
  },
};

export default nextConfig;
