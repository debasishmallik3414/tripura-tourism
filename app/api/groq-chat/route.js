export async function POST(req) {
  try {
    const body = await req.json();
    const { message } = body;

    console.log('📩 Incoming message:', message);

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
  model: 'llama3-70b-8192',
 messages: [
  {
    role: 'system',
    content: `
      You are an AI assistant that only answers questions about Tripura and Tripura tourism.

      If the user asks anything unrelated to Tripura (such as coding, politics, sports, celebrities, technology, or general knowledge), reply with:
      "❌ Sorry, I can only assist with questions related to Tripura and its tourism."

      But if the question is about Tripura, respond with detailed, friendly, and informative answers about its history, culture, tourist spots, food, wildlife, festivals, or geography.
    `
  },
  { role: 'user', content: message }
],
}),

    });

    const data = await response.json();

    console.log('🧠 Groq API raw response:', data);

    if (!response.ok) {
      return Response.json({ reply: '❌ Tripo AI Error', detail: data }, { status: 500 });
    }

    return Response.json({ reply: data.choices[0].message.content });

  } catch (err) {
    console.error('💥 API Route Crash:', err);
    return Response.json({ reply: '❌ Server error' }, { status: 500 });
  }
}
