'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from './scroll-reveal';

type LibraryBook = {
  number: string;
  shortTitle: string;
  category: string;
  title: string;
  description: string;
  image: string;
  position: number;
  featured?: boolean;
};

type JamillaLibraryBooksProps = {
  books: LibraryBook[];
};

/**
 * Keeps the mobile selected state separate from the desktop hover treatment.
 * The composition itself remains entirely CSS driven, so switching quickly
 * between books simply interpolates the two transforms.
 */
export function JamillaLibraryBooks({ books }: JamillaLibraryBooksProps) {
  const [activeBook, setActiveBook] = useState<number | null>(null);
  const [displayedBook, setDisplayedBook] = useState<LibraryBook | null>(null);
  const [isChanging, setIsChanging] = useState(false);
  const [isPanelClosing, setIsPanelClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contentTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showBook = (index: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
    if (activeBook === index) return;

    setIsPanelClosing(false);
    setActiveBook(index);
    if (!displayedBook) {
      setDisplayedBook(books[index]);
      return;
    }

    setIsChanging(true);
    if (contentTimer.current) clearTimeout(contentTimer.current);
    contentTimer.current = setTimeout(() => {
      setDisplayedBook(books[index]);
      setIsChanging(false);
      contentTimer.current = null;
    }, 150);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsPanelClosing(true);
    closeTimer.current = setTimeout(() => {
      setActiveBook(null);
      setDisplayedBook(null);
      setIsChanging(false);
      setIsPanelClosing(false);
      closeTimer.current = null;
    }, 200);
  };

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (contentTimer.current) clearTimeout(contentTimer.current);
  }, []);

  return (
    <div
      className={`jamilla-library__collection${activeBook !== null ? ' has-active-book' : ''}`}
      onMouseLeave={scheduleClose}
      onMouseEnter={() => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = null;
        setIsPanelClosing(false);
      }}
    >
      <div className="jamilla-library__books" aria-label="Livros e materiais de Jamilla Salviano">
        {books.map((book, index) => {
        const isActive = activeBook === index;

        return (
          <ScrollReveal
            className={`jamilla-library__book jamilla-library__book--${book.position}${book.featured ? ' is-featured' : ''}${isActive ? ' is-active' : ''}`}
            delay={index * 60 + (book.featured ? 80 : 0)}
            key={book.title}
          >
            <button
              type="button"
              className="jamilla-library__book-control"
              aria-pressed={isActive}
              aria-label={`Conhecer ${book.title}`}
              onMouseEnter={() => showBook(index)}
              onFocus={() => showBook(index)}
              onClick={() => showBook(index)}
            >
              <figure className="jamilla-library__book-frame">
                <Image
                  src={book.image}
                  alt={`Capa do livro ${book.title}, de Jamilla Salviano`}
                  width={720}
                  height={960}
                  sizes="(max-width: 680px) 68vw, (max-width: 1120px) 18vw, 190px"
                />
                <span className="jamilla-library__book-action" aria-hidden="true">
                  Conhecer o livro
                </span>
              </figure>
            </button>
          </ScrollReveal>
        );
      })}
      </div>
      <div className="jamilla-library__info-slot" aria-live="polite">
        {displayedBook && (
          <aside className={`jamilla-library__info-panel${isPanelClosing ? ' is-closing' : ''}`} aria-label={`Detalhes: ${displayedBook.title}`}>
            <div className={`jamilla-library__info-content${isChanging ? ' is-changing' : ''}`}>
              <p className="jamilla-library__info-meta">E-book {displayedBook.number}</p>
              <p className="jamilla-library__info-category">{displayedBook.category}</p>
              <h3>{displayedBook.title}</h3>
              <p className="jamilla-library__info-description">{displayedBook.description}</p>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
