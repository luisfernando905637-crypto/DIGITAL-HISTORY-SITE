const periods = [
  {
    range: "1976 — 1989",
    description: "O computador deixa de ser exclusivo de grandes instituições. A ideia de uma máquina pessoal começa a ganhar forma.",
    title: "Quando o computador chegou mais perto.",
    events: [
      { year: "1977", title: "O computador pessoal ganha forma", text: "O Apple II chega ao mercado como um computador completo, pronto para uso doméstico e escolar.", source: "Computer History Museum", url: "https://www.computerhistory.org/timeline/computers/" },
      { year: "1981", title: "A IBM entra na computação pessoal", text: "O IBM Personal Computer é anunciado e ajuda a consolidar um padrão para computadores de uso pessoal.", source: "IBM History", url: "https://www.ibm.com/history/personal-computer" },
      { year: "1989", title: "Uma proposta para conectar documentos", text: "Tim Berners-Lee apresenta no CERN uma proposta para compartilhar informações por uma rede de hipertexto: a World Wide Web.", source: "W3C", url: "https://www.w3.org/History/1989/proposal.html" }
    ]
  },
  {
    range: "1990 — 1999",
    description: "A World Wide Web transforma a internet em um espaço de páginas interligadas, acessível a cada vez mais pessoas.",
    title: "A web se conecta.",
    events: [
      { year: "1991", title: "A Web fica disponível fora do CERN", text: "O software da World Wide Web é liberado ao público, permitindo que outros criem servidores e páginas.", source: "W3C", url: "https://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html" },
      { year: "1993", title: "A Web passa a ser de domínio público", text: "O CERN disponibiliza a tecnologia da Web sem royalties, abrindo caminho para sua expansão global.", source: "W3C", url: "https://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html" },
      { year: "1998", title: "Uma nova forma de organizar a busca", text: "Larry Page e Sergey Brin fundam o Google, em um período de rápido crescimento da informação disponível na Web.", source: "Google — Nossa história", url: "https://about.google/company-info/our-story/" }
    ]
  },
  {
    range: "2000 — 2009",
    description: "Redes sociais e celulares com internet colocam serviços digitais no centro da rotina cotidiana.",
    title: "A vida fica online.",
    events: [
      { year: "2004", title: "Redes sociais chegam às universidades", text: "O Facebook é lançado em fevereiro, inicialmente para estudantes de Harvard.", source: "Britannica", url: "https://www.britannica.com/money/Facebook" },
      { year: "2007", title: "O iPhone é apresentado", text: "A Apple anuncia um telefone que combina chamadas, música e navegação na internet em uma interface multitoque.", source: "Apple Newsroom", url: "https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/" },
      { year: "2008", title: "Computadores ficam mais portáteis", text: "A Apple apresenta o MacBook Air, um notebook fino e leve que ajudou a popularizar o armazenamento em estado sólido em computadores de consumo.", source: "Computer History Museum", url: "https://www.computerhistory.org/timeline/computers/" }
    ]
  },
  {
    range: "2010 — 2019",
    description: "Aplicativos, streaming, redes e serviços em nuvem tornam a conexão mais constante e integrada ao dia a dia.",
    title: "Tudo na palma da mão.",
    events: [
      { year: "2010", title: "Fotografia social no celular", text: "O Instagram é lançado como um aplicativo para compartilhar fotos a partir do telefone.", source: "Britannica", url: "https://www.britannica.com/money/Instagram" },
      { year: "2012", title: "Um computador pequeno para aprender", text: "A Raspberry Pi Foundation lança um computador compacto, criado para incentivar o ensino de computação e ciências.", source: "Computer History Museum", url: "https://www.computerhistory.org/timeline/computers/" },
      { year: "2015", title: "AlphaGo vence um jogador profissional", text: "O sistema da DeepMind derrota o campeão europeu Fan Hui por 5 a 0, a primeira vitória de um programa contra um profissional de Go sem handicap.", source: "Nature", url: "https://www.nature.com/articles/nature16961" }
    ]
  },
  {
    range: "2020 — 2026",
    description: "IA generativa e automação ampliam possibilidades — e tornam mais urgentes as conversas sobre confiança, direitos e responsabilidade.",
    title: "O desafio da inteligência artificial.",
    events: [
      { year: "2022", title: "ChatGPT chega ao público", text: "A OpenAI disponibiliza o ChatGPT como prévia de pesquisa, levando a IA generativa a uma audiência ampla.", source: "OpenAI", url: "https://openai.com/index/chatgpt/" },
      { year: "2024", title: "O AI Act da União Europeia entra em vigor", text: "Entra em vigor a primeira legislação abrangente da União Europeia para regular sistemas de inteligência artificial.", source: "União Europeia", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
      { year: "2026", title: "O futuro segue em construção", text: "Este projeto chega ao ano que marca cinco décadas de recorte. Os próximos marcos ainda serão escritos e avaliados pela sociedade.", source: "Recorte deste projeto", url: "#fontes" }
    ]
  }
];

const tabs = [...document.querySelectorAll(".period-tab")];
const panel = document.querySelector("#timeline-panel");
const title = document.querySelector("#period-title");
const periodKicker = document.querySelector("#period-kicker");
const description = document.querySelector("#period-description");
const range = document.querySelector("#period-range");
const eventList = document.querySelector("#event-list");

function renderPeriod(index, moveFocus = false) {
  const period = periods[index];
  tabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === index;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  title.textContent = period.title;
  periodKicker.textContent = `CAPÍTULO ${String(index + 1).padStart(2, "0")}`;
  description.textContent = period.description;
  range.textContent = period.range;
  panel.setAttribute("aria-labelledby", `tab-${index}`);
  eventList.replaceChildren(...period.events.map((event) => {
    const article = document.createElement("article");
    article.className = "event-item";

    const year = document.createElement("span");
    year.className = "event-year";
    year.textContent = event.year;

    const copy = document.createElement("div");
    const heading = document.createElement("h4");
    heading.textContent = event.title;
    const text = document.createElement("p");
    text.textContent = event.text;
    const source = document.createElement("a");
    source.href = event.url;
    source.textContent = `Fonte: ${event.source}`;
    if (event.url.startsWith("http")) {
      source.target = "_blank";
      source.rel = "noreferrer";
    }

    copy.append(heading, text, source);
    article.append(year, copy);
    return article;
  }));

  if (moveFocus) tabs[index].focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => renderPeriod(index));
  tab.addEventListener("keydown", (event) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;
    else return;
    event.preventDefault();
    renderPeriod(nextIndex, true);
  });
});

