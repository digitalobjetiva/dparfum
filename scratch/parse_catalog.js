const fs = require('fs');

const input = `
Inspirado	Grife
Tom Ford Oud Wood	Tom Ford
Ultra Male	Jean Paul
Urban Journey	Hugo Boss
Valentino Uomo Intense	Valentino
Vezzo	L'acqua Di Fiori
Versace	Versace
Versace Eros Flame	Versace
53 (Fifty Three)	Vila Romana
Xs Paco Rabanne	Paco Rabanne
Zino	Davidoff
Zippo In The Blue	Zippo
212 Men	Carolina Herrera
212 Sex Men	Carolina Herrera
212 Vip Men	Carolina Herrera
212 Vip Black	Carolina Herrera
212 Men Aqua	Carolina Herrera
212 Nyc	Carolina Herrera
Legend Spirit	Montblanc
Light Blue	Dolce & Gabbana
L'eau Par Kenzo	Kenzo
M7	Yves S. Laurent
Mister Diavolo	Antônio Banderas
Mr. Burberry	Burberry
One Million	Paco Rabanne
One Million Privê	Paco Rabanne
Óleo De Patchouly	Patchouly
Obsessed For Men	Calvin Klein
Opium	Yves S. Laurent
Patchouly	Patchouly
Paco Rabanne	Paco Rabanne
Prada Men	Prada
Prada Milano	Prada
Presence	Montblanc
Platinum Egoíste	Chanel
Polo	Ralph Lauren
Polo Black	Ralph Lauren
Polo Blue	Ralph Lauren
Polo Sport	Ralph Lauren
Polo Explorer	Ralph Lauren
Polo Red	Ralph Lauren
Polo Red Extreme	Ralph Lauren
Polo Ultra Blue	Ralph Lauren
Polo Supreme Cashmere	Ralph Lauren
Pi-Givenchy	Givenchy
Pure Xs	Paco Rabanne
Reavel	Calvin Klein
Safari	Yves S. Laurent
Stronger With You	Giorgio Armani
Scuderia Ferrari	Ferrari
Silver Scent	Jacques Bogart
Silver Scent Intense	Jacques Bogart
Spice Bomb	Victor&Rolf
Sauvage	Dior
Starwalker	Montblanc
Terre D’Hermès	Hermes
The Secret	Antônio Banderas
The Golden Secret	Antônio Banderas
The One Gentleman	Dolce & Gabbana
The One Grey	Dolce & Gabbana
Tommy	Tommy Hilfiger
Tsar	Van Cleef & Arpels
Tom Ford Tobacco	Tom Ford
Fierce Confidence	Abercrombie
Guilty Gucci Absolute	Gucci
Gentlemen Only Absolute	Givenchy
Hugo Boss	Hugo Boss
Hugo Energise	Hugo Boss
Hugo Dark Blue	Hugo Boss
Hugo Iced	Hugo Boss
Hipnose	Lancôme
Ice Men	Thierry Mugler
Individuel	Montblanc
Invictus	Paco Rabanne
Invictus Aqua	Paco Rabanne
Invictus Intense	Paco Rabanne
L'eau D'Issey	Issey Miyake
L'eau D'Issey Nuit	Issey Miyake
L'eau D'Issey Sport	Issey Miyake
L'eau D'Issey Intense	Issey Miyake
Jazz	Yves S. Laurent
James Bond 007	James Bond
Joop	Joop
Joop Night Flight	Joop
Joop Jump	Joop
Jimmy Choo	Jimmy Choo
Jhon Varvatos	Jhon Varvatos
Kenzo	Kenzo
Kokorico	Jean Paul
Kouros	Yves S. Laurent
Kouros Fraicheur	Yves S. Laurent
Kouros Silver	Yves S. Laurent
King Of Seduction	Antônio Banderas
K Dolce	Dolce & Gabbana
Lacoste	Lacoste
Lacoste Noir	Lacoste
Lacoste Noir Intense	Lacoste
Lacoste Essential	Lacoste
Lacoste Blanche	Lacoste
Lapidus	Ted Lapidus
Lancaster	Argentino
Le Beau	Jean Paul
Le Male	Jean Paul
Le Male Essence	Jean Paul
L'Homme	Yves S. Laurent
L'Homme Prada Milano	Prada
L'Homme Libre	Montblanc
Legend	Montblanc
Body Kouros	Yves S. Laurent
Boss	Hugo Boss
Boss Bottled Tonic	Hugo Boss
Boss Bottled Night	Hugo Boss
Boss The Scenter	Hugo Boss
Boss Night	Hugo Boss
Boss In Motion	Hugo Boss
Bvlgari Aqua Marine	Bvlgari
Bvlgari Blue	Bvlgari
Bvlgari Black	Bvlgari
Bvlgari Extreme	Bvlgari
Bvlgari Pour Homme	Bvlgari
Bvlgari In The Black	Bvlgari
Burberry Men	Burberry
Blue Seduction	Antonio Banderas
Bad Boy	Carolina Herrera
Café Café	Yves S. Laurent
Ch Men	Carolina Herrera
Chic Men	Carolina Herrera
Ch Privê	Carolina Herrera
Coll Water	Davidoff
CK Be	Calvin Klein
CK Free	Calvin Klein
CK One	Calvin Klein
CK Summer	Calvin Klein
Dior Homme Sport	Dior
Dior Homme Intense	Dior
Diamonds	Giorgio Armani
Diesel Bad	Diesel
Diesel Fuel for Life	Diesel
Drakkar Noir	Guy Laroche
Dolce & Gabbana Pour Homme	Dolce & Gabbana
D&G Intenso	Dolce & Gabbana
Emblem	Montblanc
Empório	Armani
Eternity	Calvin Klein
Euphoria	Calvin Klein
Explorer	Montblanc
Fahrenheit	Dior
Ferrari Black	Ferrari
Ferrari Red	Ferrari
First Instinct	Abercrombie
Fleur Du Male	Jean Paul
Acqua di Gio	Giorgio Armani
Acqua Di Gio Absolut	Giorgio Armani
Acqua Di Gio Profumo	Giorgio Armani
Acqua di Parma	*******
Angel	Thierry Mugler
Allure	Chanel
Allure Sport	Chanel
Allure Blanche	Chanel
Allure Sport Homme Extrême	Chanel
Animale	Animale
Armani	Giorgio Armani
Armani Code Black	Giorgio Armani
Armani Code Profumo	Giorgio Armani
Armani Eau De Nuit	Giorgio Armani
Attitude	Giorgio Armani
Azzaro Pour Homme	Azzaro Loris
Azzaro Visit	Azzaro Loris
Azzaro Chrome	Azzaro Loris
Azzaro Silver Black	Azzaro Loris
Azzaro Wanted	Azzaro Loris
Azzaro Wanted By Night	Azzaro Loris
Abercrombie & Fitch	Abercrombie
Aventus	Creed
Bleu	Chanel
Black Xs	Paco Rabanne
Black Xs L'execes	Paco Rabanne
Bang Bang	Marc Jacobs
IMPORTADOS FEMININOS
Inspirado	Grife
Tom Ford White Suede	Tom Ford
Viva La Juicy	Couture
Versace Eros	Versace
Very Irresistible	Givenchy
Valentina	Valentino
V. Valentina	Valentino
Woman By Ralph	Ralph Lauren
Yes I Am	Cacharel
212 Woman	Carolina Herrera
212 Vip	Carolina Herrera
212 Vip Rose	Carolina Herrera
212 Sexy	Carolina Herrera
212 Nyc	Carolina Herrera
Miracle	Lancôme
Miracle Forever	Lancôme
Mon Paris	Guerlain
Mon Guerlain	Guerlain
Nina	Nina Ricci
Nina Tentation	Nina Ricci
Noa	Cacharel
Narciso Rodriguez For Her	Narciso Rodriguez
Narciso Rodriguez	Narciso Rodriguez
Olympéa	Paco Rabanne
Olympéa Intense	Paco Rabanne
Olympéa Aqua	Paco Rabanne
Organza	Givenchy
Organza Indecence	Givenchy
Ô De Lancôme	Lancôme
Oud Palao	Diptyque
Paris	Yves S. Laurent
Paris Hilton	Paris Hilton
Parisiense	Yves S. Laurent
Play	Givenchy
Pink Sugar	Aquolina
Poeme	Lancôme
Poison	Dior
Poison Girls	Dior
Prada Woman	Prada
Prada Candy Florale	Prada
Paloma Picasso	Paloma Picasso
Petits Et Mamans	Bvlgari
Pure Xs	Paco Rabanne
Rose Essentielle	Bvlgari
Rouge Royal	Marina Bourbon
Ralph	Ralph Lauren
Scandal By Night	Jean Paul
Scandal	Jean Paul
Someday	Justin Bieber
S. By Shakira	Shakira
Samsara	Guerlain
SÍ	Giorgio Armani
Si Passione	Giorgio Armani
Splendida Tubereuse Mystique	Bvlgari
Soir De Lune	Sisley
Sole Di Positano	Tom Ford
Tresor	Lancôme
Tommy Girl	Tommy Hilfiger
Tom Ford Métallique	Tom Ford
Heat Rush	Beyoncé
Hipnose	Lancôme
Hipnose Senses	Lancôme
Hipnotic Poison	Dior
L'eau D'issey	Issey Miyake
Infusion D'Iris	Prada
Idôle	Lancôme
Insolence	Guerlain
Jean Paul Classique	Jean Paul
J'adore	Dior
J'adore In Joy	Dior
Joy	Dior
Jimmy Choo Fever	Jimmy Choo
Kenzo Amour	Kenzo
Kenzo World	Kenzo
Lacoste	Lacoste
L'eau Ch	Carolina Herrera
La Vie Est Belle	Lancôme
La Vie Est Belle Em Rose	Lancôme
La Vie Est Belle Intensément	Lancôme
Lady Million	Paco Rabanne
Lady Million Privê	Paco Rabanne
Lady Gaga Fame	Lady Gaga
Lady Emblem	Montblanc
L'Extase	Nina Ricci
Light Blue	Dolce & Gabbana
L'interdit	Givenchy
Luna	Nina Ricci
Laguna	Salvador Dali
Lou Lou	Cacharel
La Nuit Tresor	Lancôme
Leau Par Kenzo	Kenzo
Lolita Lempicka	Lolita Lempicka
Liz	Marina Bourbon
Luna Blosson	Nina Ricci
Miss Dior	Dior
Miss Dior 2013	Dior
Miss Dior Blooming	Dior
Miss Dior Absolut. Blooming	Dior
Miss Dior Cherry	Dior
Miss Dior Rose N’Roses	Dior
Madame	Jean Paul
Magnifique	Lancôme
Ma Vie Pour Femme	Hugo Boss
Midnight Fantasy	Britney Spears
Coco Noir	Chanel
Cinemá	Yves S. Laurent
Ch	Carolina Herrera
Ch Privê	Carolina Herrera
Ckin2U	Calvin Klein
Dolce Dolce	Dolce & Gabbana
Dolce Garden	Dolce & Gabbana
Dolce & Gabbana	Dolce & Gabbana
D&G The One	Dolce & Gabbana
D&G Pour Femme	Dolce & Gabbana
D&G The Rose	Dolce & Gabbana
Deseo	Jennifer Lopez
Dayse Eau So Fresh	Marc Jacobs
Dahlia Noir	Givenchy
Dune	Dior
Diesel Fuel For Life	Diesel
DownTown	Calvin Klein
Decadence	Marc Jacobs
Escape	Calvin Klein
Empório Woman	Giorgio Armani
Edem Woman	Cacharel
Euphoria	Calvin Klein
Euphoria Forbidden	Calvin Klein
Eternity	Calvin Klein
Elie Saab	Elie Saab
Eau de Star	Thierry Mugler
Eau de Soir	Sisley
Eau Cartier	Cartier
Fantasy	Britney Spears
Fantasy Hidden	Britney Spears
Fantasy Circus	Britney Spears
Fan Di Fendi	Fendi
Femme Individuelle	Montblanc
Flower By Kenzo	Kenzo
Flower Bomb	Viktor & Rolf
Flora Gucci	Gucci
Fresh Couture	Moschino
Gabriella Sabatini	Gabriella Sabatini
Gabriele Chanel	Chanel
Glow	Jennifer Lopez
Gingembre	Roger & Gallet
Guilty Gucci	Gucci
Good Girls	Carolina Herrera
Good Girls Légère	Carolina Herrera
Gucci Bloom	Gucci
Amarige	Givenchy
Anais Anais	Cacharel
Armani Code	Giorgio Armani
Angel	Thierry Mugler
Angel ou Demon	Thierry Mugler
Angel Innocent	Thierry Mugler
Angel Muse	Ginvenchy
Aura Loewe	Thierry Mugler
Aura	Thierry Mugler
Azzaro Pour elle	Azzaro
Azzaro Madeimoselle	Azzaro
Amor Amor	Cacharel
Addict	Thierry Mugler
Acqua Di Goia	Giorgio Armani
Allure Fem.	Chanel
Animale	Animale
Alien	Thierry Mugler
Alien Eau Sublime	Thierry Mugler
Anne Pemier Delice	Cacharel
Amor Ferragano	Salvatore
Aventus for her	Creed
Aqua Kenzo Pour Femme	Kenzo
Boss the Scent For Her	Hugo Boss
Bvlgari Goldea	Bvlgari
Bvlgari Vert	Bvlgari
Bvlgari Woman	Bvlgari
Black Xs	Paco Rabanne
Black Opium	Yves S. Laurent
Burberry	Burberry
Be Delicious	DKNY
Because It's You	Giorgio Armani
Bonbon Couture	Viktor & Rolf
Believe	Britney Spears
Beauty	Calvin Klein
Chloé	Chloé
Chloé Love	Chloé
Chloé Innocence	Chloé
Chloé Nomade	Chloé
Cheap And Chic	Moschino
Cherry In The Air	Escada
Calandre	Paco Rabanne
Chic	Carolina Herrera
Chance	Chanel
Chanel 5	Chanel
Coco Mademoiselle	Chanel
NACIONAIS FEMININOS
OUTRAS FRAGRÂNCIAS / ADICIONAIS
Inspirado	Grife
Coffe	Boticário
Coffe Seduction	Boticário
Cupuaçu	Boticário
Egeo	Boticário
Egeo Choc	Boticário
Egeo Dolce	Boticário
Essencial	Boticário
Elysée	Boticário
Elysée Nuit	Boticário
Femme.Com	Boticário
Floratta Emotion	Boticário
Floratta in blue	Boticário
Floratta in Gold	Boticário
Floratta in Rose	Boticário
Floratta cerejeira em Pétalas	Boticário
Floratta cerejeira em Flor	Boticário
Floratta Buque de Flores	Boticário
Floratta Saphira	Boticário
Floratta esmeralda	Boticário
Floratta Rubi	Boticário
Frutas Vermelhas	Boticário
Frescor de moça	Natura
Giovanna Baby	Giovanna Baby
Glamour	Boticário
Humor 1	Natura
Humor Bem me quer 7	Natura
Humor 5	Natura
Jasmim	Natura
Jabuticaba	Natura
Kaiak	Natura
Kriska	Natura
Kriska Flores	Natura
Lavanda Inglesa	************
Lavanda Maua	************
Lavanda Rastro	************
Lavanda Top	************
Lily Essence	Boticário
Linda	Boticário
Linda Inspiration	Boticário
Linda Fashion	Boticário
Linda Radiance	Boticário
Acerola e Morango	Natura
Açaí	Natura
Acqua Fresca	Boticário
Algodão	Natura
Amó Chamego	Natura
Amó Xodó	Natura
Almiscar selvagem	Boticário
Absinto	Boticário
Alfazema	Natura
Arbo	Boticário
Accordes	Boticário
Biografia	Boticário
Bom Bom Humor	Natura
Crazy feelings	Boticário
Capricho Day	Boticário
Capricho Night	Boticário
Castanha	Natura
Cecita	Boticário
INSPIRADO	GRIFE / REFERÊNCIA
CANDY BABY (VS)	Victoria's Secret
Carpie Diem	Boticário
Connexion	Boticário
Dimitri	Boticário
Green Tea	L'occitane
Hoje / Hórus	Natura
Homem.com	Natura
L'occitan	L'occitane
LOVE SPELL (VS)	Victoria's Secret
Myriad	Boticário
Ops!	Boticário
Portinari / Pierre D'Eron	Boticário / ****
Quasar / Onix	Boticário
Thaty	Boticário
Una	Natura
Uomini	Boticário
Zaad	Boticário
`;

