'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { initPostHog, trackEvent } from '../../lib/posthog';
import './styles.css';

// Elegant Review Slider Component
const ReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const reviews = [
    '/articles/chronic-anxiety/review-4.jpg',
    '/articles/chronic-anxiety/review-3.jpg',
    '/articles/chronic-anxiety/review-2.png',
    '/articles/chronic-anxiety/review-1.jpg',
  ];

  // Minimum distance for a swipe
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="review-slider">
      <div 
        className="slider-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="slide">
              <img 
                src={review} 
                alt={`Отзыв ${index + 1}`}
                className="review-image"
                draggable={false}
              />
            </div>
          ))}
        </div>
        
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="slider-btn next-btn" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="slider-dots">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Interactive Contact Section Component
const ContactSection = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Инициализируем PostHog
    initPostHog();
  }, []);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    setTimeout(() => setActiveButton(null), 300);
    
    // Отслеживаем клик в PostHog
    trackEvent('contact_button_clicked', {
      button_type: buttonType,
      page: 'impostor-syndrome',
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className={`contact-section ${isVisible ? 'visible' : ''}`}>
      <div className="contact-header">
        <div className="contact-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
            <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.60557 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h4 className="contact-title">🧭 Готовы начать работать с синдромом самозванца?</h4>
        <p className="contact-subtitle">Оставьте заявку, и я лично напишу вам в Telegram.<br/>
        Мы выберем удобное время сессии, я расскажу, как внести оплату, и отправлю анкету, чтобы подготовиться к встрече.</p>
      </div>

      <div className="contact-steps">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-text">Выберем удобное время</div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-text">Обсудим оплату</div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-text">Отправлю анкету</div>
        </div>
      </div>

      <div className="contact-buttons">
        <div className="contact-option">
          <h5 className="option-title">
            <span className="option-icon">🤖</span>
            Удобнее всего — через бота
          </h5>
          <a 
            href="https://t.me/ChatWithAnastasiaBot" 
            className={`contact-button primary ${activeButton === 'bot' ? 'active' : ''}`}
            onClick={() => {
              handleButtonClick('bot');
              if (typeof fbq !== 'undefined') fbq('track', 'Lead');
            }}
          >
            <div className="button-content">
              <span>Написать в бот</span>
            </div>
            <div className="button-description">Бот задаст пару вопросов и передаст их мне</div>
          </a>
        </div>

        <div className="contact-divider">
          <span>или</span>
        </div>

        <div className="contact-option">
          <h5 className="option-title">
            <span className="option-icon">✉️</span>
            Можно написать напрямую
          </h5>
          <a 
            href="https://t.me/psyrebt" 
            className={`contact-button secondary ${activeButton === 'direct' ? 'active' : ''}`}
            onClick={() => {
              handleButtonClick('direct');
              if (typeof fbq !== 'undefined') fbq('track', 'Lead');
            }}
          >
            <div className="button-content">
              <span>Написать в Telegram</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ImpostorSyndromePage() {
  return (
    <div className="impostor-container">
      <div className="impostor-content">
        <h2 className="impostor-subtitle">Один способ перестать ждать разоблачения и начать чувствовать уверенность в своих знаниях — без работы над "самооценкой" годами</h2>
        
        <div className="article-image">
          <img src="/articles/imposter-syndrome/1.png" alt="Синдром самозванца" />
        </div>

        <h3 className="impostor-heading">«Я недостаточно хороша»: знакомо?</h3>

        <ul className="impostor-list">
          <li>😔Кажется, что ты находишься <strong>«не на своем месте».</strong> Твой успех – случайность или ошибка, комплименты от коллег – незаслуженные, а достижения – просто везение.</li>
          <li>😣Тебе <strong>стыдно за любой результат, который получился неидеальным.</strong> Малейшая ошибка – и ты уже коришь себя: «Я неспособная, я подвела команду».</li>
          <li>😨<strong>Ты живешь с постоянным страхом:</strong> вот-вот окружающие «прозреют» и поймут, что на самом деле ты не такая компетентная, как им казалось. Что весь твой профессионализм – иллюзия, и скоро тебя разоблачат.</li>
        </ul>

        <p>Если узнаешь себя хотя бы в одном из этих пунктов – знай, ты не одна такая. По оценкам психологов, <strong>до 70% людей</strong> хоть раз сталкивались с синдромом самозванца.</p>

        <p>Да-да, даже самые успешные: актриса Эмма Уотсон признавалась, что чувствовала себя «мошенницей», а Мишель Обама говорила, что порой сомневалась, достойна ли своих достижений. Особенно часто этот синдром встречается у талантливых девушек в IT и digital-сфере, где от каждой ждут экспертизы на высшем уровне.</p>

        <p>Но лично тебе от этого не легче, верно? Ведь тревожные мысли продолжают мучить именно тебя…</p>

        <div className="article-image">
          <img src="/articles/imposter-syndrome/2.png" alt="Привычные методы не работают" />
        </div>

        <h3 className="impostor-heading">Почему привычные методы не работают</h3>

        <p>💼Скорее всего, ты уже пыталась справиться с этими тревогами. Например, бралась за работу с удвоенной силой, задерживалась допоздна — лишь бы доказать себе и окружающим, что ты достаточно компетентна. Возможно, читала статьи о позитивном мышлении или даже вела список достижений, надеясь убедить себя в собственной ценности. А друзья и коллеги говорили: «Да брось, ты же умница, просто поверь в себя!»</p>

        <p>Увы, синдром самозванца так просто не сдаётся. Сколько ни перечисляй свои успехи, внутренний голос всегда добавит: «Это всё случайность. Просто повезло». Сколько ни работай до ночи, на утро тревога вернётся с новой силой.</p>

        <p>Все эти способы — как <strong>пластырь</strong>: чуть-чуть облегчают состояние, но не убирают саму <strong>причину неуверенности</strong>. Вот почему нужна <strong>другая тактика.</strong></p>

        <h3 className="impostor-heading">Что будет, если ничего не менять?</h3>

        <p>⚠️Синдром самозванца — это не просто неприятное чувство, а <strong>коварная ловушка.</strong> Продолжая верить ложной идее «со мной что-то не так, я обманщица», ты будешь ещё больше укорять и изводить себя.</p>

        <div className="article-image">
          <img src="/articles/imposter-syndrome/3.png" alt="Последствия синдрома самозванца" />
        </div>

        <p>Самобичевание подтачивает твою уверенность и энергию. В итоге ты начинаешь избегать новых возможностей — вдруг не справишься? Или берёшься за всё подряд и работаешь на износ, пытаясь «заслужить» право называться хорошим специалистом. <strong>Оба пути ведут к выгоранию и застою.</strong></p>

        <p>Представь: ты не просишь о повышении, потому что сама себя убедила, что недостойна. Не выступаешь с идеями на митингах, боясь показаться глупой. Соглашаешься на меньшую зарплату, потому что сомневаешься в своей ценности.</p>
        
        <p>Постоянное чувство собственной несостоятельности подрывает не только карьеру, но и общее душевное равновесие. Трудно радоваться жизни, когда всё время ждёшь подвоха и ругаешь себя за каждый промах. Чем дольше это длится, тем сильнее укрепляется ложное убеждение <strong>«я недостаточно хороша».</strong> Получается <strong>порочный круг:</strong> вера в собственную несостоятельность мешает расти — отсутствие роста лишь подтверждает твою неуверенность в себе. <strong>Пора это остановить</strong> 🛑</p>

        <h3 className="impostor-heading">🖌 История Лены: дизайнерка, которая боялась разоблачения</h3>

        <div className="article-image">
          <img src="/articles/imposter-syndrome/4.png" alt="История Лены" />
        </div>

        <p>👩‍💻Познакомься с Леной – UX-дизайнеркой в крупном IT-стартапе, моей клиенткой. Ей 29, у неё 5 лет опыта и десятки успешно запущенных проектов. Со стороны кажется, что Лена — уверенный в себе профессионал. Но мало кто знает, что творится у неё внутри.</p>

        <p>🎯 Каждый раз, получая похвалу от руководства, Лена смущенно улыбается, а про себя думает: <strong>«Просто повезло. В следующий раз точно облажаюсь».</strong> Ночами она прокручивает в голове каждую мелочь: тот лишний пиксель в макете, ту идею, которую постеснялась озвучить на планёрке. Её мучает мысль: <strong>«Я недостаточно хороша, все мои успехи — случайность, и рано или поздно это выяснится».</strong> Из-за этого она берётся за сверхурочные, стараясь компенсировать свою мнимую «неполноценность».</p>

        <p>Когда начальник поручил ей вести большой проект, Лена всерьёз подумала отказаться — ведь <strong>если проект провалится, все поймут, что она вовсе не талантлива, а просто удачливая притворщица.</strong></p>

        <p>Когда она обратилась ко мне, она не очень верила, что это поможет. Сказала честно: «<strong>Я понимаю, что это синдром самозванца, я про него сто раз читала. Но просто знать, что он у меня есть — не делает его слабее</strong>».</p>

        <p>🧠 Мы начали с самого простого: разобрали ситуацию, когда она в последний раз сомневалась в себе. Лена рассказала о недавней задаче — она потратила на неё два дня, хотя, по её словам, <strong>«любой нормальный специалист справился бы за пару часов».</strong></p>

        <p>Мы посмотрели, какие мысли у неё были в этот момент, как она их воспринимала, какие ожидания к себе предъявляла. На этом этапе Лена честно сказала: «Я не могу поверить, что могу быть профессионалом и при этом чего-то не знать. Это как будто несовместимо».</p>

        <div className="article-image">
          <img src="/articles/imposter-syndrome/5.png" alt="Работа с убеждениями" />
        </div>

        <p>Только после этого, шаг за шагом, мы начали <strong>отделять факты от искажений:</strong> — Лена реально справилась с задачей? Да. — Были ли объективные причины, почему ушло больше времени? Были. — Была ли обратная связь от команды негативной? Нет, наоборот.</p>

        <p>🔄Тогда я предложила попробовать посмотреть на эту же ситуацию со стороны — не как способ «всё исправить», а просто чтобы расширить перспективу.</p>

        <p><strong>— А если бы твоя коллега, у которой ты училась пару лет назад, рассказала тебе точно такую же историю</strong> — что бы ты ей сказала?</p>

        <p>Лена не сразу ответила. Она подумала, вздохнула и сказала: «Я бы, наверное, сказала: <strong>ты не робот. У всех бывают сложные задачи</strong>».</p>

        <p>И это была <strong>первая трещина</strong> в бетонной конструкции самокритики.</p>

        <p>🙅‍♀️Вместо того, чтобы убеждать Лену, что она молодец (это бы не сработало), мы продолжили <strong>наблюдать за внутренним критиком:</strong> как он говорит, когда включается, какие у него любимые темы.</p>

        <p>На следующей встрече Лена сама заметила: <strong>«Я в очередной раз подумала, что я ничего не умею… и в этот момент поймала себя на этой мысли. Раньше я просто в неё верила».</strong></p>

        <p>Это и есть прогресс. Не превращение в «уверенного в себе человека» за один сеанс. А появление выбора, когда раньше был только автоматический отклик: <strong>«Я недостойна».</strong></p>

        <p>Через месяц Лена сказала фразу, которую раньше посчитала бы высокомерием: <strong>«Я, может, не идеальная, но я точно не случайный человек на своей позиции».</strong></p>

        <p>Она не перестала тревожиться насовсем. Но у неё появился <strong>внутренний инструмент</strong>, который помогает не проваливаться в тревогу, а <strong>выдерживать её — и всё равно двигаться вперёд</strong>.</p>

        <h3 className="impostor-heading">🧭Мой метод: 3 шага к уверенности</h3>

        <div className="article-image">
          <img src="/articles/imposter-syndrome/6.png" alt="Метод работы" />
        </div>

        <p>За одну сессию мы последовательно проработаем твою проблему – всего <strong>три ключевых шага</strong> на пути от саморазрушительных мыслей к спокойной уверенности:</p>

        <ol className="impostor-list-numbered">
          <li>
            <strong>1️⃣Выявить ложное убеждение.</strong> Сначала вместе мы находим и чётко формулируем ту самую скрытую мысль, которая подтачивает тебя изнутри. Что именно заставляет тебя чувствовать себя «самозванкой»? Например: «Я должна знать всё, иначе я некомпетентна» или «Мои успехи – это случайность». Эта мысль — отправная точка.
          </li>
          <li>
            <strong>2️⃣ Оспорить и разрушить его.</strong> Затем мы берём это убеждение и проверяем его фактами и логикой. Насколько оно правдиво? Откуда оно взялось? Мы посмотрим на твои достижения со стороны, как мы сделали с Леной: ты увидишь реальное соотношение своих усилий и результатов. Используя техники <strong>РЭПТ</strong> (рационально-эмоциональной поведенческой терапии), я помогу тебе переосмыслить ситуацию. Вместо <strong>«я недостаточно хороша»</strong> появится более объективный и доброжелательный взгляд на себя.
          </li>
          <li>
            <strong>3️⃣ Закрепить новую установку.</strong> К концу сессии у тебя появится чёткое понимание, чем заменить старый шаблон мыслей. Вместе мы разработаем небольшой план, что делать, когда синдром самозванца вновь попытается поднять голову. Это может быть конкретная техника, которую ты сможешь применять самостоятельно.
          </li>
        </ol>

        <h3 className="impostor-heading">Что ты получишь в результате:</h3>

        <div className="article-image">
          <img src="/articles/imposter-syndrome/7.png" alt="Результаты работы" />
        </div>

        <ul className="impostor-list">
          <li>✅<strong>Уверенность в себе и своих навыках.</strong> Ты почувствуешь реальное облегчение: навязчивый внутренний критик больше не будет тобой помыкать.</li>
          <li>✅<strong>Объективный взгляд на свои достижения.</strong> Вместо привычки обесценивать свой труд ты начнёшь видеть <strong>факты</strong> и признавать <strong>собственные успехи.</strong></li>
          <li>✅<strong>Конкретный инструмент на будущее.</strong> У тебя останется чёткий план, как поступать, если «самозванец» снова захочет заявить о себе. Ты будешь <strong>во всеоружии</strong> и не дашь ему вернуть власть над твоими мыслями.</li>
          <li>✅<strong>Мотивацию расти дальше.</strong> Избавившись от парализующего страха, ты сможешь смело ставить новые цели, просить заслуженное повышение и радоваться своим достижениям без оглядки на мнимую «несостоятельность».</li>
        </ul>

        <p>💬 <strong>Вот что говорят клиенты после работы со мной:</strong></p>

        <ReviewSlider />

        <h3 className="impostor-heading">Стоимость</h3>

        <p><strong>Стоимость индивидуальной консультации</strong> (45 минут онлайн) сейчас составляет <strong>40 EUR</strong>.</p>

        <p><em>(Оплата производится по факту договорённости о сессии, возможны переводы на карту или другой удобный способ – детали обсудим лично.)</em></p>

        <div className="article-image">
          <img src="/articles/imposter-syndrome/11.png" alt="Как записаться" />
        </div>

        <ContactSection />

        <div className="about-section">
          <div className="about-content">
            <div className="about-photo">
              <img src="/articles/imposter-syndrome/12.jpeg" alt="Анастасия Зелинская" />
            </div>
            <div className="about-text">
              <p>Меня зовут Анастасия Зелинская. Я психолог и работаю с тревожностью, перфекционизмом и самокритикой.</p>
              
              <p><strong>Образование и квалификация:</strong></p>
              <ul className="about-achievements">
                <li>Сертификаты магистратуры Психологии в <strong>Sunderland University</strong> и <strong>Arden University</strong></li>
                <li>В процессе написания исследования для получения полного диплома магистра в Arden University</li>
                <li>Член <strong>Британского психологического сообщества (BPS)</strong></li>
              </ul>
              
              <p><strong>Мой подход:</strong></p>
              <ul className="about-achievements">
                <li>Работаю онлайн с девушками в IT и digital-среде</li>
                <li>Использую метод <strong>РЭПТ</strong> — логичный, бережный и без эзотерики</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="disclaimer"><em>Внимание: Истории, приведённые на этой странице, — собирательные и основаны на типичных запросах моих клиенток. Я не рассказываю реальные кейсы без письменного согласия, не раскрываю личные данные и не использую чужие истории в целях продвижения. Всё, что вы читаете здесь, создано с уважением к частной жизни и конфиденциальности. Все отзывы анонимные и выставлены с позволения клиентов.</em></p>
      </div>
    </div>
  );
} 