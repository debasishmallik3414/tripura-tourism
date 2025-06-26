import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json({ reply: '❗ No message provided.' }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent({
      contents: [
        {
          parts: [
            {
              text: message,
            },
          ],
        },
      ],
    });

    const text = result.response.candidates?.[0]?.content?.parts?.[0]?.text || '❌ No reply.';
    return Response.json({ reply: text });
  } catch (error) {
    console.error('Gemini error:', error);
    return Response.json({ reply: '❌ Gemini AI failed to respond.' }, { status: 500 });
  }
}
