'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight, Check, Pencil, RotateCcw, X } from 'lucide-react';
import styles from './page.module.css';
import { WHATSAPP_URL } from './whatsapp';

const interestOptions = [
  'Trilha da Liderança',
  'Experiência RESET',
  'Palestras',
  'Mini Curso ATA Inteligente',
  'Outro',
  'Ainda não sei qual é a melhor opção',
] as const;

type Interest = (typeof interestOptions)[number];
type Answers = {
  name: string;
  email: string;
  whatsapp: string;
  institution: string;
  role: string;
  city: string;
  interests: Interest[];
  otherInterest: string;
  message: string;
};

const initialAnswers: Answers = {
  name: '', email: '', whatsapp: '', institution: '', role: '', city: '',
  interests: [], otherInterest: '', message: '',
};

const questions = [
  { key: 'name', prompt: 'Para começar, como podemos chamar você?', label: 'Nome', placeholder: 'Seu nome' },
  { key: 'email', prompt: 'Prazer, {name}! Qual é o seu melhor e-mail?', label: 'E-mail', placeholder: 'seu@email.com' },
  { key: 'whatsapp', prompt: 'E qual número de WhatsApp podemos usar para falar com você?', label: 'WhatsApp', placeholder: '(00) 00000-0000' },
  { key: 'institution', prompt: 'Você faz parte de qual escola, empresa ou instituição?', label: 'Instituição', placeholder: 'Escola, empresa ou instituição' },
  { key: 'role', prompt: 'Qual é o seu cargo ou função?', label: 'Cargo ou função', placeholder: 'Seu cargo ou função' },
  { key: 'city', prompt: 'Em qual cidade você está?', label: 'Cidade', placeholder: 'Sua cidade' },
  { key: 'interests', prompt: 'Sobre qual experiência você gostaria de conversar?', label: 'Interesses' },
  { key: 'message', prompt: 'Para finalizar, conte um pouco sobre o momento da sua equipe, escola ou instituição. O que você gostaria de melhorar ou resolver?', label: 'Mensagem', placeholder: 'Escreva livremente (opcional)' },
] as const;

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function phoneIsValid(value: string) {
  const digits = value.replace(/\D/g, '');
  return digits.length === 10 || digits.length === 11;
}

