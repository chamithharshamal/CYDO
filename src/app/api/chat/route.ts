import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    console.log("Chat API: Request received. API Key exists:", !!apiKey);
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    if (!apiKey) {
      console.error("Chat API error: GEMINI_API_KEY is missing.");
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", // Using the latest 2026 standard model
      systemInstruction: "You are a helpful, professional AI assistant for CYDO, an elite IT agency. Respond using clear, structured markdown. Use bullet points for lists and bold text for key terms to ensure readability. Answer questions concisely based on the context of building high-end, premium web platforms. If you don't know something about CYDO's specific services, act as a knowledgeable tech consultant and offer general guidance, or tell them to use the contact form."
    });

    // Gemini requires the first message in history to be from the 'user'.
    // Since our UI starts with a bot greeting, we skip all initial bot messages 
    // to find the true beginning of the conversation.
    const firstUserIndex = messages.findIndex((msg: any) => msg.role === 'user');
    const historyData = firstUserIndex !== -1 ? messages.slice(firstUserIndex, -1) : [];

    const history = historyData.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const currentMessage = messages[messages.length - 1].content;

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(currentMessage);
    const responseText = result.response.text();

    return NextResponse.json({ text: responseText });
    
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json({ 
      error: "Failed to process chat request",
      details: error.message 
    }, { status: 500 });
  }
}
