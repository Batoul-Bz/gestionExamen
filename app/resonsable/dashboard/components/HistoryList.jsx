import React from "react";



export default function Historique() {
  const historique = [
    { id: 1, titre: "Groupe 01", desc: "Examen informatique - matin" },
    { id: 2, titre: "Groupe 02", desc: "Examen base de données" },
    { id: 3, titre: "Groupe 03", desc: "Examen réseaux" },
  ];

  return (
    <section className="dash-section">
      <div className="section-header">
        <h3>Historique</h3>
        <button className="see-more">Voir tout</button>
      </div>

      <div className="history-list">
        {historique.map((item) => (
          <div className="history-item" key={item.id}>
            <div>
              <h4>{item.titre}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
