import { NextResponse, type NextRequest } from 'next/server';
import { isGpsCampaignConfigured, isGpsCampaignExpired, SITE_CONFIG } from '@/lib/site-config';

export function proxy(request: NextRequest) {
  if (isGpsCampaignConfigured() && isGpsCampaignExpired()) {
    return NextResponse.redirect(new URL(SITE_CONFIG.campaign.gpsAfterCampaignPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/gps-5-0/:path*'],
};
