'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import './psychologist-styles.css';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Create scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    // Handle scroll progress
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      scrollIndicator.style.width = `${progress}%`;

      // Add animation to sections when they come into view
      sectionRefs.current.forEach(section => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          section.classList.add('animate-in');
        }
      });
    };

    // Add sparkle effect to emoji
    const addSparkleToEmojis = () => {
      document.querySelectorAll('h2').forEach(heading => {
        const text = heading.innerHTML;
        if (text.match(/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/u)) {
          const parts = text.split(/(<[^>]*>|[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}])/u);
          const newText = parts.map((part, i) => {
            if (part.match(/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/u)) {
              return `<span class="emoji-sparkle">${part}</span>`;
            }
            return part;
          }).join('');
          heading.innerHTML = newText;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    // Apply animations with a delay
    setTimeout(() => {
      addSparkleToEmojis();
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollIndicator.parentNode) {
        document.body.removeChild(scrollIndicator);
      }
    };
  }, []);

  // Add section to refs for animation
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="container">
      <header>
        <h1><span className="animated-brain">🧠</span> Психолог для тревожных людей</h1>
        <p>
          <strong>Узнаешь себя?</strong>
        </p>
        <ul className="header-list">
          <li>Часто тревожишься и переживаешь обо всём</li>
          <li>С утра начинается поток беспокойных мыслей</li>
          <li>Внутри ощущение беспомощности и трудно остановиться</li>
        </ul>
        <p>
          <strong>Я сама знаю, каково это — жить с тревогой.</strong> Поэтому мне важно не только давать работающие инструменты, но и создавать тёплое, безопасное пространство, где можно быть собой, расслабиться и почувствовать опору.
        </p>
        <Link href="https://t.me/psyrebt" target="_blank" className="btn">
          Записаться
        </Link>
      </header>

      <section className="section two-col" ref={addToRefs}>
        <div>
          <h2>👩‍⚕️ Кто я</h2>
          <div className="photo-container">
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <Image 
              src="/images/psychologist/photo.jpg" 
              alt="Психолог Анастасия" 
              width={300}
              height={300}
              className="profile-photo"
              priority
            />
          </div>
          <p>
            Я — Анастасия, психолог в РЭПТ и КПТ подходах. Работаю с теми, кто устал тревожиться, быть &quot;идеальной&quot; и постоянно испытывать стресс.
          </p>
          <p>
            Моя задача — помочь тебе научиться быть в контакте с собой, с уважением и без самокритики.
          </p>
        </div>
        <div className="box">
          <h3>💡 Мой стиль:</h3>
          <ul>
            <li>Структура и конкретика</li>
            <li>Юмор, но по делу</li>
            <li>Глубина + конкретные шаги</li>
            <li>Забота и внимание к деталям</li>
          </ul>
        </div>
      </section>

      <section className="section" ref={addToRefs}>
        <h2>📋 С чем я работаю</h2>
        <div className="two-col">
          <ul>
            <li>Повышенная тревожность и ОКР</li>
            <li>Панические атаки и ВСД</li>
            <li>Прокрастинация и самосаботаж</li>
            <li>Выгорание, усталость, бессилие</li>
          </ul>
          <ul>
            <li>Непринятие внешности, перфекционизм</li>
            <li>Страх быть &quot;не такой&quot;</li>
            <li>Сложности в отношениях, обсессии</li>
            <li>Одиночество, социальная тревога</li>
          </ul>
        </div>
      </section>

      <section className="section box" ref={addToRefs}>
        <h2>💬 Как проходят сессии</h2>
        <ul>
          <li>Онлайн в Google Meet, 45 минут</li>
          <li>Стоимость: 40 EUR</li>
          <li>Можно начать в течение недели (в зависимости от загруженности)</li>
          <li>Сессии проходят 1 раз в неделю</li>
          <li>Домашние задания и работа между встречами — как часть процесса</li>
        </ul>
        <h3 style={{ marginTop: '24px' }}>Почему именно я:</h3>
        <ul>
          <li>💬 Говорю на простом языке — без воды и эзотерики</li>
          <li><span className="animated-brain">🧠</span> Даю конкретные техники, основанные на доказательной психологии</li>
          <li>🤝 С теплом, но не размазываем сопли — поддержу и подскажу, как двигаться</li>
        </ul>
      </section>

      <section className="section" ref={addToRefs}>
        <h2>🎓 Образование и опыт</h2>
        <div className="two-col">
          <div className="box">
            <div className="logo-wrapper">
              <Image 
                src="/images/psychologist/uos-logo.png" 
                alt="University of Sunderland" 
                width={250}
                height={70}
                className="logo-img"
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                priority
              />
              <h3>University of Sunderland</h3>
            </div>
            <p>Сертификат магистратуры по психологии</p>
          </div>
          <div className="box">
            <div className="logo-wrapper">
              <Image 
                src="/images/psychologist/arden-logo.png" 
                alt="Arden University" 
                width={250}
                height={70}
                className="logo-img"
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                priority
              />
              <h3>Arden University</h3>
            </div>
            <p>
              Магистратура с аккредитацией <strong>BPS</strong>: учебная часть завершена, пишу диссертацию и провожу исследование
            </p>
          </div>
          <div className="box">
            <div className="logo-wrapper">
              <Image 
                src="/images/psychologist/bps-logo.png" 
                alt="BPS Logo" 
                width={250}
                height={70}
                className="logo-img"
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                priority
              />
              <h3>Дополнительно</h3>
            </div>
            <ul>
              <li>Член <strong>British Psychological Society (BPS)</strong></li>
              <li>Обучение в подходах РЭПТ и КПТ</li>
              <li>Онлайн-практика с 2023 года</li>
              <li>Регулярные супервизии и интервизии</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" ref={addToRefs}>
        <h2>📩 Контакты</h2>
        <p>Записаться можно в Telegram:</p>
        <a href="https://t.me/psyrebt" target="_blank" className="link">
          @psyrebt
        </a>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Обычно отвечаю в течение 24 часов
        </p>
      </section>

      <section className="section box" ref={addToRefs}>
        <h2>✨ Что говорят клиенты</h2>
        <blockquote>
          &quot;После сессий с тобой стало спокойнее внутри. Как будто тревоге больше не нужно кричать, чтобы её услышали.&quot;
        </blockquote>
        <blockquote>
          &quot;Классно, как можно в одном разговоре почувствовать себя и принятой, и получить четкие инструкции к действию.&quot;
        </blockquote>
      </section>
    </div>
  );
}
