// knowledge.jsx — Kennis/themapagina template (EPBD IV)

function KnowledgePage({ navigate }) {
  return (
    <div className="page" data-screen-label="Kennis — EPBD IV">
      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 48 }}>
        <div className="container">
          <div className="breadcrumb">
            <a onClick={() => navigate("home")} style={{ cursor: "pointer" }}>Home</a>
            <span>›</span>
            <a onClick={() => navigate("knowledge")} style={{ cursor: "pointer" }}>Kennis</a>
            <span>›</span>
            <span style={{ color: "var(--ink-2)" }}>EPBD IV</span>
          </div>

          <div style={{ maxWidth: 920 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
              <span className="pill">EPBD IV</span>
              <span className="pill neutral">12 mei 2026</span>
              <span className="pill neutral">9 min leestijd</span>
            </div>
            <h1 className="h1">
              EPBD IV definitief —<br />
              <span className="display">wat betekenen de drempeljaren voor uw portefeuille?</span>
            </h1>
            <p className="lede" style={{ marginTop: 28 }}>
              De Europese Energy Performance of Buildings Directive (EPBD IV) is in mei 2026 definitief
              aangenomen. Voor utiliteit en woningen gelden vanaf 2027 en 2030 minimum­eisen.
              Wij vertalen artikel 9 en bijlage III naar de Nederlandse context.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <section className="section-sm">
        <div className="container">
          <div className="layout-side">
            {/* SIDEBAR */}
            <aside className="side-nav">
              <h5>Categorieën</h5>
              <a className="active" onClick={(e)=>{e.preventDefault();}} href="#">EPBD IV</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">Energielabels & NTA 8800</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">EED / Informatieplicht</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">EML</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">GACS</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">DUMAVA & subsidies</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">Renovatiepaspoort</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">Verduurzaming utiliteit</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">Corporaties</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">BENG / MPG / nieuwbouw</a>

              <h5 style={{ marginTop: 32 }}>Op deze pagina</h5>
              <a onClick={(e)=>{e.preventDefault();}} href="#">Wat is EPBD IV?</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">Impact per doelgroep</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">Drempeljaren</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">Checklist</a>
              <a onClick={(e)=>{e.preventDefault();}} href="#">Veelgestelde vragen</a>
            </aside>

            {/* ARTICLE */}
            <article className="article">
              <h3 className="h3" style={{ fontSize: 24, margin: "0 0 14px" }}>Wat is EPBD IV?</h3>
              <p>
                EPBD IV is de vierde herziening van de Europese Energy Performance of Buildings Directive.
                De richtlijn introduceert verplichte minimum­energieprestatie-eisen voor zowel utiliteit
                als woningen, en stelt drempeljaren waarop labels G en F uit de markt moeten zijn. Lidstaten
                moeten de richtlijn binnen twee jaar omzetten naar nationale wetgeving.
              </p>
              <p>
                Voor Nederland — waar de bestaande labelverplichting voor utiliteit (kantoorpanden ≥100 m²
                op minimaal label C) al sinds 2023 geldt — betekent dit dat de horizon verschuift naar
                <em> portefeuilles in plaats van losse gebouwen</em>. Een individuele opname is niet
                langer voldoende; u heeft een routekaart per cluster nodig.
              </p>

              <h3 className="h3" style={{ fontSize: 24 }}>Drempeljaren utiliteit</h3>
              <ul>
                <li><strong>2027:</strong> alle utiliteitsgebouwen minimaal label G uit; geleidelijk uitbreiden naar publieke gebouwen eerst.</li>
                <li><strong>2030:</strong> minimum label F voor commerciële utiliteit; publieke gebouwen op minimaal label E.</li>
                <li><strong>2033:</strong> alle utiliteit minimaal label E; voor specifieke gebouwtypes versnelde routes mogelijk.</li>
                <li><strong>2040–2050:</strong> aanscherping richting nul-emissie nieuwbouwstandaard en bestaande bouw nul-emissie in 2050.</li>
              </ul>

              <h3 className="h3" style={{ fontSize: 24 }}>Drempeljaren woningen</h3>
              <ul>
                <li><strong>2030:</strong> woningen onder label E, F en G moeten worden verbeterd — uitzonderingen voor monumenten en specifieke woningtypes.</li>
                <li><strong>2033:</strong> stappenplan richting minimum label D, in lijn met nationale aanpak.</li>
              </ul>

              <blockquote>
                "EPBD IV is niet een wet om af te vinken. Het is een planningsinstrument voor de
                komende vijftien jaar — en daarmee een strategische kwestie, geen administratieve."
              </blockquote>

              <h3 className="h3" style={{ fontSize: 24 }}>Wat betekent dit per doelgroep?</h3>
              <p>
                De impact verschilt sterk per organisatie. Hieronder een eerste vertaling — uitgebreidere
                analyses per doelgroep vindt u op de bijbehorende pagina's.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, margin: "24px 0 40px" }}>
                {[
                  { t: "Woningcorporaties", d: "Versnelde EP-W-actualisatie en complexgewijze prioritering. Een routekaart per cluster wordt onvermijdelijk." },
                  { t: "Banken & financiers", d: "Labelmix in de portefeuille wordt onderdeel van ESG-rapportage. Risicowegingen verschuiven richting label." },
                  { t: "Gemeenten & publiek vastgoed", d: "Publieke gebouwen moeten voorop lopen. EED-rapportage en EPBD IV grijpen ineen." },
                  { t: "Commercieel vastgoed", d: "Verhuurbaarheid en waarde gekoppeld aan labelpositie. Compliance wordt waarde-driver." },
                ].map((p) => (
                  <div key={p.t} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, paddingBottom: 18, borderBottom: "1px solid var(--line)" }}>
                    <h4 className="h4" style={{ color: "var(--ink)" }}>{p.t}</h4>
                    <p style={{ margin: 0, color: "var(--ink-2)", fontSize: 15.5, lineHeight: 1.55 }}>{p.d}</p>
                  </div>
                ))}
              </div>

              <h3 className="h3" style={{ fontSize: 24 }}>Checklist: in 5 stappen EPBD-IV-ready</h3>
              <ul>
                <li>Breng uw actuele labelmix in beeld — inclusief verouderde EP's.</li>
                <li>Identificeer de gebouwen die in 2027 en 2030 niet meer voldoen.</li>
                <li>Koppel verplichte maatregelen aan uw MJOP — voorkom dubbel werk.</li>
                <li>Maak per cluster een investeringsroute met realistisch tijdspad.</li>
                <li>Borg de audit-trail per object — bewijslast voor accountant of toezichthouder.</li>
              </ul>
            </article>

            {/* ASIDE */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 24, position: "sticky", top: 96 }}>
              <div className="card" style={{ background: "var(--ink)", color: "#fff", borderColor: "var(--ink)" }}>
                <Eyebrow><span style={{ color: "oklch(0.7 0.08 145)" }}>Laat uw situatie beoordelen</span></Eyebrow>
                <h3 className="h3" style={{ marginTop: 14, color: "#fff", fontSize: 20 }}>
                  Wat betekent EPBD IV voor uw portefeuille?
                </h3>
                <p className="small" style={{ marginTop: 12, color: "oklch(0.78 0.02 245)" }}>
                  Wij maken een eerste analyse op basis van uw objectlijst en labelmix.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 20, paddingTop: 18, borderTop: "1px solid oklch(0.32 0.04 245)" }}>
                  <Photo slot="know-cta-photo" shape="circle" style={{ width: 48, height: 48, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>Joris Veerman</div>
                    <div style={{ fontSize: 12, color: "oklch(0.7 0.02 245)" }}>Lead EPBD / EED</div>
                    <div style={{ fontSize: 12.5, fontFamily: "var(--mono)", color: "#fff", marginTop: 4 }}>+31 6 00 00 00 00</div>
                  </div>
                </div>
                <button className="btn btn-accent btn-sm" style={{ marginTop: 18, width: "100%", justifyContent: "center" }} onClick={() => navigate("contact")}>
                  <span>Plan een analyse</span><span className="arr"><ArrowRight /></span>
                </button>
              </div>

              <div className="card">
                <h5 style={{ font: "500 11px/1 var(--mono)", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--ink-4)", margin: "0 0 12px" }}>Auteur</h5>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <Photo slot="know-author-photo" shape="circle" style={{ width: 48, height: 48, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>Joris Veerman</div>
                    <div className="small">Lead specialist EPBD / EED</div>
                  </div>
                </div>
                <p className="small" style={{ marginTop: 14 }}>
                  Joris is actief in FedEC en KEGO. Hij adviseert overheden, corporaties en banken
                  over de impact van Europese richtlijnen op vastgoedportefeuilles.
                </p>
              </div>

              <div className="card">
                <h5 style={{ font: "500 11px/1 var(--mono)", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--ink-4)", margin: "0 0 14px" }}>Gerelateerde diensten</h5>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Compliance-scan", "Energielabel utiliteit", "EED-audit", "Maatwerkadvies"].map((d) => (
                    <a key={d} onClick={(e) => { e.preventDefault(); navigate("solution"); }} href="#" style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: 14, borderBottom: "1px solid var(--line-soft)" }}>
                      <span>{d}</span><ArrowRight />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section" style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="flex between center" style={{ marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <h2 className="h2">Verder lezen.</h2>
            <button className="btn btn-link" onClick={() => navigate("knowledge")}>Alle artikelen <ArrowRight /></button>
          </div>
          <div className="grid cols-3 gap">
            {[
              { c: "EED", t: "EML 2027: zo bouwt u een audit-vast dossier", d: "6 min", date: "28 apr 2026" },
              { c: "Corporaties", t: "Van label C naar A: zes lessen uit 4.500 EP-W-opnames", d: "8 min", date: "10 apr 2026" },
              { c: "GACS", t: "Stappenplan voor utiliteit boven 290 kW", d: "7 min", date: "22 mrt 2026" },
            ].map((k) => (
              <div key={k.t} className="know-tile" style={{ borderTop: 0, background: "var(--bg-card)", padding: 24, borderRadius: 12, border: "1px solid var(--line)" }} onClick={() => navigate("knowledge")}>
                <div className="meta-row">
                  <span>{k.c}</span>
                  <span>{k.date}</span>
                </div>
                <div className="know-title">{k.t}</div>
                <div style={{ marginTop: 8, fontSize: 13, color: "var(--ink-3)" }}>{k.d} leestijd</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

window.KnowledgePage = KnowledgePage;
