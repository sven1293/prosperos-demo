// homepage.jsx — Homepage

function Homepage({ navigate, hero }) {
  return (
    <div className="page" data-screen-label="Homepage">
      {/* HERO */}
      <section className="hero" data-section="hero">
        <div className="container">
          <HeroVariant variant={hero} navigate={navigate} />
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="proof">
        <div className="container">
          <div className="row">
            <div className="item"><span className="icon"><ShieldIcon /></span> BRL9500-gecertificeerd</div>
            <div className="item"><span className="icon"><Check /></span> ISO 9001-geborgd</div>
            <div className="item"><span className="icon"><MapIcon /></span> Landelijke dekking</div>
            <div className="item"><span className="num">0</span> afwijkingen externe audit 2025</div>
            <div className="item"><span className="icon"><TeamIcon /></span> 65+ specialisten in vaste dienst</div>
          </div>
        </div>
      </section>

      {/* OPGAVE-BLOCK */}
      <section className="section" data-section="opgaven">
        <div className="container">
          <div className="flex between center" style={{ marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 720 }}>
              <Eyebrow>Voor welke opgave komt u?</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Zes veelvoorkomende vastgoedopgaven —<br />
                <span className="display" style={{ color: "var(--ink-3)" }}>één partij voor data, label, advies en uitvoering.</span>
              </h2>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate("solution")}>
              <span>Alle oplossingen</span>
              <span className="arr"><ArrowRight /></span>
            </button>
          </div>

          <div className="grid cols-3 gap">
            {OPGAVEN.map((o, i) => (
              <div key={o.title} className="opg-card" onClick={() => navigate("solution")}>
                <div className="num">{String(i + 1).padStart(2, "0")} / {String(OPGAVEN.length).padStart(2, "0")}</div>
                <h3 className="h3">{o.title}</h3>
                <p className="desc">{o.desc}</p>
                <div className="links">
                  {o.tags.map((t) => <span key={t}>— {t}</span>)}
                </div>
                <div className="arr"><ArrowUpRight /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE BLOCK */}
      <section className="section" style={{ background: "var(--bg-soft)" }} data-section="doelgroepen">
        <div className="container">
          <div className="flex between center" style={{ marginBottom: 48, gap: 32, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow>Voor wie wij werken</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Per doelgroep een eigen taal, <span className="display" style={{ color: "var(--ink-3)" }}>aanpak en bewijslast.</span>
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: 380, fontSize: 16 }}>
              Van complexgewijze EP-W-opnames voor corporaties tot ESG-data voor banken — herkenning begint bij uw eigen vocabulaire.
            </p>
          </div>
          <div className="aud-list" style={{ background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 12, padding: "0 24px" }}>
            {AUDIENCES.map((a, i) => (
              <div key={a.name} className="aud-row" onClick={() => navigate("audience")}>
                <div className="num">/{String(i + 1).padStart(2, "0")}</div>
                <div className="name">{a.name}</div>
                <div className="focus">{a.focus}</div>
                <div className="cta">Bekijk pagina <span className="arr"><ArrowRight /></span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY / WETGEVING */}
      <section className="section" data-section="autoriteit">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <Eyebrow>Wetgeving in beweging</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Wat verandert er — <span className="display" style={{ color: "var(--ink-3)" }}>en wat betekent dat voor uw vastgoed?</span>
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                EPBD IV, EED, DUMAVA en GACS volgen elkaar in hoog tempo op. Onze specialisten vertalen
                richtlijnen naar concrete consequenties per portefeuille.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={() => navigate("knowledge")}>
                  <span>Naar de kennisbank</span><span className="arr"><ArrowRight /></span>
                </button>
                <button className="btn btn-ghost" onClick={() => navigate("knowledge")}>
                  <span>Abonneer op updates</span><span className="arr"><ArrowRight /></span>
                </button>
              </div>

              <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
                <h5 style={{ font: "500 11px/1 var(--mono)", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--ink-4)", margin: "0 0 16px" }}>Onze auteurs</h5>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {EXPERTS.map((e) => (
                    <div key={e.name} className="specialist-card" style={{ flex: "1 1 240px", minWidth: 240 }}>
                      <div className="ph" />
                      <div>
                        <div className="name">{e.name}</div>
                        <div className="role">{e.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {KNOWLEDGE_TILES.map((k) => (
                <div key={k.title} className="know-tile" onClick={() => navigate("knowledge")}>
                  <div className="meta-row">
                    <span>{k.cat}</span>
                    <span>{k.date}</span>
                  </div>
                  <div className="know-title">{k.title}</div>
                  <div className="excerpt">{k.excerpt}</div>
                  <div style={{ fontSize: 13, color: "var(--accent-ink)", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
                    Lezen <ArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="section" style={{ paddingTop: 0 }} data-section="cases">
        <div className="container">
          <div className="flex between center" style={{ marginBottom: 48, gap: 32, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow>Praktijk</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Bewijs zit in <span className="display" style={{ color: "var(--ink-3)" }}>de uitvoering.</span>
              </h2>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate("case")}>
              <span>Alle cases</span><span className="arr"><ArrowRight /></span>
            </button>
          </div>

          <div className="grid cols-3 gap">
            {CASES.map((c, i) => (
              <div key={c.title} className="case-card" onClick={() => navigate("case")}>
                <Photo slot={`home-case-${i+1}`} label={c.photo} />
                <div className="body-blk">
                  <div className="meta">
                    <span>{c.type}</span>
                    <span>{c.size}</span>
                  </div>
                  <h3 className="h3" style={{ fontSize: 22 }}>{c.title}</h3>
                  <p className="small">{c.snippet}</p>
                  <div className="tag-row">
                    {c.tags.map((t) => <span key={t} className="pill neutral">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KWALITEIT BLOCK */}
      <section className="section" style={{ background: "var(--bg-soft)" }} data-section="kwaliteit">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <Eyebrow>Kwaliteit als systeem</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Geen belofte, <span className="display" style={{ color: "var(--ink-3)" }}>maar een proces.</span>
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                Iedere opname doorloopt vier kwaliteitspoorten — van veldinvoer tot eindcontrole. Onze
                BRL9500-borging is niet afhankelijk van losse personen, maar van een schaalbaar systeem.
              </p>
              <button className="btn btn-link" style={{ marginTop: 24 }} onClick={() => navigate("over")}>
                Lees over onze kwaliteitsborging <ArrowRight />
              </button>
            </div>
            <div className="stats-strip">
              <div className="stat"><span className="num">0</span><span className="lbl">Afwijkingen externe audit 2025 (BRL9500)</span></div>
              <div className="stat"><span className="num">4×</span><span className="lbl">Kwaliteitspoorten per opname</span></div>
              <div className="stat"><span className="num">100%</span><span className="lbl">Steekproef-controle op rapportages</span></div>
              <div className="stat"><span className="num">9,1</span><span className="lbl">Gemiddelde klantbeoordeling kwaliteit*</span></div>
            </div>
          </div>
          <p className="small" style={{ marginTop: 16, color: "var(--ink-4)", fontSize: 12 }}>
            *Indicatief; cijfers worden voor publicatie geverifieerd door Prosperos.
          </p>
        </div>
      </section>

      {/* AMBITION BLOCK */}
      <section className="section" data-section="ambitie">
        <div className="container">
          <div className="ambition">
            <div className="amb-head">
              <div className="label">Ambitie 2040</div>
              <p className="big">
                1.000.000
              </p>
              <p className="sub">
                <span className="display">woningen &amp; bedrijven</span> verduurzaamd in 2040.
              </p>
            </div>
            <div className="amb-foot">
              <p className="desc">
                In 2040 willen wij als marktleider hebben bijgedragen aan de verduurzaming van één miljoen
                woningen en bedrijfsgebouwen in Nederland. Geloofwaardig — onderbouwd door schaalbare
                uitvoering, langdurige opdrachtgevers en kwaliteit die meegroeit.
              </p>
              <button className="btn btn-ghost amb-cta" onClick={() => navigate("over")}>
                <span>Over Prosperos</span><span className="arr"><ArrowRight /></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }} data-section="cta">
        <div className="container">
          <div className="cta-panel">
            <div className="grid" style={{ gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <Eyebrow>Aan de slag</Eyebrow>
                <h2 className="h2" style={{ marginTop: 16, color: "#fff" }}>
                  Bespreek uw vastgoedopgave —<br />
                  <span className="display" style={{ color: "oklch(0.7 0.08 145)" }}>met de specialist die er verstand van heeft.</span>
                </h2>
                <p className="lede" style={{ marginTop: 18 }}>
                  Geen verkoopgesprek. Een werksessie van 30–45 minuten waarin we uw portefeuille,
                  verplichtingen en opties helder krijgen.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                  <button className="btn btn-accent" onClick={() => navigate("contact")}>
                    <span>Plan een adviesgesprek</span><span className="arr"><ArrowRight /></span>
                  </button>
                  <button className="btn btn-ghost" onClick={() => navigate("contact")}>
                    <span>Vraag een offerte aan</span><span className="arr"><ArrowRight /></span>
                  </button>
                </div>
              </div>
              <div className="specialist">
                <Photo slot="home-cta-specialist" label="Foto specialist" shape="circle" style={{ width: 64, height: 64, flexShrink: 0 }} />
                <div>
                  <div className="name">Marleen de Bruijn</div>
                  <div className="role">Senior adviseur · corporaties</div>
                  <div className="phone">+31 6 00 00 00 00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroVariant({ variant, navigate }) {
  if (variant === "B") {
    // Strategy-led hero
    return (
      <>
        <div className="meta-row" style={{ marginBottom: 36 }}>
          <span className="pill">Energieprestatie · Gebouwdata · Verduurzaming</span>
          <span className="small">Versie mei 2026 · EPBD IV definitief →</span>
        </div>
        <div className="stack">
          <h1 className="h1">
            Van energielabel <br/>
            naar <span className="display">vastgoedstrategie.</span>
          </h1>
          <p className="lede" style={{ maxWidth: 640 }}>
            Betrouwbare gebouwdata, wetgevingskennis en verduurzamingsadvies voor vastgoedorganisaties,
            corporaties, banken en publieke partijen — met de uitvoeringskracht van een landelijke partner.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
            <Btn kind="primary" onClick={() => navigate("contact")}>Bespreek uw vastgoedopgave</Btn>
            <Btn kind="ghost" onClick={() => navigate("solution")}>Bekijk oplossingen</Btn>
          </div>
        </div>
        <HeroFigure />
      </>
    );
  }
  if (variant === "C") {
    // Compact + signal hero
    return (
      <>
        <div className="grid" style={{ gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "end" }}>
          <div className="stack">
            <span className="eyebrow"><span className="dot"/>Prosperos · Landelijke kennispartner</span>
            <h1 className="h1">
              Energieprestatie op orde.<br/>
              <span className="display">Verduurzaming vooruit.</span>
            </h1>
            <p className="lede">
              Prosperos brengt gebouwen, portefeuilles en wettelijke verplichtingen
              inzichtelijk — en zet kennis om in een werkbare route richting 2030 en 2040.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Btn kind="primary" onClick={() => navigate("contact")}>Bespreek uw vastgoedopgave</Btn>
              <Btn kind="ghost" onClick={() => navigate("solution")}>Bekijk oplossingen</Btn>
            </div>
          </div>
          <SignalCard navigate={navigate}/>
        </div>
      </>
    );
  }
  // A — Default: client-need led, with image
  return (
    <>
      <div className="meta-row" style={{ marginBottom: 28 }}>
        <span className="pill">EPBD IV definitief · Mei 2026</span>
        <button className="btn-link" style={{ fontSize: 13, color: "var(--ink-3)" }} onClick={() => navigate("knowledge")}>
          Lees de impactanalyse →
        </button>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "1.25fr 1fr", gap: 56, alignItems: "end" }}>
        <div className="stack">
          <h1 className="h1">
            Grip op energieprestatie,<br/>
            wetgeving &amp; <span className="display">vastgoedverduurzaming.</span>
          </h1>
          <p className="lede" style={{ maxWidth: 580 }}>
            Prosperos helpt vastgoedeigenaren, woningcorporaties, banken, publieke organisaties en
            bouwpartners met betrouwbare gebouwdata, energielabels en praktisch verduurzamingsadvies.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn kind="primary" onClick={() => navigate("contact")}>Bespreek uw vastgoedopgave</Btn>
            <Btn kind="ghost" onClick={() => navigate("solution")}>Bekijk oplossingen</Btn>
          </div>
        </div>
        <Photo slot="home-hero" label="HERO · adviseur in gesprek op locatie / gebouwopname utiliteit" style={{ height: 420 }} />
      </div>
    </>
  );
}

function HeroFigure() {
  return (
    <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16 }}>
      <Photo slot="home-fig-1" label="Locatieopname · adviseur met meetapparatuur" style={{ height: 340 }} />
      <Photo slot="home-fig-2" label="Portefeuilledashboard · scherm" style={{ height: 340 }} />
      <Photo slot="home-fig-3" label="Renovatie utiliteit · gevel" style={{ height: 340 }} />
    </div>
  );
}

function SignalCard({ navigate }) {
  return (
    <div className="card" style={{ background: "var(--ink)", color: "#fff", border: 0, padding: 32 }}>
      <div style={{ font: "500 11px/1 var(--mono)", textTransform: "uppercase", letterSpacing: ".1em", color: "oklch(0.7 0.08 145)" }}>
        Live signaal · {new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}
      </div>
      <h3 className="h3" style={{ marginTop: 14, color: "#fff" }}>
        EPBD IV definitief: <span style={{ color: "oklch(0.7 0.08 145)" }}>label E/F/G in 2030 uit.</span>
      </h3>
      <p className="small" style={{ marginTop: 12, color: "oklch(0.78 0.02 245)", lineHeight: 1.55 }}>
        Drempeljaren voor woningen en utiliteit zijn vastgesteld. Wij analyseren wat dat betekent
        voor uw labelmix en welke maatregelen voorrang krijgen.
      </p>
      <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid oklch(0.32 0.04 245)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, color: "oklch(0.78 0.02 245)" }}>3 vervolg­artikelen beschikbaar</span>
        <button className="btn-link" style={{ color: "#fff", borderColor: "oklch(0.4 0.03 245)" }} onClick={() => navigate("knowledge")}>
          Naar het overzicht →
        </button>
      </div>
    </div>
  );
}

const OPGAVEN = [
  {
    title: "Vastgoeddata & energielabels",
    desc: "Betrouwbare labels en gebouwdata over de volle portefeuille — EP-W, EP-U, NEN 2580, dashboards.",
    tags: ["EP-W / EP-U", "Portefeuille-dashboards", "Data­kwaliteit"],
  },
  {
    title: "Compliance & wetgeving",
    desc: "EPBD IV, EED, EML, Informatieplicht en GACS vertaald naar uw planning en verplichtingen.",
    tags: ["EPBD IV", "EED / EML", "GACS"],
  },
  {
    title: "Verduurzamingsroute 2030",
    desc: "Van nulmeting via scenario's en prioritering naar een investeringspad met SLA-zekerheid.",
    tags: ["Nulmeting → maatregelen", "Scenario-analyse", "Investerings­pad"],
  },
  {
    title: "Nieuwbouw & oplevering",
    desc: "BENG, MPG, Qv10 en opleverlabels — geleverd binnen uw planning, zonder vertraging.",
    tags: ["BENG / MPG", "Qv10 / luchtdichtheid", "Opleverlabel"],
  },
  {
    title: "Corporatieaanpak",
    desc: "Complexgewijze EP-W-opnames, bewonerscommunicatie, raamovereenkomsten en kwaliteitsborging.",
    tags: ["Complex­gewijs", "Bewoners­communicatie", "Raam­overeenkomst"],
  },
  {
    title: "DUMAVA & subsidies",
    desc: "Subsidiekansen voor maatschappelijk vastgoed gekoppeld aan label, advies en maatregelen.",
    tags: ["DUMAVA", "Maatschappelijk vastgoed", "Maatregelen­advies"],
  },
];

const AUDIENCES = [
  { name: "Woningcorporaties", focus: "Portefeuilleaanpak · complexgewijze EP-W · bewonerscommunicatie · BRL9500 · raamovereenkomsten · dashboards." },
  { name: "Banken & vastgoedfinanciers", focus: "Vastgoeddata · labelverbetering · financieringsvoorwaarden · risico-inzicht · verduurzamingsroutes." },
  { name: "Gemeenten, provincies & publieke organisaties", focus: "EED · EPBD IV · Energie-efficiënte overheid · DUMAVA · rapportageplicht · vastgoeddata · MJOP." },
  { name: "Commerciële vastgoedpartijen", focus: "Compliance · verhuurbaarheid · waarde · portefeuillerisico · maatregelenadvies · rapportages." },
  { name: "Projectontwikkelaars & aannemers", focus: "BENG · MPG · Qv10 · opleverlabels · planning · projectmatige ondersteuning." },
  { name: "MKB-pandeigenaren", focus: "Praktisch advies · energielabel · EML · GACS · EED waar relevant · verduurzamingsroute." },
];

const KNOWLEDGE_TILES = [
  {
    cat: "EPBD IV · Beleid",
    date: "12 mei 2026",
    title: "EPBD IV definitief — wat betekenen de drempeljaren voor uw portefeuille?",
    excerpt: "De Europese richtlijn is aangenomen. Wij vertalen artikel 9 en bijlage III naar de Nederlandse context.",
  },
  {
    cat: "EED · Compliance",
    date: "28 april 2026",
    title: "Informatieplicht 2027: zo voorkomt u een handhavingsbrief van RVO.",
    excerpt: "Welke maatregelen verwacht RVO concreet? Wij geven een werkbaar overzicht per gebouwtype.",
  },
  {
    cat: "Corporaties · Praktijk",
    date: "10 april 2026",
    title: "Van label C naar label A: zes lessen uit 4.500 EP-W-opnames.",
    excerpt: "Een woningcorporatie bracht 14.000 VHE in beeld. Dit zijn de patronen die we tegenkwamen.",
  },
];

const CASES = [
  {
    type: "Woningcorporatie",
    size: "14.200 VHE",
    title: "Complexgewijze EP-W-actualisatie binnen 9 maanden",
    snippet: "Volledige portefeuille opnieuw opgenomen — inclusief bewonerscommunicatie en kwaliteitscontrole.",
    tags: ["EP-W", "Raamcontract", "Dashboards"],
    photo: "Adviseur op galerij · corporatiecomplex",
  },
  {
    type: "Gemeente",
    size: "320 panden",
    title: "EED-rapportage en DUMAVA-aanvraag voor maatschappelijk vastgoed",
    snippet: "Energie-efficiënte overheid: van rapportageplicht naar concreet investeringspad.",
    tags: ["EED", "DUMAVA", "MJOP"],
    photo: "Stadhuis · gemeentelijk vastgoed",
  },
  {
    type: "Commercieel vastgoed",
    size: "92 objecten",
    title: "Labelverbetering en GACS-implementatie voor logistieke portefeuille",
    snippet: "Van risico-inzicht naar verhuurbaarheid — gekoppeld aan ESG-rapportage.",
    tags: ["EP-U", "GACS", "ESG"],
    photo: "Distributiecentrum · zonnedak",
  },
];

const EXPERTS = [
  { name: "Joris Veerman", role: "Lead specialist EPBD / EED" },
  { name: "Marleen de Bruijn", role: "Senior adviseur corporaties" },
];

window.Homepage = Homepage;
