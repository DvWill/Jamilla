/**
 * Configurações editoriais e de campanha em um só lugar.
 *
 * As datas ficam vazias até serem confirmadas pela equipe. Quando preenchidas,
 * devem usar ISO 8601 com fuso explícito, por exemplo:
 * 2026-10-01T00:00:00-03:00
 */
export const SITE_CONFIG = {
  whatsappNumber: '5561991889520',
  whatsappDefaultMessage:
    'Olá, Jamilla! Vim pelo site e gostaria de entender qual solução faz mais sentido para a minha escola.',
  supportLabel: 'Suporte pelos canais informados após a inscrição.',
  certificateLabel: 'Certificado de conclusão da formação.',
  campaign: {
    trilhaToGpsAt: null as string | null,
    gpsStartAt: null as string | null,
    gpsEndAt: null as string | null,
    gpsAfterCampaignPath: '/inicio',
  },
} as const;

export function whatsappUrl(message: string = SITE_CONFIG.whatsappDefaultMessage) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getCampaignMode(now = new Date()) {
  const switchAt = SITE_CONFIG.campaign.trilhaToGpsAt;
  return switchAt && now >= new Date(switchAt) ? 'gps' : 'trilha';
}

export function isGpsCampaignConfigured() {
  return Boolean(SITE_CONFIG.campaign.gpsStartAt && SITE_CONFIG.campaign.gpsEndAt);
}

export function isGpsCampaignExpired(now = new Date()) {
  const endAt = SITE_CONFIG.campaign.gpsEndAt;
  return Boolean(endAt && now >= new Date(endAt));
}

export function isGpsCampaignActive(now = new Date()) {
  const { gpsStartAt, gpsEndAt } = SITE_CONFIG.campaign;
  if (!gpsStartAt || !gpsEndAt) return false;
  return now >= new Date(gpsStartAt) && now < new Date(gpsEndAt);
}
