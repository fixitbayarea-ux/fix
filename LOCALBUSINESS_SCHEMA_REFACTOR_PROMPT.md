# Prompt: безопасная консолидация LocalBusiness schema (без SEO-регрессии)

Сыграй роль **осторожного senior frontend/technical SEO инженера**. Нужно устранить архитектурный долг в JSON-LD, **ничего не сломав** в продакшне.

## Контекст
Сейчас в проекте есть 2 источника `LocalBusiness`:
- `frontend/public/index.html` — `script#global-localbusiness-schema` (SSR/SSG-visible источник).
- `frontend/src/components/SchemaMarkup.js` — `script#local-business-schema` (runtime React-injected источник).

Также есть runtime-дедуп/удаление скриптов (в `index.html` и `SchemaMarkup.js`).

## Цель
Сделать **один авторитетный источник данных** для `LocalBusiness`, убрать конфликтующую дедуп-логику и гарантировать:
1. В итоговом DOM на любой странице ровно **один** `LocalBusiness`.
2. Нет противоречий по `openingHours`, `sameAs`, `address/serviceArea`, `aggregateRating/review policy`.
3. Page-level схемы (`Service`, `FAQPage`, `BreadcrumbList`, `Article/BlogPosting`) продолжают работать и не удаляют canonical `LocalBusiness`.

## Важные ограничения (не нарушать)
- Не ломать prerender/SEO для ботов без JS.
- Не удалять другие валидные JSON-LD типы.
- Не использовать «агрессивный» MutationObserver для тотальной чистки JSON-LD.
- Минимизировать diff и риск регрессии.

## План изменений (выполняй по шагам)

### Шаг 1. Выбери и зафиксируй authority
- Сделай `frontend/public/index.html` **единственным canonical источником** `LocalBusiness` (`id="global-localbusiness-schema"`).
- В `SchemaMarkup.js` **убери инжект нового LocalBusiness**.
- В `SchemaMarkup.js` оставь только безопасную, узкую дедупликацию для реально проблемных no-id дублей **не-LocalBusiness** (если она действительно нужна).

### Шаг 2. Удали двусторонний «бой» дедупов
- Из `index.html` убери inline-скрипт `dedupLocalBusiness()` который переключает `type` у global schema.
- Из `SchemaMarkup.js` убери логику удаления всех `LocalBusiness`, кроме `local-business-schema/reviews-localbusiness`.
- После изменений не должно быть двух независимых механизмов, которые удаляют/прячут canonical `LocalBusiness`.

### Шаг 3. Приведи данные к единому виду
В canonical `LocalBusiness` проверь и зафиксируй единый набор:
- `openingHoursSpecification` (одна политика, без расхождений по времени/дням);
- `sameAs` (один согласованный список, без дублирующих или временных URL);
- `address` + `areaServed` (единый формат);
- `aggregateRating` и `review` (понятная политика: либо статические ревью в одном месте, либо только aggregateRating + внешние источники).

### Шаг 4. Проверь page-level schema injectors
- Просмотри `useSchema/useSchemas` и страницы, где добавляются `Service`, `FAQPage`, `BreadcrumbList`, `Article/BlogPosting`.
- Убедись, что они:
  - имеют стабильные `id`;
  - не переиспользуют id canonical LocalBusiness;
  - не удаляют `global-localbusiness-schema`.

### Шаг 5. Добавь короткую dev-note
- Добавь короткий комментарий (или markdown-заметку в репо):
  - «Бизнес-факты для Schema.org обновляются только в `frontend/public/index.html` → `#global-localbusiness-schema`».
  - Где обновлять: часы, `sameAs`, `address/areaServed`, рейтинг/ревью.

## Проверки (обязательные)
1. Открой минимум 3 маршрута (например: `/`, сервисная страница, блог-страница).
2. Для каждого маршрута проверь в итоговом DOM:
   - количество `script[type="application/ld+json"]` с `@type="LocalBusiness"` = **1**;
   - присутствуют и корректны `FAQ/Breadcrumb/Service/Article` там, где ожидается.
3. Убедись, что после client-side навигации (router transition) количество `LocalBusiness` остаётся 1.
4. Убедись, что нет удаления canonical схемы при гидратации.

## Формат результата
В ответе дай:
1. Краткий список файлов, где внесены изменения.
2. Что именно удалено/упрощено в дедуп-логике.
3. Финальный источник истины для business facts.
4. Результаты проверок по маршрутам (счётчик LocalBusiness + список других schema типов).
5. Риски/что мониторить после деплоя (Search Console rich results, URL Inspection).

## Критерии приемки
- Ровно один `LocalBusiness` в конечном DOM на страницу.
- Нет противоречивых значений между HTML и runtime schema.
- Нет runtime-хака, который скрывает canonical schema.
- Разработчику очевидно, где обновлять бизнес-данные один раз.
