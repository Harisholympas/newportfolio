interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export class AIChatService {
  private apiKey: string;
  private model: string;
  private baseUrl: string;

  constructor() {
    // Using the provided API key and model
    this.apiKey = 'b3eb0d2e3867246ff9288ebb29af928b718317a7daaeabdaa705ebe3dd67ce95';
    this.model = 'meta-llama/Llama-3.3-70B-Instruct-Turbo-Free';
    this.baseUrl = 'https://api.aimlapi.com/v1';
  }

  async sendMessage(message: string, context: string = ''): Promise<string> {
    try {
      const systemPrompt = `You are an AI assistant for Harish's portfolio. Harish is an AI/ML Engineer and 3rd year BE CSE AIML student at D.E. Mahalingam College of Engineering and Technology. 

Key information about Harish:
- Specializes in computer vision, IoT integration, and real-time automation
- Has built projects like Intelligent Traffic Management System with YOLO and Raspberry Pi
- Developed Cloth Segregation System using spectral analysis
- Experience with autonomous rovers, emotion-based digital twins, elephant detection systems
- Skills in YOLO, OpenCV, TensorFlow, PyTorch, embedded systems, ROS, MQTT

Answer questions about Harish's background, projects, skills, and experience. Be conversational, helpful, and showcase his technical expertise. Keep responses concise but informative.

${context ? `Additional context: ${context}` : ''}`;

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: message }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data: AIResponse = await response.json();
      return data.choices[0]?.message?.content || 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('AI Chat Error:', error);
      return 'I apologize, but I\'m having trouble connecting right now. Please try again later.';
    }
  }

  getInspirationalQuotes(): string[] {
    return [
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",
      "The only way to make sense out of change is to plunge into it, move with it, and join the dance. - Alan Watts",
      "Artificial intelligence is the new electricity. - Andrew Ng",
      "The best way to predict the future is to create it. - Peter Drucker",
      "Technology is nothing. What's important is that you have a faith in people. - Steve Jobs",
      "Intelligence is the ability to adapt to change. - Stephen Hawking",
      "The science of today is the technology of tomorrow. - Edward Teller",
    ];
  }

  getRandomQuote(): string {
    const quotes = this.getInspirationalQuotes();
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
}

export const aiChatService = new AIChatService();