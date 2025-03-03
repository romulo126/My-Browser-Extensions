const extensions = [
    {
        name: "Request MindMap",
        image: "img/RequestMindMap.jpg",
        description: ` Uma poderosa extensão para desenvolvedores e analistas de segurança que desejam capturar, visualizar e entender requisições de rede de forma intuitiva. Diferente de ferramentas tradicionais, esta extensão combina captura de requisições HTTP com um mapa mental dinâmico, permitindo a análise visual das conexões entre domínios, endpoints e métodos de requisição..`,
        webStore: null,
        github: "https://github.com/romulo126/Request-Map"
    },
    {
        name: "Search streamers",
        image: "https://lh3.googleusercontent.com/cGuKlRjPOzmw1nHnWVsOVULO0QWN4kL_XM3cipv9Kso1KEcWmuQTzMAtqgW6I10I0kxw2BuQHnzDHLckqAFdcYBjYQ=s60", // Link da imagem
        description: `Com a enorme variedade de serviços de streaming disponíveis, encontrar onde um filme ou série está disponível pode ser um desafio. torne essa busca muito mais fácil!
Basta estar logado nos seus serviços de streaming e realizar a pesquisa.`,
        webStore: "https://chromewebstore.google.com/detail/streamers-search-extensio/nblbhgmfakmlgofpeagnipplfhoondcb?authuser=2&hl=pt-BR",
        github: "https://github.com/romulo126/search-streamers"
    },
    {
        name: "Crunchyroll: Video Boostere",
        image: "https://lh3.googleusercontent.com/MS9F0ma_tnB-7L7PC2oa2BwvGLLhicEWQ6IUU5sXXmWEIWoeX4dFtvOkNRftg3LvcPaNWUum98CeYx__gCynByWsmmA=s60", // Link da imagem
        description: "Novas funcionalidades no video: Auto skip, aumentar a velocidade de reprodução e picture in picture.",
        webStore: "https://chromewebstore.google.com/detail/crunchyroll-video-booster/ldimhcobdooedhjdbbilkgamgaibliob",
        github: "https://github.com/romulo126/Crunchyroll"
    },
    {
        name: "Blur Images and Videos by Domain",
        image: "https://lh3.googleusercontent.com/WfwMkc-M9aqu-LOgSEpIYgf_FrXb28t_QYoRNKjsPmCJiwlVxm8myCtXoCcEyVXnkJVuNnjdS54ncP3b9M_wWmgn=s60",
        description: "Aplica blur em imagens e vídeos por domínio.",
        webStore: "https://chromewebstore.google.com/detail/blur-images-and-videos-by/bnpmckdbhadbbojfndkcfmhepknoebch",
        github: "https://github.com/romulo126/bluer-Images-Domain"
    },
    {
        name: "Gerador de Dados Brasileiros",
        image: "https://lh3.googleusercontent.com/GyHnFLn0eL7FpBcrSvlNjhlFQymKj3u_nFz4JmxsZY68ra7W1eiMAkweew2WjQSms3myuI4-GZCToVRgTFcTogHm=s60",
        description: "Gerador de Dados Brasileiros, nomes, sobrenomes, CPFs válidos, telefones, e-mails e CEPs. Ideal para desenvolvedores e testadores que precisam de dados realistas .",
        webStore: "https://chromewebstore.google.com/detail/gerador-de-dados-brasilei/cdlhnmldkaapnilmpimpdbmmalckjhic",
        github: "https://github.com/romulo126/extensaoGeradorDeDados"
    },
    {
        name: "MailHog",
        image: "https://lh3.googleusercontent.com/cjwVuMl12C567vlc_pg2fF1LHZMhtwlaarDWhRW922sXOoqhzDAUNAxMiMGDufSXLANMDq8oBBvDRnZh1TfsxTgl4w=s60",
        description: "Conecta-se ao MailHog e exibe e-mails. Visualize e gerencie e-mails capturados pelo MailHog diretamente do seu navegador.",
        webStore: "https://chromewebstore.google.com/detail/mailhog/oifipcnknpkfgibnofmchnnpohfkgebd",
        github: "https://github.com/romulo126/ex-mail-hog"
    },
    {
        name: "speed Video",
        image: "https://lh3.googleusercontent.com/RTiLnPZh6EDgJ2evtnfAkSj7iwvpSCpaByONPtPoRexekcVdUJcEBfHe4WXpOgwsrsabTlgFL5LjtEWAhfANGQyXwdk=s60",
        description: "permite ajustar a velocidade de reprodução de vídeos em qualquer site, ideal para otimizar seu tempo em tutoriais.",
        webStore: "https://chromewebstore.google.com/detail/speed-video/aiacpeimcbgahbahicdibchbjofjlifm",
        github: "https://github.com/romulo126/Speed-Video"
    }
];

const extensionsList = document.getElementById("extensions-list");

extensions.forEach(extension => {
    const listItem = document.createElement("li");
    
    listItem.innerHTML = `
        <img src="${extension.image}" alt="${extension.name}">
        <span>${extension.name}</span>
        <p>${extension.description}</p>
        <a href="${extension.webStore}" target="_blank">View on webStore</a>
    `;
    
    if (extension.github) {
        const githubButton = document.createElement("a");
        githubButton.href = extension.github;
        githubButton.target = "_blank";
        githubButton.className = "github";
        githubButton.innerHTML = `
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub">
            View on GitHub
        `;
        listItem.appendChild(githubButton);
    }

    extensionsList.appendChild(listItem);
});