function emailIsValid(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

function answerLabel(answer: Answers, key: (typeof questions)[number]['key']) {
  if (key === 'interests') {
    const selected = answer.interests.join(', ');
    return answer.interests.includes('Outro') && answer.otherInterest.trim()
      ? `${selected} — ${answer.otherInterest.trim()}`
      : selected;
  }
  return answer[key];
}

function questionText(prompt: string, name: string) {
  return prompt.replace('{name}', name || 'você');
}

export function ContactForm({ global = false }: { global?: boolean }) {
  const [started, setStarted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [error, setError] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const historyRef = useRef<HTMLDivElement>(null);
  const current = questions[step];

  useEffect(() => {
    if (window.location.search.includes('chat=open')) {
      setIsOpen(true);
      setStarted(true);
    }
  }, []);

  useEffect(() => {
    if (!global) return;
    const openChat = () => {
      setIsOpen(true);
      setStarted(true);
    };
    window.addEventListener('jamilla:open-chat', openChat);
    return () => window.removeEventListener('jamilla:open-chat', openChat);
  }, [global]);

  useEffect(() => {
    const history = historyRef.current;
    if (history) history.scrollTo({ top: history.scrollHeight, behavior: 'smooth' });
  }, [step, started, showSummary]);

  function updateAnswer<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((previous) => ({ ...previous, [key]: value }));
    setError('');
  }

  function validateCurrent() {
    if (current.key === 'name' && !answers.name.trim()) return 'Digite seu nome para continuar.';
    if (current.key === 'email' && !emailIsValid(answers.email)) return 'Digite um e-mail válido, como seu@email.com.';
    if (current.key === 'whatsapp' && !phoneIsValid(answers.whatsapp)) return 'Digite um WhatsApp brasileiro válido com DDD.';
    if (current.key === 'institution' && !answers.institution.trim()) return 'Digite o nome da instituição.';
    if (current.key === 'role' && !answers.role.trim()) return 'Digite seu cargo ou função.';
    if (current.key === 'city' && !answers.city.trim()) return 'Digite sua cidade.';
    if (current.key === 'interests' && answers.interests.length === 0) return 'Selecione pelo menos uma opção.';
    if (current.key === 'interests' && answers.interests.includes('Outro') && !answers.otherInterest.trim()) return 'Conte qual outra experiência você procura.';
    return '';
  }

  function handleNext(event?: { preventDefault: () => void }) {
    event?.preventDefault();
    const validationError = validateCurrent();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    if (step === questions.length - 1) {
      setShowSummary(true);
      return;
    }
    setStep((previous) => previous + 1);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleNext();
    }
  }

  function toggleInterest(interest: Interest) {
    setAnswers((previous) => ({
      ...previous,
      interests: previous.interests.includes(interest)
        ? previous.interests.filter((item) => item !== interest)
        : [...previous.interests, interest],
    }));
    setError('');
  }

  function begin() {
    setIsOpen(true);
    if (!started) {
      setStarted(true);
      setStep(0);
    }
  }

  function editStep(index: number) {
    setShowSummary(false);
    setStarted(true);
    setStep(index);
    setError('');
  }

  function buildMessage() {
    const interests = answers.interests
      .map((interest) => interest === 'Outro' && answers.otherInterest.trim() ? `Outro: ${answers.otherInterest.trim()}` : interest)
      .join('\n');
    return [
      'Olá, Jamilla! Vim pelo seu site e gostaria de entrar em contato.', '',
      '*MEUS DADOS*',
      `Nome: ${answers.name.trim()}`,
      `E-mail: ${answers.email.trim()}`,
      `WhatsApp: ${answers.whatsapp.trim()}`,
      `Instituição: ${answers.institution.trim()}`,
      `Cargo/Função: ${answers.role.trim()}`,
      `Cidade: ${answers.city.trim()}`, '',
      '*TENHO INTERESSE EM*', interests, '',
      '*MINHA MENSAGEM*', answers.message.trim() || 'Não informada', '',
      'Aguardo seu retorno!',
    ].join('\n');
  }

  function openWhatsApp() {
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(buildMessage())}`, '_blank', 'noopener,noreferrer');
  }

  if (global && !isOpen) return null;

  return (
    <>
      {!isOpen ? (
        <section className={styles.chatLauncher} aria-label="Abrir conversa com a equipe da Jamilla">
          <header className={styles.chatHeader}>
            <div>
              <span className={styles.chatEyebrow}>Atendimento</span>
              <h2>Converse com a equipe da Jamilla</h2>
              <p>Vamos entender o que você precisa, uma pergunta de cada vez.</p>
            </div>
          </header>
          <div className={styles.chatLauncherBody}>
            <div className={styles.teamBubble}>Olá! 👋 Que bom ter você por aqui. Vou fazer algumas perguntas rápidas para entender como podemos ajudar.</div>
            <button className={styles.primaryAction} type="button" onClick={begin}>{started ? 'CONTINUAR CONVERSA' : 'VAMOS COMEÇAR'} <ArrowRight size={17} aria-hidden="true" /></button>
          </div>
        </section>
      ) : (
        <div className={styles.chatOverlay} role="presentation">
          <section className={styles.chatCard} role="dialog" aria-modal="true" aria-label="Conversa com a equipe da Jamilla">
            <button className={styles.chatClose} type="button" onClick={() => setIsOpen(false)} aria-label="Fechar conversa"><X size={18} /></button>
      <header className={styles.chatHeader}>
        <div>
          <span className={styles.chatEyebrow}>Atendimento</span>
          <h2>Converse com a equipe da Jamilla</h2>
          <p>Vamos entender o que você precisa, uma pergunta de cada vez.</p>
        </div>
        {started && !showSummary ? <span className={styles.chatProgress}>Etapa {step + 1} de 8</span> : null}
      </header>

      {!started ? (
        <div className={styles.chatWelcome}>
          <div className={styles.teamBubble}>Olá! 👋 Que bom ter você por aqui. Vou fazer algumas perguntas rápidas para entender como podemos ajudar. Podemos começar?</div>
          <button className={styles.primaryAction} type="button" onClick={begin}>VAMOS COMEÇAR <ArrowRight size={17} aria-hidden="true" /></button>
        </div>
      ) : showSummary ? (
        <div className={styles.summaryPanel}>
          <div className={styles.teamBubble}>Perfeito, {answers.name || 'você'}! Já temos as informações necessárias para iniciar nossa conversa. Confira seus dados antes de continuar.</div>
          <div className={styles.summaryList}>
            {questions.map((question, index) => (
              <div className={styles.summaryRow} key={question.key}>
                <div><small>{question.label}</small><strong>{answerLabel(answers, question.key) || 'Não informada'}</strong></div>
                <button type="button" onClick={() => editStep(index)} aria-label={`Editar ${question.label}`}><Pencil size={14} /> Editar</button>
              </div>
            ))}
          </div>
          <button className={styles.primaryAction} type="button" onClick={openWhatsApp}>ENTRAR EM CONTATO <ArrowRight size={17} aria-hidden="true" /></button>
          <button className={styles.secondaryAction} type="button" onClick={() => editStep(0)}><RotateCcw size={15} aria-hidden="true" /> EDITAR RESPOSTAS</button>
        </div>
      ) : (
        <>
          <div className={styles.chatHistory} ref={historyRef} role="log" aria-live="polite" aria-label="Histórico da conversa">
            {questions.slice(0, step).map((question) => (
              <div className={styles.messageGroup} key={question.key}>
                <div className={styles.teamBubble}>{questionText(question.prompt, answers.name)}</div>
                <div className={styles.visitorBubble}>{answerLabel(answers, question.key)}</div>
              </div>
            ))}
            <div className={styles.messageGroup}><div className={styles.teamBubble}>{questionText(current.prompt, answers.name)}</div></div>
          </div>

          <form className={styles.chatComposer} onSubmit={handleNext}>
            {current.key === 'interests' ? (
              <fieldset className={styles.optionField}>
                <legend>Selecione uma ou mais opções</legend>
                <div className={styles.optionGrid}>
                  {interestOptions.map((interest) => {
                    const selected = answers.interests.includes(interest);
                    return <button className={`${styles.option} ${selected ? styles.optionSelected : ''}`} type="button" key={interest} aria-pressed={selected} onClick={() => toggleInterest(interest)}><span>{selected ? <Check size={15} /> : null}</span>{interest}</button>;
                  })}
                </div>
                {answers.interests.includes('Outro') ? <input className={styles.chatInput} value={answers.otherInterest} onChange={(event) => updateAnswer('otherInterest', event.target.value)} onBlur={() => setError(validateCurrent())} placeholder="Qual outra experiência?" aria-label="Especifique outro interesse" /> : null}
              </fieldset>
            ) : current.key === 'message' ? (
              <label className={styles.chatField}><span>{current.label}<small>Opcional</small></span><textarea className={styles.chatTextarea} value={answers.message} onChange={(event) => updateAnswer('message', event.target.value)} placeholder={current.placeholder} rows={4} /></label>
            ) : (
              <label className={styles.chatField}><span>{current.label}</span><input className={styles.chatInput} value={current.key === 'whatsapp' ? answers.whatsapp : answers[current.key]} onChange={(event) => updateAnswer(current.key, current.key === 'whatsapp' ? formatPhone(event.target.value) : event.target.value)} onBlur={() => setError(validateCurrent())} onKeyDown={handleKeyDown} placeholder={current.placeholder} type={current.key === 'email' ? 'email' : 'text'} aria-invalid={Boolean(error)} aria-describedby={error ? 'chat-error' : undefined} /></label>
            )}
            {error ? <p className={styles.chatError} id="chat-error" role="alert">{error}</p> : null}
            <div className={styles.chatActions}>
              <button className={styles.backAction} type="button" onClick={() => { setError(''); setStep((previous) => Math.max(0, previous - 1)); }} disabled={step === 0}><ArrowLeft size={16} /> Voltar</button>
              <button className={styles.primaryAction} type="submit" disabled={Boolean(validateCurrent())}>{step === questions.length - 1 ? 'REVISAR RESPOSTAS' : 'CONTINUAR'} <ArrowRight size={17} aria-hidden="true" /></button>
            </div>
          </form>
        </>
      )}
          </section>
        </div>
      )}
    </>
  );
}
