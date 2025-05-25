# Настройка PostHog Analytics

## Что было добавлено

1. **PostHog библиотека** - для отслеживания событий
2. **Отслеживание кликов** - на кнопки "Бот" и "Telegram" в секции контактов
3. **Логирование в консоль** - для отладки в режиме разработки

## Настройка

1. Создайте файл `.env.local` в корне проекта:
```bash
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_KEY=phc_your_actual_posthog_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

2. Замените `phc_your_actual_posthog_key_here` на ваш реальный ключ PostHog

## Отслеживаемые события

### `contact_button_clicked`
Отслеживается при клике на кнопки связи:

**Свойства события:**
- `button_type`: "bot" или "direct"
- `page`: "impostor-syndrome"
- `timestamp`: время клика в ISO формате

**Пример события:**
```javascript
{
  event: 'contact_button_clicked',
  properties: {
    button_type: 'bot',
    page: 'impostor-syndrome',
    timestamp: '2024-01-15T10:30:00.000Z'
  }
}
```

## Проверка работы

1. Откройте консоль разработчика (F12)
2. Перейдите на страницу `/impostor-syndrome`
3. Кликните на кнопку "Бот" или "Telegram"
4. В консоли должно появиться сообщение: `📊 PostHog Event: contact_button_clicked {...}`

## Просмотр статистики

В PostHog дашборде вы сможете увидеть:
- Количество кликов по каждой кнопке
- Соотношение кликов "Бот" vs "Telegram"
- Временные тренды активности
- Конверсию по дням/часам 