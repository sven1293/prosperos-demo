// solution.jsx — Oplossingspagina template (Compliance & wetgeving)

function SolutionPage({ navigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <div className="page" data-screen-label="Oplossing — Compliance & wetgeving">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="breadcrumb">
            <a onClick={() => navigate("home")} style={{ cursor: "pointer" }}>Home</a>
            <span>›</span>
            <a onClick={() => navigate("solution")} style={{ cursor: "pointer" }}>Oplossingen</a>
            <span>›</span>
            <span style={{ color: "var(--ink-2)" }}>Compliance & wetgeving</span>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "end" }}>
            <div className="stack">
              <Eyebrow>Oplossing</Eyebrow>
              <h1 className="h1">
                Compliance &amp; wetgeving —<br/>
                <span className="display">van verplichting naar plan.</span>
              </h1>
              <p className="lede">
                EPBD IV, EED, Informatieplicht, EML, labelverplichtingen, GACS en publieke
                rapportageplicht. Wij vertalen wetgeving naar een werkbaar tijdpad voor uw
                portefeuille — met de uitvoeringskracht om het ook te leveren.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Btn kind="primary" onClick={() => navigate("contact")}>Plan een compliance-scan</Btn>
                <Btn kind="ghost" onClick={() => navigate("knowledge")}>Bekijk kennisbank</Btn>
              </div>
              <div className="tag-row" style={{ marginTop: 8 }}>
                <span className="pill">EPBD IV</span>
                <span className="pill">EED / Informatieplicht</span>
                <span className="pill">EML</span>
                <span className="pill">GACS</span>
                <span className="pill">Energie-efficiënte overheid</span>
              </div>
            </div>
            <Photo slot="sol-hero" label="Adviseur · gesprek met directie / vastgoedmanager" style={{ height: 380 }} />
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "260px 1fr", gap: 40, alignItems: "center" }}>
            <div className="hr-label" style={{ margin: 0 }}>Voor wie relevant</div>
            <div className="grid cols-3 gap-sm">
              {["Woningcorporaties", "Banken & financiers", "Gemeenten & provincies", "Commercieel vastgoed", "MKB-pandeigenaren", "Publiek vastgoedbeheer"].map((a) => (
                <div key={a} className="flex" style={{ gap: 10, alignItems: "center", padding: "8px 0" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UITDAGINGEN */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
            <div>
              <Eyebrow>Uitdagingen</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Wetgeving stapelt zich op —<br/>
                <span className="display">en de horizon verschuift.</span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { t: "Welke gebouwen moeten eerst worden aangepakt?", d: "EPBD IV introduceert drempeljaren per gebouwtype. Zonder portefeuilleoverzicht stuurt u op gevoel." },
                { t: "Welke EML-maatregelen verwacht RVO concreet?", d: "Informatieplicht 2027 staat eraan te komen. Steekproeven van handhaving nemen al toe." },
                { t: "Hoe verbind ik wetgeving aan onze MJOP?", d: "Verplichtingen vragen om data, maatregelen om budget. Beide horen in één planning." },
                { t: "Wie controleert intern of we compliant zijn?", d: "Audits werken alleen als de onderbouwing reproduceerbaar is. Met een audit-spoor is dat geborgd." },
              ].map((c, i) => (
                <div key={i} style={{ padding: "24px 0", borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "40px 1fr", gap: 20, alignItems: "start" }}>
                  <span className="mono">/0{i+1}</span>
                  <div>
                    <h4 className="h4">{c.t}</h4>
                    <p className="body" style={{ marginTop: 8, fontSize: 15 }}>{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOE WIJ HELPEN — process */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="flex between center" style={{ marginBottom: 48, gap: 32, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 720 }}>
              <Eyebrow>Hoe Prosperos helpt</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Een gefaseerde aanpak —<br/>
                <span className="display">geen black box.</span>
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: 360, fontSize: 16 }}>
              Vijf stappen, één eigenaar per fase, en rapportage op het detailniveau dat ú nodig heeft.
            </p>
          </div>
          <div className="process">
            {[
              { n: "01", t: "Compliance-scan", d: "Welke wetgeving raakt welk deel van uw portefeuille — incl. drempeljaren." },
              { n: "02", t: "Datavalidatie", d: "We toetsen labelmix, EP-aanwezigheid, EML-status, GACS-scope en rapportageverplichtingen." },
              { n: "03", t: "Roadmap & prioritering", d: "Een tijdslijn per object en per jaar, gekoppeld aan budgetkaders en MJOP." },
              { n: "04", t: "Uitvoering", d: "Opnames, berekeningen, registraties — landelijk uitgevoerd, intern gecontroleerd." },
              { n: "05", t: "Audit-spoor", d: "Onderbouwing, rapportage en bewijsvoering klaar voor RVO, accountant of toezichthouder." },
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

      {/* DIENSTEN */}
      <section className="section">
        <div className="container">
          <div className="hr-label">Onderliggende diensten</div>
          <div className="grid cols-4 gap-sm">
            {[
              { t: "EED-audit", m: "Elke 4 jaar verplicht" },
              { t: "Informatieplicht / EML", m: "RVO-aangifte" },
              { t: "Energielabel utiliteit", m: "EP-U" },
              { t: "Energielabel woning", m: "EP-W" },
              { t: "GACS-verplichting", m: "Building Automation" },
              { t: "NEN 2580", m: "Oppervlakte" },
              { t: "Maatwerkadvies", m: "Vervolg op opname" },
              { t: "Rapportage publiek", m: "Energie-efficiënte overheid" },
            ].map((d) => (
              <div key={d.t} className="card" style={{ padding: 20, cursor: "pointer" }} onClick={() => navigate("solution")}>
                <div className="mono" style={{ marginBottom: 10 }}>{d.m}</div>
                <h4 className="h4">{d.t}</h4>
                <div style={{ marginTop: 14, fontSize: 13, color: "var(--accent-ink)", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
                  Naar dienst <ArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEWIJSVOERING */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <Photo slot="sol-kwaliteit" label="Adviseur · audit / kwaliteitscontrole op kantoor" style={{ height: 460 }} />
            <div>
              <Eyebrow>Bewijsvoering</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Aantoonbare kwaliteit —<br/>
                <span className="display">niet alleen op papier.</span>
              </h2>
              <ul style={{ margin: "28px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "BRL9500-gecertificeerd voor EP-W en EP-U; ISO 9001-geborgd.",
                  "Vier kwaliteitspoorten per opname — van veldinvoer tot eindcontrole.",
                  "Onafhankelijke interne audits, met traceerbaarheid op individueel object.",
                  "Auteurs actief in FedEC, KEGO en kennisnetwerken EPBD/EED.",
                ].map((p, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, alignItems: "start", fontSize: 15.5, lineHeight: 1.55 }}>
                    <span style={{ color: "var(--accent)", marginTop: 4 }}><Check size={18}/></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <button className="btn btn-link" style={{ marginTop: 28 }} onClick={() => navigate("over")}>
                Kwaliteit & certificering <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "300px 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <Eyebrow>Veelgestelde vragen</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Compliance,<br/>
                <span className="display">in helder Nederlands.</span>
              </h2>
            </div>
            <div className="faq">
              {[
                { q: "Wanneer geldt de EED-auditplicht voor mijn organisatie?", a: "De EED-auditplicht geldt voor grote ondernemingen (≥250 fte of ≥50 mln omzet én balans). Sinds 2023 zijn de drempels herzien onder EED-richtlijn 2023/1791. Wij stellen vooraf samen met u een grondige scope-bepaling op." },
                { q: "Wat verandert er door EPBD IV voor utiliteit?", a: "EPBD IV legt minimum­energieprestatie-eisen op voor de slechtste utiliteit (label G in 2027, label F in 2030). Voor woningen worden vergelijkbare drempeljaren ingevoerd. Wij brengen uw label­mix en risicogroepen in kaart." },
                { q: "Is GACS hetzelfde als de EPBD?", a: "Nee. GACS (Gebouw Automatisering- en Controle Systeem) is een specifieke verplichting onder de EPBD voor utiliteit boven 290 kW, met een implementatiedeadline. Wij beoordelen of uw gebouwen onder de plicht vallen." },
                { q: "Kan Prosperos onze gehele compliance-administratie overnemen?", a: "We werken met portfolio-monitoring waarin verplichtingen, deadlines en bewijslast per object geborgd zijn. De eindverantwoordelijkheid blijft bij u — wij leveren de onderbouwing en signalen." },
                { q: "Wat als RVO een handhavingsbrief stuurt?", a: "We helpen met reactieve onderbouwing en aanvullende rapportage. Onze aanpak voorkomt dit meestal vooraf: tijdig signaal op deadlines is onderdeel van de monitoring." },
              ].map((f, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    <span>{f.q}</span>
                    <span className="ic"><Plus /></span>
                  </button>
                  <div className="faq-a">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED KNOWLEDGE */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="flex between center" style={{ marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <h2 className="h2">Lees verder in onze kennisbank.</h2>
            <button className="btn btn-link" onClick={() => navigate("knowledge")}>Naar de kennisbank <ArrowRight /></button>
          </div>
          <div className="grid cols-3 gap">
            {[
              { c: "EPBD IV", t: "Drempeljaren utiliteit: wat het verschil maakt tussen 2027 en 2030", d: "9 min" },
              { c: "EED", t: "EML 2027: zo bouwt u een audit-vast dossier", d: "6 min" },
              { c: "GACS", t: "Stappenplan voor utiliteit boven 290 kW", d: "7 min" },
            ].map((k) => (
              <div key={k.t} className="card card-link" onClick={() => navigate("knowledge")}>
                <div className="mono" style={{ marginBottom: 14, color: "var(--accent-ink)" }}>{k.c}</div>
                <h3 className="h3" style={{ fontSize: 21 }}>{k.t}</h3>
                <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12.5, color: "var(--ink-3)" }}>
                  <span>{k.d} leestijd</span>
                  <ArrowRight />
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
                <Eyebrow>Compliance-scan</Eyebrow>
                <h2 className="h2" style={{ marginTop: 16, color: "#fff" }}>
                  Wilt u weten welke wetgeving<br/>
                  <span className="display" style={{ color: "oklch(0.7 0.08 145)" }}>uw portefeuille het eerst raakt?</span>
                </h2>
                <p className="lede" style={{ marginTop: 18 }}>
                  Wij maken een snelle scan op basis van uw objectlijst, labelmix en gebouwtypes — en
                  leveren een werkbare prioritering binnen 10 werkdagen.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                  <button className="btn btn-accent" onClick={() => navigate("contact")}>
                    <span>Plan een compliance-scan</span><span className="arr"><ArrowRight /></span>
                  </button>
                  <button className="btn btn-ghost" onClick={() => navigate("contact")}>
                    <span>Vraag de checklist aan</span><span className="arr"><ArrowRight /></span>
                  </button>
                </div>
              </div>
              <div className="specialist">
                <Photo slot="sol-cta-specialist" shape="circle" style={{ width: 64, height: 64, flexShrink: 0 }} />
                <div>
                  <div className="name">Joris Veerman</div>
                  <div className="role">Lead specialist · EPBD / EED</div>
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

window.SolutionPage = SolutionPage;
