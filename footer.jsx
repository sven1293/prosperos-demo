// footer.jsx — site footer

function Footer({ navigate }) {
  return (
    <footer className="site">
      <div className="container">
        <div className="grid">
          <div>
            <div className="brand" onClick={() => navigate("home")} style={{ color: "#fff" }}>
              <span className="mark" />
              <span>Prosperos</span>
            </div>
            <p style={{ marginTop: 18, maxWidth: 320, fontSize: 14, lineHeight: 1.55, color: "oklch(0.75 0.02 245)" }}>
              Landelijke kennis- en uitvoeringspartner voor energieprestatie, gebouwdata,
              wetgeving en vastgoedverduurzaming.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <span className="cert">BRL9500</span>
              <span className="cert">ISO 9001</span>
              <span className="cert">FedEC</span>
            </div>
          </div>
          <div>
            <h5>Oplossingen</h5>
            <a onClick={() => navigate("solution")}>Vastgoeddata & labels</a>
            <a onClick={() => navigate("solution")}>Compliance & wetgeving</a>
            <a onClick={() => navigate("solution")}>Verduurzamingsroute 2030</a>
            <a onClick={() => navigate("solution")}>Nieuwbouw & oplevering</a>
            <a onClick={() => navigate("solution")}>Corporatieaanpak</a>
            <a onClick={() => navigate("solution")}>DUMAVA & subsidies</a>
          </div>
          <div>
            <h5>Voor wie</h5>
            <a onClick={() => navigate("audience")}>Woningcorporaties</a>
            <a onClick={() => navigate("audience")}>Banken & financiers</a>
            <a onClick={() => navigate("audience")}>Gemeenten & provincies</a>
            <a onClick={() => navigate("audience")}>Commercieel vastgoed</a>
            <a onClick={() => navigate("audience")}>Ontwikkelaars & aannemers</a>
            <a onClick={() => navigate("audience")}>MKB-pandeigenaren</a>
          </div>
          <div>
            <h5>Organisatie</h5>
            <a onClick={() => navigate("over")}>Over Prosperos</a>
            <a onClick={() => navigate("over")}>Kwaliteit & certificering</a>
            <a onClick={() => navigate("case")}>Cases</a>
            <a onClick={() => navigate("knowledge")}>Kennisbank</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Werken bij Prosperos ↗</a>
            <a onClick={() => navigate("contact")}>Contact</a>
          </div>
          <div>
            <h5>Contact</h5>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "oklch(0.85 0.02 245)" }}>
              Hoofdvestiging<br />
              [Adres invullen]<br />
              [Postcode plaats]
            </p>
            <p style={{ margin: "16px 0 0", fontFamily: "var(--mono)", fontSize: 13, color: "#fff" }}>
              +31 (0)00 000 00 00<br />
              info@prosperos.nl
            </p>
            <button className="btn btn-accent btn-sm" style={{ marginTop: 20 }} onClick={() => navigate("contact")}>
              <span>Plan een adviesgesprek</span>
              <span className="arr"><ArrowRight /></span>
            </button>
          </div>
        </div>
        <div className="bottom">
          <div>© 2026 Prosperos B.V. — KvK 00000000</div>
          <div className="certs">
            <a href="#" onClick={(e)=>e.preventDefault()}>Privacy</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Cookies</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
