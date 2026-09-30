import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  GraduationCap,
  HeartHandshake,
  LayoutTemplate,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { GPSHeader } from './gps-header';
import { GPSMethodSection } from './gps-method-section';
import { GPSPainPoints } from './gps-pain-points';
import { PremiumCta } from './premium-cta';
import { ScrollReveal } from './scroll-reveal';
import { FooterAgencyCredit } from './footer-agency-credit';
import { TestimonialsCarousel } from './testimonials-carousel';
import styles from './gps-landing.module.css';

const learningItems = [
  { number: '01', title: 'Organizar a liderança', description: 'Definir prioridades e parar de trabalhar apenas reagindo às urgências.' },
  { number: '02', title: 'Conduzir melhor a equipe', description: 'Criar direção, alinhamento e responsabilidade dentro da escola.' },
  { number: '03', title: 'Lidar com conflitos', description: 'Conduzir conflitos sem perder o equilíbrio ou evitar conversas difíceis.' },
  { number: '04', title: 'Cobrar sem culpa', description: 'Fazer cobranças com clareza, firmeza e respeito.' },
  { number: '05', title: 'Dar feedback', description: 'Corrigir comportamentos e orientar a equipe de maneira objetiva.' },
  { number: '06', title: 'Delegar com segurança', description: 'Parar de centralizar tudo e aumentar a responsabilidade da equipe.' },
  { number: '07', title: 'Tomar decisões difíceis', description: 'Desenvolver mais confiança e critério para decidir.' },
  { number: '08', title: 'Conduzir reuniões melhores', description: 'Transformar reuniões em espaços de direção, decisão e resultado.' },
];

const supportItems = [
  { icon: MessageCircle, title: 'Mentorias mensais', description: 'Leve situações reais da sua escola e receba direcionamento prático para lidar com conflitos, equipe, decisões e desafios da gestão.' },
  { icon: BookOpen, title: 'Livros digitais', description: 'Acesso aos livros digitais da Jamilla sobre liderança, conflitos, feedback, comportamento, formação continuada e gestão escolar.' },
  { icon: UsersRound, title: 'Comunidade de gestores', description: 'Acesso a uma comunidade com centenas de gestores, onde você pode trocar experiências, compartilhar desafios e contar com apoio de pessoas que vivem situações semelhantes.' },
];

const heroBenefits = [
  { icon: GraduationCap, title: 'Formação em liderança escolar' },
  { icon: LayoutTemplate, title: 'Mentorias mensais com situações reais' },
  { icon: Award, title: 'Livros digitais da Jamilla' },
  { icon: Sparkles, title: 'Comunidade com gestores' },
  { icon: HeartHandshake, title: 'Suporte pelos canais informados após a inscrição.' },
  {
    icon: BadgeCheck,
    title: 'Certificado reconhecido pelo MEC',
    description:
      'Ao concluir o curso, você recebe um certificado que valoriza sua formação e sua trajetória profissional.',
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: 'Garantia total',
    description:
      'Faça sua inscrição com segurança. Você conta com garantia para conhecer o curso com tranquilidade.',
    featured: true,
  },
];

const bonusLessons = [
  'Construindo sua autoridade como gestor referência',
  'Do gestor ao mentor: novas oportunidades e caminhos na educação',
  'Oratória',
  'Processo seletivo: como ser aprovado?',
];

const beforeItems = [
  'Apaga incêndios',
  'Centraliza decisões',
  'Evita conflitos',
  'Cobra com culpa',
  'Leva problemas para casa',
  'Vive sem tempo para pensar',
  'Sente insegurança para se posicionar',
];

const afterItems = [
  'Age com mais estratégia',
  'Define prioridades',
  'Delega com mais segurança',
  'Conduz conversas difíceis',
  'Exerce autoridade sem autoritarismo',
  'Decide com mais confiança',
  'Desenvolve uma liderança clara e consistente',
];

const results = [
  { title: 'Clareza', description: 'Entenda o que realmente precisa da sua atenção como líder.' },
  { title: 'Posicionamento', description: 'Aprenda a se posicionar sem culpa e sem agressividade.' },
  { title: 'Autoridade', description: 'Reconstrua respeito sem recorrer ao autoritarismo.' },
  { title: 'Estratégia', description: 'Pare de reagir a tudo e comece a trabalhar com prioridades.' },
  { title: 'Segurança', description: 'Tome decisões difíceis com mais confiança.' },
  { title: 'Equilíbrio', description: 'Lidere pessoas sem carregar emocionalmente tudo sozinho.' },
];

