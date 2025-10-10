import React from 'react';

const codexItems = [
  "Radical Inclusion – Everyone is welcome. Diversity is strength, not separation.",
  "Gift – Giving is the foundation of abundance. Generosity creates bonds and strengthens the collective spirit.",
  "Radical Self-Reliance – Each person is responsible for themselves. Autonomy begins with inner trust.",
  "Radical Self-Expression – Being authentic is honoring your soul. Expressing truthfully is freedom.",
  "Communal Effort – Nothing flourishes alone. Everything that exists in the Village is built collectively.",
  "Civic Responsibility – Freedom is commitment to the whole. Care for space and for each other.",
  "Leave No Trace – Walk the Earth without harming it. Leave the place and people more alive than before.",
  "Participation – There are no spectators. The Village exists through active presence.",
  "Immediacy – Life happens now. The present is the real time of creation.",
  "Integrate Polarities and Activate Integrity – We are light and shadow, strength and vulnerability. Integrate to live in coherence.",
  "Be the Legacy – Build, teach, touch hearts, and transform people. Leave legacy, not traces.",
  "Radical Autonomy – Love is the Law – Freedom is born from the purity of heart and consciousness.",
  "Be Impeccable with Your Word – Speech creates worlds; use it with truth and care.",
  "Don't Take Anything Personally – What others say or do reflects them, not you.",
  "Don't Make Assumptions – Clarify, ask, and communicate with transparency.",
  "Always Do Your Best – Do what you can with presence and love.",
  "Be Skeptical but Learn to Listen – Question with discernment, and keep your heart open.",
];

const CodexSection = () => {
  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-[2.5rem] leading-tight text-text-primary mb-8">
            AMAzone COOP30 CODEX
          </h2>
          <p className="text-lg text-text-secondary max-w-4xl mx-auto">
            17 A.D.A.s – Agreements for Autonomous Development
          </p>
          <p className="text-base text-text-secondary max-w-4xl mx-auto mt-4">
            AMAzone is our Love Village. We believe that every living system — whether a forest, a community, or a code — needs principles to maintain its harmony. Just as Burning Man established its 10 Principles to sustain a culture of autonomy and expression, and the Toltecs left their 5 Agreements as a path to inner integrity, we present the 17 A.D.A.s – Agreements for Autonomous Development: our Love SDGs, the ethical and energetic foundation that sustains the Village.
          </p>
          <p className="text-base text-text-secondary max-w-4xl mx-auto mt-4">
            The A.D.A.s are the code of the human and social software that runs within the territory. They remind us how to act, speak, create, and coexist in a space of freedom, care, and mutual responsibility. For the Temporary Zone of Love and Autonomy (T.A.Z.) to function in peace and wholeness, it is essential that each person is aware and conscious of these agreements, for it is through them that the Village vibrates in harmony, beauty, and truth.
          </p>
        </div>

        <div className="bg-background-secondary border border-border-subtle rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img
              src="https://hackmd.io/_uploads/Hy7voJ8plg.jpg"
              alt="Codex image"
              className="w-48 h-48 object-contain rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
            The 17 A.D.A.s – Agreements for Autonomous Development
          </h3>
          <ol className="list-decimal list-inside space-y-4 text-text-primary">
            {codexItems.map((item, index) => (
              <li key={index} className="text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg italic text-text-primary max-w-3xl mx-auto">
            "For peace to reign in our Temporary Zone of Love and Autonomy, each of us must honor these agreements with presence, respect, joy, and love."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodexSection;