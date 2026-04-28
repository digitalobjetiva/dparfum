const WHATSAPP_NUMBER = "5521993543808";
const SITE_URL = "https://dparfum.shop";
const CATALOG_WHATSAPP = "https://wa.me/c/5521993543808";
const INSTAGRAM_URL = "https://www.instagram.com/dparfy/";
const FACEBOOK_URL = "https://www.facebook.com/dparfy";
const ADDRESS = "Rua Milton Ayres de Oliveira Bueno, Centro, Itaguaí - RJ, 23815-130";

const navItems = [
  ["index.html", "Início", "home"],
  ["loja.html", "Loja", "loja"],
  ["produtos.html", "Produtos", "produtos"],
  ["catalogo.html", "Catálogo", "catalogo"],
  ["sobre.html", "Sobre", "sobre"],
  ["duvidas.html", "Dúvidas", "duvidas"],
  ["noticias.html", "Guia", "noticias"],
  ["contato.html", "Contato", "contato"],
];

const productLines = [
  {
    name: "Perfumes inspirados",
    image: "img/perfumes/006cc1db-e2e9-4fd8-adbc-670959eee61e.jpg",
    tags: ["Mais de mil opções", "Alta fixação"],
    text: "Fragrâncias inspiradas em grandes sucessos da perfumaria mundial, com presença elegante, excelente fixação e preço justo.",
  },
  {
    name: "Body splash",
    image: "img/bodysplash/a221be89-e630-4a26-9704-fa6db8eec0e2.jpg",
    tags: ["Leve", "Uso diário"],
    text: "Toque fresco e confortável para reaplicar ao longo do dia, com perfumação suave, elegante e fácil de usar.",
  },
  {
    name: "Hidratantes perfumados",
    image: "img/hidratante/flower-e1633424968419.jpg",
    tags: ["Cuidado", "Camadas de aroma"],
    text: "Hidratação e fragrância em um ritual completo para prolongar a presença do perfume na pele.",
  },
  {
    name: "Perfume para cabelos",
    image: "img/perfume de cabelo/blue-ocean-wave-e1633425002635.jpg",
    tags: ["Brilho", "Perfume delicado"],
    text: "Perfuma os fios com sofisticação sem pesar, ideal para finalizar a produção com um rastro elegante.",
  },
];

const bodySplashItems = [
  {
    name: "Body Splash Scandal",
    image: "img/bodysplash/6ba50588-8634-42eb-9569-b95e9bf50553.jpg",
    text: "Inspiração envolvente para quem gosta de dulçor, presença e reaplicação ao longo do dia.",
  },
  {
    name: "Body Splash Delina",
    image: "img/bodysplash/a221be89-e630-4a26-9704-fa6db8eec0e2.jpg",
    text: "Rosas delicadas e frescor elegante em uma versão leve para rotina e pós-banho.",
  },
  {
    name: "Body Splash Angel",
    image: "img/bodysplash/colorful-citrus-fruit-slices-e1633424908733.jpg",
    text: "Assinatura adocicada e luminosa, feita para perfumar com suavidade sem perder personalidade.",
  },
];

const careItems = [
  {
    name: "Hidratante inspirado em Chloé",
    image: "img/hidratante/flower-e1633424968419.jpg",
    text: "Ajuda a preparar a pele para receber o perfume e reforça a sensação de limpeza sofisticada.",
  },
  {
    name: "Perfume de cabelo inspirado em Chloé",
    image: "img/perfume de cabelo/blue-ocean-wave-e1633425002635.jpg",
    text: "Finalização perfumada para os fios, com toque elegante e sensação de cuidado.",
  },
];

const featuredPerfumes = [
  ["Scandal", "img/perfumes/006cc1db-e2e9-4fd8-adbc-670959eee61e.jpg", "Oriental floral", "Ousadia", "Doçura marcante, presença sensual e assinatura noturna."],
  ["La Vie Est Belle", "img/perfumes/02f9b259-b3e6-4009-8068-caa832d876f9.jpg", "Gourmand floral", "Elegância", "Inspiração luminosa, feminina e envolvente para quem gosta de deixar rastro delicado."],
  ["Good Girl", "img/perfumes/086a2a76-c647-43f3-9bfe-41b954859889.jpg", "Floral ambarado", "Poder", "Sofisticada e intensa, ideal para presença marcante à noite."],
  ["Coco Mademoiselle", "img/perfumes/122f55d4-12dc-4b75-8ca5-ccd40a2fc0dd.jpg", "Cítrico floral", "Clássico moderno", "Elegância limpa, frescor refinado e acabamento feminino atemporal."],
  ["Bleu de Chanel", "img/perfumes/1a8610d5-f2ef-42b6-9292-ccc1923bac00.jpg", "Amadeirado aromático", "Sofisticação", "Versátil, fresca e elegante para rotina, trabalho e noite."],
  ["Baccarat", "img/perfumes/3494867a-2f66-4087-8b1b-50277071b87c.jpg", "Âmbar amadeirado", "Impacto", "Assinatura moderna, adocicada e sofisticada, feita para chamar atenção."],
  ["Chloé", "img/perfumes/48ff874c-e231-41b6-8020-93b3ec79d40a.jpg", "Floral fresco", "Delicadeza", "Floral elegante, confortável e limpo, com sensação de banho sofisticado."],
  ["One Million", "img/perfumes/5d41b809-eb49-433e-9ab3-550b290d2a0d.jpg", "Couro especiado", "Glamour", "Presença masculina intensa, quente e confiante."],
  ["Light Blue", "img/perfumes/5fa7c48a-3d0a-48be-bf91-c0af60076758.jpg", "Cítrico fresco", "Verão", "Leve, vibrante e solar, ótima para dias quentes e uso diário."],
  ["Delina", "img/perfumes/6ade2b4d-792b-4b07-85c2-b68831328448.jpg", "Rosas frutadas", "Opulência", "Rosas intensas, feminilidade sofisticada e doçura elegante."],
  ["Invictus", "img/perfumes/6ec5548e-f04c-455b-b936-fc2da24b73d0.jpg", "Aquático amadeirado", "Energia", "Esportiva, fresca e potente, com perfil jovem e versátil."],
  ["Lady Million", "img/perfumes/7672f5a9-43b7-4a64-8b77-a4822f07ded7.jpg", "Floral branco", "Glamour", "Luxo dourado, sensualidade e presença feminina envolvente."],
  ["Miss Dior", "img/perfumes/15f58be3-bdff-4521-ad1b-c21f96c67af4.jpg", "Floral elegante", "Romance", "Feminina, delicada e sofisticada para quem ama perfume marcante sem excesso."],
  ["Silver Scent", "img/perfumes/3461e5f9-d46d-44ca-8617-cc6446b362e6.jpg", "Cítrico aromático", "Impacto", "Inspiração masculina intensa, limpa e muito elogiada."],
  ["Prada Paradoxe", "img/perfumes/36b4cc4f-e835-4571-9b69-ac50d40edd87.jpg", "Floral âmbar", "Modernidade", "Elegante e atual, com contraste entre delicadeza e presença."],
  ["Azzaro Pour Homme", "img/perfumes/44968f99-8383-4599-96cd-5d6404281c21.jpg", "Fougère clássico", "Tradição", "Perfil masculino clássico, sofisticado e seguro."],
  ["Nina Ricci Vénus", "img/perfumes/51a3db6f-1366-48f1-bcc0-2f7728ae5bd4.jpg", "Floral frutado", "Encanto", "Doçura luminosa com feminilidade delicada e presença macia."],
  ["Ferrari Black", "img/perfumes/6e73d9ec-0b31-40aa-84ea-c4ce5ae0d764.jpg", "Amadeirado fresco", "Esporte fino", "Inspiração masculina versátil, limpa e fácil de usar."],
  ["Libre", "img/perfumes/76a3da56-cbe9-44e1-b2ef-ec8fbfa964e2.jpg", "Floral aromático", "Liberdade", "Perfume inspirado em elegância moderna, forte e feminina."],
  ["Asad", "img/perfumes/76ce78ed-c716-4e63-b7d9-99b8273eb7cf.jpg", "Oriental especiado", "Força", "Quente, marcante e ideal para quem quer presença intensa."],
  ["L'Interdit", "img/perfumes/7c6fc925-2e8e-4c2b-a15e-24d527007fd9.jpg", "Floral branco", "Mistério", "Elegância intensa com contraste entre luz, doçura e profundidade."],
  ["Olympéa", "img/perfumes/802ebfac-843f-4a7b-85a6-aef0e9d480a9.jpg", "Âmbar floral", "Deusa solar", "Sensual, feminina e envolvente, com uma presença cremosa."],
  ["Sauvage", "img/perfumes/84e43da3-7149-4590-b533-64a44809a92e.jpg", "Aromático fresco", "Magnetismo", "Inspiração masculina fresca, potente e muito versátil."],
  ["My Way", "img/perfumes/89438c2e-f648-4276-93a3-72796447cdfe.jpg", "Floral branco", "Descoberta", "Feminina, luminosa e elegante para rotina e momentos especiais."],
];

