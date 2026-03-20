import { ArtDecoSunburst } from "@/components/ArtDecoSunburst";
import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { ServiceCard } from "@/components/ServiceCard";

function App() {
  return (
    <main className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ArtDecoSunburst />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Decorative top element */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-16 h-px bg-primary" />
            </div>
          </div>

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">
            Управление данными предприятия
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            <span className="text-gold-gradient">Управление</span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">Финансами</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Комплексный курс по финансовому учёту предприятия: от бухгалтерских принципов до международных стандартов и управления казначейством.
          </p>

          {/* Decorative bottom element */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">О курсе</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
                Финансы как язык бизнеса
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Финансовый учёт — основа принятия управленческих решений на любом предприятии. Понимание механизмов бухгалтерского, налогового и управленческого учёта позволяет руководству контролировать эффективность и минимизировать риски.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Курс охватывает все ключевые аспекты: от формирования отчётности по РСБУ до применения международных стандартов IFRS и GAAP, от планирования затрат до управления денежными потоками и бюджетной консолидации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Учебные вопросы</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Программа курса</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Бухгалтерский учёт"
              description="Понятие, принципы, ключевые процессы и формирование отчётности. Первичные документы, регистры учёта, баланс и ОПУ по РСБУ."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 8h10M7 12h10M7 16h6" />
                </svg>
              }
            />
            <ServiceCard
              title="Налоговый учёт"
              description="Принципы налогообложения, прямые и косвенные налоги, налоговый мониторинг. НДС, налог на прибыль, имущественные налоги."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              }
            />
            <ServiceCard
              title="Управленческий учёт"
              description="Планирование затрат, учёт себестоимости и анализ финансовых результатов. CVP-анализ, ABC-калькуляция, маржинальная прибыль."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              }
            />
            <ServiceCard
              title="Международный учёт"
              description="Стандарты IFRS и GAAP, параллельный учёт и финансовая консолидация. Различия методологий, трансформация отчётности."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              }
            />
            <ServiceCard
              title="Казначейство и бюджетирование"
              description="Платёжный процесс, бюджетная модель и бюджетная консолидация. Управление ликвидностью, кэш-пулинг, сценарное планирование."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              }
            />
            {/* Summary card */}
            <div className="group relative p-8 bg-primary/10 border border-primary flex flex-col items-center justify-center text-center">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />
              <div className="font-serif text-5xl text-primary mb-4">5</div>
              <div className="font-serif text-2xl text-foreground mb-2">Учебных вопросов</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Полный охват финансового управления предприятием от первичного учёта до консолидации</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ArtDecoDivider variant="fan" />

          <div className="grid md:grid-cols-3 gap-px bg-border mt-12">
            {[
              { label: "РСБУ", desc: "Российские стандарты бухгалтерского учёта" },
              { label: "IFRS", desc: "Международные стандарты финансовой отчётности" },
              { label: "GAAP", desc: "Общепринятые принципы бухгалтерского учёта (США)" },
              { label: "CVP", desc: "Анализ «затраты–объём–прибыль»" },
              { label: "Cash Pool", desc: "Централизованное управление денежными потоками" },
              { label: "KPI", desc: "Ключевые показатели эффективности финансов" },
            ].map((item) => (
              <div key={item.label} className="bg-background p-8 text-center group hover:bg-card transition-colors duration-300">
                <div className="font-serif text-2xl text-primary mb-2">{item.label}</div>
                <div className="text-muted-foreground text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="relative text-center py-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/20 font-serif text-9xl leading-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-8">
                Финансовая отчётность — это язык, на котором бизнес говорит с инвесторами, государством и самим собой.
              </p>
              <footer className="text-muted-foreground">
                <span className="text-primary">—</span> Принцип финансового управления,{" "}
                <span className="text-primary">Управление данными предприятия</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ArtDecoSunburst />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <ArtDecoDivider variant="chevron" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Структура знаний</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Взаимосвязь учётных систем
            </h2>
          </div>

          <div className="relative p-8 md:p-12 border border-border">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Бухгалтерский учёт",
                  flow: "Первичные документы → Регистры → Баланс / ОПУ / ОДДС",
                },
                {
                  num: "02",
                  title: "Налоговый учёт",
                  flow: "Налоговые регистры → Декларации → Мониторинг ФНС",
                },
                {
                  num: "03",
                  title: "Управленческий учёт",
                  flow: "Центры затрат → Калькуляция → Анализ результатов",
                },
                {
                  num: "04",
                  title: "Международный учёт",
                  flow: "Трансформация РСБУ → IFRS/GAAP → Консолидация группы",
                },
                {
                  num: "05",
                  title: "Казначейство и бюджетирование",
                  flow: "Платёжный календарь → Бюджет → Факт / план-факт анализ",
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-6 group">
                  <div className="font-serif text-3xl text-primary/40 group-hover:text-primary transition-colors duration-300 w-12 shrink-0">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <div className="font-serif text-xl text-foreground mb-1">{item.title}</div>
                    <div className="text-muted-foreground text-sm font-mono">{item.flow}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-serif text-xl text-foreground">Управление финансами</span>
              <div className="w-12 h-px bg-primary" />
            </div>
            <p className="text-muted-foreground text-sm text-center">
              Дисциплина «Управление данными предприятия» · Учебный вопрос: Управление финансами
            </p>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rotate-45 border border-primary/50" />
              <span className="text-primary/50 text-xs tracking-widest uppercase">Бухгалтерский · Налоговый · Управленческий · Международный · Казначейство</span>
              <div className="w-2 h-2 rotate-45 border border-primary/50" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
