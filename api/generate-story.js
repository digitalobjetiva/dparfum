import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const { perfumeName, notes, family, type, isFullReview } = req.body;
        const now = new Date();
        const today = now.toLocaleDateString('pt-BR');
        
        let prompt = `Você é um estrategista de vendas da D'Parfum. Hoje é ${today}.
        Crie um Story para o perfume "${perfumeName}" (${notes}).`;

        if (type === 'seasonal') {
            prompt += ` 
            REGRAS OBRIGATÓRIAS DE DATAS (Estamos em ABRIL/MAIO):
            1. Se estivermos entre 20/04 e 12/05, foque TOTALMENTE no DIA DAS MÃES.
            2. Se estivermos em Junho, foque no DIA DOS NAMORADOS.
            3. Se não houver feriado próximo, foque na ESTAÇÃO ATUAL (Outono: elegância, notas quentes).
            O texto DEVE citar o nome da data comemorativa e ser um funil de vendas direto.`;
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