const shopPerfumes = [
  ["006cc1db-e2e9-4fd8-adbc-670959eee61e.jpg", "Scandal", "Feminino", "Oriental floral", "Ousado", "Doce, sensual e marcante", "Noite, encontros e eventos", "Alta"],
  ["02f9b259-b3e6-4009-8068-caa832d876f9.jpg", "La Vie Est Belle", "Feminino", "Gourmand floral", "Elegante", "Íris, flores brancas e dulçor sofisticado", "Dia especial, trabalho e presente", "Alta"],
  ["03639457-bc47-45ee-b198-634df136bbef.jpg", "English Pear & Freesia", "Feminino", "Frutado floral", "Leve", "Pera, flores claras e frescor limpo", "Dia a dia e clima quente", "Moderada"],
  ["086a2a76-c647-43f3-9bfe-41b954859889.jpg", "Good Girl Blush", "Feminino", "Floral ambarado", "Delicado", "Floral cremoso com toque moderno", "Encontros, rotina elegante e presente", "Alta"],
  ["0ecd85ba-cd30-4223-8e92-a26abda669dd.jpg", "Issey Miyake", "Feminino", "Aquático floral", "Fresco", "Notas limpas, aquáticas e femininas", "Trabalho, calor e dia a dia", "Moderada"],
  ["122f55d4-12dc-4b75-8ca5-ccd40a2fc0dd.jpg", "Coco Mademoiselle", "Feminino", "Cítrico floral", "Clássico moderno", "Frescor elegante com fundo sofisticado", "Eventos, trabalho e assinatura pessoal", "Alta"],
  ["1557c5ce-d274-4521-aa81-e7e57e8abd84.jpg", "Sabah", "Unissex", "Oriental", "Misterioso", "Acordes quentes, envolventes e exóticos", "Noite e ocasiões marcantes", "Alta"],
  ["15f58be3-bdff-4521-ad1b-c21f96c67af4.jpg", "Miss Dior", "Feminino", "Floral elegante", "Romântico", "Flores delicadas com acabamento refinado", "Presentes, encontros e eventos", "Alta"],
  ["1a8610d5-f2ef-42b6-9292-ccc1923bac00.jpg", "Bleu de Chanel", "Masculino", "Amadeirado aromático", "Sofisticado", "Fresco, elegante e amadeirado", "Trabalho, noite e assinatura masculina", "Alta"],
  ["22c813e2-42b3-471f-a2da-771669196720.jpg", "Coconut Passion", "Feminino", "Gourmand tropical", "Solar", "Coco cremoso, baunilha e sensação de verão", "Pós-banho, praia e rotina", "Moderada"],
  ["29b92fc8-0439-4dee-8a8d-e01266407bbb.jpg", "La Vie Est Belle", "Feminino", "Gourmand floral", "Elegante", "Dulçor luminoso e presença feminina", "Presente, trabalho e eventos", "Alta"],
  ["2f9c41e0-26fe-4f40-8b73-a8664fd013e9.jpg", "Bright Crystal", "Feminino", "Floral fresco", "Cristalino", "Floral limpo, delicado e luminoso", "Dia a dia, trabalho e calor", "Moderada"],
  ["31e601f2-0d51-404a-af9a-aeb9304aee52.jpg", "Angel Nova", "Feminino", "Frutado floral", "Radiante", "Frutas vibrantes, rosa e doçura moderna", "Encontros e dias alegres", "Alta"],
  ["32b01316-2ad5-4597-b4be-7e74a49abb00.jpg", "La Vie Est Belle", "Feminino", "Gourmand floral", "Elegante", "Assinatura doce, confortável e sofisticada", "Eventos, trabalho e presente", "Alta"],
  ["3461e5f9-d46d-44ca-8617-cc6446b362e6.jpg", "Silver Scent", "Masculino", "Cítrico aromático", "Impactante", "Fresco intenso com assinatura muito elogiada", "Noite, encontros e presença masculina", "Alta"],
  ["3494867a-2f66-4087-8b1b-50277071b87c.jpg", "Baccarat", "Unissex", "Âmbar amadeirado", "Luxuoso", "Doçura moderna, âmbar e madeira elegante", "Eventos, noite e assinatura sofisticada", "Alta"],
  ["36b4cc4f-e835-4571-9b69-ac50d40edd87.jpg", "Prada Paradoxe", "Feminino", "Floral âmbar", "Moderno", "Floral luminoso com fundo envolvente", "Trabalho, noite e ocasiões especiais", "Alta"],
  ["3b374219-bdb6-4ab9-9383-2025e22fc876.jpg", "Angel", "Feminino", "Gourmand oriental", "Marcante", "Doçura intensa, mistério e assinatura memorável", "Noite e clima frio", "Alta"],
  ["44968f99-8383-4599-96cd-5d6404281c21.jpg", "Azzaro Pour Homme", "Masculino", "Fougère clássico", "Tradicional", "Elegância masculina clássica e segura", "Trabalho, eventos e rotina", "Alta"],
  ["452eba2d-2cd5-438d-bf03-3f49c7a3d76c.jpg", "Sabah", "Unissex", "Oriental", "Quente", "Notas exóticas, quentes e envolventes", "Noite e momentos especiais", "Alta"],
  ["48ff874c-e231-41b6-8020-93b3ec79d40a.jpg", "Chloé", "Feminino", "Floral fresco", "Delicado", "Rosas limpas, elegância e banho sofisticado", "Dia a dia, trabalho e presente", "Moderada"],
  ["4ae459b1-8bf6-48b4-94df-b11551e13d07.jpg", "Sabah", "Unissex", "Oriental", "Envolvente", "Aroma quente e exótico com presença", "Noite, encontros e eventos", "Alta"],
  ["51a3db6f-1366-48f1-bcc0-2f7728ae5bd4.jpg", "Nina Ricci Vénus", "Feminino", "Floral frutado", "Encantador", "Doçura luminosa e feminilidade delicada", "Encontros, presente e rotina elegante", "Moderada"],
  ["59d3f5be-fd21-414c-9e87-44ace6fde68f.jpg", "Issey Miyake", "Masculino", "Aquático amadeirado", "Limpo", "Frescor aquático com elegância masculina", "Dia a dia e trabalho", "Moderada"],
  ["5be67b80-bf06-48a0-895d-e8d4f86f47ad.jpg", "Chloé", "Feminino", "Floral fresco", "Sofisticado", "Floral limpo, feminino e confortável", "Assinatura diária e presente", "Moderada"],
  ["5d41b809-eb49-433e-9ab3-550b290d2a0d.jpg", "One Million", "Masculino", "Couro especiado", "Glamouroso", "Quente, doce e confiante", "Noite, festas e encontros", "Alta"],
  ["5ecf1cab-f597-4873-856e-f3ef4cf1d703.jpg", "Scandal", "Feminino", "Oriental floral", "Sensual", "Doce intenso e presença noturna", "Eventos e encontros", "Alta"],
  ["5fa7c48a-3d0a-48be-bf91-c0af60076758.jpg", "Light Blue", "Feminino", "Cítrico fresco", "Solar", "Frescor leve, vibrante e mediterrâneo", "Calor, praia e rotina", "Moderada"],
  ["6197e3e5-84ed-4704-a58f-00402d1d05f0.jpg", "Delina", "Feminino", "Rosas frutadas", "Opulento", "Rosa intensa, feminilidade e doçura elegante", "Eventos, encontros e presente", "Alta"],
  ["6ade2b4d-792b-4b07-85c2-b68831328448.jpg", "Delina", "Feminino", "Rosas frutadas", "Opulento", "Rosas marcantes e assinatura feminina refinada", "Ocasiões especiais", "Alta"],
  ["6e73d9ec-0b31-40aa-84ea-c4ce5ae0d764.jpg", "Ferrari Black", "Masculino", "Amadeirado fresco", "Esporte fino", "Limpo, versátil e masculino", "Trabalho, rotina e noite leve", "Moderada"],
  ["6ec5548e-f04c-455b-b936-fc2da24b73d0.jpg", "Invictus", "Masculino", "Aquático amadeirado", "Energético", "Fresco, potente e esportivo", "Dia, academia e encontros", "Alta"],
  ["7672f5a9-43b7-4a64-8b77-a4822f07ded7.jpg", "Lady Million", "Feminino", "Floral branco", "Glamouroso", "Luxo dourado, mel e flores brancas", "Noite, eventos e presente", "Alta"],
  ["76a3da56-cbe9-44e1-b2ef-ec8fbfa964e2.jpg", "Libre", "Feminino", "Floral aromático", "Livre", "Lavanda, flores brancas e elegância moderna", "Trabalho e noite", "Alta"],
  ["76ce78ed-c716-4e63-b7d9-99b8273eb7cf.jpg", "Asad", "Masculino", "Oriental especiado", "Forte", "Quente, especiado e muito marcante", "Noite e clima frio", "Alta"],
  ["7c6fc925-2e8e-4c2b-a15e-24d527007fd9.jpg", "L'Interdit", "Feminino", "Floral branco", "Misterioso", "Flores brancas, doçura e profundidade", "Noite e eventos", "Alta"],
  ["7dc75f67-7a67-40fb-83f7-cd5ad64a7374.jpg", "Olympea Vanilla", "Feminino", "Âmbar gourmand", "Cremoso", "Baunilha, calor e sensualidade macia", "Noite e encontros", "Alta"],
  ["802ebfac-843f-4a7b-85a6-aef0e9d480a9.jpg", "Olympéa", "Feminino", "Âmbar floral", "Solar", "Floral cremoso e sensual", "Eventos, noite e assinatura", "Alta"],
  ["84e43da3-7149-4590-b533-64a44809a92e.jpg", "Sauvage", "Masculino", "Aromático fresco", "Magnético", "Fresco, potente e amadeirado", "Trabalho, noite e encontros", "Alta"],
  ["8579b3bc-e5ba-4506-bd5d-5d074686000b.jpg", "Paris", "Feminino", "Floral clássico", "Romântico", "Rosas delicadas e elegância parisiense", "Presente e dia especial", "Moderada"],
  ["874ff2e4-ba27-4124-8897-39ede9506f46.jpg", "English Pear & Freesia", "Feminino", "Frutado floral", "Refinado", "Pera fresca e flores leves", "Dia a dia e presente", "Moderada"],
  ["89438c2e-f648-4276-93a3-72796447cdfe.jpg", "My Way", "Feminino", "Floral branco", "Luminoso", "Flores brancas e elegância moderna", "Rotina elegante e eventos", "Alta"],
  ["903f67ba-c65f-4f61-86d2-03e1cc6e5d9a.jpg", "Erba Pura", "Unissex", "Frutado âmbar", "Vibrante", "Frutas intensas e fundo doce sofisticado", "Eventos e presença marcante", "Alta"],
  ["91e8cdc0-e970-4843-9151-26aadef786ba.jpg", "Allure Homme Sport", "Masculino", "Cítrico amadeirado", "Esportivo", "Fresco, limpo e elegante", "Rotina, trabalho e calor", "Moderada"],
  ["927c318e-7737-4caf-9570-27bf8cff8cb6.jpg", "Chloé", "Feminino", "Floral fresco", "Limpo", "Rosas suaves e conforto elegante", "Assinatura diária", "Moderada"],
  ["99a26616-964b-4c3b-b9c5-7d74e94d3dee.jpg", "J'adore", "Feminino", "Floral branco", "Luxuoso", "Flores nobres e feminilidade sofisticada", "Eventos, presente e noite", "Alta"],
  ["99e8aa4f-243e-4f9d-a367-00d96495f392.jpg", "Light Blue", "Feminino", "Cítrico fresco", "Leve", "Frescor solar e sensação de liberdade", "Dia a dia e calor", "Moderada"],
  ["9b86e33c-fced-4380-91a9-5b0cf8d0853b.jpg", "Good Girl", "Feminino", "Floral ambarado", "Poderoso", "Contraste entre doçura, flores e sensualidade", "Noite e encontros", "Alta"],
  ["9d090cdc-6820-405a-baae-8f1bc1587968.jpg", "DBG The One", "Masculino", "Ambarado especiado", "Elegante", "Quente, sofisticado e envolvente", "Noite e ocasiões especiais", "Alta"],
  ["aa16e359-0a40-4377-b4fe-acae037603a4.jpg", "Nina Ricci Vénus", "Feminino", "Floral frutado", "Delicado", "Doçura luminosa e charme feminino", "Dia a dia e encontros", "Moderada"],
  ["acdcba36-14d7-4342-a078-186a23e73adb.jpg", "La Nuit Trésor", "Feminino", "Gourmand oriental", "Sedutor", "Doçura escura, frutas e sensualidade", "Noite e clima frio", "Alta"],
  ["b40ef07c-d3bb-45df-9888-4702faa33b7b.jpg", "Burberry Her", "Feminino", "Frutado gourmand", "Urbano", "Frutas vermelhas, doçura moderna e charme", "Rotina, encontros e presente", "Alta"],
  ["b6453e44-85df-48d0-b751-e2b7c67a4484.jpg", "Chance", "Feminino", "Floral fresco", "Radiante", "Frescor, flores e elegância jovem", "Dia a dia e trabalho", "Moderada"],
  ["b6b083d8-f227-4c2c-b302-259edfc7f555.jpg", "Coco Mademoiselle", "Feminino", "Cítrico floral", "Elegante", "Frescor refinado e fundo sofisticado", "Assinatura pessoal", "Alta"],
  ["b7111f97-9707-4441-a2c3-83e188aa88ca.jpg", "212 Sexy", "Feminino", "Oriental floral", "Sensual", "Quente, doce e feminino", "Noite e encontros", "Alta"],
  ["b91c43e5-f04b-4e8a-a13f-c896bc1f90cc.jpg", "Acqua Di Gio", "Masculino", "Aquático cítrico", "Fresco", "Notas marinhas, cítricas e limpas", "Dia a dia, trabalho e calor", "Moderada"],
  ["bc585c78-03b5-4387-a9e8-e0d974ad1d7b.jpg", "CK Be", "Unissex", "Almiscarado fresco", "Minimalista", "Limpo, confortável e versátil", "Rotina e assinatura discreta", "Moderada"],
  ["bd5fdbdd-31a2-4a73-ac26-da34bc0b2166.jpg", "Irresistible", "Feminino", "Floral frutado", "Charmoso", "Rosa, frutas e feminilidade moderna", "Encontros e rotina elegante", "Alta"],
  ["bd6e254e-ca37-4a5f-9a31-b4b6837555f7.jpg", "Sabah", "Unissex", "Oriental", "Quente", "Aroma exótico, elegante e envolvente", "Noite e eventos", "Alta"],
  ["bfcee915-a435-41f9-aa5c-68916d1a6630.jpg", "Musamam", "Masculino", "Oriental amadeirado", "Intenso", "Madeiras, especiarias e presença forte", "Noite e clima frio", "Alta"],
  ["cc176526-c173-4ed6-9bf0-0db0a7520924.jpg", "Fantasy Midnight", "Feminino", "Frutado gourmand", "Divertido", "Frutas doces, mistério e juventude", "Noite leve e encontros", "Moderada"],
  ["ce387040-0179-47c1-8fb6-46d50ce742c9.jpg", "Issey Miyake", "Masculino", "Aquático fresco", "Elegante", "Frescor limpo e assinatura masculina", "Trabalho e dia a dia", "Moderada"],
  ["d7b55705-3cd5-4318-b02e-90013cd718bf.jpg", "Prada Extra Pura", "Feminino", "Floral fresco", "Puro", "Limpeza sofisticada com toque floral", "Dia a dia e trabalho", "Moderada"],
  ["d8e51dbf-5f9f-4b61-a75b-e7b675071948.jpg", "Bombshell", "Feminino", "Frutado floral", "Vibrante", "Frutas, flores e energia feminina", "Rotina, verão e presente", "Moderada"],
  ["d96f8acf-e820-41b6-811c-bb97a0dd576b.jpg", "212 VIP Men", "Masculino", "Amadeirado especiado", "Urbano", "Elegância noturna e perfil sofisticado", "Festas, noite e encontros", "Alta"],
  ["e40c8ec6-c42c-4292-b7ae-eaac1e74852c.jpg", "Issey Miyake", "Masculino", "Aquático amadeirado", "Fresco", "Limpo, leve e muito versátil", "Calor, trabalho e rotina", "Moderada"],
  ["e5d83728-44ff-465e-880d-4daeb558d805.jpg", "Angel", "Feminino", "Gourmand oriental", "Marcante", "Doce intenso, misterioso e inesquecível", "Noite e ocasiões especiais", "Alta"],
  ["eb23f215-f81c-4b7e-9637-840d41db898a.jpg", "Delina", "Feminino", "Rosas frutadas", "Romântico", "Rosas elegantes e feminilidade refinada", "Eventos e presentes", "Alta"],
  ["eee6b4d3-9331-4618-b80d-bca9c613c41c.jpg", "Angel", "Feminino", "Gourmand oriental", "Cósmico", "Doçura profunda e assinatura poderosa", "Noite e clima frio", "Alta"],
];

