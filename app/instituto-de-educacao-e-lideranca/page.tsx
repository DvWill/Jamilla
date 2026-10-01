import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, BookOpenCheck, Compass, GraduationCap, MessageCircle, Network } from 'lucide-react';
import { Cta, Eyebrow, Footer, Header } from '@/components/site';
import { ScrollReveal } from '@/components/scroll-reveal';
import { whatsappUrl } from '@/lib/site-config';
import styles from './page.module.css';

const contactHref = whatsappUrl('Olá! Gostaria de conversar com o Instituto de Educação e Liderança.');

export const metadata: Metadata = {
  title: 'Instituto de Educação e Liderança | Estratégia para Redes de Ensino',
  description: 'Soluções formativas e estratégicas para redes públicas de ensino, lideranças educacionais e equipes pedagógicas.',
  alternates: { canonical: '/instituto-de-educacao-e-lideranca' },
  openGraph: { title: 'Instituto de Educação e Liderança', description: 'Estratégia, formação e liderança para redes que querem avançar.', type: 'website' },
};

const heroBenefits = [
  ['Liderança educacional', 'Desenvolvimento de gestores e equipes.', GraduationCap],
  ['Gestão e estratégia', 'Planejamento orientado a resultados.', Compass],
  ['Aprendizagem', 'Estratégias que chegam à sala de aula.', BookOpenCheck],
  ['Resultados', 'Dados transformados em decisões.', Network],
] as const;
const approach = [
  ['Formação', 'Formações construídas a partir dos desafios reais enfrentados pelas redes públicas de ensino.'],
  ['Estratégia', 'Planejamento, definição de prioridades, metas e construção de planos de ação.'],
  ['Acompanhamento', 'Apoio técnico para que conhecimento e planejamento sejam efetivamente implementados.'],
  ['Resultados', 'Uso de dados, avaliações e indicadores para orientar decisões e promover melhoria contínua.'],
];
const areas = [
  ['Alfabetização', 'Estratégias para fortalecimento dos processos de alfabetização e aprendizagem.'],
  ['Liderança e Gestão Escolar', 'Desenvolvimento de gestores capazes de liderar, acompanhar e mobilizar equipes.'],
  ['Gestão de Recursos Educacionais', 'Planejamento e utilização estratégica dos recursos públicos da educação.'],
  ['IDEB e Indicadores Educacionais', 'Leitura de indicadores e construção de estratégias para melhoria dos resultados.'],
  ['SAEB e Avaliações', 'Transformação de dados e avaliações em decisões pedagógicas.'],
  ['FUNDEB', 'Compreensão e gestão estratégica dos recursos destinados à educação.'],
  ['Planejamento Educacional', 'Construção de metas, estratégias, processos e planos de ação.'],
  ['Desenvolvimento de Equipes', 'Formação de equipes técnicas, coordenadores pedagógicos e lideranças educacionais.'],
];
const solutions = [
  ['Assessorias técnicas', 'Acompanhamento especializado para Secretarias de Educação e equipes técnicas.', GraduationCap],
  ['Consultorias', 'Diagnóstico, planejamento e desenvolvimento de estratégias educacionais.', Compass],
  ['Formações continuadas', 'Programas formativos estruturados para gestores, coordenadores e equipes pedagógicas.', BookOpenCheck],
  ['Mentorias formativas', 'Acompanhamento de lideranças para transformar conhecimento em prática de gestão.', Network],
  ['Palestras', 'Conteúdos estratégicos para encontros, eventos e desenvolvimento de lideranças.', MessageCircle],
] as const;
const direction = [
  ['Missão', 'Fortalecer redes de ensino por meio da formação de lideranças, do desenvolvimento de equipes e da implementação de estratégias educacionais capazes de transformar conhecimento em aprendizagem e resultados concretos.'],
  ['Visão', 'Ser referência nacional em formação, liderança e desenvolvimento estratégico de redes públicas de ensino, contribuindo para uma educação mais eficiente, equitativa e orientada à aprendizagem.'],
  ['Objetivo institucional', 'Apoiar Secretarias de Educação, equipes técnicas e lideranças escolares na construção de uma gestão educacional mais estratégica.'],
];
const objectives = ['Fortalecer a liderança educacional.', 'Desenvolver gestores e coordenadores pedagógicos.', 'Qualificar processos de alfabetização e aprendizagem.', 'Melhorar indicadores educacionais.', 'Apoiar o planejamento e a gestão eficiente dos recursos.', 'Transformar dados e avaliações em decisões pedagógicas.', 'Criar uma cultura de acompanhamento, responsabilização e melhoria contínua.'];
const values = [
  ['Educação com propósito', 'Toda estratégia precisa chegar ao estudante e contribuir para sua aprendizagem.'],
  ['Resultados com responsabilidade', 'Acreditamos em metas e indicadores, sem perder de vista as pessoas, os contextos e a realidade de cada rede.'],
  ['Excelência técnica', 'Formação educacional precisa ter fundamento, método e aplicabilidade. Não trabalhamos com soluções genéricas para problemas complexos.'],
  ['Liderança que desenvolve pessoas', 'Bons resultados são sustentados por lideranças capazes de orientar, acompanhar, formar e mobilizar suas equipes.'],
  ['Equidade', 'Uma rede avança verdadeiramente quando consegue garantir oportunidades de aprendizagem também para quem mais precisa.'],
  ['Decisões baseadas em evidências', 'SAEB, IDEB, avaliações internas e indicadores devem orientar decisões e não apenas preencher relatórios.'],
  ['Ética e transparência', 'Relações institucionais sólidas são construídas com responsabilidade, clareza e respeito ao interesse público.'],
  ['Melhoria contínua', 'Nenhuma rede precisa permanecer refém dos resultados que possui hoje. Avaliar, corrigir, aprender e avançar fazem parte do processo.'],
];

