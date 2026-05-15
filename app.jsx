// app.jsx — main app, routing, tweaks

const TWEAK_DEFAULTS = window.TWEAK_DEFAULTS;

function OverPage({ navigate }) {
  return (
    <div className="page" data-screen-label="Over Prosperos">
      <section className="hero">
        <div className="container">
          <div className="breadcrumb">
            <a onClick={() => navigate("home")} style={{ cursor: "pointer" }}>Home</a>
            <span>›</span>
            <span style={{ color: "var(--ink-2)" }}>Over Prosperos</span>
          </div>
          <div style={{ maxWidth: 920 }}>
            <Eyebrow>Wie wij zijn</Eyebrow>
            <h1 className="h1" style={{ marginTop: 16 }}>
              Een landelijke kennispartner —<br/>
              <span className="display">voor de bouw, het beheer en het beleid.</span>
            </h1>
            <p className="lede" style={{ marginTop: 28 }}>
              Prosperos werd opgericht om hoogwaardige energieprestatie-advisering schaalbaar te
              maken. Vandaag bedienen we corporaties, banken, gemeenten en commercieel vastgoed —
              met dezelfde toewijding voor kwaliteit waarmee we begonnen.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Photo slot="over-team" label="Team Prosperos · groepsfoto / werkbespreking" style={{ height: 520 }} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <Eyebrow>Ambitie 2040</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Bijdragen aan de verduurzaming van <span className="display">één miljoen woningen en bedrijven.</span>
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                Geen marketinguitspraak: een richtinggevende ambitie die onze organisatie­ontwikkeling
                stuurt — in capaciteit, kwaliteit, opleiding en samenwerking met opdrachtgevers.
              </p>
            </div>
            <div>
              <Eyebrow>Onze kernwaarden</Eyebrow>
              <div className="grid cols-2 gap-sm" style={{ marginTop: 18 }}>
                {[
                  { t: "Samenwerken", d: "Korte lijnen, vaste contactpersonen, geen vrijblijvende ketens." },
                  { t: "Flexibiliteit", d: "Aanpak en rapportage afgestemd op uw portefeuille en stakeholders." },
                  { t: "Positiviteit", d: "Werken vanuit oplossingen, niet vanuit obstakels." },
                  { t: "Oplossings-gerichtheid", d: "Liever een werkbare route dan een perfect plan dat blijft liggen." },
                ].map((v) => (
                  <div key={v.t} className="card" style={{ padding: 20 }}>
                    <h4 className="h4">{v.t}</h4>
                    <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.5, color: "var(--ink-3)" }}>{v.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="hr-label">Klantbeloften</div>
          <div className="grid cols-2 gap">
            {[
              { t: "Afspraak = afspraak", d: "Leverbetrouwbaarheid, proactieve communicatie en duidelijkheid over proces en planning." },
              { t: "Snel en schaalbaar", d: "Landelijke capaciteit, korte lijnen, geschikt voor portfolio's en raamovereenkomsten." },
              { t: "Flexibiliteit en maatwerk", d: "Aanpak afgestemd op portefeuille, processen en stakeholders van uw organisatie." },
              { t: "Aantoonbare kwaliteit", d: "BRL9500, ervaren adviseurs, checks en audits — kwaliteit als systeem." },
            ].map((b) => (
              <div key={b.t} className="card" style={{ padding: 32 }}>
                <h3 className="h3" style={{ fontSize: 22 }}>{b.t}</h3>
                <p className="body" style={{ marginTop: 12 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}>
            <Photo slot="over-quality" label="Auditmoment · kwaliteitscontrole" style={{ height: 480 }}/>
            <div>
              <Eyebrow>Kwaliteit & certificering</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Een proces dat <span className="display">losse personen overstijgt.</span>
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                BRL9500 voor EP-W en EP-U. ISO 9001 op organisatieniveau. Interne audits,
                opleidingsstructuur en steekproef-controles maken kwaliteit een systeem — niet een
                afhankelijkheid.
              </p>
              <div className="stats-strip" style={{ marginTop: 32 }}>
                <div className="stat"><span className="num">BRL9500</span><span className="lbl">EP-W & EP-U gecertificeerd</span></div>
                <div className="stat"><span className="num">ISO 9001</span><span className="lbl">Organisatiebreed</span></div>
                <div className="stat"><span className="num">0</span><span className="lbl">Afwijkingen externe audit 2025</span></div>
                <div className="stat"><span className="num">FedEC</span><span className="lbl">Lidmaatschap & KEGO-rol CEO</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-panel">
            <div className="grid" style={{ gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <Eyebrow>Werken bij Prosperos</Eyebrow>
                <h2 className="h2" style={{ marginTop: 16, color: "#fff" }}>
                  Werken aan een opgave die <span className="display" style={{ color: "oklch(0.7 0.08 145)" }}>vijftien jaar verder reikt.</span>
                </h2>
                <p className="lede" style={{ marginTop: 18 }}>
                  Wij groeien — in mensen, in opdrachten en in kennis. Onze werkenbij-omgeving laat
                  zien hoe het is om bij ons in dienst te zijn.
                </p>
                <button className="btn btn-accent" style={{ marginTop: 24 }} onClick={(e) => e.preventDefault()}>
                  <span>Naar werkenbijprosperos.nl</span><span className="arr"><ArrowUpRight /></span>
                </button>
              </div>
              <Photo slot="over-werkenbij" label="Adviseur op locatie · projectfoto" style={{ height: 280, borderRadius: 12 }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPage({ navigate }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [topic, setTopic] = React.useState("vastgoedportefeuille");

  return (
    <div className="page" data-screen-label="Contact">
      <section className="hero">
        <div className="container">
          <div className="breadcrumb">
            <a onClick={() => navigate("home")} style={{ cursor: "pointer" }}>Home</a>
            <span>›</span>
            <span style={{ color: "var(--ink-2)" }}>Contact</span>
          </div>
          <div style={{ maxWidth: 760 }}>
            <Eyebrow>Aan tafel</Eyebrow>
            <h1 className="h1" style={{ marginTop: 16 }}>
              Bespreek uw opgave —<br/>
              <span className="display">met de juiste specialist.</span>
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Vul het formulier in of bel direct. Wij koppelen u binnen één werkdag aan de
              specialist die het beste past bij uw vraag.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "start" }}>
            <div className="card" style={{ padding: 40 }}>
              <h3 className="h3" style={{ marginBottom: 28 }}>Stuur ons een bericht</h3>
              {submitted ? (
                <div style={{ padding: 32, background: "var(--accent-soft)", borderRadius: 12, border: "1px solid color-mix(in oklch, var(--accent) 25%, transparent)" }}>
                  <div style={{ color: "var(--accent-ink)", marginBottom: 8 }}><Check size={28}/></div>
                  <h4 className="h4">Bedankt — uw bericht is verstuurd.</h4>
                  <p style={{ margin: "8px 0 0", fontSize: 14.5, color: "var(--ink-2)" }}>
                    Wij koppelen u binnen één werkdag aan de juiste specialist.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "grid", gap: 18 }}>
                  <div className="grid cols-2 gap-sm">
                    <Field label="Naam *" placeholder="Voor- en achternaam" />
                    <Field label="Organisatie *" placeholder="Bedrijfsnaam" />
                  </div>
                  <div className="grid cols-2 gap-sm">
                    <Field label="E-mailadres *" type="email" placeholder="naam@organisatie.nl" />
                    <Field label="Telefoon" placeholder="+31 6 ..." />
                  </div>
                  <div>
                    <label style={fLabel}>Type opgave *</label>
                    <select value={topic} onChange={(e) => setTopic(e.target.value)} style={fInput}>
                      <option value="vastgoedportefeuille">Vastgoedportefeuille</option>
                      <option value="wetgeving">Wetgeving / compliance</option>
                      <option value="nieuwbouw">Nieuwbouw & oplevering</option>
                      <option value="energielabel">Energielabel</option>
                      <option value="aanbesteding">Samenwerking / aanbesteding</option>
                      <option value="overig">Overig</option>
                    </select>
                  </div>
                  <div>
                    <label style={fLabel}>Uw bericht</label>
                    <textarea rows={5} placeholder="Vertel kort over uw opgave..." style={{ ...fInput, resize: "vertical", fontFamily: "inherit", padding: 14 }} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ justifySelf: "start", marginTop: 8 }}>
                    <span>Verstuur bericht</span><span className="arr"><ArrowRight /></span>
                  </button>
                  <p className="small" style={{ marginTop: 8, color: "var(--ink-4)" }}>
                    Wij behandelen uw gegevens vertrouwelijk · CF7-formulier · GTM-gemeten
                  </p>
                </form>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="card" style={{ padding: 24 }}>
                <h5 style={{ font: "500 11px/1 var(--mono)", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--ink-4)", margin: "0 0 14px" }}>Direct contact</h5>
                <p style={{ margin: 0, fontFamily: "var(--mono)", fontSize: 15, color: "var(--ink)" }}>
                  +31 (0)00 000 00 00<br />info@prosperos.nl
                </p>
              </div>
              <div className="card" style={{ padding: 24 }}>
                <h5 style={{ font: "500 11px/1 var(--mono)", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--ink-4)", margin: "0 0 14px" }}>Specialisten per opgave</h5>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { name: "Marleen de Bruijn", role: "Corporaties" },
                    { name: "Joris Veerman", role: "Wetgeving / EPBD / EED" },
                    { name: "Bas Hartman", role: "Nieuwbouw / BENG / MPG" },
                  ].map((s, i) => (
                    <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Photo slot={`contact-spec-${i+1}`} shape="circle" style={{ width: 40, height: 40, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 500 }}>{s.name}</div>
                        <div className="small">{s.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 24 }}>
                <h5 style={{ font: "500 11px/1 var(--mono)", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--ink-4)", margin: "0 0 14px" }}>Sollicitatie?</h5>
                <p className="small" style={{ margin: 0 }}>
                  Bekijk onze openstaande vacatures op de werkenbij-site.
                </p>
                <button className="btn btn-link" style={{ marginTop: 14 }} onClick={(e) => e.preventDefault()}>
                  werkenbijprosperos.nl <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const fLabel = { display: "block", fontSize: 12.5, fontWeight: 500, color: "var(--ink-3)", marginBottom: 6, letterSpacing: "0.01em" };
const fInput = { width: "100%", padding: "13px 14px", border: "1px solid var(--line)", borderRadius: 8, fontSize: 15, background: "var(--bg)", color: "var(--ink)", outline: "none", transition: ".15s" };

function Field({ label, type = "text", placeholder }) {
  return (
    <div>
      <label style={fLabel}>{label}</label>
      <input type={type} placeholder={placeholder} style={fInput}
        onFocus={(e) => e.target.style.borderColor = "var(--ink)"}
        onBlur={(e) => e.target.style.borderColor = "var(--line)"}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────
// Root app
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState("home");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const themeClass = `theme-${t.accent}`;
  const displayClass = t.displayType;

  return (
    <div className={themeClass} data-display-type={displayClass} style={{ minHeight: "100vh" }}>
      {t.showGrid && <div className="grid-overlay" />}
      <Nav current={page} navigate={navigate} />
      {page === "home" && <Homepage navigate={navigate} hero={t.hero} />}
      {page === "solution" && <SolutionPage navigate={navigate} />}
      {page === "audience" && <AudiencePage navigate={navigate} />}
      {page === "knowledge" && <KnowledgePage navigate={navigate} />}
      {page === "case" && <CasePage navigate={navigate} />}
      {page === "over" && <OverPage navigate={navigate} />}
      {page === "contact" && <ContactPage navigate={navigate} />}
      <Footer navigate={navigate} />

      <TweaksPanel title="Tweaks · Prosperos">
        <TweakSection label="Navigatie" />
        <TweakSelect
          label="Pagina"
          value={page}
          options={[
            { value: "home", label: "Homepage" },
            { value: "solution", label: "Oplossing — Compliance & wetgeving" },
            { value: "audience", label: "Doelgroep — Woningcorporaties" },
            { value: "knowledge", label: "Kennis — EPBD IV" },
            { value: "case", label: "Case — Corporatie 14.200 VHE" },
            { value: "over", label: "Over Prosperos" },
            { value: "contact", label: "Contact" },
          ]}
          onChange={(v) => navigate(v)}
        />

        <TweakSection label="Hero-richting (homepage)" />
        <TweakRadio
          label="Variant"
          value={t.hero}
          options={[
            { value: "A", label: "Klant­opgave" },
            { value: "B", label: "Strategie" },
            { value: "C", label: "Signaal" },
          ]}
          onChange={(v) => setTweak("hero", v)}
        />
        <p style={{ fontSize: 10.5, color: "rgba(41,38,27,.6)", margin: "4px 8px 0", lineHeight: 1.4 }}>
          A: standaard hoofdboodschap. B: "van energielabel naar vastgoedstrategie". C: compact hero met live wetgevingssignaal.
        </p>

        <TweakSection label="Visuele richting" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={[
            { value: "moss", color: "oklch(0.55 0.11 145)" },
            { value: "navy", color: "oklch(0.42 0.09 245)" },
            { value: "dual", color: "linear-gradient(135deg, oklch(0.55 0.11 145) 0% 50%, oklch(0.28 0.08 245) 50% 100%)" },
          ]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakRadio
          label="Display-type"
          value={t.displayType}
          options={[
            { value: "serif", label: "Serif italic" },
            { value: "sans", label: "Sans" },
          ]}
          onChange={(v) => setTweak("displayType", v)}
        />

        <TweakSection label="Layout debug" />
        <TweakToggle
          label="12-kolom grid tonen"
          value={t.showGrid}
          onChange={(v) => setTweak("showGrid", v)}
        />
      </TweaksPanel>
    </div>
  );
}

// TweakColor with raw color values (not preset palette swatches that the
// starter's options[] format wants — we provide both value+color pairs)
function TweakColor({ label, value, options, onChange }) {
  return (
    <div style={{ padding: "6px 8px" }}>
      <div style={{ fontSize: 11, color: "rgba(41,38,27,.7)", marginBottom: 8, fontWeight: 500 }}>{label}</div>
      <div style={{ display: "flex", gap: 8 }}>
        {options.map((o) => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            style={{
              width: 28, height: 28, borderRadius: "50%",
              background: o.color,
              border: value === o.value ? "2px solid #29261b" : "1px solid rgba(41,38,27,.2)",
              cursor: "pointer", padding: 0,
              boxShadow: value === o.value ? "0 0 0 2px rgba(255,255,255,.6) inset" : "none",
            }}
            title={o.value}
          />
        ))}
      </div>
    </div>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <div style={{ padding: "6px 8px" }}>
      <div style={{ fontSize: 11, color: "rgba(41,38,27,.7)", marginBottom: 6, fontWeight: 500 }}>{label}</div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%", padding: "7px 10px", fontSize: 12,
          border: "1px solid rgba(41,38,27,.2)", borderRadius: 6,
          background: "rgba(255,255,255,.6)", color: "#29261b",
          fontFamily: "inherit", cursor: "pointer",
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  return (
    <div style={{ padding: "6px 8px" }}>
      <div style={{ fontSize: 11, color: "rgba(41,38,27,.7)", marginBottom: 6, fontWeight: 500 }}>{label}</div>
      <div style={{ display: "flex", background: "rgba(41,38,27,.06)", borderRadius: 6, padding: 2 }}>
        {options.map((o) => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            style={{
              flex: 1, padding: "6px 8px", fontSize: 11, fontWeight: 500,
              border: 0, borderRadius: 4, cursor: "pointer",
              background: value === o.value ? "#fff" : "transparent",
              color: "#29261b",
              boxShadow: value === o.value ? "0 1px 2px rgba(0,0,0,.06)" : "none",
              fontFamily: "inherit",
            }}
          >{o.label}</button>
        ))}
      </div>
    </div>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div style={{ padding: "6px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: 11.5, color: "#29261b", fontWeight: 500 }}>{label}</span>
      <button
        onClick={() => onChange(!value)}
        style={{
          width: 32, height: 18, borderRadius: 10,
          background: value ? "oklch(0.55 0.11 145)" : "rgba(41,38,27,.2)",
          border: 0, cursor: "pointer", padding: 0, position: "relative",
          transition: ".15s",
        }}
      >
        <span style={{
          position: "absolute", top: 2, left: value ? 16 : 2,
          width: 14, height: 14, borderRadius: "50%", background: "#fff",
          transition: ".15s", boxShadow: "0 1px 3px rgba(0,0,0,.2)",
        }} />
      </button>
    </div>
  );
}

function TweakSection({ label }) {
  return (
    <div style={{
      padding: "12px 8px 4px",
      fontSize: 10, color: "rgba(41,38,27,.55)",
      textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600,
    }}>{label}</div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