function parseList(text) {
    const lines = text.split('\n');
    let currentCategory = "Importado masculino";
    const catalog = [];

    for (let line of lines) {
        line = line.trim();
        if (!line || line.startsWith('Inspirado\t') || line.startsWith('INSPIRADO\t')) continue;

        if (line.includes('IMPORTADOS FEMININOS')) {
            currentCategory = "Importado feminino";
            continue;
        }
        if (line.includes('NACIONAIS FEMININOS') || line.includes('OUTRAS FRAGRÂNCIAS')) {
            currentCategory = "Nacional";
            continue;
        }

        const parts = line.split('\t');
        if (parts.length >= 2) {
            let name = parts[0].trim();
            let brand = parts[1].trim();
            let cat = currentCategory;

            if (cat === "Nacional") {
                if (brand.includes('Boticário') || brand.includes('Natura') || brand.includes('L\'acqua Di Fiori') || brand.includes('L\'occitane') || brand.includes('Giovanna Baby')) {
                    cat = "Nacional";
                } else if (brand.includes("Victoria's Secret")) {
                    cat = "Outras fragrâncias";
                }
            }
            
            if (cat === "Nacional") {
                if (name.toLowerCase().includes('homem') || name.toLowerCase().includes('uomini') || name.toLowerCase().includes('quasar') || name.toLowerCase().includes('zaad') || name.toLowerCase().includes('arbo') || name.toLowerCase().includes('malbec') || name.toLowerCase().includes('connexion') || name.toLowerCase().includes('dimitri')) {
                    cat = "Nacional masculino";
                } else {
                    cat = "Nacional feminino";
                }
            }

            catalog.push([name, brand, cat]);
        }
    }
    return catalog;
}

const parsed = parseList(input);
// Usar UTF-8 explicitamente
fs.writeFileSync('parsed_catalog.js', 'const newCatalog = ' + JSON.stringify(parsed, null, 2) + ';', 'utf8');
console.log(`Processados ${parsed.length} perfumes.`);