const institutePhotos = [
  ['/images/instituto-formacao-1.jpeg', 'Liderança na gestão escolar'],
  ['/images/instituto-formacao-2.jpeg', 'Planejamento colaborativo'],
  ['/images/instituto-formacao-3.jpeg', 'Acompanhamento pedagógico'],
  ['/images/instituto-formacao-4.jpeg', 'Formação para equipes'],
  ['/images/instituto-formacao-5.jpeg', 'Práticas educacionais'],
  ['/images/instituto-formacao-6.jpeg', 'Aprendizagem em sala de aula'],
] as const;

export default function InstitutoPage() {
  return <><Header /><main className={styles.page}>
    <section className={styles.hero} aria-labelledby="instituto-title"><div className={styles.heroTexture} aria-hidden="true" /><div className={styles.heroBackdrop} aria-hidden="true"><Image fill priority sizes="100vw" src="/images/instituto-hero-palestra.jpeg" alt="" /></div><div className={`wrap ${styles.heroGrid}`}>
      <ScrollReveal className={styles.heroCopy}><Eyebrow>Instituto de Educação e Liderança</Eyebrow><h1 id="instituto-title">Desenvolvemos líderes,<br /><em>fortalecemos redes</em><br />e transformamos estratégia em<br /><em>resultados educacionais.</em></h1><p>Soluções formativas e estratégicas construídas a partir dos desafios reais da educação pública. Atuamos no desenvolvimento de redes de ensino, lideranças educacionais e equipes pedagógicas.</p><div className={styles.heroActions}><Cta href="#sobre-instituto">Conheça o Instituto</Cta><a className={styles.secondaryCta} href="#solucoes"><span>Conheça nossas soluções</span><ArrowRight size={17} aria-hidden="true" /></a></div></ScrollReveal>
      <ScrollReveal className={styles.heroVisual} delay={120} variant="image"><figure className={styles.heroLogo}><Image fill priority sizes="(max-width: 900px) 100vw, 46vw" src="/images/instituto-logo.png" alt="Instituto de Educação e Liderança" /></figure></ScrollReveal>
      <ul className={styles.heroBenefits} aria-label="Frentes de atuação do Instituto">{heroBenefits.map(([title, description, Icon], index) => <li key={title}><span className={styles.heroNumber}>{String(index + 1).padStart(2, '0')}</span><Icon size={19} strokeWidth={1.4} aria-hidden="true" /><span><strong>{title}</strong><small>{description}</small></span></li>)}</ul>
    </div></section>
    <section className={styles.about} id="sobre-instituto" aria-labelledby="sobre-title"><div className={`wrap ${styles.aboutGrid}`}><ScrollReveal><Eyebrow>Sobre o Instituto</Eyebrow><h2 id="sobre-title">Um Instituto para fortalecer redes e <em>transformar a educação.</em></h2></ScrollReveal><ScrollReveal className={styles.aboutContent} delay={100}><div className={styles.aboutRule} aria-hidden="true" /><p>O Instituto de Educação e Liderança atua no desenvolvimento de redes de ensino, lideranças educacionais e equipes pedagógicas, oferecendo soluções formativas construídas a partir dos desafios reais da educação pública.</p><p>Realizamos assessorias técnicas, consultorias, palestras, formações continuadas e mentorias formativas para secretários municipais de Educação, equipes técnicas das Secretarias, gestores escolares e coordenadores pedagógicos.</p><p className={styles.signature}>Estratégia, formação e liderança para redes que querem avançar.</p></ScrollReveal></div></section>
    <section className={styles.pillars} id="metodologia" aria-labelledby="abordagem-title"><div className="wrap"><ScrollReveal className={styles.sectionHeading}><Eyebrow>Nossa abordagem</Eyebrow><h2 id="abordagem-title">Conhecimento que se transforma em estratégia, ação e <em>resultado.</em></h2></ScrollReveal><div className={styles.pillarGrid}>{approach.map(([title, description], index) => <ScrollReveal delay={index * 65} key={title}><article className={styles.pillarCard}><div className={styles.cardTop}><span>{String(index + 1).padStart(2, '0')}</span><Compass size={22} strokeWidth={1.35} aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p></article></ScrollReveal>)}</div></div></section>
    <section className={styles.initiatives} id="areas" aria-labelledby="areas-title"><div className="wrap"><div className={styles.initiativesHeader}><ScrollReveal><Eyebrow>Áreas de atuação</Eyebrow><h2 id="areas-title">Expertise para os principais <em>desafios das redes de ensino.</em></h2></ScrollReveal><ScrollReveal className={styles.initiativesIntro} delay={90}><p>Atuação integrada para transformar os desafios da educação pública em estratégias consistentes.</p></ScrollReveal></div><div className={styles.areaGrid}>{areas.map(([title, description], index) => <ScrollReveal delay={index * 45} key={title}><article className={styles.areaCard}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></article></ScrollReveal>)}</div></div></section>
    <section className={styles.solutions} id="solucoes" aria-labelledby="solucoes-title"><div className="wrap"><ScrollReveal className={styles.solutionsHeader}><Eyebrow>Como atuamos</Eyebrow><h2 id="solucoes-title">Soluções construídas para a realidade de cada rede.</h2></ScrollReveal><div className={styles.solutionList}>{solutions.map(([title, description, Icon], index) => <ScrollReveal delay={index * 55} key={title}><article className={styles.solutionItem}><div className={styles.solutionTop}><span>{String(index + 1).padStart(2, '0')}</span><Icon size={24} strokeWidth={1.5} aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p></article></ScrollReveal>)}</div></div></section>
    <section className={styles.experience} aria-labelledby="experiencia-title"><div className={`wrap ${styles.experienceGrid}`}><ScrollReveal><Eyebrow>Experiência que gera resultados</Eyebrow><h2 id="experiencia-title">Duas experiências. Um propósito: <em>fazer redes avançarem.</em></h2></ScrollReveal><ScrollReveal className={styles.experienceCopy} delay={90}><p>Nossa proposta nasce da união de experiências construídas em dois importantes contextos educacionais brasileiros: a expertise desenvolvida em Sobral, referência nacional em educação pública, somada à experiência e às práticas desenvolvidas em Goiás.</p><p>Mais do que replicar modelos, transformamos conhecimento, experiência e evidências em estratégias aplicáveis à realidade de cada rede de ensino.</p></ScrollReveal></div><div className={`wrap ${styles.experiencePath}`}><article><small>Sobral</small><p>Referência nacional em educação pública.</p></article><span aria-hidden="true">—</span><article><small>Goiás</small><p>Experiência, gestão e práticas desenvolvidas em diferentes realidades educacionais.</p></article><span aria-hidden="true">=</span><article><small>Instituto de Educação e Liderança</small><p>Conhecimento transformado em estratégia.</p></article></div></section>
    <section className={styles.manifesto} aria-label="Posicionamento institucional"><div className="wrap"><ScrollReveal><blockquote>Redes de ensino não precisam de mais uma formação.<br /><br />Precisam de formação séria, <em>acompanhamento estratégico</em> e conhecimento que se transforma em prática.</blockquote><p>Instituto de Educação e Liderança<br /><span>Estratégia, formação e liderança para redes que querem avançar.</span></p><Cta href={contactHref}>Vamos transformar sua rede</Cta></ScrollReveal></div></section>
    <section className={styles.direction} id="missao" aria-labelledby="direcionamento-title"><div className="wrap"><ScrollReveal className={styles.sectionHeading}><Eyebrow>Nosso direcionamento</Eyebrow><h2 id="direcionamento-title">Propósito que orienta cada decisão.</h2></ScrollReveal><div className={styles.directionGrid}>{direction.map(([title, description], index) => <ScrollReveal delay={index * 70} key={title}><article><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></article></ScrollReveal>)}</div><ScrollReveal className={styles.objectives} delay={120}><h3>Na prática, buscamos:</h3><ul>{objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></ScrollReveal></div></section>
    <section className={styles.values} id="valores" aria-labelledby="valores-title"><div className="wrap"><ScrollReveal className={styles.sectionHeading}><Eyebrow>Nossos valores</Eyebrow><h2 id="valores-title">Princípios que sustentam nossa forma de <em>transformar.</em></h2></ScrollReveal><div className={styles.valuesGrid}>{values.map(([title, description], index) => <ScrollReveal delay={index * 42} key={title}><article><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></article></ScrollReveal>)}</div></div></section>
    <section className={styles.institutionalPhrase} aria-label="Frase institucional"><ScrollReveal><p>Desenvolvemos líderes,<br /><em>fortalecemos redes</em><br />e transformamos estratégia em <em>resultados educacionais.</em></p></ScrollReveal></section>
    <section className={styles.closing} aria-labelledby="contato-title"><div className={styles.closingImage}><Image fill sizes="100vw" src="/images/jamilla-cream.webp" alt="Jamilla Salviano em retrato institucional" /></div><div className={`wrap ${styles.closingContent}`}><ScrollReveal><Eyebrow>Vamos avançar</Eyebrow><h2 id="contato-title">Sua rede pode avançar ainda mais.</h2><p>Conte com formação, estratégia e acompanhamento para transformar desafios em resultados.</p><div className={styles.closingActions}><Cta href={contactHref}>Fale com o Instituto</Cta><a href="#solucoes">Conheça nossas soluções</a></div><small>Atendimento personalizado para redes e profissionais da educação.</small></ScrollReveal></div></section>
    <section className={styles.photoStory} aria-labelledby="photo-story-title"><div className="wrap"><ScrollReveal className={styles.sectionHeading}><Eyebrow>Na prática</Eyebrow><h2 id="photo-story-title">Formação que acontece <em>junto das pessoas.</em></h2></ScrollReveal><div className={styles.photoGrid}>{institutePhotos.map(([src, alt], index) => <ScrollReveal key={src} className={index === 0 ? styles.photoFeature : undefined} delay={index * 45} variant="image"><figure><Image fill sizes={index === 0 ? '(max-width: 720px) 100vw, 58vw' : '(max-width: 720px) 100vw, 28vw'} src={src} alt={alt} /><figcaption>{alt}</figcaption></figure></ScrollReveal>)}</div></div></section>
  </main><Footer variant="instituto" /></>
}
