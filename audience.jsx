// audience.jsx — Doelgroeppagina template (Woningcorporaties)

function AudiencePage({ navigate }) {
  return (
    <div className="page" data-screen-label="Doelgroep — Woningcorporaties">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="breadcrumb">
            <a onClick={() => navigate("home")} style={{ cursor: "pointer" }}>Home</a>
            <span>›</span>
            <a onClick={() => navigate("audience")} style={{ cursor: "pointer" }}>Voor wie</a>
            <span>›</span>
            <span style={{ color: "var(--ink-2)" }}>Woningcorporaties</span>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "1.25fr 1fr", gap: 56, alignItems: "end" }}>
            <div className="stack">
              <Eyebrow>Voor woningcorporaties</Eyebrow>
              <h1 className="h1">
                Een corporatiepartner —<br/>
                <span className="display">die de portefeuille begrijpt.</span>
              </h1>
              <p className="lede">
                Voor woningcorporaties die complexgewijs willen werken, raamovereenkomsten waarderen
                en kwaliteit op grote schaal nodig hebben. Van EP-W-actualisatie tot
                bewonerscommunicatie en raamcontract — onder één regie.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Btn kind="primary" onClick={() => navigate("contact")}>Bespreek uw portefeuille</Btn>
                <Btn kind="ghost" onClick={() => navigate("case")}>Bekijk corporatie-cases</Btn>
              </div>
            </div>
            <Photo slot="aud-hero" label="Adviseur op galerij · corporatiecomplex / EP-W-opname" style={{ height: 420 }} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="proof">
        <div className="container">
          <div className="row">
            <div className="item"><span className="num">14k+</span> VHE in lopende raamcontracten</div>
            <div className="item"><span className="num">9</span> mnd actualisatie volledige portefeuille</div>
            <div className="item"><span className="num">BRL9500</span> voor alle EP-W-opnames</div>
            <div className="item"><span className="num">100%</span> bewonerscommunicatie inbegrepen</div>
          </div>
        </div>
      </section>

      {/* HERKENNING / CHALLENGES */}
      <section className="section">
        <div className="container">
          <div className="hr-label">Wat speelt er bij corporaties</div>
          <div className="grid cols-2 gap-lg">
            <div>
              <h2 className="h2">
                Drie opgaven die niet langer naast elkaar kunnen bestaan —<br/>
                <span className="display">en bij ons in één plan landen.</span>
              </h2>
              <p className="lede" style={{ marginTop: 24 }}>
                Actualisatie van energielabels, wettelijke verplichtingen onder EPBD IV en de
                verduurzamingsroute richting 2030 grijpen op elkaar in. Wij organiseren ze als één
                geheel, met één aanspreekpunt en één planning.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  t: "Verouderde labelmix",
                  d: "EP-W's verouderen — en daarmee uw data, uw subsidiekansen en uw onderhandelingspositie met financiers.",
                },
                {
                  t: "Complexgewijze planning",
                  d: "Opnames vragen om bewonerscommunicatie, sleuteloverdracht en kwaliteitscontrole op locatie. Logistiek is essentieel.",
                },
                {
                  t: "Compliance richting 2030",
                  d: "EPBD IV vraagt om een onderbouwde routekaart per complex. Geen one-pager, maar een werkbare planning.",
                },
              ].map((c, i) => (
                <div key={i} className="card" style={{ padding: 24 }}>
                  <div className="mono" style={{ color: "var(--ink-4)" }}>/0{i+1}</div>
                  <h3 className="h3" style={{ marginTop: 10, fontSize: 21 }}>{c.t}</h3>
                  <p className="body" style={{ marginTop: 10, fontSize: 15 }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WAT LEVEREN WE */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="hr-label">Wat Prosperos voor corporaties levert</div>
          <div className="grid cols-3 gap">
            {[
              { t: "Complexgewijze EP-W", d: "Detailopnames per complex, met steekproef-controles en eenduidige registratie." },
              { t: "Bewoners­communicatie", d: "Brieven, afspraakbevestigingen en sleuteldraaiboeken — afgestemd op uw huisstijl." },
              { t: "Portefeuille-dashboard", d: "Live status per complex, per cluster, per jaar — koppelbaar aan uw eigen vastgoedsysteem." },
              { t: "Raamovereenkomst", d: "Eén contract, vaste tarieven, schaalbare capaciteit en heldere SLA's." },
              { t: "Verduurzamings-route", d: "Van nulmeting naar prioritering en maatregelenadvies per complex." },
              { t: "Aanbestedings­support", d: "Bewijslast, certificeringen en referenties klaar voor uw inkoopproces." },
            ].map((d) => (
              <div key={d.t} className="card">
                <h3 className="h3" style={{ fontSize: 20 }}>{d.t}</h3>
                <p className="body" style={{ marginTop: 12, fontSize: 14.5 }}>{d.d}</p>
                <button className="btn btn-link" style={{ marginTop: 18, fontSize: 13 }} onClick={() => navigate("solution")}>Meer info <ArrowRight /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAAROM PROSPEROS */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <Eyebrow>Waarom Prosperos</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Kwaliteit en planning <br/>
                <span className="display">staan niet op gespannen voet.</span>
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                Onze proceskracht is niet afhankelijk van losse personen. Vier kwaliteitspoorten,
                landelijke capaciteit en een vast aanspreekpunt zorgen dat 'afspraak = afspraak'
                voelt als systeem, niet als belofte.
              </p>
              <ul style={{ margin: "32px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Eén senior accountmanager per corporatie — vast contactpunt, geen wisselende teams.",
                  "Steekproef-audits door onafhankelijke interne kwaliteitsfunctionaris.",
                  "Maandrapportage tegen mijlpalen, niet alleen tegen aantallen.",
                  "Capaciteit opgeschaald in dagen, niet maanden — landelijk team, vaste medewerkers.",
                ].map((p, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, alignItems: "start", fontSize: 15.5, lineHeight: 1.55 }}>
                    <span style={{ color: "var(--accent)", marginTop: 4 }}><Check size={18}/></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Photo slot="aud-team" label="Team-overleg · adviseurs bij grote plattegrond / kaart Nederland" style={{ height: 480 }} />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1fr", maxWidth: 980, margin: "0 auto" }}>
            <p className="quote">
              "Voor het eerst hebben we onze hele portefeuille in één keer in beeld gebracht — met
              dezelfde definities, dezelfde kwaliteit en dezelfde rapportagestructuur."
            </p>
            <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 16 }}>
              <Photo slot="aud-quote-photo" shape="circle" style={{ width: 56, height: 56, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>Manager Vastgoed</div>
                <div className="small">Woningcorporatie · 14.200 VHE · regio Midden-Nederland</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="section">
        <div className="container">
          <div className="hr-label">Corporatie-cases</div>
          <div className="grid cols-2 gap">
            {[
              { t: "Complexgewijze EP-W-actualisatie binnen 9 maanden", m: "14.200 VHE · 2025–2026", tags: ["EP-W", "Raamcontract", "Dashboard"], ph: "Galerijflat · adviseur op locatie", slot: "aud-case-1" },
              { t: "EPBD IV-routekaart voor mid-sized corporatie", m: "6.800 VHE · 2025", tags: ["EPBD IV", "Route 2030", "Bewoners"], ph: "Rijwoningen · advieswerk", slot: "aud-case-2" },
            ].map((c) => (
              <div key={c.t} className="case-card" onClick={() => navigate("case")}>
                <Photo slot={c.slot} label={c.ph} />
                <div className="body-blk">
                  <div className="meta">
                    <span>Woningcorporatie</span>
                    <span>{c.m}</span>
                  </div>
                  <h3 className="h3" style={{ fontSize: 22 }}>{c.t}</h3>
                  <div className="tag-row">
                    {c.tags.map((t) => <span key={t} className="pill neutral">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-panel">
            <div className="grid" style={{ gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <Eyebrow>Aan tafel</Eyebrow>
                <h2 className="h2" style={{ marginTop: 16, color: "#fff" }}>
                  Bespreek uw portefeuille<br/>
                  <span className="display" style={{ color: "oklch(0.7 0.08 145)" }}>met een corporatie-specialist.</span>
                </h2>
                <p className="lede" style={{ marginTop: 18 }}>
                  Geen verkoopgesprek. Een werksessie waarin we uw labelmix, deadlines en
                  raamcontract-opties helder krijgen — inclusief realistische tijdspad.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                  <button className="btn btn-accent" onClick={() => navigate("contact")}>
                    <span>Plan een werksessie</span><span className="arr"><ArrowRight /></span>
                  </button>
                  <button className="btn btn-ghost" onClick={() => navigate("contact")}>
                    <span>Vraag referentielijst aan</span><span className="arr"><ArrowRight /></span>
                  </button>
                </div>
              </div>
              <div className="specialist">
                <Photo slot="aud-cta-specialist" shape="circle" style={{ width: 64, height: 64, flexShrink: 0 }} />
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

window.AudiencePage = AudiencePage;
