'use client';

import Image from 'next/image';
import Link from 'next/link';
import './styles.css';

export default function PsychologistPage() {
  return (
    <div className="container">
      <header>
        <h1><span className="animated-brain">🧠</span> Психолог для тревожных людей</h1>
        <p>
          Ты часто тревожишься? Переживаешь обо всём, начиная с утра? Внутри ощущение беспомощности и трудно остановить поток мыслей?
          <br /><strong>Возможно, ты как раз в нужном месте.</strong>
        </p>
        <p>
          Я сама знаю, каково это — жить с тревогой. Поэтому мне важно не только давать работающие инструменты, но и создавать тёплое, безопасное пространство, где можно быть собой, расслабиться и почувствовать опору.
        </p>
        <Link href="https://t.me/psyrebt" target="_blank" className="btn" onClick={() => fbq('track', 'Lead')}>
          Записаться
        </Link>
      </header>

      <section className="section two-col">
        <div>
          <h2>👩‍⚕️ Кто я</h2>
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

      <section className="section">
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

      <section className="section box">
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

      <section className="section">
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

      <section className="section">
        <h2>📩 Контакты</h2>
        <p>Записаться можно в Telegram:</p>
        <a href="https://t.me/psyrebt" 
           class="tg-button"
           onclick="fbq('track', 'Lead');">
          Записаться
        </a>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Обычно отвечаю в течение 24 часов
        </p>
      </section>

      <section className="section box">
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