const preferredShopImages = {
  Angel: "3b374219-bdb6-4ab9-9383-2025e22fc876.jpg",
  Chloé: "5be67b80-bf06-48a0-895d-e8d4f86f47ad.jpg",
  Delina: "6ade2b4d-792b-4b07-85c2-b68831328448.jpg",
  "English Pear & Freesia": "03639457-bc47-45ee-b198-634df136bbef.jpg",
  "Issey Miyake": "59d3f5be-fd21-414c-9e87-44ace6fde68f.jpg",
  "La Vie Est Belle": "02f9b259-b3e6-4009-8068-caa832d876f9.jpg",
  "Light Blue": "5fa7c48a-3d0a-48be-bf91-c0af60076758.jpg",
  "Nina Ricci Vénus": "51a3db6f-1366-48f1-bcc0-2f7728ae5bd4.jpg",
  Sabah: "1557c5ce-d274-4521-aa81-e7e57e8abd84.jpg",
  Scandal: "006cc1db-e2e9-4fd8-adbc-670959eee61e.jpg",
};

function uniqueShopPerfumes() {
  const byName = new Map();
  for (const item of shopPerfumes) {
    const [file, name] = item;
    if (!byName.has(name) || preferredShopImages[name] === file) {
      byName.set(name, item);
    }
  }
  return [...byName.values()].sort((a, b) => a[1].localeCompare(b[1], "pt-BR"));
}

