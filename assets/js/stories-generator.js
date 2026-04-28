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
        this.populatePerfumes();
        
        // Listeners
        this.btnGenerate.addEventListener('click', () => this.render());
        this.btnRegenerate.addEventListener('click', () => this.generateText());
        this.btnDownload.addEventListener('click', () => this.download());
        
        // Novos controles
        document.getElementById('story-layout').addEventListener('change', () => this.render());
        document.getElementById('story-badge').addEventListener('change', () => this.render());
        document.getElementById('font-size').addEventListener('input', () => this.render());
        
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

        document.querySelectorAll('.style-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentStyle = e.target.dataset.style;
                this.render();
            });
        });
        setTimeout(() => this.render(), 500);
    }

    populatePerfumes() {
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
            this.captionArea.value = data.text || this.getTemplateText(name, notes, type);
        } catch (error) {
            this.captionArea.value = this.getTemplateText(name, notes, type);
        }
        this.render();
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
        const imgPath = this.customImage || `img/perfumes/${option.dataset.img}`;
        const caption = this.captionArea.value;
        const layout = document.getElementById('story-layout').value;
        const badge = document.getElementById('story-badge').value;
        const fontSize = document.getElementById('font-size').value;

        document.getElementById('canvas-loader').hidden = false;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 1. Fundo
        this.drawBackground();

        // 2. Produto
        try {
            const img = await this.loadImage(imgPath);
            this.drawProduct(img, layout);
        } catch (e) { console.error(e); }

        // 3. Texto
        this.drawText(name, caption, layout, fontSize);

        // 4. Selo (Badge)
        if (badge) this.drawBadge(badge);

        // 5. Logo
        try {
            const logo = await this.loadImage('img/logo/logo-texto-branco.png');
            this.ctx.drawImage(logo, (1080 - 300) / 2, 1780, 300, 80);
        } catch (e) {}

        document.getElementById('canvas-loader').hidden = true;
        this.btnDownload.disabled = false;
    }

    drawBackground() {
        const grad = this.ctx.createLinearGradient(0, 0, 0, 1920);
        const style = this.currentStyle;

        if (style === 'elegant') {
            grad.addColorStop(0, '#1b4d3e');
            grad.addColorStop(1, '#0a1f1a');
        } else if (style === 'modern') {
            grad.addColorStop(0, '#111');
            grad.addColorStop(1, '#000');
        } else if (style === 'minimal') {
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(1, '#f0f0f0');
        } else {
            grad.addColorStop(0, '#ff0080');
            grad.addColorStop(1, '#7928ca');
        }

        this.ctx.fillStyle = grad;
        this.ctx.fillRect(0, 0, 1080, 1920);

        // Textura sutil
        this.ctx.globalAlpha = 0.05;
        this.ctx.strokeStyle = style === 'minimal' ? '#000' : '#fff';
        for(let i=0; i<20; i++) {
            this.ctx.strokeRect(Math.random()*1080, Math.random()*1920, 100, 100);
        }
        this.ctx.globalAlpha = 1.0;
    }

    drawProduct(img, layout) {
        let w, h, x, y;
        const scale = 0.8;
        
        if (layout === 'center') {
            w = img.width * scale;
            h = img.height * scale;
            x = (1080 - w) / 2;
            y = 400;
        } else if (layout === 'split') {
            w = img.width * 1.1;
            h = img.height * 1.1;
            x = (1080 - w) / 2;
            y = 150;
        } else if (layout === 'magazine') {
            w = img.width * 0.9;
            h = img.height * 0.9;
            x = 1080 - w - 100;
            y = 500;
        } else {
            w = img.width * 1.2;
            h = img.height * 1.2;
            x = (1080 - w) / 2;
            y = 300;
        }

        this.ctx.shadowColor = 'rgba(0,0,0,0.4)';
        this.ctx.shadowBlur = 40;
        this.ctx.drawImage(img, x, y, w, h);
        this.ctx.shadowBlur = 0;
    }

    drawText(name, caption, layout, fontSize) {
        const isLight = this.currentStyle === 'minimal';
        this.ctx.fillStyle = isLight ? '#1a1a1a' : 'white';
        
        if (layout === 'magazine') {
            this.ctx.textAlign = 'left';
            this.ctx.font = 'bold 120px Inter, sans-serif';
            this.ctx.fillText(name.split(' ')[0], 100, 300);
            this.ctx.font = '300 60px Inter, sans-serif';
            this.ctx.fillText(name.split(' ').slice(1).join(' '), 100, 380);
            
            this.ctx.font = `${fontSize}px Inter, sans-serif`;
            this.wrapText(caption, 100, 1400, 600, fontSize * 1.2);
        } else if (layout === 'split') {
            this.ctx.textAlign = 'center';
            this.ctx.font = 'bold 90px Inter, sans-serif';
            this.ctx.fillText(name, 540, 1300);
            this.ctx.font = `${fontSize}px Inter, sans-serif`;
            this.wrapText(caption, 540, 1450, 850, fontSize * 1.3);
        } else {
            this.ctx.textAlign = 'center';
            this.ctx.font = 'bold 80px Inter, sans-serif';
            this.ctx.fillText(name, 540, 1200);
            this.ctx.font = `${fontSize}px Inter, sans-serif`;
            this.wrapText(caption, 540, 1350, 800, fontSize * 1.3);
        }
    }

    drawBadge(type) {
        const labels = {
            lancamento: 'LANÇAMENTO',
            promo: 'OFERTA ESPECIAL',
            vip: 'EXCLUSIVO VIP',
            last: 'ÚLTIMAS UNIDADES'
        };
        
        this.ctx.save();
        // Mover para uma posição mais segura
        this.ctx.translate(220, 180);
        this.ctx.rotate(-Math.PI / 4);
        
        // Sombra do selo
        this.ctx.shadowColor = 'rgba(0,0,0,0.3)';
        this.ctx.shadowBlur = 15;

        // Fundo Dourado
        this.ctx.fillStyle = '#d4af37'; 
        this.ctx.fillRect(-300, -45, 600, 90);
        
        // Borda Dupla (Efeito Luxo)
        this.ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(-300, -38, 600, 76);
        
        // Texto
        this.ctx.shadowBlur = 0;
        this.ctx.fillStyle = 'black';
        this.ctx.font = 'bold 32px Inter, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(labels[type], 0, 12);
        
        this.ctx.restore();
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