const faq = [
  { question: 'O GPS serve apenas para diretores?', answer: 'Não. A formação também é indicada para coordenadores, equipes gestoras, profissionais da educação e gestores em formação que exercem ou estão construindo uma função de liderança.' },
  { question: 'Coordenadores também podem participar?', answer: 'Sim. Os conteúdos ajudam coordenadores a organizar rotinas, conduzir equipes, mediar conflitos, fazer alinhamentos e fortalecer sua atuação como liderança pedagógica.' },
  { question: 'Preciso ter experiência como gestor?', answer: 'Não. O GPS atende tanto quem já vive os desafios da gestão quanto quem está se preparando para assumir uma posição de liderança escolar.' },
  { question: 'Como funcionam as mentorias mensais?', answer: 'As mentorias são espaços para analisar situações reais da gestão, organizar decisões e transformar dúvidas em ações práticas. O calendário e o formato de participação são informados após a inscrição.' },
  { question: 'Como funciona a comunidade de gestores?', answer: 'É um ambiente de troca e apoio entre profissionais que enfrentam desafios semelhantes. As orientações de acesso são enviadas aos participantes após a inscrição.' },
  { question: 'Os livros digitais estão incluídos?', answer: 'Sim. Os livros digitais previstos na formação fazem parte dos benefícios do GPS e ficam disponíveis conforme as orientações de acesso do programa.' },
  { question: 'Por quanto tempo tenho acesso?', answer: 'O acesso fica disponível por um ano. Nesse período, você pode rever as aulas e consultar os materiais sempre que precisar.' },
  { question: 'Como acesso o conteúdo depois da inscrição?', answer: 'Após a confirmação da inscrição, você recebe por e-mail as orientações para acessar a plataforma da formação e os canais de suporte.' },
  { question: 'O curso oferece certificado?', answer: 'A formação prevê certificado de conclusão. A disponibilidade e o formato devem ser confirmados na inscrição.' },
  { question: 'Posso tirar dúvidas durante a formação?', answer: 'Sim. Além das mentorias e da comunidade, você terá acesso aos canais de suporte informados após a inscrição.' },
  { question: 'Os materiais são editáveis?', answer: 'Alguns materiais são disponibilizados para aplicação prática e podem ser preenchidos ou adaptados conforme a proposta de cada ferramenta. Os formatos disponíveis estarão indicados dentro da plataforma.' },
  { question: 'Posso comprar para a minha equipe?', answer: 'Sim. Também trabalhamos com inscrições para equipes e formações destinadas a escolas, Secretarias de Educação e redes de ensino. Para condições institucionais ou múltiplos acessos, entre em contato com a equipe.' },
];