const catalog = [
  ["Tom Ford Oud Wood","Tom Ford","Importado masculino"],
  ["Ultra Male","Jean Paul","Importado masculino"],
  ["Urban Journey","Hugo Boss","Importado masculino"],
  ["Valentino Uomo Intense","Valentino","Importado masculino"],
  ["Vezzo","L'acqua Di Fiori","Importado masculino"],
  ["Versace","Versace","Importado masculino"],
  ["Versace Eros Flame","Versace","Importado masculino"],
  ["53 (Fifty Three)","Vila Romana","Importado masculino"],
  ["Xs Paco Rabanne","Paco Rabanne","Importado masculino"],
  ["Zino","Davidoff","Importado masculino"],
  ["Zippo In The Blue","Zippo","Importado masculino"],
  ["212 Men","Carolina Herrera","Importado masculino"],
  ["212 Sex Men","Carolina Herrera","Importado masculino"],
  ["212 Vip Men","Carolina Herrera","Importado masculino"],
  ["212 Vip Black","Carolina Herrera","Importado masculino"],
  ["212 Men Aqua","Carolina Herrera","Importado masculino"],
  ["212 Nyc","Carolina Herrera","Importado masculino"],
  ["Legend Spirit","Montblanc","Importado masculino"],
  ["Light Blue","Dolce & Gabbana","Importado masculino"],
  ["L'eau Par Kenzo","Kenzo","Importado masculino"],
  ["M7","Yves S. Laurent","Importado masculino"],
  ["Mister Diavolo","Antônio Banderas","Importado masculino"],
  ["Mr. Burberry","Burberry","Importado masculino"],
  ["One Million","Paco Rabanne","Importado masculino"],
  ["One Million Privê","Paco Rabanne","Importado masculino"],
  ["Óleo De Patchouly","Patchouly","Importado masculino"],
  ["Obsessed For Men","Calvin Klein","Importado masculino"],
  ["Opium","Yves S. Laurent","Importado masculino"],
  ["Patchouly","Patchouly","Importado masculino"],
  ["Paco Rabanne","Paco Rabanne","Importado masculino"],
  ["Prada Men","Prada","Importado masculino"],
  ["Prada Milano","Prada","Importado masculino"],
  ["Presence","Montblanc","Importado masculino"],
  ["Platinum Egoíste","Chanel","Importado masculino"],
  ["Polo","Ralph Lauren","Importado masculino"],
  ["Polo Black","Ralph Lauren","Importado masculino"],
  ["Polo Blue","Ralph Lauren","Importado masculino"],
  ["Polo Sport","Ralph Lauren","Importado masculino"],
  ["Polo Explorer","Ralph Lauren","Importado masculino"],
  ["Polo Red","Ralph Lauren","Importado masculino"],
  ["Polo Red Extreme","Ralph Lauren","Importado masculino"],
  ["Polo Ultra Blue","Ralph Lauren","Importado masculino"],
  ["Polo Supreme Cashmere","Ralph Lauren","Importado masculino"],
  ["Pi-Givenchy","Givenchy","Importado masculino"],
  ["Pure Xs","Paco Rabanne","Importado masculino"],
  ["Reavel","Calvin Klein","Importado masculino"],
  ["Safari","Yves S. Laurent","Importado masculino"],
  ["Stronger With You","Giorgio Armani","Importado masculino"],
  ["Scuderia Ferrari","Ferrari","Importado masculino"],
  ["Silver Scent","Jacques Bogart","Importado masculino"],
  ["Silver Scent Intense","Jacques Bogart","Importado masculino"],
  ["Spice Bomb","Victor&Rolf","Importado masculino"],
  ["Sauvage","Dior","Importado masculino"],
  ["Starwalker","Montblanc","Importado masculino"],
  ["Terre D’Hermès","Hermes","Importado masculino"],
  ["The Secret","Antônio Banderas","Importado masculino"],
  ["The Golden Secret","Antônio Banderas","Importado masculino"],
  ["The One Gentleman","Dolce & Gabbana","Importado masculino"],
  ["The One Grey","Dolce & Gabbana","Importado masculino"],
  ["Tommy","Tommy Hilfiger","Importado masculino"],
  ["Tsar","Van Cleef & Arpels","Importado masculino"],
  ["Tom Ford Tobacco","Tom Ford","Importado masculino"],
  ["Fierce Confidence","Abercrombie","Importado masculino"],
  ["Guilty Gucci Absolute","Gucci","Importado masculino"],
  ["Gentlemen Only Absolute","Givenchy","Importado masculino"],
  ["Hugo Boss","Hugo Boss","Importado masculino"],
  ["Hugo Energise","Hugo Boss","Importado masculino"],
  ["Hugo Dark Blue","Hugo Boss","Importado masculino"],
  ["Hugo Iced","Hugo Boss","Importado masculino"],
  ["Hipnose","Lancôme","Importado masculino"],
  ["Ice Men","Thierry Mugler","Importado masculino"],
  ["Individuel","Montblanc","Importado masculino"],
  ["Invictus","Paco Rabanne","Importado masculino"],
  ["Invictus Aqua","Paco Rabanne","Importado masculino"],
  ["Invictus Intense","Paco Rabanne","Importado masculino"],
  ["L'eau D'Issey","Issey Miyake","Importado masculino"],
  ["L'eau D'Issey Nuit","Issey Miyake","Importado masculino"],
  ["L'eau D'Issey Sport","Issey Miyake","Importado masculino"],
  ["L'eau D'Issey Intense","Issey Miyake","Importado masculino"],
  ["Jazz","Yves S. Laurent","Importado masculino"],
  ["James Bond 007","James Bond","Importado masculino"],
  ["Joop","Joop","Importado masculino"],
  ["Joop Night Flight","Joop","Importado masculino"],
  ["Joop Jump","Joop","Importado masculino"],
  ["Jimmy Choo","Jimmy Choo","Importado masculino"],
  ["Jhon Varvatos","Jhon Varvatos","Importado masculino"],
  ["Kenzo","Kenzo","Importado masculino"],
  ["Kokorico","Jean Paul","Importado masculino"],
  ["Kouros","Yves S. Laurent","Importado masculino"],
  ["Kouros Fraicheur","Yves S. Laurent","Importado masculino"],
  ["Kouros Silver","Yves S. Laurent","Importado masculino"],
  ["King Of Seduction","Antônio Banderas","Importado masculino"],
  ["K Dolce","Dolce & Gabbana","Importado masculino"],
  ["Lacoste","Lacoste","Importado masculino"],
  ["Lacoste Noir","Lacoste","Importado masculino"],
  ["Lacoste Noir Intense","Lacoste","Importado masculino"],
  ["Lacoste Essential","Lacoste","Importado masculino"],
  ["Lacoste Blanche","Lacoste","Importado masculino"],
  ["Lapidus","Ted Lapidus","Importado masculino"],
  ["Lancaster","Argentino","Importado masculino"],
  ["Le Beau","Jean Paul","Importado masculino"],
  ["Le Male","Jean Paul","Importado masculino"],
  ["Le Male Essence","Jean Paul","Importado masculino"],
  ["L'Homme","Yves S. Laurent","Importado masculino"],
  ["L'Homme Prada Milano","Prada","Importado masculino"],
  ["L'Homme Libre","Montblanc","Importado masculino"],
  ["Legend","Montblanc","Importado masculino"],
  ["Body Kouros","Yves S. Laurent","Importado masculino"],
  ["Boss","Hugo Boss","Importado masculino"],
  ["Boss Bottled Tonic","Hugo Boss","Importado masculino"],
  ["Boss Bottled Night","Hugo Boss","Importado masculino"],
  ["Boss The Scenter","Hugo Boss","Importado masculino"],
  ["Boss Night","Hugo Boss","Importado masculino"],
  ["Boss In Motion","Hugo Boss","Importado masculino"],
  ["Bvlgari Aqua Marine","Bvlgari","Importado masculino"],
  ["Bvlgari Blue","Bvlgari","Importado masculino"],
  ["Bvlgari Black","Bvlgari","Importado masculino"],
  ["Bvlgari Extreme","Bvlgari","Importado masculino"],
  ["Bvlgari Pour Homme","Bvlgari","Importado masculino"],
  ["Bvlgari In The Black","Bvlgari","Importado masculino"],
  ["Burberry Men","Burberry","Importado masculino"],
  ["Blue Seduction","Antonio Banderas","Importado masculino"],
  ["Bad Boy","Carolina Herrera","Importado masculino"],
  ["Café Café","Yves S. Laurent","Importado masculino"],
  ["Ch Men","Carolina Herrera","Importado masculino"],
  ["Chic Men","Carolina Herrera","Importado masculino"],
  ["Ch Privê","Carolina Herrera","Importado masculino"],
  ["Coll Water","Davidoff","Importado masculino"],
  ["CK Be","Calvin Klein","Importado masculino"],
  ["CK Free","Calvin Klein","Importado masculino"],
  ["CK One","Calvin Klein","Importado masculino"],
  ["CK Summer","Calvin Klein","Importado masculino"],
  ["Dior Homme Sport","Dior","Importado masculino"],
  ["Dior Homme Intense","Dior","Importado masculino"],
  ["Diamonds","Giorgio Armani","Importado masculino"],
  ["Diesel Bad","Diesel","Importado masculino"],
  ["Diesel Fuel for Life","Diesel","Importado masculino"],
  ["Drakkar Noir","Guy Laroche","Importado masculino"],
  ["Dolce & Gabbana Pour Homme","Dolce & Gabbana","Importado masculino"],
  ["D&G Intenso","Dolce & Gabbana","Importado masculino"],
  ["Emblem","Montblanc","Importado masculino"],
  ["Empório","Armani","Importado masculino"],
  ["Eternity","Calvin Klein","Importado masculino"],
  ["Euphoria","Calvin Klein","Importado masculino"],
  ["Explorer","Montblanc","Importado masculino"],
  ["Fahrenheit","Dior","Importado masculino"],
  ["Ferrari Black","Ferrari","Importado masculino"],
  ["Ferrari Red","Ferrari","Importado masculino"],
  ["First Instinct","Abercrombie","Importado masculino"],
  ["Fleur Du Male","Jean Paul","Importado masculino"],
  ["Acqua di Gio","Giorgio Armani","Importado masculino"],
  ["Acqua Di Gio Absolut","Giorgio Armani","Importado masculino"],
  ["Acqua Di Gio Profumo","Giorgio Armani","Importado masculino"],
  ["Acqua di Parma","*******","Importado masculino"],
  ["Angel","Thierry Mugler","Importado masculino"],
  ["Allure","Chanel","Importado masculino"],
  ["Allure Sport","Chanel","Importado masculino"],
  ["Allure Blanche","Chanel","Importado masculino"],
  ["Allure Sport Homme Extrême","Chanel","Importado masculino"],
  ["Animale","Animale","Importado masculino"],
  ["Armani","Giorgio Armani","Importado masculino"],
  ["Armani Code Black","Giorgio Armani","Importado masculino"],
  ["Armani Code Profumo","Giorgio Armani","Importado masculino"],
  ["Armani Eau De Nuit","Giorgio Armani","Importado masculino"],
  ["Attitude","Giorgio Armani","Importado masculino"],
  ["Azzaro Pour Homme","Azzaro Loris","Importado masculino"],
  ["Azzaro Visit","Azzaro Loris","Importado masculino"],
  ["Azzaro Chrome","Azzaro Loris","Importado masculino"],
  ["Azzaro Silver Black","Azzaro Loris","Importado masculino"],
  ["Azzaro Wanted","Azzaro Loris","Importado masculino"],
  ["Azzaro Wanted By Night","Azzaro Loris","Importado masculino"],
  ["Abercrombie & Fitch","Abercrombie","Importado masculino"],
  ["Aventus","Creed","Importado masculino"],
  ["Bleu","Chanel","Importado masculino"],
  ["Black Xs","Paco Rabanne","Importado masculino"],
  ["Black Xs L'execes","Paco Rabanne","Importado masculino"],
  ["Bang Bang","Marc Jacobs","Importado masculino"],
  ["Tom Ford White Suede","Tom Ford","Importado feminino"],
  ["Viva La Juicy","Couture","Importado feminino"],
  ["Versace Eros","Versace","Importado feminino"],
  ["Very Irresistible","Givenchy","Importado feminino"],
  ["Valentina","Valentino","Importado feminino"],
  ["V. Valentina","Valentino","Importado feminino"],
  ["Woman By Ralph","Ralph Lauren","Importado feminino"],
  ["Yes I Am","Cacharel","Importado feminino"],
  ["212 Woman","Carolina Herrera","Importado feminino"],
  ["212 Vip","Carolina Herrera","Importado feminino"],
  ["212 Vip Rose","Carolina Herrera","Importado feminino"],
  ["212 Sexy","Carolina Herrera","Importado feminino"],
  ["212 Nyc","Carolina Herrera","Importado feminino"],
  ["Miracle","Lancôme","Importado feminino"],
  ["Miracle Forever","Lancôme","Importado feminino"],
  ["Mon Paris","Guerlain","Importado feminino"],
  ["Mon Guerlain","Guerlain","Importado feminino"],
  ["Nina","Nina Ricci","Importado feminino"],
  ["Nina Tentation","Nina Ricci","Importado feminino"],
  ["Noa","Cacharel","Importado feminino"],
  ["Narciso Rodriguez For Her","Narciso Rodriguez","Importado feminino"],
  ["Narciso Rodriguez","Narciso Rodriguez","Importado feminino"],
  ["Olympéa","Paco Rabanne","Importado feminino"],
  ["Olympéa Intense","Paco Rabanne","Importado feminino"],
  ["Olympéa Aqua","Paco Rabanne","Importado feminino"],
  ["Organza","Givenchy","Importado feminino"],
  ["Organza Indecence","Givenchy","Importado feminino"],
  ["Ô De Lancôme","Lancôme","Importado feminino"],
  ["Oud Palao","Diptyque","Importado feminino"],
  ["Paris","Yves S. Laurent","Importado feminino"],
  ["Paris Hilton","Paris Hilton","Importado feminino"],
  ["Parisiense","Yves S. Laurent","Importado feminino"],
  ["Play","Givenchy","Importado feminino"],
  ["Pink Sugar","Aquolina","Importado feminino"],
  ["Poeme","Lancôme","Importado feminino"],
  ["Poison","Dior","Importado feminino"],
  ["Poison Girls","Dior","Importado feminino"],
  ["Prada Woman","Prada","Importado feminino"],
  ["Prada Candy Florale","Prada","Importado feminino"],
  ["Paloma Picasso","Paloma Picasso","Importado feminino"],
  ["Petits Et Mamans","Bvlgari","Importado feminino"],
  ["Pure Xs","Paco Rabanne","Importado feminino"],
  ["Rose Essentielle","Bvlgari","Importado feminino"],
  ["Rouge Royal","Marina Bourbon","Importado feminino"],
  ["Ralph","Ralph Lauren","Importado feminino"],
  ["Scandal By Night","Jean Paul","Importado feminino"],
  ["Scandal","Jean Paul","Importado feminino"],
  ["Someday","Justin Bieber","Importado feminino"],
  ["S. By Shakira","Shakira","Importado feminino"],
  ["Samsara","Guerlain","Importado feminino"],
  ["SÍ","Giorgio Armani","Importado feminino"],
  ["Si Passione","Giorgio Armani","Importado feminino"],
  ["Splendida Tubereuse Mystique","Bvlgari","Importado feminino"],
  ["Soir De Lune","Sisley","Importado feminino"],
  ["Sole Di Positano","Tom Ford","Importado feminino"],
  ["Tresor","Lancôme","Importado feminino"],
  ["Tommy Girl","Tommy Hilfiger","Importado feminino"],
  ["Tom Ford Métallique","Tom Ford","Importado feminino"],
  ["Heat Rush","Beyoncé","Importado feminino"],
  ["Hipnose","Lancôme","Importado feminino"],
  ["Hipnose Senses","Lancôme","Importado feminino"],
  ["Hipnotic Poison","Dior","Importado feminino"],
  ["L'eau D'issey","Issey Miyake","Importado feminino"],
  ["Infusion D'Iris","Prada","Importado feminino"],
  ["Idôle","Lancôme","Importado feminino"],
  ["Insolence","Guerlain","Importado feminino"],
  ["Jean Paul Classique","Jean Paul","Importado feminino"],
  ["J'adore","Dior","Importado feminino"],
  ["J'adore In Joy","Dior","Importado feminino"],
  ["Joy","Dior","Importado feminino"],
  ["Jimmy Choo Fever","Jimmy Choo","Importado feminino"],
  ["Kenzo Amour","Kenzo","Importado feminino"],
  ["Kenzo World","Kenzo","Importado feminino"],
  ["Lacoste","Lacoste","Importado feminino"],
  ["L'eau Ch","Carolina Herrera","Importado feminino"],
  ["La Vie Est Belle","Lancôme","Importado feminino"],
  ["La Vie Est Belle Em Rose","Lancôme","Importado feminino"],
  ["La Vie Est Belle Intensément","Lancôme","Importado feminino"],
  ["Lady Million","Paco Rabanne","Importado feminino"],
  ["Lady Million Privê","Paco Rabanne","Importado feminino"],
  ["Lady Gaga Fame","Lady Gaga","Importado feminino"],
  ["Lady Emblem","Montblanc","Importado feminino"],
  ["L'Extase","Nina Ricci","Importado feminino"],
  ["Light Blue","Dolce & Gabbana","Importado feminino"],
  ["L'interdit","Givenchy","Importado feminino"],
  ["Luna","Nina Ricci","Importado feminino"],
  ["Laguna","Salvador Dali","Importado feminino"],
  ["Lou Lou","Cacharel","Importado feminino"],
  ["La Nuit Tresor","Lancôme","Importado feminino"],
  ["Leau Par Kenzo","Kenzo","Importado feminino"],
  ["Lolita Lempicka","Lolita Lempicka","Importado feminino"],
  ["Liz","Marina Bourbon","Importado feminino"],
  ["Luna Blosson","Nina Ricci","Importado feminino"],
  ["Miss Dior","Dior","Importado feminino"],
  ["Miss Dior 2013","Dior","Importado feminino"],
  ["Miss Dior Blooming","Dior","Importado feminino"],
  ["Miss Dior Absolut. Blooming","Dior","Importado feminino"],
  ["Miss Dior Cherry","Dior","Importado feminino"],
  ["Miss Dior Rose N’Roses","Dior","Importado feminino"],
  ["Madame","Jean Paul","Importado feminino"],
  ["Magnifique","Lancôme","Importado feminino"],
  ["Ma Vie Pour Femme","Hugo Boss","Importado feminino"],
  ["Midnight Fantasy","Britney Spears","Importado feminino"],
  ["Coco Noir","Chanel","Importado feminino"],
  ["Cinemá","Yves S. Laurent","Importado feminino"],
  ["Ch","Carolina Herrera","Importado feminino"],
  ["Ch Privê","Carolina Herrera","Importado feminino"],
  ["Ckin2U","Calvin Klein","Importado feminino"],
  ["Dolce Dolce","Dolce & Gabbana","Importado feminino"],
  ["Dolce Garden","Dolce & Gabbana","Importado feminino"],
  ["Dolce & Gabbana","Dolce & Gabbana","Importado feminino"],
  ["D&G The One","Dolce & Gabbana","Importado feminino"],
  ["D&G Pour Femme","Dolce & Gabbana","Importado feminino"],
  ["D&G The Rose","Dolce & Gabbana","Importado feminino"],
  ["Deseo","Jennifer Lopez","Importado feminino"],
  ["Dayse Eau So Fresh","Marc Jacobs","Importado feminino"],
  ["Dahlia Noir","Givenchy","Importado feminino"],
  ["Dune","Dior","Importado feminino"],
  ["Diesel Fuel For Life","Diesel","Importado feminino"],
  ["DownTown","Calvin Klein","Importado feminino"],
  ["Decadence","Marc Jacobs","Importado feminino"],
  ["Escape","Calvin Klein","Importado feminino"],
  ["Empório Woman","Giorgio Armani","Importado feminino"],
  ["Edem Woman","Cacharel","Importado feminino"],
  ["Euphoria","Calvin Klein","Importado feminino"],
  ["Euphoria Forbidden","Calvin Klein","Importado feminino"],
  ["Eternity","Calvin Klein","Importado feminino"],
  ["Elie Saab","Elie Saab","Importado feminino"],
  ["Eau de Star","Thierry Mugler","Importado feminino"],
  ["Eau de Soir","Sisley","Importado feminino"],
  ["Eau Cartier","Cartier","Importado feminino"],
  ["Fantasy","Britney Spears","Importado feminino"],
  ["Fantasy Hidden","Britney Spears","Importado feminino"],
  ["Fantasy Circus","Britney Spears","Importado feminino"],
  ["Fan Di Fendi","Fendi","Importado feminino"],
  ["Femme Individuelle","Montblanc","Importado feminino"],
  ["Flower By Kenzo","Kenzo","Importado feminino"],
  ["Flower Bomb","Viktor & Rolf","Importado feminino"],
  ["Flora Gucci","Gucci","Importado feminino"],
  ["Fresh Couture","Moschino","Importado feminino"],
  ["Gabriella Sabatini","Gabriella Sabatini","Importado feminino"],
  ["Gabriele Chanel","Chanel","Importado feminino"],
  ["Glow","Jennifer Lopez","Importado feminino"],
  ["Gingembre","Roger & Gallet","Importado feminino"],
  ["Guilty Gucci","Gucci","Importado feminino"],
  ["Good Girls","Carolina Herrera","Importado feminino"],
  ["Good Girls Légère","Carolina Herrera","Importado feminino"],
  ["Gucci Bloom","Gucci","Importado feminino"],
  ["Amarige","Givenchy","Importado feminino"],
  ["Anais Anais","Cacharel","Importado feminino"],
  ["Armani Code","Giorgio Armani","Importado feminino"],
  ["Angel","Thierry Mugler","Importado feminino"],
  ["Angel ou Demon","Thierry Mugler","Importado feminino"],
  ["Angel Innocent","Thierry Mugler","Importado feminino"],
  ["Angel Muse","Ginvenchy","Importado feminino"],
  ["Aura Loewe","Thierry Mugler","Importado feminino"],
  ["Aura","Thierry Mugler","Importado feminino"],
  ["Azzaro Pour elle","Azzaro","Importado feminino"],
  ["Azzaro Madeimoselle","Azzaro","Importado feminino"],
  ["Amor Amor","Cacharel","Importado feminino"],
  ["Addict","Thierry Mugler","Importado feminino"],
  ["Acqua Di Goia","Giorgio Armani","Importado feminino"],
  ["Allure Fem.","Chanel","Importado feminino"],
  ["Animale","Animale","Importado feminino"],
  ["Alien","Thierry Mugler","Importado feminino"],
  ["Alien Eau Sublime","Thierry Mugler","Importado feminino"],
  ["Anne Pemier Delice","Cacharel","Importado feminino"],
  ["Amor Ferragano","Salvatore","Importado feminino"],
  ["Aventus for her","Creed","Importado feminino"],
  ["Aqua Kenzo Pour Femme","Kenzo","Importado feminino"],
  ["Boss the Scent For Her","Hugo Boss","Importado feminino"],
  ["Bvlgari Goldea","Bvlgari","Importado feminino"],
  ["Bvlgari Vert","Bvlgari","Importado feminino"],
  ["Bvlgari Woman","Bvlgari","Importado feminino"],
  ["Black Xs","Paco Rabanne","Importado feminino"],
  ["Black Opium","Yves S. Laurent","Importado feminino"],
  ["Burberry","Burberry","Importado feminino"],
  ["Be Delicious","DKNY","Importado feminino"],
  ["Because It's You","Giorgio Armani","Importado feminino"],
  ["Bonbon Couture","Viktor & Rolf","Importado feminino"],
  ["Believe","Britney Spears","Importado feminino"],
  ["Beauty","Calvin Klein","Importado feminino"],
  ["Chloé","Chloé","Importado feminino"],
  ["Chloé Love","Chloé","Importado feminino"],
  ["Chloé Innocence","Chloé","Importado feminino"],
  ["Chloé Nomade","Chloé","Importado feminino"],
  ["Cheap And Chic","Moschino","Importado feminino"],
  ["Cherry In The Air","Escada","Importado feminino"],
  ["Calandre","Paco Rabanne","Importado feminino"],
  ["Chic","Carolina Herrera","Importado feminino"],
  ["Chance","Chanel","Importado feminino"],
  ["Chanel 5","Chanel","Importado feminino"],
  ["Coco Mademoiselle","Chanel","Importado feminino"],
  ["Coffe","Boticário","Nacional feminino"],
  ["Coffe Seduction","Boticário","Nacional feminino"],
  ["Cupuaçu","Boticário","Nacional feminino"],
  ["Egeo","Boticário","Nacional feminino"],
  ["Egeo Choc","Boticário","Nacional feminino"],
  ["Egeo Dolce","Boticário","Nacional feminino"],
  ["Essencial","Boticário","Nacional feminino"],
  ["Elysée","Boticário","Nacional feminino"],
  ["Elysée Nuit","Boticário","Nacional feminino"],
  ["Femme.Com","Boticário","Nacional feminino"],
  ["Floratta Emotion","Boticário","Nacional feminino"],
  ["Floratta in blue","Boticário","Nacional feminino"],
  ["Floratta in Gold","Boticário","Nacional feminino"],
  ["Floratta in Rose","Boticário","Nacional feminino"],
  ["Floratta cerejeira em Pétalas","Boticário","Nacional feminino"],
  ["Floratta cerejeira em Flor","Boticário","Nacional feminino"],
  ["Floratta Buque de Flores","Boticário","Nacional feminino"],
  ["Floratta Saphira","Boticário","Nacional feminino"],
  ["Floratta esmeralda","Boticário","Nacional feminino"],
  ["Floratta Rubi","Boticário","Nacional feminino"],
  ["Frutas Vermelhas","Boticário","Nacional feminino"],
  ["Frescor de moça","Natura","Nacional feminino"],
  ["Giovanna Baby","Giovanna Baby","Nacional feminino"],
  ["Glamour","Boticário","Nacional feminino"],
  ["Humor 1","Natura","Nacional feminino"],
  ["Humor Bem me quer 7","Natura","Nacional feminino"],
  ["Humor 5","Natura","Nacional feminino"],
  ["Jasmim","Natura","Nacional feminino"],
  ["Jabuticaba","Natura","Nacional feminino"],
  ["Kaiak","Natura","Nacional feminino"],
  ["Kriska","Natura","Nacional feminino"],
  ["Kriska Flores","Natura","Nacional feminino"],
  ["Lavanda Inglesa","************","Nacional feminino"],
  ["Lavanda Maua","************","Nacional feminino"],
  ["Lavanda Rastro","************","Nacional feminino"],
  ["Lavanda Top","************","Nacional feminino"],
  ["Lily Essence","Boticário","Nacional feminino"],
  ["Linda","Boticário","Nacional feminino"],
  ["Linda Inspiration","Boticário","Nacional feminino"],
  ["Linda Fashion","Boticário","Nacional feminino"],
  ["Linda Radiance","Boticário","Nacional feminino"],
  ["Acerola e Morango","Natura","Nacional feminino"],
  ["Açaí","Natura","Nacional feminino"],
  ["Acqua Fresca","Boticário","Nacional feminino"],
  ["Algodão","Natura","Nacional feminino"],
  ["Amó Chamego","Natura","Nacional feminino"],
  ["Amó Xodó","Natura","Nacional feminino"],
  ["Almiscar selvagem","Boticário","Nacional feminino"],
  ["Absinto","Boticário","Nacional feminino"],
  ["Alfazema","Natura","Nacional feminino"],
  ["Arbo","Boticário","Nacional masculino"],
  ["Accordes","Boticário","Nacional feminino"],
  ["Biografia","Boticário","Nacional feminino"],
  ["Bom Bom Humor","Natura","Nacional feminino"],
  ["Crazy feelings","Boticário","Nacional feminino"],
  ["Capricho Day","Boticário","Nacional feminino"],
  ["Capricho Night","Boticário","Nacional feminino"],
  ["Castanha","Natura","Nacional feminino"],
  ["Cecita","Boticário","Nacional feminino"],
  ["CANDY BABY (VS)","Victoria's Secret","Outras fragrâncias"],
  ["Carpie Diem","Boticário","Nacional feminino"],
  ["Connexion","Boticário","Nacional masculino"],
  ["Dimitri","Boticário","Nacional masculino"],
  ["Green Tea","L'occitane","Nacional feminino"],
  ["Hoje / Hórus","Natura","Nacional feminino"],
  ["Homem.com","Natura","Nacional masculino"],
  ["L'occitan","L'occitane","Nacional feminino"],
  ["LOVE SPELL (VS)","Victoria's Secret","Outras fragrâncias"],
  ["Myriad","Boticário","Nacional feminino"],
  ["Ops!","Boticário","Nacional feminino"],
  ["Portinari / Pierre D'Eron","Boticário / ****","Nacional feminino"],
  ["Quasar / Onix","Boticário","Nacional masculino"],
  ["Thaty","Boticário","Nacional feminino"],
  ["Una","Natura","Nacional feminino"],
  ["Uomini","Boticário","Nacional masculino"],
  ["Zaad","Boticário","Nacional masculino"],
  ["English Pear & Freesia","Jo Malone","Importado feminino"],
  ["Good Girl Blush","Carolina Herrera","Importado feminino"],
  ["Issey Miyake","Grife","Importado"],
  ["Sabah","Lattafa","Importado feminino"],
  ["Bleu de Chanel","Grife","Importado"],
  ["Coconut Passion","Grife","Importado"],
  ["Bright Crystal","Versace","Importado feminino"],
  ["Angel Nova","Thierry Mugler","Importado feminino"],
  ["Baccarat","Maison Francis Kurkdjian","Importado feminino"],
  ["Prada Paradoxe","Prada","Importado feminino"],
  ["Nina Ricci Vénus","Nina Ricci","Importado feminino"],
  ["Delina","Parfums de Marly","Importado feminino"],
  ["Libre","Grife","Importado"],
  ["Asad","Lattafa","Importado masculino"],
  ["L'Interdit","Givenchy","Importado feminino"],
  ["Olympea Vanilla","Paco Rabanne","Importado feminino"],
  ["My Way","Giorgio Armani","Importado feminino"],
  ["Erba Pura","Xerjoff","Importado feminino"],
  ["Allure Homme Sport","Grife","Importado"],
  ["Good Girl","Grife","Importado"],
  ["DBG The One","Dolce & Gabbana","Importado masculino"],
  ["La Nuit Trésor","Grife","Importado"],
  ["Burberry Her","Grife","Importado"],
  ["Acqua Di Gio","Grife","Importado"],
  ["Irresistible","Givenchy","Importado feminino"],
  ["Musamam","Lattafa","Importado masculino"],
  ["Fantasy Midnight","Britney Spears","Importado feminino"],
  ["Prada Extra Pura","Prada","Importado feminino"],
  ["Bombshell","Victoria's Secret","Importado feminino"],
  ["212 VIP Men","Grife","Importado"],
];

