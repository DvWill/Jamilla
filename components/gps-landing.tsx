import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Check, ChevronDown, ClipboardList, FileDown, GraduationCap, HeartHandshake, LayoutTemplate, Sparkles, UsersRound } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';
import { GPSMethodSection } from './gps-method-section';
import { TestimonialsCarousel } from './testimonials-carousel';
import { PremiumCta } from './premium-cta';
import { FooterAgencyCredit } from './footer-agency-credit';
import styles from './gps-landing.module.css';

type CourseModuleProps = { number: string; image: string; title: string; objective: string; lessons: string[]; materials: string[]; theme: 'light' | 'dark' };

const audience = [
  ['Diretores e diretoras', 'Para quem quer conduzir a escola com mais intencionalidade.'],
  ['Coordenadores', 'Para quem transforma o pedagógico em direção compartilhada.'],
  ['Equipes gestoras', 'Para líderes que desejam alinhar pessoas, processos e prioridades.'],
  ['Instituições de ensino', 'Para escolas que investem em uma cultura de gestão consistente.'],
  ['Profissionais da educação', 'Para quem influencia pessoas e quer ampliar sua atuação.'],
  ['Gestores em formação', 'Para quem está construindo uma base sólida para liderar.'],
];

const modules: CourseModuleProps[] = [
  { number: '01', image: '/images/gps-modulo-1-editorial.png', title: 'Fundamentos da liderança de alto impacto', objective: 'Reprogramar a mentalidade do gestor para uma liderança autêntica, confiante e respeitada.', lessons: ['O que é liderança?', 'Identidade e posicionamento: quem você precisa ser para liderar com autoridade', 'Destrave sua mentalidade de líder', 'Principais medos de um líder escolar e como superá-los', 'Perfis comportamentais: teste DISC', 'Perfis de liderança', 'O novo perfil do líder escolar no século XXI', 'Método GPS 5.0: os 5 pilares da liderança transformadora'], materials: ['PDF: Checklist dos 5 pilares da liderança', 'Roteiro de autoconhecimento: “Descubra seu perfil de liderança”', 'Mapa de posicionamento estratégico'], theme: 'light' },
  { number: '02', image: '/images/gps-modulo-2-editorial.png', title: 'Equilíbrio emocional e saúde do líder', objective: 'Cuidar do líder para que ele sustente sua missão com saúde e longevidade.', lessons: ['Competências e habilidades necessárias para ser um gestor escolar de sucesso', 'A Síndrome da Exaustão no gestor: sinais, causas e soluções', 'Inteligência emocional para liderar com equilíbrio: saúde emocional', 'Autocuidado real para quem vive sob pressão', 'Seja um líder motivado', 'Roda da Vida', 'Torne-se autorresponsável'], materials: ['Guia: Rotina de autocuidado do líder', 'Checklist: Como blindar sua saúde emocional no dia a dia escolar', 'Exercício em áudio: Meditação guiada para diretores'], theme: 'dark' },
  { number: '03', image: '/images/gps-modulo-3-editorial.png', title: 'Gestão de equipe e clima escolar', objective: 'Ensinar o diretor a formar e manter uma equipe colaborativa, alinhada e produtiva.', lessons: ['O que destrói (e o que fortalece) uma equipe', 'Como delegar com estratégia e confiança (perfil da equipe)', 'Comunicação que resolve conflitos sem desgastar relacionamentos', 'Ferramentas de comunicação para gestores escolares', 'Engajamento real: técnicas práticas para motivar e alinhar a equipe', 'Feedback: a ferramenta mais poderosa de liderança', 'Anatomia do feedback', 'PDI', 'Fofocas, resistência e desmotivação: o que fazer?', 'Dinâmicas para motivação da equipe'], materials: ['Planilha de diagnóstico do clima escolar', 'Modelos prontos de scripts para feedbacks construtivos'], theme: 'light' },
  { number: '04', image: '/images/gps-modulo-4-editorial.png', title: 'Planejamento estratégico escolar', objective: 'Capacitar o gestor para construir e executar planos com metas claras, foco e visão de resultados.', lessons: ['A importância da visão estratégica na gestão escolar', 'Guia prático: Como fazer reuniões eficazes', 'Agenda do gestor escolar estratégico', 'Mapa de ações estratégicas para cada dimensão', 'Do PPP ao plano de ação: como organizar o ano letivo com inteligência', 'Embasamento na gestão escolar (legislação)', 'Como elaborar o manual do professor e da família', 'Inteligência artificial na gestão escolar'], materials: ['Modelo de planejamento estratégico escolar editável (cronograma pedagógico)', 'Template de painel de metas e resultados (método Kanban)', 'Agenda de acompanhamento semanal da equipe', 'Modelo de Guia da família', 'Modelo de Manual de conduta do professor'], theme: 'dark' },
  { number: '05', image: '/images/gps-modulo-5-editorial.png', title: 'Altas expectativas com suporte', objective: 'Ensinar a gerar impacto real e mensurável na aprendizagem, na gestão e na comunidade.', lessons: ['Cultura de resultados: como implantar sem virar um gestor cobrador', 'Metodologias práticas para melhorar os índices da escola', 'Indicadores que importam: como medir o que realmente conta', 'Projetos que conectam a escola à comunidade (60 ideias de projetos)', 'Ferramentas Ciclo PDCA e 5W2H para gestão de projetos', 'Como priorizar ações mesmo em meio ao caos', 'Ferramentas de produtividade', 'Formação continuada na escola: como fazer e ter sucesso', 'Mediação de conflitos'], materials: ['Modelo de relatório de impacto escolar', 'Roteiro de plano de ação para melhoria do IDEB', 'Banco de ideias de projetos escolares com alto engajamento'], theme: 'light' },
];

