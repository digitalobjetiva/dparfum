import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const { perfumeName, notes, family, type, isFullReview } = req.body;
        const today = new Date().toLocaleDateString('pt-BR');

        let prompt = `Você é um especialista em marketing de luxo da D'Parfum. Hoje é dia ${today}.
        Crie um texto curto e persuasivo para um Story de Instagram sobre o perfume "${perfumeName}".
        Notas: ${notes}. Família: ${family}.
        Objetivo: ${type}.`;

        if (type === 'seasonal') {
            prompt += ` REGRAS SAZONAIS: Identifique se estamos perto de algum feriado ou data especial (Dia das Mães, Namorados, Natal, etc) baseado em ${today}. 
            Crie um funil de vendas: desperte o desejo pelo presente ideal e termine com uma chamada para ação forte.`;
        }

        prompt += ` Use emojis e linguagem sofisticada. Máximo 280 caracteres.`;

        if (isFullReview) {
            prompt = `Aja como um sommelier de perfumes. Escreva uma resenha luxuosa e envolvente sobre o perfume "${perfumeName}".
            Notas: ${notes}. Família: ${family}.
            Fale do aroma, fixação e elegância. 
            Texto de 300-450 caracteres. Use emojis de brilho e luxo. Retorne APENAS o texto.`;
        }

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().replace(/\*/g, ''); // Remover negritos do markdown

        res.status(200).json({ text: text.trim() });
    } catch (error) {
        console.error("Gemini Error:", error);
        res.status(500).json({ error: "Falha ao gerar conteúdo pela IA." });
    }
}