const faq = [
  ["Quais produtos a D'Parfum oferece?", "Trabalhamos com perfumes inspirados, hidratantes, body splash, perfumes para cabelos, reparadores, essências para casa e lojas, além de opções para presentear."],
  ["Como faço para comprar?", "O atendimento é feito pelo WhatsApp. Você pode pedir indicação de fragrância, tirar dúvidas e combinar forma de entrega diretamente com a equipe."],
  ["Os perfumes têm boa fixação?", "Sim. A linha é selecionada com foco em performance, presença e conforto. A duração também varia conforme pele, clima e forma de aplicação."],
  ["Vocês ajudam a escolher um perfume?", "Sim. Conte o estilo desejado, ocasião e perfumes que você já gosta. A D'Parfum indica opções próximas ao seu perfil."],
  ["Como conservar melhor a fragrância?", "Guarde longe de sol, calor e umidade. Aplicar em pele hidratada e em pontos de maior pulsação ajuda a melhorar a performance."],
  ["Os produtos são originais das grifes?", "Não. A D'Parfum trabalha com perfumes inspirados em grandes referências olfativas, deixando isso claro para o cliente antes da compra."],
  ["A empresa atende todos os dias?", "Sim. A D'Parfum atende todos os dias pelo WhatsApp e é referência em perfumes inspirados em Itaguaí."],
  ["Vocês entregam fora de Itaguaí?", "Sim. A marca informa entrega rápida para todas as regiões do Brasil. Consulte disponibilidade e prazo pelo WhatsApp."],
];