const faq = [
  {
    question: 'Como funciona o acesso ao curso?',
    answer: 'Após a confirmação da inscrição, você receberá as orientações de acesso à plataforma pelo e-mail cadastrado. Lá estarão disponíveis as aulas, os materiais complementares e demais conteúdos previstos no programa.',
  },
  {
    question: 'Recebo certificado?',
    answer: `${SITE_CONFIG.certificateLabel} A disponibilidade e o formato devem ser confirmados na inscrição.`,
  },
  {
    question: 'Os materiais são editáveis?',
    answer: 'Alguns materiais são disponibilizados para aplicação prática e podem ser preenchidos ou adaptados conforme a proposta de cada ferramenta. Os formatos disponíveis estarão indicados dentro da plataforma.',
  },
  {
    question: 'Por quanto tempo terei acesso?',
    answer: 'Você terá acesso por 1 ano. Durante esse prazo, poderá acessar as aulas e os materiais disponíveis quantas vezes precisar.',
  },
  {
    question: 'E se eu tiver dúvidas durante o curso?',
    answer: SITE_CONFIG.supportLabel,
  },
  {
    question: 'Posso comprar para a minha equipe?',
    answer: 'Sim. Também trabalhamos com inscrições para equipes e formações destinadas a escolas, Secretarias de Educação e redes de ensino. Para condições institucionais, aquisição de múltiplos acessos ou de um pacote completo para a equipe, entre em contato com nossa equipe.',
  },
];

