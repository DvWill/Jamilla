import Image from 'next/image';

const AGENCY_INSTAGRAM_URL = 'https://www.instagram.com/asuapublicidade/';

type FooterAgencyCreditProps = {
  className?: string;
};

export function FooterAgencyCredit({
  className = '',
}: FooterAgencyCreditProps) {
  return (
    <div className={`footer-agency-credit ${className}`.trim()}>
      <span className="footer-agency-credit__label">Desenvolvido por</span>
      <a
        className="footer-agency-credit__link"
        href={AGENCY_INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conheça a A Sua Publicidade no Instagram"
      >
        <Image
          className="footer-agency-credit__logo"
          src="/images/a-sua-publicidade-logo.png"
          alt="A Sua Publicidade - Agência de Marketing"
          width={2172}
          height={724}
          sizes="(max-width: 620px) 84px, 100px"
        />
      </a>
    </div>
  );
}
