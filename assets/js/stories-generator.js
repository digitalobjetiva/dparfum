/**
 * Estúdio D'Parfum | Lógica do Gerador de Stories
 */

class StoriesStudio {
    constructor() {
        this.canvas = document.getElementById('story-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.perfumeSelect = document.getElementById('perfume-select');
        this.btnGenerate = document.getElementById('btn-generate');
        this.btnDownload = document.getElementById('btn-download');
        this.btnRegenerate = document.getElementById('btn-regenerate');
        this.captionArea = document.getElementById('ai-caption');
        
        this.currentPerfume = null;
        this.currentStyle = 'elegant';
        
        this.init();
    }

    init() {
        // Carregar perfumes do site.js (shopPerfumes)
        this.populatePerfumes();
        
        // Event Listeners
        this.btnGenerate.addEventListener('click', () => this.render());
        this.btnRegenerate.addEventListener('click', () => this.generateText());
        this.btnDownload.addEventListener('click', () => this.download());
        
        document.querySelectorAll('.style-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentStyle = e.target.dataset.style;
                this.render();
            });
        });

        // Inicializar com o primeiro perfume
        setTimeout(() => this.render(), 500);
    }

    populatePerfumes() {
        // uniqueShopPerfumes é uma função disponível no site.js
        if (typeof uniqueShopPerfumes === 'function') {
            const perfumes = uniqueShopPerfumes();
            this.perfumeSelect.innerHTML = perfumes.map(p => 
                `<option value="${p[1]}" data-img="${p[0]}" data-notes="${p[5]}" data-family="${p[3]}">${p[1]}</option>`
            ).join('');
            
            this.perfumeSelect.addEventListener('change', () => {
                this.generateText();
                this.render();
            });
        }
    }

    async generateText() {
        const option = this.perfumeSelect.selectedOptions[0];
        if (!option) return;

        const name = option.value;
        const notes = option.dataset.notes;
        const family = option.dataset.family;
        const type = document.getElementById('story-type').value;

        this.captionArea.value = "IA pensando em algo elegante...";

        try {
            const response = await fetch('/api/generate-story', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ perfumeName: name, notes, family, type })
            });
            
            const data = await response.json();
            
            if (data.text) {
                this.captionArea.value = data.text;
            } else {
                throw new Error(data.error || 'Erro na resposta');
            }
        } catch (error) {
            console.warn("Usando fallback de texto devido a erro na API:", error);
            const text = this.getTemplateText(name, notes, type);
            this.captionArea.value = text;
        }
        
        this.render();
    }

    getTemplateText(name, notes, type) {
        const prompts = {
            promo: [
                `O queridinho da semana: Inspirado em ${name}. Garanta o seu pelo WhatsApp!`,
                `Luxo acessível com fixação impecável. Peça agora o seu ${name}.`,
                `Sua assinatura olfativa está aqui. Inspirado em ${name}, uma escolha marcante.`
            ],
            edu: [
                `Você sabia? O inspirado em ${name} tem notas de ${notes.split(',')[0]}.`,
                `Como fazer seu ${name} durar mais? Aplique nos pontos de pulsação!`,
                `Elegância em cada borrifada. Conheça a pirâmide olfativa do ${name}.`
            ],
            seasonal: [
                `Presente perfeito para este momento especial: Inspirado em ${name}.`,
                `Celebre com fragrância. ${name} é a escolha ideal para hoje.`,
                `Momentos inesquecíveis pedem cheiros marcantes. Conheça o ${name}.`
            ],
            lifestyle: [
                `A dose de confiança que seu dia precisa. ✨ #DParfum #${name}`,
                `Fragrância é presença. Qual é a sua hoje? A nossa é ${name}.`,
                `Um toque de sofisticação na sua rotina. #Perfumaria #${name}`
            ]
        };
        const list = prompts[type] || prompts.promo;
        return list[Math.floor(Math.random() * list.length)];
    }

    async render() {
        const option = this.perfumeSelect.selectedOptions[0];
        if (!option) return;

        const name = option.value;
        const imgPath = `img/perfumes/${option.dataset.img}`;
        const caption = this.captionArea.value;

        // Mostrar Loader
        document.getElementById('canvas-loader').hidden = false;

        // Limpar canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 1. Desenhar Fundo
        this.drawBackground();

        // 2. Carregar e Desenhar Imagem do Perfume
        try {
            const img = await this.loadImage(imgPath);
            this.drawProduct(img);
        } catch (e) {
            console.error("Erro ao carregar imagem do perfume", e);
        }

        // 3. Desenhar Texto
        this.drawText(name, caption);

        // 4. Desenhar Logo
        try {
            const logo = await this.loadImage('img/logo/logo-texto-branco.png');
            this.ctx.drawImage(logo, (1080 - 300) / 2, 1750, 300, 80);
        } catch (e) {}

        // Esconder Loader
        document.getElementById('canvas-loader').hidden = true;
        this.btnDownload.disabled = false;
    }

    drawBackground() {
        const grad = this.ctx.createLinearGradient(0, 0, 0, 1920);
        
        if (this.currentStyle === 'elegant') {
            grad.addColorStop(0, '#1b4d3e');
            grad.addColorStop(1, '#0a1f1a');
        } else if (this.currentStyle === 'modern') {
            grad.addColorStop(0, '#222');
            grad.addColorStop(1, '#000');
        } else if (this.currentStyle === 'minimal') {
            grad.addColorStop(0, '#f5f5f5');
            grad.addColorStop(1, '#e0e0e0');
        } else {
            grad.addColorStop(0, '#4a148c');
            grad.addColorStop(1, '#1a237e');
        }

        this.ctx.fillStyle = grad;
        this.ctx.fillRect(0, 0, 1080, 1920);

        // Adicionar elementos decorativos sutis
        this.ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        this.ctx.lineWidth = 2;
        for(let i=0; i<10; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(Math.random()*1080, 0);
            this.ctx.lineTo(Math.random()*1080, 1920);
            this.ctx.stroke();
        }
    }

    drawProduct(img) {
        const scale = 0.8;
        const w = img.width * scale;
        const h = img.height * scale;
        const x = (1080 - w) / 2;
        const y = 400;

        // Sombra
        this.ctx.shadowColor = 'rgba(0,0,0,0.5)';
        this.ctx.shadowBlur = 50;
        this.ctx.shadowOffsetY = 30;

        // Moldura elegante (opcional)
        if(this.currentStyle === 'minimal') {
             this.ctx.fillStyle = 'white';
             this.ctx.fillRect(x - 20, y - 20, w + 40, h + 40);
        }

        this.ctx.drawImage(img, x, y, w, h);
        
        // Reset shadow
        this.ctx.shadowBlur = 0;
        this.ctx.shadowOffsetY = 0;
    }

    drawText(name, caption) {
        const isLight = this.currentStyle === 'minimal';
        this.ctx.fillStyle = isLight ? '#1a1a1a' : 'white';
        this.ctx.textAlign = 'center';

        // Título
        this.ctx.font = 'bold 80px Inter, sans-serif';
        this.ctx.fillText(name.toUpperCase(), 540, 1250);

        // Subtítulo
        this.ctx.font = '300 40px Inter, sans-serif';
        this.ctx.fillText("INSPIRADO NA ALTA PERFUMARIA", 540, 1310);

        // Divisor
        this.ctx.beginPath();
        this.ctx.moveTo(440, 1360);
        this.ctx.lineTo(640, 1360);
        this.ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)';
        this.ctx.stroke();

        // Caption (Quebra de linha automática)
        this.ctx.font = 'italic 45px Inter, sans-serif';
        this.wrapText(caption, 540, 1480, 800, 60);

        // CTA
        this.ctx.font = 'bold 35px Inter, sans-serif';
        this.ctx.fillText("PEÇA PELO WHATSAPP • @DPARFY", 540, 1700);
    }

    wrapText(text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        for(let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = this.ctx.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                this.ctx.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        this.ctx.fillText(line, x, y);
    }

    loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }

    download() {
        const link = document.createElement('a');
        const perfume = this.perfumeSelect.value.replace(/\s+/g, '-').toLowerCase();
        link.download = `story-dparfum-${perfume}.png`;
        link.href = this.canvas.toDataURL('image/png');
        link.click();
    }
}

// Inicializar quando o DOM estiver pronto
window.addEventListener('DOMContentLoaded', () => {
    window.studio = new StoriesStudio();
});