const testimonials = [
  ["Mariana Costa", "img/depoimentos-avatar/E4Z6KX9.jpg", "Comprei uma inspiração floral e fiquei surpresa com a fixação. O atendimento ajudou muito na escolha."],
  ["Lucas Andrade", "img/depoimentos-avatar/3PQNVSH.jpg", "Uso no trabalho e recebo elogios. Gostei porque explicaram a diferença entre as famílias olfativas."],
  ["Camila Ferreira", "img/depoimentos-avatar/EWC24GN.jpg", "A fragrância veio muito bem apresentada e com cheiro sofisticado. Já quero montar um kit para presente."],
  ["Isabela Ramos", "img/depoimentos-avatar/PCXJHSB.jpg", "Atendimento rápido pelo WhatsApp e indicação certeira para uma fragrância mais elegante."],
];

const articles = [
  ["Como fazer a fragrância durar mais", "img/modelos/man-applies-perfume-and-smells-fragrance.jpg", "Hidratação, pontos de aplicação e conservação mudam muito o desempenho do perfume."],
  ["Como escolher perfume para presente", "img/modelos/92a158e4-7494-42ed-b33d-e5433e440ca5.jpg", "Família olfativa, rotina e intensidade ajudam a transformar a escolha em algo mais certeiro."],
  ["Perfume para cada momento", "img/modelos/c60cc050-a3af-40ce-9324-58cc30b937e6.jpg", "Fragrâncias frescas, florais, amadeiradas e gourmand comunicam intenções diferentes."],
];

const fragranceFamilies = [
  ["Florais", "Elegantes, femininos e românticos. Ótimos para quem busca delicadeza, banho tomado e presença refinada."],
  ["Amadeirados", "Sofisticados e marcantes. Funcionam muito bem para trabalho, encontros e noites especiais."],
  ["Cítricos", "Frescos, leves e luminosos. Ideais para calor, rotina e para quem não quer perfume pesado."],
  ["Gourmand", "Doces, envolventes e memoráveis. Perfeitos para quem gosta de fragrâncias quentes e elogiadas."],
  ["Orientais", "Intensos, sensuais e profundos. Boas escolhas para presença noturna e momentos de destaque."],
  ["Aquáticos", "Limpos, modernos e esportivos. Passam sensação de liberdade, energia e cuidado diário."],
];

const modelGallery = [
  "img/modelos/3f729863-ee4c-4718-8b1d-264f5d50aa38.jpg",
  "img/modelos/499acf68-52b6-4ec5-b03d-70bf762b6161.jpg",
  "img/modelos/89cea44b-332a-427a-b516-efdc8fc39ce9.jpg",
  "img/modelos/92a158e4-7494-42ed-b33d-e5433e440ca5.jpg",
  "img/modelos/c60cc050-a3af-40ce-9324-58cc30b937e6.jpg",
  "img/modelos/d7a57ca5-9771-4d7c-bfc7-c6607c572953.jpg",
];

const pageData = {
  loja: ["Loja D'Parfum", "Pedido direto", "Escolha seu perfume inspirado e envie o pedido completo pelo WhatsApp em um toque.", "url('/img/perfumes/3494867a-2f66-4087-8b1b-50277071b87c.jpg')"],
  produtos: ["Produtos D'Parfum", "Curadoria premium", "Uma seleção elegante para quem busca presença, conforto e excelente acabamento olfativo.", "url('/img/modelos/89cea44b-332a-427a-b516-efdc8fc39ce9.jpg')"],
  catalogo: ["Catálogo de fragrâncias", "Busca rápida", "Pesquise por inspiração, grife ou categoria e peça atendimento para encontrar sua fragrância ideal.", "url('/img/perfumes/7672f5a9-43b7-4a64-8b77-a4822f07ded7.jpg')"],
  sobre: ["Sobre a D'Parfum", "Perfumaria com presença", "Uma marca feita para aproximar grandes referências olfativas da rotina de quem valoriza cuidado, assinatura e sofisticação.", "url('/img/danielle/S9QS9UQ.jpg')"],
  contato: ["Fale com a D'Parfum", "Atendimento consultivo", "Peça indicação, tire dúvidas ou monte seu presente com uma conversa rápida pelo WhatsApp.", "url('/img/modelos/c60cc050-a3af-40ce-9324-58cc30b937e6.jpg')"],
  duvidas: ["Dúvidas frequentes", "Compra sem atrito", "Respostas diretas sobre produtos, atendimento, entrega e conservação das fragrâncias.", "url('/img/modelos/3f729863-ee4c-4718-8b1d-264f5d50aa38.jpg')"],
  noticias: ["Guia de fragrâncias", "Conteúdo rápido", "Dicas práticas para escolher, aplicar e combinar fragrâncias com mais segurança.", "url('/img/modelos/d7a57ca5-9771-4d7c-bfc7-c6607c572953.jpg')"],
};

function whatsappLink(message = "Olá! Gostaria de mais informações sobre os perfumes D'Parfum.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function iconInstagram() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 2a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Z"/></svg>`;
}

function iconFacebook() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.4V6.9c0-.7.3-1.1 1.2-1.1h1.9V2.4C16.8 2.3 15.7 2 14.4 2c-2.8 0-4.7 1.7-4.7 4.8v1.6H6.6V12h3.1v10H14V12h3.1l.5-3.6H14Z"/></svg>`;
}