const internetData = [
  { year: 2005, percent: 16 },
  { year: 2010, percent: 28 },
  { year: 2015, percent: 40 },
  { year: 2020, percent: 60 },
  { year: 2025, percent: 74 }
];

const chart = document.querySelector("#internet-chart");
const chartFeedback = document.querySelector("#chart-feedback");
let activeYear = 2025;

internetData.forEach(({ year, percent }) => {
  const column = document.createElement("div");
  column.className = "chart-column";

  const value = document.createElement("span");
  value.className = "chart-value";
  value.textContent = `${percent}%`;

  const bar = document.createElement("button");
  bar.className = "chart-bar";
  bar.type = "button";
  bar.style.setProperty("--bar-height", percent);
  bar.dataset.year = year;
  bar.setAttribute("aria-label", `${year}: ${percent}% da população mundial usava a internet`);
  bar.setAttribute("aria-pressed", String(year === activeYear));
  bar.addEventListener("click", () => {
    activeYear = year;
    chart.querySelectorAll(".chart-bar").forEach((item) => item.setAttribute("aria-pressed", String(Number(item.dataset.year) === year)));
    chartFeedback.textContent = `${year}: ${percent}% da população mundial usava a internet.`;
  });

  const yearLabel = document.createElement("span");
  yearLabel.className = "chart-year";
  yearLabel.textContent = year;

  column.append(value, bar, yearLabel);
  chart.append(column);
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    siteNav.classList.remove("is-open");
  }
});

renderPeriod(0);
chartFeedback.textContent = "2025: 74% da população mundial usava a internet.";
