// All UI text, in one place, DE + EN. Loaded as a global so the site works
// offline (file://) without fetch(). Edit here to change wording.
window.I18N = {
  de: {
    meta: { lang: "de", langName: "Deutsch", other: "EN" },
    nav: { home: "Start", canvas: "Canvas", topics: "Themen", ai: "KI-Guide", principles: "Grundsätze", switch: "English" },
    common: { open: "Öffnen", copy: "Kopieren", copied: "Kopiert!", back: "Zurück" },
    site: { title: "Thesis Design Canvas", tagline: "Abschlussarbeiten bei Prof. Dr. Nicolai Krüger: Themenfindung und Betreuung mit Canvas statt Exposé." },

    home: {
      heroTitle: "Thesis Design Canvas",
      heroSub: "Eine interaktive Vorlage für die Themenfindung und Betreuung von Abschlussarbeiten bei Prof. Dr. Nicolai Krüger.",
      ctaCanvas: "Canvas ausfüllen",
      ctaTopics: "Themen ansehen",
      whatTitle: "Worum es geht",
      whatBody: "Eine wissenschaftliche Arbeit zu schreiben ist anspruchsvoll. Statt mit einem Exposé zu starten, arbeitest du mit einem Canvas. Das senkt die Einstiegshürde und ermöglicht früh ein laufendes Feedback mit der Betreuung.",
      howTitle: "So funktioniert es",
      step1: "Sieh dir die Themen an. Jedes gehört zu einer größeren Forschungslinie.",
      step2: "Fülle das Canvas aus. Es speichert lokal in deinem Browser, nichts wird hochgeladen.",
      step3: "Schärfe jedes Feld mit KI (Tipps und Prompts direkt im Canvas) und bringe deinen Entwurf in die Sprechstunde.",
      openTitle: "Offen & nachnutzbar",
      openBody: "Das Projekt steht unter der EUPL v1.2 (European Union Public Licence). Du darfst es nutzen, anpassen und weitergeben.",
      scienceTitle: "Die Forschung dahinter",
      scienceBody: "Ich sammle Evidenz, ob Studierende und Betreuende diese Methode dem Exposé vorziehen. Über eine kurze Umfrage (2 Min.) kannst du beitragen.",
      surveyCta: "Zur Umfrage",
      profileLabel: "Profil von Prof. Dr. Nicolai Krüger:",
      hspv: "HSPV",
      ec: "Interoperable Europe",
      gi: "GI"
    },

    process: {
      title: "Ablauf der Betreuung",
      lead: "So läuft eine Abschlussarbeit bei Prof. Dr. Nicolai Krüger:",
      steps: [
        "Thema mit dem Canvas (in Ausnahmefällen mit einem Exposé) schärfen. KI dient dabei als Sparringspartner, damit anspruchsvolle Gedanken reifen.",
        "Auf dieser Grundlage wird die Betreuung finalisiert.",
        "Es folgt die Betreuungszusage.",
        "Sprechstunde buchen. Die laufende Betreuung erfolgt über diese Termine."
      ],
      bookingNote: "Der Link zur Sprechstunden-Buchung wird in ILIAS bereitgestellt."
    },

    canvas: {
      title: "Thesis Design Canvas",
      intro: "Fülle die Felder aus. Alles wird automatisch lokal in deinem Browser gespeichert. Über jedem Feld findest du einen Hinweis und einen 💡 KI-Tipp mit fertigem Prompt.",
      name: "Name", thesisTitle: "Titel der Thesis", date: "Datum",
      fields: {
        research_questions: "Forschungsfrage(n)",
        problem: "Problem",
        data: "Daten",
        relevance: "Relevanz",
        method: "Methodik",
        outline: "Gliederung",
        literature_base: "Literaturbasis"
      },
      tooltips: {
        research_questions: "Eine gute Forschungsfrage ist präzise, fokussiert auf ein konkretes Problem und ist in dem gegebenen Umfang erforschbar. Aber sie ist auch komplex genug, um einer wissenschaftlichen Herangehensweise zu bedürfen. Sie wird in einem Satz formuliert, ist nicht mit ja/nein zu beantworten und lässt Unterfragen zu.",
        problem: "Ein praktisches Problem muss aus wissenschaftlicher Sicht noch längst nicht relevant sein. Warum also ist die gewählte Fragestellung ein Problem, das wissenschaftliche Methoden braucht?",
        data: "Kann für die Beantwortung der Forschungsfrage (falls gefordert) auf Daten (z. B. aus dem Unternehmen) zugegriffen werden? Welche Daten liegen vor, welche bräuchte es?",
        relevance: "Warum ist das Thema aus Praxis und Theorie relevant?",
        method: "Mit welcher Methode (falls gefordert) soll geforscht werden? Warum genau diese Methode? Gibt es Alternativen? Was könnte (a priori) als Ergebnis herauskommen?",
        outline: "Wie soll die Arbeit gegliedert werden? Welche Kapitelstruktur eignet sich zur Aufbereitung?",
        literature_base: "Auf der ersten Canvas-Grundlage beginnt früh das strategische Eintauchen in die Fachliteratur. Dabei wird das Thema weiter umrissen und Tiefe hergestellt. Wichtige Literaturquellen hier auflisten."
      },
      aiTipLabel: "💡 KI-Tipp",
      aiTips: {
        research_questions: "Lass die KI deine Frage zuspitzen, statt sie zu erfinden.",
        problem: "Lass dir helfen, das praktische Problem in eine wissenschaftliche Lücke zu übersetzen.",
        data: "Kläre, welche Daten du brauchst und ob sie realistisch erreichbar sind.",
        relevance: "Schärfe Praxis- und Theorie-Relevanz getrennt heraus.",
        method: "Lass dir Methoden samt Alternativen und Annahmen vorschlagen.",
        outline: "Lass eine logische Kapitelstruktur entwerfen und kritisch prüfen.",
        literature_base: "Finde Schlüsselkonzepte und Suchbegriffe – aber prüfe jede Quelle selbst."
      },
      aiPrompts: {
        research_questions: "Hier ist meine vorläufige Forschungsfrage: \"[einfügen]\". Prüfe sie kritisch: Ist sie präzise, in einer Bachelorarbeit erforschbar, nicht mit ja/nein beantwortbar? Schlage 3 geschärfte Varianten und passende Unterfragen vor und begründe deine Empfehlung.",
        problem: "Mein praktisches Problem ist: \"[einfügen]\". Hilf mir zu begründen, warum daraus ein wissenschaftlich relevantes Problem wird, das Methoden braucht. Nenne die wahrscheinliche Forschungslücke und 3 Gegenargumente, auf die ich achten sollte.",
        data: "Meine (vorläufige) Forschungsfrage lautet: \"[einfügen]\". Welche Daten bräuchte ich, um sie zu beantworten? Liste Datenquellen, Erhebungsaufwand und realistische Alternativen für eine Bachelorarbeit – und warne mich vor unrealistischen Datenzugängen.",
        relevance: "Thema: \"[einfügen]\". Formuliere getrennt (a) die praktische Relevanz und (b) die theoretische Relevanz, jeweils in 2–3 Sätzen, und nenne, für wen das Ergebnis nützlich wäre.",
        method: "Forschungsfrage: \"[einfügen]\". Schlage 2–3 geeignete wissenschaftliche Methoden vor, mit Vor- und Nachteilen, nötigem Aufwand und einer a-priori-Annahme zum erwartbaren Ergebnis. Empfiehl eine Methode für Bachelor-Niveau.",
        outline: "Forschungsfrage und Methode: \"[einfügen]\". Entwirf eine logische Kapitelgliederung für eine Bachelorarbeit und erkläre je Kapitel den Zweck in einem Satz. Prüfe die Gliederung anschließend selbst auf Lücken und Redundanzen.",
        literature_base: "Thema: \"[einfügen]\". Nenne die zentralen Konzepte/Theorien und passende Suchbegriffe (DE/EN) für eine Literaturrecherche. WICHTIG: Erfinde keine Quellen. Markiere klar, was ich selbst in Datenbanken (z. B. Google Scholar) verifizieren muss."
      },
      restore: "Boilerplate-Gliederung einfügen",
      actions: { print: "Drucken / als PDF", md: "Markdown export", json: "JSON sichern", import: "JSON laden", reset: "Zurücksetzen" },
      resetConfirm: "Alle Eingaben löschen?",
      saved: "Lokal gespeichert",
      useTopicNote: "Thema übernommen aus der Themenliste."
    },

    topics: {
      title: "Themen für Abschlussarbeiten",
      intro: "Eigene Themen sind ausdrücklich willkommen. Hier sammle ich Impulse für alle, die einen Anstoß brauchen. Aufgenommen wird nur, was eine konkrete Datenbasis hat: OZG-Dashboard, Open Data, europäische Datenpools oder eigene und in Promotionen entstehende Datensätze (teils auf Anfrage). Den genauen Zuschnitt besprechen wir gemeinsam.",
      search: "Suchen…",
      allLines: "Alle Forschungslinien",
      allLevels: "Bachelor & Master",
      bachelor: "Bachelor",
      master: "Master",
      use: "Im Canvas verwenden",
      dataLabel: "Datenbasis",
      scopeLabel: "Möglicher Zuschnitt",
      none: "Keine Themen gefunden.",
      countSuffix: "Themen"
    },

    ai: {
      title: "KI-Guide",
      intro: "Nutze KI zum Sparring, damit anspruchsvolle Gedanken mit der Zeit reifen können, bevor wir in die Sprechstunde gehen. Dieser Guide zeigt das Vorgehen Schritt für Schritt. Du arbeitest lokal: Das Canvas speichert nur im Browser; KI-Werkzeuge nutzt du separat und überträgst die Ergebnisse zurück.",
      localTitle: "Lokales Arbeiten und Datenschutz",
      localBody: "Dieses Canvas-Tool sendet nichts an einen Server; deine Eingaben bleiben in deinem Browser (localStorage). Wenn du eine KI nutzt, gib dort keine personenbezogenen oder vertraulichen Daten ein. Kopiere relevante Teile bewusst hin und das Ergebnis zurück ins Canvas.",
      stepsTitle: "In 5 Schritten",
      steps: [
        "Wähle ein Thema (oder eine eigene Idee) und übernimm es ins Canvas.",
        "Fülle jedes Feld zuerst selbst grob aus – KI verbessert, sie ersetzt dich nicht.",
        "Nutze den 💡 KI-Tipp je Feld: Prompt kopieren, eigenen Text einfügen, mit der KI verfeinern.",
        "Lass dein gesamtes Canvas kritisieren (Prompt unten) und arbeite das Feedback ein.",
        "Exportiere als PDF oder Markdown und bring es in die Sprechstunde mit."
      ],
      rulesTitle: "Goldene Regeln",
      rules: [
        "Quellen niemals von der KI erfinden lassen – jede Referenz selbst verifizieren.",
        "KI für Struktur, Schärfung, Gegenargumente nutzen – nicht zum Auslagern des Denkens.",
        "Vertrauliche/personenbezogene Daten gehören nicht in den Prompt.",
        "Immer kritisch gegenlesen: Plausibel ≠ richtig.",
        "Den eigenen KI-Einsatz transparent dokumentieren."
      ],
      critiquePromptTitle: "Master-Prompt: Lass dein Exposé kritisieren",
      critiquePrompt: "Agiere als Prof. Dr. Nicolai Krüger und kritisiere in seinem Stil mein Bachelorthesis-Exposé. Sei sehr kritisch-konstruktiv und gib mir konkrete Tipps. Stelle mir auch entsprechende Rückfragen, die mir helfen würden, mein Thema weiterzuentwickeln. Falls es nicht sofort klar wird, frag mich auch nach meinen genauen Studienvertiefungen und meiner Zielnote und passe deine Rückmeldung entsprechend an.",
      fieldPromptsTitle: "Prompts pro Canvas-Feld",
      fieldPromptsBody: "Die feldspezifischen Prompts findest du direkt im Canvas unter jedem 💡 KI-Tipp."
    },

    principles: {
      title: "Betreuungs-Grundsätze",
      intro: "Diese Leitsätze prägen meine Betreuung von Abschlussarbeiten (Entwurf, wird laufend geschärft).",
      list: [
        { h: "Canvas statt Exposé", b: "Wir starten iterativ mit einem Canvas, nicht mit einem starren Exposé. Das senkt die Einstiegshürde und macht Feedback früher möglich." },
        { h: "Präzise schlägt breit", b: "Ein konkretes, scharf zugeschnittenes Thema ist wertvoller und machbarer als ein breites Übersichtsthema." },
        { h: "Forschungsgeleitete Themen", b: "Themen entstehen aus echter, laufender Forschung – jedes zahlt auf eine größere Forschungslinie ein." },
        { h: "KI als Sparringspartner", b: "KI wird genutzt, um Denken zu schärfen – nicht, um es zu ersetzen. Transparent und kritisch." },
        { h: "Iterative Feedback-Schleifen", b: "Frühe, häufige, kurze Rückkopplung schlägt die eine große Abgabe am Ende." },
        { h: "Offene Wissenschaft", b: "Materialien sind offen (EUPL v1.2), nachnutzbar und werden aktuell gehalten." }
      ],
      socialTitle: "Kanäle & Ressourcen",
      links: {
        reel: "Betreuungs-Reel (Instagram)",
        tiktok: "Betreuung erklärt (TikTok)",
        website: "Website nicolaikrueger.com",
        hspv: "HSPV-Personeneintrag",
        linkedin: "LinkedIn",
        ec: "Interoperable Europe (EU)",
        dataset: "Offener Datensatz (GitHub)",
        survey: "Forschungs-Umfrage (2 Min.)"
      }
    },

    footer: { license: "Lizenziert unter der EUPL v1.2 von Nicolai Krüger.", source: "Quellcode auf GitHub", disclaimer: "Dieses Repository, die Texte und Code-Artefakte wurden mit Hilfe von KI erstellt und ersetzen nicht die persönliche Beratung zu einer Abschlussarbeit in einer Sprechstunde oder einer hochschulinternen Informationsveranstaltung. Ideen, Tools und Code dienen der frühen Ideenfindungsphase und sind nicht als Produktivwerkzeug oder fertig ausformulierte Themen gedacht. Verwendete KI: Opus 4.8." }
  },

  en: {
    meta: { lang: "en", langName: "English", other: "DE" },
    nav: { home: "Home", canvas: "Canvas", topics: "Topics", ai: "AI guide", principles: "Principles", switch: "Deutsch" },
    common: { open: "Open", copy: "Copy", copied: "Copied!", back: "Back" },
    site: { title: "Thesis Design Canvas", tagline: "Theses with Prof. Dr. Nicolai Krüger: finding topics and supervision with a canvas instead of an exposé." },

    home: {
      heroTitle: "Thesis Design Canvas",
      heroSub: "An interactive template for finding topics and supervising theses with Prof. Dr. Nicolai Krüger. Bilingual, runs without installation.",
      ctaCanvas: "Fill in the canvas",
      ctaTopics: "Browse topics",
      whatTitle: "What this is about",
      whatBody: "Writing a scientific thesis is demanding. Instead of starting with an exposé, you work with a canvas. It lowers the barrier and lets feedback with your supervisor start early.",
      howTitle: "How it works",
      step1: "Look through the topics. Each belongs to a larger research line.",
      step2: "Fill in the canvas. It saves locally in your browser; nothing is uploaded.",
      step3: "Sharpen each field with AI (tips and prompts right in the canvas) and bring your draft to the consultation.",
      openTitle: "Open & reusable",
      openBody: "The project is licensed under the EUPL v1.2 (European Union Public Licence). You may use, adapt and share it.",
      scienceTitle: "The research behind it",
      scienceBody: "I am gathering evidence on whether students and supervisors prefer this method over the exposé. You can contribute via a short survey (2 min).",
      surveyCta: "Take the survey",
      profileLabel: "Profile of Prof. Dr. Nicolai Krüger:",
      hspv: "HSPV",
      ec: "Interoperable Europe",
      gi: "GI"
    },

    process: {
      title: "How supervision works",
      lead: "How a thesis with Prof. Dr. Nicolai Krüger proceeds:",
      steps: [
        "Sharpen the topic with the canvas (in exceptional cases an exposé). AI serves as a sparring partner so that demanding ideas can mature.",
        "On this basis, supervision is finalised.",
        "You receive the supervision commitment.",
        "Book a consultation. Ongoing supervision runs through these sessions."
      ],
      bookingNote: "The link to book consultations is provided in ILIAS."
    },

    canvas: {
      title: "Thesis Design Canvas",
      intro: "Fill in the fields. Everything is saved automatically and locally in your browser. Above each field you will find a hint and a 💡 AI tip with a ready-made prompt.",
      name: "Name", thesisTitle: "Thesis title", date: "Date",
      fields: {
        research_questions: "Research question(s)",
        problem: "Problem",
        data: "Data",
        relevance: "Relevance",
        method: "Methodology",
        outline: "Outline",
        literature_base: "Literature base"
      },
      tooltips: {
        research_questions: "A good research question is precise, focused on a specific problem, and researchable within the given scope. But it is also complex enough to require a scientific approach. It is formulated in one sentence, cannot be answered yes/no, and allows for sub-questions.",
        problem: "A practical problem does not necessarily have to be relevant from a scientific point of view. So why is the chosen question a problem that needs scientific methods?",
        data: "Can data (e.g. from a company) be accessed to answer the research question (if required)? Which data are available, which would be needed?",
        relevance: "Why is the topic relevant from practice and theory?",
        method: "Which method (if required) should be used? Why exactly this method? Are there alternatives? What could be the result (a priori assumption)?",
        outline: "How should the work be structured? Which chapter structure is suitable for preparation?",
        literature_base: "On the first canvas foundation, strategic immersion in the literature begins early. This further outlines the topic while establishing depth. List important literature sources here."
      },
      aiTipLabel: "💡 AI tip",
      aiTips: {
        research_questions: "Let AI sharpen your question rather than invent it.",
        problem: "Get help translating the practical problem into a scientific gap.",
        data: "Clarify which data you need and whether it is realistically reachable.",
        relevance: "Tease out practical and theoretical relevance separately.",
        method: "Get methods suggested, with alternatives and assumptions.",
        outline: "Have a logical chapter structure drafted and critically checked.",
        literature_base: "Find key concepts and search terms — but verify every source yourself."
      },
      aiPrompts: {
        research_questions: "Here is my draft research question: \"[paste]\". Review it critically: is it precise, researchable in a bachelor's thesis, not answerable yes/no? Propose 3 sharpened variants with sub-questions and justify your recommendation.",
        problem: "My practical problem is: \"[paste]\". Help me argue why this becomes a scientifically relevant problem that needs methods. Name the likely research gap and 3 counter-arguments I should watch for.",
        data: "My (draft) research question is: \"[paste]\". Which data would I need to answer it? List data sources, collection effort and realistic alternatives for a bachelor's thesis — and warn me about unrealistic data access.",
        relevance: "Topic: \"[paste]\". Formulate separately (a) the practical relevance and (b) the theoretical relevance, 2–3 sentences each, and state who would benefit from the result.",
        method: "Research question: \"[paste]\". Suggest 2–3 suitable scientific methods, with pros and cons, required effort and an a-priori assumption about the expected result. Recommend one method for bachelor level.",
        outline: "Research question and method: \"[paste]\". Draft a logical chapter outline for a bachelor's thesis and explain each chapter's purpose in one sentence. Then check the outline yourself for gaps and redundancy.",
        literature_base: "Topic: \"[paste]\". Name the central concepts/theories and suitable search terms (DE/EN) for a literature search. IMPORTANT: do not invent sources. Clearly mark what I must verify myself in databases (e.g. Google Scholar)."
      },
      restore: "Insert boilerplate outline",
      actions: { print: "Print / save as PDF", md: "Export Markdown", json: "Save JSON", import: "Load JSON", reset: "Reset" },
      resetConfirm: "Delete all input?",
      saved: "Saved locally",
      useTopicNote: "Topic adopted from the topic list."
    },

    topics: {
      title: "Thesis topics",
      intro: "Your own topics are very welcome. Here I collect prompts for anyone who needs a starting point. A topic only enters the list if it has a concrete data basis: the OZG dashboard, open data, European data pools, or own and doctoral datasets in the making (some on request). We discuss the exact scope together.",
      search: "Search…",
      allLines: "All research lines",
      allLevels: "Bachelor & master",
      bachelor: "Bachelor",
      master: "Master",
      use: "Use in canvas",
      dataLabel: "Data",
      scopeLabel: "Possible scope",
      none: "No topics found.",
      countSuffix: "topics"
    },

    ai: {
      title: "AI guide",
      intro: "Use AI as a sparring partner so that demanding ideas can mature over time, before we meet for a consultation. This guide shows the approach step by step. You work locally: the canvas saves only in your browser; you use AI tools separately and transfer the results back.",
      localTitle: "Local work and data protection",
      localBody: "This canvas tool sends nothing to a server; your input stays in your browser (localStorage). When you use an AI, do not enter personal or confidential data there. Deliberately copy relevant parts over and the result back into the canvas.",
      stepsTitle: "In 5 steps",
      steps: [
        "Pick a topic (or your own idea) and adopt it into the canvas.",
        "Fill each field roughly yourself first — AI improves, it does not replace you.",
        "Use the 💡 AI tip per field: copy the prompt, paste your text, refine with the AI.",
        "Have your whole canvas critiqued (prompt below) and work in the feedback.",
        "Export as PDF or Markdown and bring it to the consultation."
      ],
      rulesTitle: "Golden rules",
      rules: [
        "Never let AI invent sources — verify every reference yourself.",
        "Use AI for structure, sharpening, counter-arguments — not to outsource thinking.",
        "Confidential/personal data does not belong in the prompt.",
        "Always read critically: plausible ≠ correct.",
        "Document your own AI use transparently."
      ],
      critiquePromptTitle: "Master prompt: have your exposé critiqued",
      critiquePrompt: "Act as Prof. Dr. Nicolai Krüger and criticise my bachelor's thesis exposé in his style. Be very critical and constructive, and give me specific tips. Also ask me questions that would help me develop my topic further. If it is not immediately clear, ask me about my exact study specialisations and my target grade, and adjust your feedback accordingly.",
      fieldPromptsTitle: "Prompts per canvas field",
      fieldPromptsBody: "The field-specific prompts are right in the canvas under each 💡 AI tip."
    },

    principles: {
      title: "Supervision principles",
      intro: "These principles shape how I supervise theses (draft, refined over time).",
      list: [
        { h: "Canvas over exposé", b: "We start iteratively with a canvas, not a rigid exposé. This lowers the barrier and enables earlier feedback." },
        { h: "Precise beats broad", b: "A concrete, sharply scoped topic is more valuable and feasible than a broad survey topic." },
        { h: "Research-led topics", b: "Topics come from real, ongoing research — each feeds into a larger research line." },
        { h: "AI as a sparring partner", b: "AI is used to sharpen thinking, not replace it. Transparently and critically." },
        { h: "Iterative feedback loops", b: "Early, frequent, short feedback beats one big submission at the end." },
        { h: "Open science", b: "Materials are open (EUPL v1.2), reusable and kept current." }
      ],
      socialTitle: "Channels & resources",
      links: {
        reel: "Supervision reel (Instagram)",
        tiktok: "Supervision explained (TikTok)",
        website: "Website nicolaikrueger.com",
        hspv: "HSPV staff profile",
        linkedin: "LinkedIn",
        ec: "Interoperable Europe (EU)",
        dataset: "Open dataset (GitHub)",
        survey: "Research survey (2 min)"
      }
    },

    footer: { license: "Licensed under the EUPL v1.2 by Nicolai Krüger.", source: "Source code on GitHub", disclaimer: "This repository, its texts and code artefacts were created with the help of AI and do not replace personal advice on a thesis in a consultation or an internal university information session. The ideas, tools and code serve the early ideation phase and are not intended as a production tool or as fully formulated topics. AI used: Opus 4.8." }
  }
};

// Stable external URLs (language-independent).
window.LINKS = {
  reel: "https://www.instagram.com/reel/C-98RDWNE_B/",
  tiktok: "https://www.tiktok.com/@nicolaikrueger/video/7405870738902666529",
  website: "https://nicolaikrueger.com",
  hspv: "https://www.hspv.nrw.de/organisation/personalverzeichnis/eintrag/dr-nicolai-krueger",
  linkedin: "https://www.linkedin.com/in/nicolaikrueger/",
  ec: "https://interoperable-europe.ec.europa.eu/user/772249",
  gi: "https://gi.de/ueber-uns/personen/fachleute/detail/nicolai-krueger",
  dataset: "https://github.com/nicolaikrueger/german-municipal-chatbot-dataset",
  survey: "https://docs.google.com/forms/d/e/1FAIpQLSdF1RXTfCpxzwmU9sIjrX9ZBBSFxiNmaAkvTe7v-X1okSRhAg/viewform?usp=sf_link",
  repo: "https://github.com/nicolaikrueger/thesis_canvas"
};
