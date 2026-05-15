// nav.jsx — top navigation with mega-menus

function Nav({ current, navigate }) {
  const [openMega, setOpenMega] = React.useState(null);
  const closeTimer = React.useRef(null);

  const open = (k) => {
    clearTimeout(closeTimer.current);
    setOpenMega(k);
  };
  const close = () => {
    closeTimer.current = setTimeout(() => setOpenMega(null), 120);
  };

  const items = [
    { key: "oplossingen", label: "Oplossingen", caret: true },
    { key: "voor-wie", label: "Voor wie", caret: true },
    { key: "diensten", label: "Diensten", caret: true },
    { key: "kennis", label: "Kennis", caret: true },
    { key: "cases", label: "Cases", secondary: true },
    { key: "over", label: "Over Prosperos", secondary: true },
  ];

  return (
    <header className="site">
      <div className="container">
        <div className="row">
          <div className="brand" onClick={() => navigate("home")}>
            <span className="mark" />
            <span>Prosperos</span>
          </div>

          <nav className="nav">
            {items.map((it) => (
              <div
                key={it.key}
                className={`item ${current === it.key ? "active" : ""} ${it.secondary ? "secondary" : ""}`}
                onMouseEnter={() => it.caret && open(it.key)}
                onMouseLeave={() => it.caret && close()}
                onClick={() => {
                  if (it.key === "oplossingen") navigate("solution");
                  else if (it.key === "voor-wie") navigate("audience");
                  else if (it.key === "kennis") navigate("knowledge");
                  else if (it.key === "cases") navigate("case");
                  else if (it.key === "over") navigate("over");
                }}
              >
                {it.label}{it.caret && <span className="caret"><Caret /></span>}
              </div>
            ))}
          </nav>

          <div className="nav-tail">
            <button className="btn btn-ghost btn-sm ghost-hide" onClick={() => navigate("contact")}>
              <span>Werken bij</span>
              <span className="arr"><ArrowUpRight /></span>
            </button>
            <button className="btn btn-primary btn-sm" onClick={() => navigate("contact")}>
              <span>Adviesgesprek</span>
              <span className="arr"><ArrowRight /></span>
            </button>
          </div>
        </div>
      </div>
      {openMega && (
        <MegaPanel
          kind={openMega}
          navigate={navigate}
          onEnter={() => open(openMega)}
          onLeave={close}
        />
      )}
    </header>
  );
}

