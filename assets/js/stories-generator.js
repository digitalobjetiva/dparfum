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
        
        this.imageCache = new Map();
        this.currentStyle = 'elegant';
        this.isGenerating = false;
        this.customImage = null;
        
        this.init();
    }

    init() {
        this.populatePerfumes();
        
        // Listeners Principais
        this.btnGenerate.addEventListener('click', () => this.render());
        this.btnRegenerate.addEventListener('click', () => this.generateText());
        this.btnDownload.addEventListener('click', () => this.download());
        
        // Tela de Boas-vindas
        const btnEnter = document.getElementById('btn-enter-studio');
        if (btnEnter) {
            btnEnter.addEventListener('click', () => {
                document.getElementById('welcome-screen').classList.add('is-hidden');
            });
        }
        
        // Controles de Customização
        document.getElementById('story-layout').addEventListener('change', () => this.render());
        document.getElementById('story-badge').addEventListener('change', () => this.render());
        document.getElementById('font-size').addEventListener('input', () => this.render());
        document.getElementById('story-price').addEventListener('input', () => this.render());
        document.getElementById('product-glow').addEventListener('change', () => this.render());
        document.getElementById('show-cta').addEventListener('change', () => this.render());
        document.getElementById('cta-text').addEventListener('input', () => this.render());
        document.getElementById('cta-color').addEventListener('input', () => this.render());
        
        // Upload Customizado
        document.getElementById('custom-upload').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.customImage = event.target.result;
                    this.render();
                };
                reader.readAsDataURL(file);
            }
        });

        // Seleção de Estilo
        document.querySelectorAll('.style-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentStyle = e.target.dataset.style;
                this.render();
            });
        });

        // Render inicial
        setTimeout(() => this.render(), 800);
    }

    populatePerfumes() {
        if (typeof uniqueShopPerfumes === 'function') {
            const perfumes = uniqueShopPerfumes();
            const noneOption = `<option value="">--- Nenhum (Apenas Fundo) ---</option>`;
            this.perfumeSelect.innerHTML = noneOption + perfumes.map(p => 
                `<option value="${p[1]}" data-img="${p[0]}" data-notes="${p[5]}" data-family="${p[3]}">${p[1]}</option>`
            ).join('');
            
            this.perfumeSelect.addEventListener('change', () => {
                if (this.perfumeSelect.value) {
                    this.customImage = null; // Limpa o upload anterior ao escolher um perfume
                    this.generateText();
                    this.render(); // Força o render imediato
                } else {
                    this.customImage = null;
                    this.captionArea.value = "Sua frase personalizada aqui...";
                    this.render();
                }
            });
        }
    }

    async generateText() {
        const option = this.perfumeSelect.selectedOptions[0];
        if (!option || this.isGenerating) return;

        this.isGenerating = true;
        const name = option.value;
        const notes = option.dataset.notes;
        const family = option.dataset.family;
        const type = document.getElementById('story-type').value;

        // Renderização Otimista
        this.captionArea.value = this.getTemplateText(name, notes, type);
        this.render(); 

        try {
            const response = await fetch('/api/generate-story', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ perfumeName: name, notes, family, type })
            });
            
            const data = await response.json();
            if (data.text) {
                this.captionArea.value = data.text;
                this.render();
            }
        } catch (error) {
            console.warn("API Error:", error);
        } finally {
            this.isGenerating = false;
        }
    }

    getTemplateText(name, notes, type) {
        const prompts = {
            promo: [`Inspirado em ${name}: Luxo que você pode ter.`, `Garanta seu ${name} hoje!`],
            edu: [`Você sabia? ${name} tem notas de ${notes.split(',')[0]}.`],
            seasonal: [`O presente ideal: Inspirado em ${name}.`],
            lifestyle: [`Sua dose diária de elegância. #${name}`]
        };
        const list = prompts[type] || prompts.promo;
        return list[Math.floor(Math.random() * list.length)];
    }

    async render() {
        const option = this.perfumeSelect.selectedOptions[0];
        if (!option) return;

        const name = option.value;
        const imgPath = this.customImage || (option.dataset.img ? `img/perfumes/${option.dataset.img}` : null);
        const caption = this.captionArea.value;
        const layout = document.getElementById('story-layout').value;
        const badge = document.getElementById('story-badge').value;
        const fontSize = document.getElementById('font-size').value;
        const price = document.getElementById('story-price').value;
        const hasGlow = document.getElementById('product-glow').checked;
        const showCTA = document.getElementById('show-cta').checked;
        const ctaText = document.getElementById('cta-text').value;
        const ctaColor = document.getElementById('cta-color').value;

        const loader = document.getElementById('canvas-loader');
        
        // Limpar e desenhar fundo
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();

        // Desenhar Produto e Brilho (Apenas se houver imagem)
        if (imgPath) {
            try {
                const img = await this.loadImage(imgPath);
                if (hasGlow) this.drawGlow(layout);
                this.drawProduct(img, layout);
            } catch (e) { console.error("Image load error:", e); }
        }

        // Desenhar Elementos de Texto e Selos
        this.drawText(name, caption, layout, fontSize, showCTA, ctaText, ctaColor);
        if (badge) this.drawBadge(badge);
        if (price) this.drawPrice(price, layout);

        // Logo Final
        try {
            const logo = await this.loadImage('img/logo/logo-texto-branco.png');
            this.ctx.drawImage(logo, (1080 - 300) / 2, 1780, 300, 80);
        } catch (e) {}

        // ESCONDER LOADER (IMPORTANTE)
        if (loader) {
            loader.classList.add('is-hidden');
            loader.hidden = true; // Força dupla
        }
        
        this.btnDownload.disabled = false;
    }

    drawBackground() {
        const grad = this.ctx.createLinearGradient(0, 0, 0, 1920);
        const style = this.currentStyle;

        if (style === 'elegant') {
            grad.addColorStop(0, '#1b4d3e'); grad.addColorStop(1, '#0a1f1a');
        } else if (style === 'gold') {
            grad.addColorStop(0, '#d4af37'); grad.addColorStop(1, '#8a6d3b');
        } else if (style === 'rose') {
            grad.addColorStop(0, '#e5b3a4'); grad.addColorStop(1, '#a67c74');
        } else if (style === 'modern') {
            grad.addColorStop(0, '#1a1a1a'); grad.addColorStop(1, '#000000');
        } else if (style === 'minimal') {
            grad.addColorStop(0, '#ffffff'); grad.addColorStop(1, '#f0f0f0');
        } else if (style === 'vibrant') {
            grad.addColorStop(0, '#ff0080'); grad.addColorStop(1, '#7928ca');
        }

        this.ctx.fillStyle = grad;
        this.ctx.fillRect(0, 0, 1080, 1920);

        this.ctx.globalAlpha = 0.03;
        this.ctx.strokeStyle = '#fff';
        for(let i=0; i<30; i++) {
            this.ctx.strokeRect(Math.random()*1080, Math.random()*1920, 200, 2);
        }
        this.ctx.globalAlpha = 1.0;
    }

    drawGlow(layout) {
        let x = 540, y = 650, radius = 450;
        if (layout === 'magazine') { x = 700; y = 700; }
        if (layout === 'split') { y = 400; }

        const glow = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
        glow.addColorStop(0, 'rgba(255,255,255,0.3)');
        glow.addColorStop(1, 'rgba(255,255,255,0)');
        
        this.ctx.fillStyle = glow;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    drawProduct(img, layout) {
        let w, h, x, y;
        const scale = 0.75; // Reduzi levemente a escala
        
        if (layout === 'center') {
            w = img.width * scale; h = img.height * scale;
            x = (1080 - w) / 2; y = 350; 
        } else if (layout === 'split') {
            w = img.width * 1.0; h = img.height * 1.0;
            x = (1080 - w) / 2; y = 100;
        } else if (layout === 'magazine') {
            w = img.width * 0.85; h = img.height * 0.85;
            x = 1080 - w - 100; y = 450;
        } else if (layout === 'focus') {
            w = img.width * 1.0; h = img.height * 1.0;
            x = (1080 - w) / 2; y = 200; // Bem no topo para dar foco
        } else {
            w = img.width * scale; h = img.height * scale;
            x = (1080 - w) / 2; y = 300;
        }

        this.ctx.shadowColor = 'rgba(0,0,0,0.4)';
        this.ctx.shadowBlur = 40;
        this.ctx.drawImage(img, x, y, w, h);
        this.ctx.shadowBlur = 0;
    }

    drawText(name, caption, layout, fontSize, showCTA, ctaText, ctaColor) {
        const isLight = this.currentStyle === 'minimal';
        this.ctx.fillStyle = isLight ? '#1a1a1a' : 'white';
        
        if (layout === 'magazine') {
            this.ctx.textAlign = 'left';
            this.ctx.font = 'bold 120px Inter, sans-serif';
            this.ctx.fillText(name.split(' ')[0], 100, 300);
            this.ctx.font = '300 60px Inter, sans-serif';
            this.ctx.fillText(name.split(' ').slice(1).join(' '), 100, 380);
            this.ctx.font = `${fontSize}px Inter, sans-serif`;
            this.wrapText(caption, 100, 1450, 600, fontSize * 1.2);
        } else if (layout === 'split') {
            this.ctx.textAlign = 'center';
            this.ctx.font = 'bold 90px Inter, sans-serif';
            this.ctx.fillText(name, 540, 1350); 
            this.ctx.font = `${fontSize}px Inter, sans-serif`;
            this.wrapText(caption, 540, 1500, 850, fontSize * 1.3);
        } else if (layout === 'focus') {
            this.ctx.textAlign = 'center';
            this.ctx.font = 'bold 85px Inter, sans-serif';
            this.ctx.fillText(name, 540, 1400); // Texto mais baixo
            this.ctx.font = `${fontSize}px Inter, sans-serif`;
            this.wrapText(caption, 540, 1530, 800, fontSize * 1.3);
        } else {
            this.ctx.textAlign = 'center';
            this.ctx.font = 'bold 85px Inter, sans-serif';
            this.ctx.fillText(name, 540, 1280); 
            this.ctx.font = `${fontSize}px Inter, sans-serif`;
            this.wrapText(caption, 540, 1430, 800, fontSize * 1.3);
        }

        // CTA RODAPÉ (Opcional)
        if (showCTA) {
            this.ctx.save();
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = ctaColor || '#25d366';
            this.ctx.font = 'bold 36px Inter, sans-serif';
            
            const textWidth = this.ctx.measureText(ctaText).width;
            const iconSize = 40;
            const totalWidth = textWidth + iconSize + 15;
            const startX = (1080 - totalWidth) / 2;
            
            this.drawWhatsAppIcon(startX + 20, 1720 - 15, iconSize);
            this.ctx.fillText(ctaText, startX + iconSize + 15 + textWidth/2, 1720);
            this.ctx.restore();
        }
    }

    drawWhatsAppIcon(x, y, size) {
        this.ctx.save();
        this.ctx.fillStyle = '#25d366';
        this.ctx.beginPath();
        this.ctx.arc(x, y, size/2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';
        this.ctx.beginPath();
        this.ctx.arc(x, y, size/4, 0.5, 2.5);
        this.ctx.stroke();
        this.ctx.restore();
    }

    drawBadge(type) {
        const labels = {
            lancamento: 'LANÇAMENTO', novidade: 'NOVIDADE', campeao: 'CAMPEÃO DE VENDAS',
            promo: 'OFERTA ESPECIAL', vip: 'EXCLUSIVO VIP', last: 'ÚLTIMAS UNIDADES',
            fixacao: 'FIXAÇÃO 24H', luxo: 'LUXO ACESSÍVEL'
        };
        this.ctx.save();
        this.ctx.translate(180, 180);
        this.ctx.rotate(-Math.PI / 4);
        this.ctx.shadowColor = 'rgba(0,0,0,0.5)';
        this.ctx.shadowBlur = 20;
        const grad = this.ctx.createLinearGradient(-400, 0, 400, 0);
        grad.addColorStop(0, '#8a6d3b'); grad.addColorStop(0.5, '#d4af37'); grad.addColorStop(1, '#8a6d3b');
        this.ctx.fillStyle = grad;
        this.ctx.fillRect(-400, -45, 800, 90);
        this.ctx.shadowBlur = 0;
        this.ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(-400, -38, 800, 76);
        this.ctx.fillStyle = 'black';
        this.ctx.font = 'bold 30px Inter, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(labels[type], 0, 12);
        this.ctx.restore();
    }

    drawPrice(price, layout) {
        this.ctx.save();
        let x = 800, y = 800;
        if (layout === 'split') { x = 800; y = 400; }
        if (layout === 'magazine') { x = 300; y = 1000; }
        this.ctx.shadowColor = 'rgba(0,0,0,0.3)';
        this.ctx.shadowBlur = 15;
        this.ctx.fillStyle = '#1b4d3e';
        this.ctx.beginPath();
        if (this.ctx.roundRect) this.ctx.roundRect(x - 120, y - 50, 240, 100, 50);
        else this.ctx.fillRect(x - 120, y - 50, 240, 100);
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.font = 'bold 45px Inter, sans-serif';
        this.ctx.fillText(price, x, y + 15);
        this.ctx.restore();
    }

    wrapText(text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        for(let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = this.ctx.measureText(testLine);
            if (metrics.width > maxWidth && n > 0) {
                this.ctx.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else { line = testLine; }
        }
        this.ctx.fillText(line, x, y);
    }

    loadImage(src) {
        if (this.imageCache.has(src)) return Promise.resolve(this.imageCache.get(src));
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => { this.imageCache.set(src, img); resolve(img); };
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

window.addEventListener('DOMContentLoaded', () => {
    window.studio = new StoriesStudio();
});
