const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
    // Apenas POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { perfumeName, notes, type, family } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API Key não configurada na Vercel.' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const today = new Date().toLocaleDateString('pt-BR');
    
    const prompt = `
        Você é um especialista em marketing de luxo para a perfumaria "D'Parfum".
        Sua tarefa é criar uma frase curta e impactante para um Story do Instagram (máximo 15 palavras).
        
        Perfume: Inspirado em ${perfumeName}
        Notas: ${notes}
        Família: ${family}
        Data de hoje: ${today}
        Tipo de Story solicitado: ${type} (promoção, educativo, sazonal ou lifestyle)
        
        REGRAS:
        1. Use um tom sofisticado, elegante e persuasivo.
        2. Se for sazonal, verifique se a data ${today} é próxima de algum feriado ou estação e mencione.
        3. Nunca use aspas na resposta.
        4. Foque no benefício (fixação, presença, luxo acessível).
        5. Retorne APENAS a frase.
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();
        
        res.status(200).json({ text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao gerar conteúdo pela IA.' });
    }
};