function MegaPanel({ kind, navigate, onEnter, onLeave }) {
  const data = MEGA_DATA[kind];
  if (!data) return null;
  return (
    <div
      className="mega"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="container">
        <div className="grid">
          <div className="intro">
            <div className="eyebrow"><span className="dot" />{data.eyebrow}</div>
            <h3 className="h3" style={{ marginTop: 14 }}>{data.title}</h3>
            <p className="small" style={{ marginTop: 12, color: "var(--ink-3)" }}>{data.intro}</p>
            <button className="btn btn-link" style={{ marginTop: 16 }} onClick={() => navigate(data.cta.to)}>
              {data.cta.label} <ArrowRight />
            </button>
          </div>
          <div className="links">
            {data.links.map((g, i) => (
              <a key={i} onClick={(e) => { e.preventDefault(); navigate(g.to || "solution"); }} href="#">
                <span>{g.label}</span>
                <span className="meta">{g.meta}</span>
              </a>
            ))}
          </div>
          <div className="aside">
            <h5>{data.aside.label}</h5>
            <p className="small" style={{ color: "var(--ink-2)" }}>{data.aside.body}</p>
            <button className="btn btn-link" onClick={() => navigate(data.aside.to)}>
              {data.aside.cta} <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const MEGA_DATA = {
  oplossingen: {
    eyebrow: "Oplossingen",
    title: "Vertaal beleid, wetgeving en data naar een werkbare aanpak.",
    intro: "Onze oplossingen verbinden energieprestatie, gebouwdata en verduurzaming met de opgave van uw organisatie.",
    cta: { label: "Bekijk alle oplossingen", to: "solution" },
    links: [
      { label: "Vastgoeddata & energielabels", meta: "EP-W · EP-U · NEN 2580", to: "solution" },
      { label: "Compliance & wetgeving", meta: "EPBD IV · EED · GACS", to: "solution" },
      { label: "Verduurzamingsroute 2030", meta: "Nulmeting → maatregelen", to: "solution" },
      { label: "Nieuwbouw & oplevering", meta: "BENG · MPG · Qv10", to: "solution" },
      { label: "Corporatieaanpak", meta: "Complexgewijs · raamcontract", to: "solution" },
      { label: "DUMAVA & subsidies", meta: "Publiek/maatschappelijk", to: "solution" },
      { label: "GACS-verplichting", meta: "Stappenplan utiliteit", to: "solution" },
      { label: "Energie-efficiënte overheid", meta: "Rapportageplicht", to: "solution" },
    ],
    aside: {
      label: "In de spotlight",
      body: "EPBD IV richt zich in 2030 op woningen met label E, F en G. Bekijk wat dat betekent voor uw portefeuille.",
      cta: "Lees de impact-analyse",
      to: "knowledge",
    },
  },
  "voor-wie": {
    eyebrow: "Voor wie",
    title: "Doelgroepen die wij langdurig bedienen.",
    intro: "Per doelgroep een eigen aanpak, taal en bewijslast — geen one-size-fits-all.",
    cta: { label: "Bekijk alle doelgroepen", to: "audience" },
    links: [
      { label: "Woningcorporaties", meta: "Portefeuille · complexgewijs", to: "audience" },
      { label: "Banken & financiers", meta: "Vastgoeddata · ESG", to: "audience" },
      { label: "Gemeenten en provincies", meta: "EED · EPBD IV", to: "audience" },
      { label: "Commercieel vastgoed", meta: "Compliance · waarde", to: "audience" },
      { label: "Ontwikkelaars & aannemers", meta: "BENG · oplevering", to: "audience" },
      { label: "MKB-pandeigenaren", meta: "EML · GACS · advies", to: "audience" },
      { label: "Makelaars", meta: "Labels op aanvraag", to: "audience" },
    ],
    aside: {
      label: "Klantverhaal",
      body: "Een woningcorporatie van 14.000 VHE versnelde haar EP-W-actualisatie binnen 9 maanden, complexgewijs.",
      cta: "Lees de case",
      to: "case",
    },
  },
  diensten: {
    eyebrow: "Diensten",
    title: "Concrete, gecertificeerde dienstverlening.",
    intro: "BRL9500-gecertificeerd, ISO9001-geborgd. Schaalbaar inzetbaar van enkel pand tot landelijke portefeuille.",
    cta: { label: "Bekijk alle diensten", to: "solution" },
    links: [
      { label: "Energielabel utiliteit", meta: "EP-U", to: "solution" },
      { label: "Energielabel woning", meta: "EP-W", to: "solution" },
      { label: "EPA-W / EP-W", meta: "Detailopname", to: "solution" },
      { label: "BENG-berekening", meta: "Nieuwbouw", to: "solution" },
      { label: "MPG", meta: "Milieuprestatie", to: "solution" },
      { label: "Qv10 / luchtdichtheid", meta: "Meting", to: "solution" },
      { label: "EED-audit", meta: "Elke 4 jaar", to: "solution" },
      { label: "Informatieplicht / EML", meta: "RVO", to: "solution" },
      { label: "Maatwerkadvies", meta: "Verduurzaming", to: "solution" },
      { label: "NEN 2580", meta: "Oppervlakte", to: "solution" },
    ],
    aside: {
      label: "Kwaliteit",
      body: "Alle BRL9500-opnames worden intern gecontroleerd. In 2025: 0 afwijkingen bij externe audit.",
      cta: "Lees over kwaliteit",
      to: "over",
    },
  },
  kennis: {
    eyebrow: "Kennisbank",
    title: "Wetgeving, praktijk en richting.",
    intro: "Onafhankelijke duiding van EPBD IV, EED, DUMAVA en alles wat daarna komt.",
    cta: { label: "Naar de kennisbank", to: "knowledge" },
    links: [
      { label: "EPBD IV", meta: "Hoofdstuk", to: "knowledge" },
      { label: "Energielabels & NTA 8800", meta: "Methodiek", to: "knowledge" },
      { label: "EED & Informatieplicht", meta: "Compliance", to: "knowledge" },
      { label: "EML", meta: "Erkende maatregelen", to: "knowledge" },
      { label: "GACS-verplichting", meta: "Utiliteit", to: "knowledge" },
      { label: "DUMAVA & subsidies", meta: "Publiek", to: "knowledge" },
      { label: "Energie-efficiënte overheid", meta: "Beleid", to: "knowledge" },
      { label: "Renovatiepaspoort", meta: "Route", to: "knowledge" },
    ],
    aside: {
      label: "Update mei 2026",
      body: "EPBD IV is definitief: minimum­eisen, drempeljaren en handhaving op één pagina samengevat.",
      cta: "Lees het overzicht",
      to: "knowledge",
    },
  },
};

window.Nav = Nav;