export function GPSLanding() {
  return (
    <main className={styles.page}>
      <GPSHeader />
      <section id="inicio" className={styles.hero}>
        <div className={styles.heroLines} aria-hidden="true" />
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Método GPS da Liderança Escolar</p>
            <h1>
              Torne-se a liderança que inspira respeito, exerce influência e
              <em> gera resultados — sem perder a humanidade.</em>
            </h1>
            <p className={styles.heroLead}>O GPS é uma formação para gestores escolares cansados de apenas apagar incêndios e que querem aprender a liderar com mais clareza, método, firmeza e segurança.</p>
            <div className={styles.heroActions}>
              <Link href="#inscricao" className={styles.button}>Conhecer a formação <ArrowRight size={17} /></Link>
              <Link href="#video" className={styles.videoButton}>Ver como funciona <ArrowRight size={15} /></Link>
            </div>
            <ul className={styles.heroProof}>
              {['Conteúdo prático e aplicável', 'Mentorias mensais', 'Livros digitais', 'Comunidade de gestores'].map((item) => (
                <li key={item}><Check size={15} />{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroTags}><span>Gestão</span><span>Liderança</span><span>Estratégia</span><span>Resultados</span></div>
            <div className={styles.heroImage}><Image src="/images/jamilla-gps-hero.png" alt="Jamilla Salviano" fill priority sizes="(max-width: 900px) 82vw, 42vw" /></div>
            <p className={styles.heroSignature}>Jamilla<br /><strong>Salviano</strong></p>
          </div>
        </div>
      </section>

      <section id="beneficios" className={styles.heroBenefits} aria-label="Benefícios da formação">
        <ScrollReveal className={`${styles.wrap} ${styles.heroBenefitsContent}`}>
          {heroBenefits.map(({ icon: Icon, title, description, featured }) => (
            <article
              className={`${styles.heroBenefitCard} ${featured ? styles.heroBenefitFeatured : ''}`}
              key={title}
            >
              <span className={styles.heroBenefitIcon} aria-hidden="true"><Icon /></span>
              <div className={styles.heroBenefitCopy}>
                <strong>{title}</strong>
                {description ? <p>{description}</p> : null}
              </div>
            </article>
          ))}
        </ScrollReveal>
      </section>

      <section className={`${styles.section} ${styles.exclusiveBonuses}`} aria-labelledby="exclusive-bonuses-title">
        <div className={styles.wrap}>
          <header className={styles.exclusiveBonusesHeader}>
            <p className={styles.exclusiveBonusesBadge}>Bônus e materiais exclusivos</p>
            <h2 id="exclusive-bonuses-title">Ao acessar o Curso Liderança Escolar Transformadora...</h2>
            <p>Você terá acesso a aulas bônus e materiais exclusivos para projetar o próximo nível da sua carreira com autoridade, clareza e propósito.</p>
          </header>

          <div className={styles.bonusLessonsGrid}>
            <ScrollReveal className={styles.bonusLessonsCard}>
              <div className={styles.bonusLessonsTitle}>
                <span aria-hidden="true"><Play /></span>
                <div><small>Conteúdo adicional</small><h3>Aulas <strong>Bônus</strong></h3></div>
              </div>
              <ul>
                {bonusLessons.map((lesson, index) => (
                  <li key={lesson}>
                    <span aria-hidden="true"><Check /></span>
                    {index === bonusLessons.length - 1
                      ? <p><strong>Processo seletivo</strong>: como ser aprovado?</p>
                      : <p>{lesson}</p>}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal className={styles.bonusLaptop} delay={100}>
              <div className={styles.bonusLaptopFrame}>
                <Image src="/images/gps-device-module-5.png" alt="Formação GPS 5.0 apresentada em notebook, tablet e celular" fill sizes="(max-width: 900px) 94vw, 54vw" />
                <span>Bônus &amp;<br />Materiais Exclusivos</span>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className={styles.jamiliaBonus}>
            <div className={styles.jamiliaVisual}>
              <Image src="/images/jamilla-bonus-seal.png" alt="JamillIA, sua mentora em Liderança Escolar" fill sizes="(max-width: 900px) 86vw, 38vw" />
              <div><span>JamillIA</span><strong>Sua mentora em Liderança Escolar</strong><small>24h por dia</small></div>
            </div>
            <div className={styles.jamiliaContent}>
              <p className={styles.jamiliaBadge}>Bônus exclusivo</p>
              <h3>JamillIA — Sua Mentora em Liderança Escolar, <strong>24h por dia</strong></h3>
              <p>Ao se inscrever no Método GPS 5.0, você não leva apenas um curso. Você ganha acesso à JamillIA, uma mentora virtual treinada para pensar como uma mentora experiente em gestão e liderança escolar.</p>
              <p>A JamillIA foi criada para apoiar diretores, gestores e coordenadores pedagógicos nos desafios reais da escola: tomada de decisão, liderança de equipes, gestão estratégica e resolução de conflitos — na prática e no dia a dia.</p>
              <div className={styles.jamiliaHighlight}>
                <span aria-hidden="true"><Clock3 /></span>
                <p>É como ter Jamilla Salviano ao seu lado, <strong>24 horas por dia</strong>, orientando, esclarecendo dúvidas e ajudando você a agir com mais segurança, clareza e autoridade.</p>
              </div>
              <p className={styles.jamiliaClosing}>Você não estará mais sozinho na liderança. Com o Método GPS e a JamillIA, suas decisões deixam de ser improviso e passam a ser estratégicas.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="video" className={`${styles.section} ${styles.video}`}>
        <div className={`${styles.wrap} ${styles.videoGrid}`}>
          <ScrollReveal className={styles.videoFrame}>
            <video className={styles.videoMedia} autoPlay muted loop playsInline preload="metadata" poster="/images/video-frame.jpg"><source src="/videos/lider-extraordinario.mp4" type="video/mp4" /></video>
          </ScrollReveal>
          <div className={styles.videoCopy}>
            <p className={styles.eyebrow}>Uma formação para quem lidera</p>
            <h2>Mais do que um curso, uma transformação real na sua liderança.</h2>
            <p>O GPS foi criado para gestores que estão cansados de viver no modo reativo, resolvendo urgências o dia inteiro e levando os problemas da escola para casa.</p>
            <p>Aqui, <strong className={styles.videoHighlight}>liderança deixa de ser improviso.</strong> Ela passa a ter método, clareza e direção.</p>
            <p className={styles.videoPrinciple}>O objetivo não é formar um gestor “duro”. É formar um líder claro, coerente, humano e consistente.</p>
          </div>
        </div>
      </section>

      <section id="sobre" className={`${styles.section} ${styles.about}`}>
        <div className={`${styles.wrap} ${styles.aboutGrid}`}>
          <ScrollReveal className={styles.aboutVisual}>
            <div className={styles.mockupLaptop}><Image src="/images/gps-device-module-5.png" alt="Formação GPS 5.0 em diferentes dispositivos" fill sizes="(max-width: 900px) 90vw, 44vw" /></div>
          </ScrollReveal>
          <div className={styles.aboutCopy}>
            <p className={styles.eyebrow}>O que você vai desenvolver</p>
            <h2>O que você aprende no GPS</h2>
            <p>Ao passar pelo GPS, você desenvolve repertório para lidar com os desafios reais da liderança escolar.</p>
          </div>
        </div>
        <ScrollReveal className={`${styles.wrap} ${styles.learningGrid}`}>
          {learningItems.map((item) => (
            <article className={styles.learningCard} key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>
          ))}
        </ScrollReveal>
        <p className={`${styles.wrap} ${styles.learningNote}`}>Você também aprende a identificar padrões de resistência, fofoca, desmotivação e permissividade antes que eles contaminem a cultura da escola.</p>
      </section>

      <section id="formacao" className={`${styles.section} ${styles.mentorBonus}`}>
        <div className={`${styles.wrap} ${styles.mentorBonusGrid}`}>
          <ScrollReveal className={styles.mentorBonusImage}>
            <Image src="/images/jamilla-bonus-seal.png" alt="Jamilla Salviano" fill sizes="(max-width: 900px) 88vw, 38vw" />
          </ScrollReveal>
          <div className={styles.mentorBonusCopy}>
            <p className={styles.eyebrow}>Acompanhamento e comunidade</p>
            <h2>Você não precisa<br />liderar sozinho.</h2>
            <p className={styles.mentorBonusLead}>O GPS não termina quando a aula acaba. A formação é acompanhada por espaços de orientação, troca e desenvolvimento contínuo.</p>
            <div className={styles.supportList}>
              {supportItems.map(({ icon: Icon, title, description }) => (
                <article className={styles.supportItem} key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GPSPainPoints />

      <div id="metodo"><GPSMethodSection /></div>

      <section id="transformacao" className={`${styles.section} ${styles.transformation}`}>
        <div className={`${styles.wrap} ${styles.transformationInner}`}>
          <div className={styles.transformationHeading}><p className={styles.eyebrow}>Como você entra / como você sai</p><h2>Do modo reativo a uma liderança mais consciente.</h2></div>
          <div className={styles.transformationGrid}>
            <div className={styles.transformationMarker} aria-label="Antes, GPS, depois"><span>Antes</span><ArrowRight aria-hidden="true" /><strong>GPS</strong><ArrowRight aria-hidden="true" /><span>Depois</span></div>
            <ScrollReveal className={`${styles.transformationColumn} ${styles.beforeColumn}`}>
              <div className={styles.transformationLabel}>Antes do GPS</div>
              <h3>Você reage.</h3>
              <ul>{beforeItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </ScrollReveal>
            <ScrollReveal className={`${styles.transformationColumn} ${styles.afterColumn}`} delay={120}>
              <div className={styles.transformationLabel}>Depois do GPS</div>
              <h3>Você lidera.</h3>
              <ul>{afterItems.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            </ScrollReveal>
          </div>
          <p className={styles.transformationQuote}>Você não precisa se tornar um gestor mais duro.<br /><em>Precisa se tornar um líder mais claro, coerente, humano e consistente.</em></p>
        </div>
      </section>

      <section id="depoimentos" className={`${styles.section} ${styles.testimonials}`}>
        <div className={styles.wrap}>
          <div className={styles.testimonialsHeader}><div><p className={styles.eyebrowDark}>Depoimentos</p><h2>Histórias reais.<br /><em>Resultados reais.</em></h2></div><p>Experiências de quem está transformando a rotina escolar com mais método, posicionamento e segurança.</p></div>
          <TestimonialsCarousel />
        </div>
      </section>

      <section id="inscricao" className={styles.conversion}>
        <div className={`${styles.wrap} ${styles.conversionGrid}`}>
          <div><p className={styles.eyebrow}>GPS 5.0</p><h2>Chegou a hora de transformar a sua gestão escolar.</h2><p>O GPS foi desenvolvido para transformar conhecimento em comportamento de liderança aplicado à rotina real da escola.</p></div>
          <ScrollReveal className={styles.conversionBox}><Link href="/contato" className={styles.button}>Quero conhecer o GPS 5.0 <ArrowRight size={18} /></Link><div className={styles.conversionSubline}>Formação + mentorias + livros digitais + comunidade de gestores.</div></ScrollReveal>
        </div>
      </section>

      <section id="para-quem" className={`${styles.section} ${styles.audience}`}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Para quem é</p>
          <div className={styles.audienceHeader}><h2>Se você vive esses desafios,<br />o GPS 5.0 é para você.</h2><p>Resultados que aparecem na rotina, nas relações e na segurança com que você conduz a escola.</p></div>
          <div className={styles.audienceGrid}>
            {results.map((item, index) => (
              <ScrollReveal delay={index * 45} key={item.title}><Check /><h3>{item.title}</h3><p>{item.description}</p></ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={`${styles.section} ${styles.faq}`}>
        <div className={`${styles.wrap} ${styles.faqGrid}`}>
          <div className={styles.faqIntro}><p className={styles.eyebrow}>Perguntas frequentes</p><h2>Antes de começar, tire suas dúvidas.</h2><p>Reunimos as principais informações para você decidir com segurança.</p></div>
          <div className={styles.faqList}>
            {faq.map((item, index) => (
              <details key={item.question} open={index === 0}><summary><span>{item.question}</span><ChevronDown /></summary><p>{item.answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={`${styles.wrap} ${styles.finalGrid}`}>
          <ScrollReveal><p className={styles.eyebrow}>GPS 5.0</p><h2>Sua próxima fase<br />na gestão escolar<br />pode começar <em>hoje.</em></h2><p>Pare de liderar apenas reagindo aos problemas.<br /><br />Construa uma liderança com mais clareza, método, firmeza, segurança e humanidade.</p><Link href="#inscricao" className={styles.button}>Quero conhecer o GPS 5.0 <ArrowRight /></Link></ScrollReveal>
          <div className={styles.finalPhoto}><div className={styles.finalWords}>Planeje<br />Lidere<br />Organize<br /><b>Transforme</b></div><Image src="/images/jamilla-cream.webp" alt="Jamilla Salviano" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerGrid}`}>
          <div><div className={styles.footerBrand}>GPS <b>5.0</b></div><p>Formação em gestão escolar e liderança.</p></div>
          <nav>{[
            ['Início', '#inicio'],
            ['Método', '#metodo'],
            ['Benefícios', '#beneficios'],
            ['Depoimentos', '#depoimentos'],
            ['Dúvidas', '#faq'],
            ['Contato', '/contato'],
          ].map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
          <div><p>Jamilla Salviano</p><span>Instagram</span><span>LinkedIn</span></div>
        </div>
        <div className={`${styles.wrap} ${styles.footerBottom}`}><span>© 2026 Jamilla Salviano. Todos os direitos reservados.</span><span>Política de Privacidade &nbsp; • &nbsp; Termos de Uso</span></div>
        <FooterAgencyCredit className={styles.wrap} />
      </footer>
      <PremiumCta />
    </main>
  );
}