function layout(page, content) {
  const year = new Date().getFullYear();
  return `
    <div class="site-shell">
      <div class="topbar">
        <div class="topbar__inner">
          <span>Atendimento todos os dias pelo WhatsApp: +55 21 99354-3808</span>
          <span>Referência em perfumes inspirados em Itaguaí</span>
        </div>
      </div>
      <header class="header">
        <nav class="nav" aria-label="Navegação principal">
          <a class="brand" href="index.html" aria-label="D'Parfum">
            <img class="brand__text" src="img/logo/logo-texto-preto.png" alt="D'Parfum">
          </a>
          <div class="nav__links">
            ${navItems.map(([href, label, key]) => `<a href="${href}" ${key === page ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
          </div>
          <div class="nav__actions">
            <a class="button button--ghost" href="${CATALOG_WHATSAPP}" target="_blank" rel="noopener">Catálogo</a>
            <a class="button button--primary" href="${whatsappLink()}" target="_blank" rel="noopener">WhatsApp</a>
            <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span></button>
          </div>
        </nav>
      </header>
      <main>${content}</main>
      <footer class="footer">
        <div class="footer__inner">
          <div>
            <img class="footer__logo" src="img/logo/logo-texto-branco.png" alt="D'Parfum">
            <p>Fragrâncias inspiradas, atendimento próximo e curadoria para transformar perfume em assinatura.</p>
            <div class="social-icons" aria-label="Redes sociais">
              <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" aria-label="Instagram D'Parfum">${iconInstagram()}</a>
              <a href="${FACEBOOK_URL}" target="_blank" rel="noopener" aria-label="Facebook D'Parfum">${iconFacebook()}</a>
            </div>
          </div>
          <div><h4>Explore</h4><a href="loja.html">Loja</a><a href="produtos.html">Produtos</a><a href="catalogo.html">Catálogo</a><a href="duvidas.html">Dúvidas</a></div>
          <div><h4>Marca</h4><a href="sobre.html">Sobre</a><a href="noticias.html">Guia</a><a href="contato.html">Contato</a></div>
          <div><h4>Atendimento</h4><a href="${whatsappLink()}" target="_blank" rel="noopener">WhatsApp</a><a href="tel:+5521993543808">+55 21 99354-3808</a><a href="${CATALOG_WHATSAPP}" target="_blank" rel="noopener">Catálogo no WhatsApp</a></div>
          <div><h4>Localização</h4><p>${ADDRESS}</p><p>Atendimento todos os dias e referência em perfumes inspirados em Itaguaí.</p></div>
        </div>
        <div class="footer__bottom">© ${year} D'Parfum. Criado com amor ♥ por <a href="https://www.digitalobjetiva.shop" target="_blank" rel="noopener">Digital Objetiva</a></div>
      </footer>
      <button class="back-to-top" type="button" aria-label="Voltar ao topo">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5.4 5.7 11.7l1.4 1.4 3.9-3.9V19h2V9.2l3.9 3.9 1.4-1.4L12 5.4Z"></path>
        </svg>
      </button>
      ${schemaMarkup()}
    </div>
  `;
}

function homePage() {
  return `
    <section class="hero">
      <div class="hero__inner">
        <span class="eyebrow">Fragrâncias premium</span>
        <h1>D'Parfum</h1>
        <p>Perfumes inspirados em grandes grifes, com excelente fixação, entrega rápida para o Brasil e atendimento todos os dias. Referência em Itaguaí para quem busca luxo acessível.</p>
        <div class="hero__actions"><a class="button button--primary" href="catalogo.html">Ver catálogo</a><a class="button button--light" href="${CATALOG_WHATSAPP}" target="_blank" rel="noopener">Catálogo no WhatsApp</a></div>
        <div class="hero__stats"><div><strong>1000+</strong><span>fragrâncias inspiradas</span></div><div><strong>Alta</strong><span>fixação e presença</span></div><div><strong>Todos</strong><span>os dias de atendimento</span></div></div>
      </div>
    </section>
    ${featuresSection()}
    ${perfumeShowcase()}
    ${productsSection("Variedade de produtos", "Perfumes, body splash, hidratantes, perfumes para cabelos, reparadores e essências para casa e lojas.")}
    ${careCollectionSection()}
    ${ceoSection()}
    ${fragranceGuideSection()}
    ${lifestyleSection()}
    ${modelGallerySection()}
    ${testimonialsSection()}
    ${socialSection()}
    ${aboutBand()}
  `;
}

function pageHero(key) {
  const [title, eyebrow, text, image] = pageData[key];
  return `<section class="page-hero" style="--hero-image: ${image}"><div class="page-hero__inner"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${text}</p></div></section>`;
}

function featuresSection() {
  const features = [
    ["✦", "Referência em Itaguaí", "Atendimento próximo, indicação cuidadosa e uma seleção pensada para quem quer comprar com confiança."],
    ["◎", "Atende todos os dias", "A equipe recebe pedidos, dúvidas e indicações pelo WhatsApp todos os dias."],
    ["◇", "Luxo acessível", "Perfumes inspirados com ótima durabilidade, apresentação elegante e preço justo."],
  ];
  return `<section class="section"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Por que escolher</span><h2>Luxo acessível, fixação e presença.</h2></div><p>A D'Parfum trabalha com perfumes inspirados nas maiores referências da perfumaria, com compra fácil e atendimento direto.</p></div><div class="grid grid--3">${features.map(([icon, title, text]) => `<article class="feature"><div class="feature__icon">${icon}</div><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>`;
}

function productsSection(title = "Produtos D'Parfum", text = "Conheça a linha criada para diferentes momentos da rotina.") {
  return `<section class="section section--soft"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Linha completa</span><h2>${title}</h2></div><p>${text}</p></div><div class="grid grid--4">${productLines.map(productCard).join("")}</div></div></section>`;
}

function productCard(product) {
  return `<article class="product-card"><div class="product-card__image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div><div class="product-card__body"><div class="tag-row">${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div><h3>${product.name}</h3><p>${product.text}</p><a class="button button--ghost" href="${whatsappLink(`Olá! Gostaria de saber mais sobre ${product.name}.`)}" target="_blank" rel="noopener">Consultar</a></div></article>`;
}

function shopBuyLink(item) {
  const [file, name, audience, family, mood, notes, occasion, intensity] = item;
  const message = [
    "Olá! Quero fazer um pedido na D'Parfum.",
    "",
    `Produto: Perfume inspirado em ${name}`,
    `Referência da imagem: ${file}`,
    `Perfil: ${audience}`,
    `Família olfativa: ${family}`,
    `Estilo: ${mood}`,
    `Ocasião indicada: ${occasion}`,
    `Fixação/intensidade: ${intensity}`,
    "",
    "Pode me informar disponibilidade, valor e forma de entrega?"
  ].join("\n");
  return whatsappLink(message);
}

function shopCard(item) {
  const [file, name, audience, family, mood, notes, occasion, intensity] = item;
  return `
    <article class="shop-card">
      <div class="shop-card__image"><img src="img/perfumes/${file}" alt="Perfume inspirado em ${name}" loading="lazy"></div>
      <div class="shop-card__body">
        <div class="tag-row"><span class="tag">${audience}</span><span class="tag">${intensity}</span></div>
        <h3>Inspirado em ${name}</h3>
        <p>${notes}</p>
        <dl>
          <div><dt>Família</dt><dd>${family}</dd></div>
          <div><dt>Estilo</dt><dd>${mood}</dd></div>
          <div><dt>Ocasião</dt><dd>${occasion}</dd></div>
        </dl>
        <a class="button button--primary" href="${shopBuyLink(item)}" target="_blank" rel="noopener">Comprar pelo WhatsApp</a>
      </div>
    </article>
  `;
}

function perfumeShowcase(limit = 8) {
  return `<section class="section section--dark"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Perfumes inspirados</span><h2>Algumas fragrâncias queridinhas.</h2></div><p>As imagens representam perfumes inspirados. A D'Parfum não comercializa os perfumes originais das grifes citadas.</p></div><div class="grid grid--4">${featuredPerfumes.slice(0, limit).map(perfumeCard).join("")}</div></div></section>`;
}

function perfumeCard([name, image, family, mood, description]) {
  return `<article class="perfume-card"><div class="perfume-card__image"><img src="${image}" alt="Perfume inspirado em ${name}" loading="lazy"></div><div class="perfume-card__body"><span class="tag">${mood}</span><h3>Inspirado em ${name}</h3><p>${description}</p><small>${family}</small></div></article>`;
}

function careCollectionSection() {
  return `<section class="section"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Ritual completo</span><h2>Perfume, pele e cabelo conversando entre si.</h2></div><p>Combinar body splash, hidratante e perfume de cabelo cria camadas de aroma e deixa a experiência mais sofisticada.</p></div><div class="grid grid--5">${bodySplashItems.map((item) => productDetailCard(item, "Body splash inspirado")).join("")}${careItems.map((item) => productDetailCard(item, "Cuidado perfumado")).join("")}</div></div></section>`;
}

function productDetailCard(item, label) {
  return `<article class="product-card product-card--compact"><div class="product-card__image"><img src="${item.image}" alt="${item.name}" loading="lazy"></div><div class="product-card__body"><span class="tag">${label}</span><h3>${item.name}</h3><p>${item.text}</p></div></article>`;
}

function ceoSection() {
  return `<section class="section section--soft"><div class="section__inner ceo"><div class="ceo__media"><img class="ceo__portrait" src="img/danielle/S9QS9UQ.jpg" alt="Danielle Loureiro, CEO da D'Parfum" loading="lazy"><div class="ceo__signature"><span>Curadoria assinada por</span><img src="img/assinatura/n-jackson.png" alt="Assinatura de Danielle Loureiro" loading="lazy"><small>CEO D'Parfum</small></div></div><div><span class="eyebrow">Curadoria da CEO</span><h2>Danielle transforma perfume em escolha segura.</h2><p>À frente da D'Parfum, Danielle Loureiro conduz uma curadoria voltada para beleza, presença e acessibilidade. A proposta é ajudar cada cliente a encontrar uma fragrância inspirada que combine com sua rotina, sua personalidade e o momento que deseja viver.</p><p>A marca se posiciona como referência em Itaguaí por unir atendimento humano, variedade, preço justo e orientação clara sobre famílias olfativas, intensidade e melhor forma de uso.</p><div class="quote-box"><p>“Perfume é memória, presença e cuidado. A escolha certa muda como a pessoa se sente antes mesmo de sair de casa.”</p><strong>Danielle Loureiro, CEO D'Parfum</strong></div></div></div></section>`;
}

function fragranceGuideSection() {
  return `<section class="section"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Guia de escolha</span><h2>Como encontrar sua assinatura olfativa.</h2></div><p>O cliente não precisa saber tudo sobre perfumaria para acertar. Basta entender o efeito que quer causar.</p></div><div class="grid grid--3">${fragranceFamilies.map(([title, text]) => `<article class="guide-card"><h3>${title}</h3><p>${text}</p></article>`).join("")}</div><div class="info-strip"><div><strong>Dia a dia</strong><span>Cítricos, aquáticos e florais leves.</span></div><div><strong>Noite</strong><span>Orientais, gourmands e amadeirados intensos.</span></div><div><strong>Presente</strong><span>Florais elegantes e frescos são escolhas seguras.</span></div><div><strong>Fixação</strong><span>Pele hidratada e pontos de pulsação ajudam muito.</span></div></div></div></section>`;
}

function lifestyleSection() {
  return `<section class="section"><div class="section__inner split split--reverse"><div><span class="eyebrow">Na pele, na rotina</span><h2>Fragrância é presença antes mesmo da primeira palavra.</h2><p>As inspirações D'Parfum foram pensadas para quem quer cheiro marcante, boa durabilidade e uma compra mais inteligente. Do floral ao amadeirado, do cítrico ao oriental, existe uma assinatura para cada momento.</p><ul class="check-list"><li>Perfumes femininos, masculinos e opções versáteis.</li><li>Indicações por ocasião, intensidade e estilo pessoal.</li><li>Atendimento pelo WhatsApp e catálogo sempre à mão.</li></ul><div class="section__actions"><a class="button button--primary" href="${whatsappLink("Olá! Quero uma indicação de perfume inspirado da D'Parfum.")}" target="_blank" rel="noopener">Receber indicação</a><a class="button button--ghost" href="${INSTAGRAM_URL}" target="_blank" rel="noopener">Ver Instagram</a></div></div><div class="image-stack"><img src="img/modelos/89cea44b-332a-427a-b516-efdc8fc39ce9.jpg" alt="Cliente usando perfume D'Parfum" loading="lazy"><img src="img/modelos/92a158e4-7494-42ed-b33d-e5433e440ca5.jpg" alt="Casal com perfume D'Parfum" loading="lazy"></div></div></section>`;
}

function modelGallerySection() {
  return `<section class="section section--dark"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Presença real</span><h2>Perfumes para acompanhar pessoas, encontros e rotina.</h2></div><p>O perfume certo conversa com estilo, postura e ocasião. A D'Parfum ajuda a transformar essa escolha em algo simples.</p></div><div class="model-gallery">${modelGallery.map((src, index) => `<img src="${src}" alt="Modelo usando fragrância D'Parfum ${index + 1}" loading="lazy">`).join("")}</div></div></section>`;
}

function testimonialsSection() {
  return `<section class="section section--soft"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Quem já usou</span><h2>Atendimento que ajuda a acertar.</h2></div><p>Depoimentos de clientes que buscaram fragrâncias inspiradas com boa fixação, presença e escolha guiada.</p></div><div class="grid grid--4">${testimonials.map(([name, avatar, text]) => `<article class="testimonial"><img src="${avatar}" alt="Foto de ${name}" loading="lazy"><p>“${text}”</p><strong>${name}</strong></article>`).join("")}</div></div></section>`;
}

function socialSection() {
  return `<section class="section social-band"><div class="section__inner social-band__inner"><div><span class="eyebrow">Acompanhe @dparfy</span><h2>Novidades, tendências e indicações de fragrâncias.</h2><p>Siga a D'Parfum no Instagram e no Facebook para conhecer lançamentos, dicas de uso e inspirações da perfumaria mundial.</p></div><div class="section__actions"><a class="button button--primary button--icon" href="${INSTAGRAM_URL}" target="_blank" rel="noopener">${iconInstagram()} Instagram</a><a class="button button--primary button--icon" href="${FACEBOOK_URL}" target="_blank" rel="noopener">${iconFacebook()} Facebook</a></div></div></section>`;
}

function aboutBand() {
  return `<section class="section"><div class="section__inner split"><div class="split__image"><img src="img/modelos/bride-s-perfume.jpg" alt="Fragrância elegante D'Parfum" loading="lazy"></div><div><span class="eyebrow">Assinatura olfativa</span><h2>Charme, informação e compra sem dúvida.</h2><p>A marca une preço justo, excelente fixação, variedade e atendimento próximo para tornar o luxo da perfumaria mais acessível.</p><ul class="check-list"><li>Mais de mil fragrâncias inspiradas em grandes nomes da perfumaria.</li><li>Produtos para pele, cabelo, casa, lojas e presentes.</li><li>Catálogo pesquisável e atendimento todos os dias pelo WhatsApp.</li></ul></div></div></section>`;
}

function productsPage() {
  return pageHero("produtos") + perfumeShowcase(24) + productsSection() + careCollectionSection() + fragranceGuideSection() + testimonialsSection();
}

function lojaPage() {
  const perfumes = uniqueShopPerfumes();
  return `${pageHero("loja")}<section class="section"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Loja de perfumes inspirados</span><h2>Escolha, envie o pedido e receba atendimento.</h2></div><p>Todos os itens abaixo são perfumes inspirados e aparecem sem repetição de nome. Priorizamos as imagens em que o frasco aparece com melhor leitura para facilitar sua escolha.</p></div><div class="store-toolbar"><span>${perfumes.length} perfumes inspirados únicos no catálogo visual</span><a class="button button--ghost" href="${CATALOG_WHATSAPP}" target="_blank" rel="noopener">Catálogo WhatsApp</a></div><div class="shop-grid">${perfumes.map(shopCard).join("")}</div></div></section>${fragranceGuideSection()}`;
}

function catalogPage() {
  return `${pageHero("catalogo")}<section class="section"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Catálogo inteligente</span><h2>Encontre por nome, grife ou categoria.</h2></div><p>Use a busca para filtrar rapidamente. Para disponibilidade e valores, fale com a equipe ou abra o catálogo direto pelo WhatsApp.</p></div><div class="catalog-toolbar"><input class="field" id="catalog-search" type="search" placeholder="Buscar fragrância, grife ou categoria" autocomplete="off"><select class="field" id="catalog-filter" aria-label="Filtrar categoria"><option value="">Todas as categorias</option>${[...new Set(catalog.map((item) => item[2]))].map((category) => `<option value="${category}">${category}</option>`).join("")}</select></div><div class="catalog-panel"><table class="catalog-table"><thead><tr><th>Inspirado em</th><th>Grife</th><th>Categoria</th><th>Atendimento</th></tr></thead><tbody id="catalog-body"></tbody></table><div class="empty-state" id="catalog-empty" hidden>Nenhuma fragrância encontrada com esse filtro.</div></div><div class="section__actions catalog-actions"><a class="button button--primary" href="${CATALOG_WHATSAPP}" target="_blank" rel="noopener">Abrir catálogo no WhatsApp</a><a class="button button--ghost" href="${whatsappLink("Olá! Quero ajuda para escolher uma fragrância inspirada.")}" target="_blank" rel="noopener">Pedir ajuda para escolher</a></div></div></section>${perfumeShowcase(24)}${fragranceGuideSection()}`;
}

function aboutPage() {
  return `${pageHero("sobre")}${ceoSection()}<section class="section"><div class="section__inner split"><div><span class="eyebrow">Nossa essência</span><h2>Fragrâncias inspiradas nas maiores grifes do mundo.</h2><p>A D'Parfum nasceu para tornar a escolha de perfumes mais próxima e prazerosa. A marca reúne mais de mil fragrâncias inspiradas, produtos de cuidado e aromas para ambientes com foco em bom gosto, fixação, entrega rápida e atendimento humano.</p><ul class="check-list"><li>Curadoria de fragrâncias masculinas, femininas e nacionais.</li><li>Produtos para pele, cabelos, presentes e ambientes.</li><li>Atendimento direto para indicar opções de acordo com seu estilo.</li></ul></div><div class="split__image"><img src="img/modelos/499acf68-52b6-4ec5-b03d-70bf762b6161.jpg" alt="Pessoas usando perfume D'Parfum" loading="lazy"></div></div></section>${modelGallerySection()}${socialSection()}${featuresSection()}`;
}

function contactPage() {
  return `${pageHero("contato")}<section class="section"><div class="section__inner contact-layout"><article class="contact-card"><span class="eyebrow">Contato</span><h2>Vamos encontrar sua fragrância.</h2><p>Envie sua preferência, ocasião de uso ou perfume de referência. A equipe responde todos os dias com indicações e disponibilidade.</p><ul class="contact-list"><li><span>☎</span><span><strong>WhatsApp</strong>+55 21 99354-3808</span></li><li><span>⌖</span><span><strong>Endereço</strong>${ADDRESS}</span></li><li><span>⌁</span><span><strong>Atendimento</strong>Pedidos, dúvidas, indicações e presentes.</span></li><li><span>✦</span><span><strong>Referência local</strong>Perfumes inspirados em Itaguaí com curadoria próxima.</span></li></ul></article><article class="contact-card"><form class="contact-form" id="contact-form"><input class="field" name="name" placeholder="Seu nome" required><input class="field" name="interest" placeholder="O que você procura?"><textarea class="field" name="message" placeholder="Conte seu estilo, ocasião ou perfume favorito"></textarea><button class="button button--primary" type="submit">Enviar pelo WhatsApp</button></form></article></div></section>${socialSection()}`;
}

function faqPage() {
  return `${pageHero("duvidas")}<section class="section"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Perguntas de clientes</span><h2>Respostas rápidas antes de comprar.</h2></div><p>Se ainda ficar alguma dúvida, o WhatsApp continua sendo o caminho mais rápido.</p></div><div class="faq-list">${faq.map(([question, answer], index) => `<details class="faq-item" ${index === 0 ? "open" : ""}><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div></div></section>${fragranceGuideSection()}`;
}

function articlesPage() {
  return `${pageHero("noticias")}<section class="section"><div class="section__inner"><div class="section__heading"><div><span class="eyebrow">Aprenda em minutos</span><h2>Pequenos cuidados, mais presença.</h2></div><p>Conteúdos para tornar a compra mais confiante e o uso do perfume mais inteligente.</p></div><div class="grid grid--3">${articles.map(([title, image, text]) => `<article class="article-card product-card"><div class="product-card__image"><img src="${image}" alt="${title}" loading="lazy"></div><div class="product-card__body"><h3>${title}</h3><p>${text}</p><a class="button button--ghost" href="${whatsappLink("Olá! Quero uma indicação de fragrância D'Parfum.")}" target="_blank" rel="noopener">Pedir indicação</a></div></article>`).join("")}</div></div></section>${fragranceGuideSection()}${careCollectionSection()}`;
}

function schemaMarkup() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "D'Parfum",
    url: SITE_URL,
    image: `${SITE_URL}/img/logo/logo-redonda.png`,
    logo: `${SITE_URL}/img/logo/logo-redonda.png`,
    description: "Perfumes inspirados em grandes grifes, fragrâncias de alta fixação, body splash, hidratantes e perfumes para cabelos.",
    telephone: "+55 21 99354-3808",
    address: { "@type": "PostalAddress", streetAddress: "Rua Milton Ayres de Oliveira Bueno", addressLocality: "Itaguaí", addressRegion: "RJ", postalCode: "23815-130", addressCountry: "BR" },
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
    areaServed: "Brasil",
    openingHours: "Mo-Su 00:00-23:59",
    makesOffer: ["Perfumes inspirados", "Body splash", "Hidratantes", "Perfumes para cabelos", "Essências para casa e lojas"],
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function initMenu() {
  const button = document.querySelector(".menu-toggle");
  if (!button) return;
  button.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function initCatalog() {
  const body = document.querySelector("#catalog-body");
  if (!body) return;
  const search = document.querySelector("#catalog-search");
  const filter = document.querySelector("#catalog-filter");
  const empty = document.querySelector("#catalog-empty");
  const render = () => {
    const term = search.value.trim().toLowerCase();
    const category = filter.value;
    const rows = catalog.filter((item) => {
      const haystack = item.join(" ").toLowerCase();
      return (!term || haystack.includes(term)) && (!category || item[2] === category);
    });
    body.innerHTML = rows.map(([name, brand, type]) => `<tr><td>${name}</td><td>${brand}</td><td>${type}</td><td><a class="button button--ghost" href="${whatsappLink(`Olá! Gostaria de saber sobre a fragrância inspirada em ${name}.`)}" target="_blank" rel="noopener">Consultar</a></td></tr>`).join("");
    empty.hidden = rows.length > 0;
  };
  search.addEventListener("input", render);
  filter.addEventListener("change", render);
  render();
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const text = `Olá! Meu nome é ${data.get("name") || ""}. Procuro: ${data.get("interest") || ""}. ${data.get("message") || ""}`;
    window.open(whatsappLink(text), "_blank", "noopener");
  });
}

function initBackToTop() {
  const button = document.querySelector(".back-to-top");
  if (!button) return;
  const toggle = () => button.classList.toggle("is-visible", window.scrollY > 520);
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
}

const pages = { home: homePage, loja: lojaPage, produtos: productsPage, catalogo: catalogPage, sobre: aboutPage, contato: contactPage, duvidas: faqPage, noticias: articlesPage };
const appContainer = document.querySelector("#app");
if (appContainer) {
    const page = document.body.dataset.page || "home";
    appContainer.innerHTML = layout(page, pages[page]());
    initMenu();
    initCatalog();
    initContactForm();
    initBackToTop();
}