export function CourseModule({ number, image, title, objective, lessons, materials }: CourseModuleProps) {
  return <article className={styles.module}>
    <div className={styles.moduleImage}><Image src={image} alt={`Módulo ${number}: ${title}`} fill sizes="(max-width: 900px) 100vw, 31vw" /></div>
    <div className={styles.moduleContent}><p className={styles.moduleNumber}>Módulo {number}</p><h3>{title}</h3><p className={styles.moduleObjective}>{objective}</p><div className={styles.lessonLabel}><ClipboardList size={17} /> Conteúdos</div><ul className={styles.lessons}>{lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul></div>
    <aside className={styles.materials}><div className={styles.lessonLabel}><FileDown size={17} /> Materiais</div><ul>{materials.map((material) => <li key={material}><FileDown size={15} />{material}</li>)}</ul></aside>
  </article>;
}

function GPSHeader() {
  return <header className={styles.gpsHeader}>
    <Link className={styles.gpsBrand} href="/gps-5-0" aria-label="GPS — início"><span>GPS</span><small>Método GPS da Liderança Escolar</small></Link>
    <nav aria-label="Navegação do GPS"><a href="#metodo">Método</a><a href="#formacao">Formação</a><a href="#beneficios">O que você recebe</a><a href="#faq">Dúvidas</a></nav>
    <Link href="/contato" className={styles.gpsHeaderCta}>Falar com a equipe <ArrowRight size={16} /></Link>
  </header>;
}

export function GPSLanding() {
  return <div className={styles.page}>
    <GPSHeader />
    <main>
      <section id="inicio" className={styles.hero}>
        <div className={styles.heroLines} aria-hidden="true" />
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}><p className={styles.eyebrow}>Método GPS da Liderança Escolar</p><h1>Torne-se a liderança que inspira respeito, exerce influência e <em>gera resultados — sem perder a humanidade.</em></h1><p className={styles.heroLead}>Uma formação para gestores cansados de apenas apagar incêndios e que querem liderar com mais clareza, método, firmeza e segurança.</p><div className={styles.heroActions}><Link href="#inscricao" className={styles.button}>Conhecer a formação <ArrowRight size={18} /></Link><Link href="#metodo" className={styles.videoButton}>Ver como funciona <ArrowRight size={18} /></Link></div><ul className={styles.heroProof}>{['Conteúdo prático e aplicável', 'Mentorias mensais', 'Livros digitais da Jamilla', 'Comunidade de gestores'].map(item => <li key={item}><Check size={16} />{item}</li>)}</ul></div>
          <div className={styles.heroVisual}><div className={styles.heroTags}><span>Gestão</span><span>Liderança</span><span>Estratégia</span><span>Resultados</span></div><div className={styles.heroImage}><Image priority src="/images/jamilla-gps-hero.png" alt="Jamilla Salviano" fill sizes="(max-width: 900px) 90vw, 43vw" /></div><p className={styles.heroSignature}>Jamilla<br /><strong>Salviano</strong></p></div>
        </div>
      </section>

      <section id="video" className={`${styles.section} ${styles.video}`}><div className={`${styles.wrap} ${styles.videoGrid}`}><div className={styles.videoFrame}><video className={styles.videoMedia} controls autoPlay muted playsInline preload="metadata" aria-label="Torne-se um líder extraordinário"><source src="/videos/lider-extraordinario.mp4" type="video/mp4" />Seu navegador não suporta a reprodução de vídeo.</video></div><div><p className={styles.eyebrowDark}>Uma conversa sobre propósito</p><h2>Mais do que um curso,<br />uma <em>transformação real.</em></h2><p>O GPS 5.0 é um convite para olhar para a sua prática, reconhecer prioridades e construir uma direção possível para a sua escola e para sua equipe.</p><div className={styles.signature}>Jamilla Salviano <span>Educadora e mentora de líderes</span></div></div></div></section>

      <section id="sobre" className={`${styles.section} ${styles.about}`}><div className={`${styles.wrap} ${styles.aboutGrid}`}><div className={styles.aboutVisual}><div className={styles.mockupLaptop}><Image src="/images/gps-device-module-5.png" alt="GPS 5.0 no computador, tablet e celular" fill sizes="(max-width: 760px) 80vw, 40vw" /></div></div><div className={styles.aboutCopy}><p className={styles.eyebrowDark}>Aulas bônus</p><h2>Ao acessar o curso<br /><em>Liderança Escolar<br />Transformadora...</em></h2><p>Você terá acesso às aulas bônus que vão te ajudar a projetar o próximo nível da sua carreira com autoridade e propósito.</p><div className={styles.bonusPanel}><h3>Aulas Bônus</h3><ul>{['Construindo sua autoridade como gestor referência', 'Do gestor ao mentor: novas oportunidades e caminhos na educação', 'Oratória', 'Processo seletivo: como ser aprovado?'].map(item => <li key={item}><Check size={16} />{item}</li>)}</ul></div></div></div></section>

      <section className={`${styles.section} ${styles.mentorBonus}`}><div className={`${styles.wrap} ${styles.mentorBonusGrid}`}><div className={styles.mentorBonusImage}><Image src="/images/jamilla-bonus-seal.png" alt="Material complementar do Método GPS" fill sizes="(max-width: 760px) 100vw, 38vw" /></div><div className={styles.mentorBonusCopy}><p className={styles.eyebrowDark}>Acompanhamento e comunidade</p><h2>Você não precisa liderar <em>sozinho.</em></h2><p>O GPS combina formação, mentorias mensais e uma comunidade de gestores para discutir situações reais, trocar experiências e receber direcionamento prático.</p><p>Também estão previstos livros digitais da Jamilla sobre liderança, conflitos, feedback, comportamento, formação continuada e gestão escolar.</p><p><strong>As condições de suporte, calendário das mentorias e materiais disponíveis devem ser confirmados na inscrição.</strong></p><Link href="/contato" className={styles.button}>Quero entender como funciona <ArrowRight size={18} /></Link></div></div></section>

      <section id="dores" className={`${styles.section} ${styles.gpsPainPoints}`}><div className={styles.wrap}><p className={styles.eyebrowDark}>Quando liderar pesa</p><div className={styles.audienceHeader}><h2>Você não precisa continuar <em>apagando incêndios.</em></h2><p>O GPS acolhe dores concretas da gestão: sobrecarga, dificuldade de cobrar e delegar, conversas difíceis, fofocas, conflitos, reuniões improdutivas, famílias exigentes e a solidão das decisões.</p></div><div className={styles.audienceGrid}>{['Reagir a tudo, sem tempo para pensar', 'Cobrar e delegar com culpa', 'Lidar com resistência e conflitos internos', 'Perder autoridade tentando agradar', 'Tomar decisões difíceis sozinho', 'Sentir o peso emocional da gestão'].map((item, index) => <article key={item}><span>0{index + 1}</span><UsersRound size={21} /><h3>{item}</h3><p>Um desafio que pode ser trabalhado com mais clareza, repertório e método.</p></article>)}</div></div></section>

      <div id="metodo"><GPSMethodSection /></div>

      <section className={`${styles.section} ${styles.audience}`}><div className={styles.wrap}><p className={styles.eyebrow}>Para quem é</p><div className={styles.audienceHeader}><h2>Se você vive estes desafios,<br />o GPS 5.0 é para você.</h2><p>Uma formação para quem acredita que a liderança escolar pode ser mais clara, humana e estratégica.</p></div><div className={styles.audienceGrid}>{audience.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><UsersRound size={21} /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section id="formacao" className={`${styles.section} ${styles.modules}`}><div className={styles.wrap}><div className={styles.modulesIntro}><div><p className={styles.eyebrowDark}>A formação</p><h2>O caminho para uma<br /><em>gestão que transforma.</em></h2></div><p>Cinco módulos para organizar sua liderança, conduzir melhor a equipe, dar feedback, delegar com segurança, proteger o tempo pedagógico e transformar reuniões em direção e resultado.</p></div><div className={styles.moduleList}>{modules.map(module => <CourseModule key={module.number} {...module} />)}</div></div></section>

      <section id="beneficios" className={styles.benefits}><div className={styles.wrap}>{[[GraduationCap, 'Formação em liderança escolar'], [LayoutTemplate, 'Mentorias mensais com situações reais'], [Award, 'Livros digitais da Jamilla'], [Sparkles, 'Comunidade com gestores'], [HeartHandshake, SITE_CONFIG.supportLabel]].map(([Icon, text]) => { const BenefitIcon = Icon as typeof Award; return <div key={text as string}><BenefitIcon size={23} /><span>{text as string}</span></div> })}</div></section>

      <section id="inscricao" className={styles.conversion}><div className={`${styles.wrap} ${styles.conversionGrid}`}><div><p className={styles.eyebrow}>Sua jornada começa aqui</p><h2>Chegou a hora de <em>transformar</em><br />a sua gestão escolar.</h2><p>Escolha liderar com método, intenção e clareza — começando pelo próximo passo.</p></div><div className={styles.conversionBox}><Link href="/contato" className={styles.button}>Quero fazer parte agora <ArrowRight size={18} /></Link><div><span>Pagamento seguro</span><span>Acesso imediato</span><span>Informações pelo contato</span></div></div></div></section>

      <section id="depoimentos" className={`${styles.section} ${styles.testimonials}`}><div className={styles.wrap}><div className={styles.testimonialsHeader}><div><p className={styles.eyebrowDark}>Depoimentos</p><h2>Histórias reais.<br /><em>Resultados reais.</em></h2></div><p>Experiências de quem está transformando a rotina escolar com mais clareza, método e direção.</p></div><TestimonialsCarousel /></div></section>

      <section id="faq" className={`${styles.section} ${styles.faq}`}><div className={`${styles.wrap} ${styles.faqGrid}`}><div><p className={styles.eyebrowDark}>FAQ</p><h2>Ainda tem<br /><em>alguma dúvida?</em></h2><p>As informações da sua inscrição podem ser confirmadas diretamente pelo nosso contato.</p><Link href="/contato" className={styles.textLink}>Falar com a equipe <ArrowRight size={17} /></Link></div><div className={styles.faqList}>{faq.map(({ question, answer }) => <details key={question}><summary>{question}<ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div></div></section>

      <section className={styles.finalCta}><div className={`${styles.wrap} ${styles.finalGrid}`}><div><p className={styles.eyebrow}>GPS 5.0</p><h2>Sua próxima fase<br />na gestão escolar<br />pode começar <em>hoje.</em></h2><p>O GPS 5.0 vai te guiar com método, clareza e prática para uma gestão mais humana e eficiente.</p><Link href="#inscricao" className={styles.button}>Quero me inscrever agora <ArrowRight size={18} /></Link></div><div className={styles.finalPhoto}><div className={styles.finalWords}>Planeje<br />Lidere<br />Organize<br /><b>Transforme</b></div><Image src="/images/jamilla-cream.webp" alt="Jamilla Salviano" fill sizes="(max-width: 900px) 100vw, 45vw" /></div></div></section>
    </main>
    <footer className={styles.footer}><div className={`${styles.wrap} ${styles.footerGrid}`}><div><div className={styles.footerBrand}>GPS <b>5.0</b></div><p>Formação em gestão escolar e liderança.</p></div><nav>{[['Início', '#inicio'], ['Sobre', '#sobre'], ['Módulos', '#modulos'], ['Depoimentos', '#depoimentos'], ['FAQ', '#faq'], ['Contato', '/contato']].map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav><div><p>Jamilla Salviano</p><span>Instagram</span><span>LinkedIn</span></div></div><div className={`${styles.wrap} ${styles.footerBottom}`}><span>© 2026 Jamilla Salviano. Todos os direitos reservados.</span><span>Política de Privacidade &nbsp; • &nbsp; Termos de Uso</span></div><FooterAgencyCredit className={styles.wrap} /></footer>
    <PremiumCta />
  </div>;
}
