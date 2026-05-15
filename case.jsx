// case.jsx — Casepagina template

function CasePage({ navigate }) {
  return (
    <div className="page" data-screen-label="Case — Corporatie 14.200 VHE">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="breadcrumb">
            <a onClick={() => navigate("home")} style={{ cursor: "pointer" }}>Home</a>
            <span>›</span>
            <a onClick={() => navigate("case")} style={{ cursor: "pointer" }}>Cases</a>
            <span>›</span>
            <span style={{ color: "var(--ink-2)" }}>Corporatie · 14.200 VHE</span>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "end" }}>
            <div className="stack">
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span className="pill">Woningcorporatie</span>
                <span className="pill neutral">14.200 VHE</span>
                <span className="pill neutral">2025–2026</span>
              </div>
              <h1 className="h1">
                Complexgewijze EP-W-actualisatie —<br/>
                <span className="display">14.200 VHE binnen 9 maanden.</span>
              </h1>
              <p className="lede">
                Een woningcorporatie in Midden-Nederland bracht haar volledige portefeuille opnieuw
                in beeld. Bewonerscommunicatie, kwaliteitsborging en rapportage onder één regie —
                klaar voor de routekaart richting 2030.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 28, background: "var(--bg-soft)", borderRadius: 12, border: "1px solid var(--line)" }}>
              <h5 style={{ font: "500 11px/1 var(--mono)", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--ink-4)", margin: 0 }}>Project in cijfers</h5>
              <div className="grid cols-2 gap-sm">
                {[
                  { n: "14.200", l: "VHE in scope" },
                  { n: "9 mnd", l: "Doorlooptijd" },
                  { n: "100%", l: "EP-W vernieuwd" },
                  { n: "0", l: "Afwijkingen audit" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="display" style={{ fontSize: 32, color: "var(--ink)" }}>{s.n}</div>
                    <div className="small">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Photo slot="case-hero" label="Beeld project · galerijflat met adviseur of overzicht complex" style={{ height: 480, marginTop: 56 }} />
        </div>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "260px 1fr", gap: 64, alignItems: "start" }}>
            <div className="hr-label" style={{ margin: 0 }}>Context</div>
            <div>
              <h2 className="h2">
                Een verouderde labelmix —<br/>
                <span className="display">en een deadline die naderde.</span>
              </h2>
              <p className="lede" style={{ marginTop: 24 }}>
                De corporatie had haar EP-W's nog grotendeels vóór 2018 laten opnemen. Met de
                introductie van EPBD IV én vernieuwde NTA 8800-uitgangspunten was actualisatie
                noodzakelijk. De vraag was niet óf, maar hoe — zonder onnodig veel bewonersafspraken
                en zonder verlies van regie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPGAVE / AANPAK / RESULTAAT */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid cols-3 gap">
            {[
              {
                k: "Opgave",
                t: "Volledige EP-W-actualisatie binnen het boekjaar — zonder verstoring van het reguliere onderhoud.",
                p: ["Labelmix actueel maken voor 14.200 VHE", "Bewonerscommunicatie centraal regelen", "Rapportage gereed voor financier én toezichthouder"],
              },
              {
                k: "Aanpak",
                t: "Een gefaseerde, complexgewijze planning met dubbel-controle en één vast aanspreekpunt voor de corporatie.",
                p: ["Steekproef-detailopnames per complex (BRL9500)", "Eigen huisstijl in bewonersbrieven en draaiboeken", "Vier kwaliteitspoorten per opname"],
              },
              {
                k: "Resultaat",
                t: "Alle 14.200 VHE binnen 9 maanden opnieuw opgenomen, met een audit zonder afwijkingen.",
                p: ["Portefeuille-dashboard live in 4 maanden", "0 afwijkingen externe audit (BRL9500)", "Routekaart richting EPBD IV opgeleverd"],
              },
            ].map((b) => (
              <div key={b.k} className="card" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <h3 className="h3" style={{ fontSize: 20 }}>{b.k}</h3>
                <p className="body" style={{ fontSize: 15.5 }}>{b.t}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {b.p.map((x) => (
                    <li key={x} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: 10, fontSize: 14, lineHeight: 1.5, color: "var(--ink-2)" }}>
                      <span style={{ color: "var(--accent)" }}><Check size={16}/></span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <p className="quote">
              "Het verschil zit niet in de opname zelf, maar in de regie eromheen. Bewonerscommunicatie,
              kwaliteits­controle en rapportage liepen als één proces — dat scheelde maanden."
            </p>
            <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 16 }}>
              <Photo slot="case-quote-photo" shape="circle" style={{ width: 56, height: 56, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>Manager Vastgoed</div>
                <div className="small">Woningcorporatie · 14.200 VHE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE / PROCESS */}
      <section className="section">
        <div className="container">
          <div className="hr-label">Tijdspad</div>
          <div className="process">
            {[
              { n: "M1", t: "Kickoff & data-import", d: "Bestaande objectlijst en EP-historie ingelezen; clusters bepaald." },
              { n: "M2", t: "Pilotcomplex", d: "Eerste complex als ijkpunt — proces, communicatie en kwaliteitspoorten getest." },
              { n: "M3–M8", t: "Opschaling", d: "Landelijk team aan het werk; wekelijkse rapportage op cluster­niveau." },
              { n: "M7", t: "Dashboard live", d: "Portefeuille-dashboard live; corporatie ziet status per object/cluster." },
              { n: "M9", t: "Oplevering & audit", d: "Eindrapportage, externe audit (BRL9500): 0 afwijkingen." },
            ].map((s) => (
              <div key={s.n} className="step">
                <div className="n">{s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEBRUIKTE DIENSTEN */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <Eyebrow>Gebruikte diensten & oplossingen</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Wat zat er in <br/>
                <span className="display">de aanpak?</span>
              </h2>
            </div>
            <div className="grid cols-2 gap-sm">
              {[
                { t: "EP-W detailopname", c: "Dienst" },
                { t: "BRL9500-borging", c: "Kwaliteit" },
                { t: "Bewonerscommunicatie", c: "Project" },
                { t: "Portefeuille-dashboard", c: "Data" },
                { t: "Routekaart EPBD IV", c: "Strategie" },
                { t: "Raamovereenkomst", c: "Contract" },
              ].map((d) => (
                <div key={d.t} className="card" style={{ padding: 18, cursor: "pointer" }} onClick={() => navigate("solution")}>
                  <div className="mono" style={{ marginBottom: 8 }}>{d.c}</div>
                  <h4 className="h4">{d.t}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-panel">
            <div className="grid" style={{ gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <Eyebrow>Vergelijkbare opgave?</Eyebrow>
                <h2 className="h2" style={{ marginTop: 16, color: "#fff" }}>
                  Een corporatie­portefeuille<br/>
                  <span className="display" style={{ color: "oklch(0.7 0.08 145)" }}>laat zich plannen.</span>
                </h2>
                <p className="lede" style={{ marginTop: 18 }}>
                  Bespreek met onze corporatie-specialist hoe een vergelijkbare aanpak er bij uw
                  organisatie uit kan zien — inclusief planning, capaciteit en raamcontract.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                  <button className="btn btn-accent" onClick={() => navigate("contact")}>
                    <span>Plan een werksessie</span><span className="arr"><ArrowRight /></span>
                  </button>
                  <button className="btn btn-ghost" onClick={() => navigate("case")}>
                    <span>Meer corporatie-cases</span><span className="arr"><ArrowRight /></span>
                  </button>
                </div>
              </div>
              <div className="specialist">
                <Photo slot="case-cta-specialist" shape="circle" style={{ width: 64, height: 64, flexShrink: 0 }} />
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

window.CasePage = CasePage;
