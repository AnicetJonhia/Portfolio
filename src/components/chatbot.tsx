'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am your virtual assistant. Ask me questions about my portfolio, my skills, or my projects.',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
  "Who are you?",
  "Your Contact?", 
  "Summarize your skills",
  "What projects have you worked on?",
  "What technologies do you use?",
  "Can I see your resume?",
  "What services do you offer?",
  "Tell more about your experiences"
 
];


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowQuickQuestions(false);

    // Send to n8n webhook and get response
    try {
      const webhookUrl = `https://n17n.app.n8n.cloud/webhook/3d3f66c8-8cc2-4ad0-90c4-c64c8cbdef9d?message=${encodeURIComponent(textToSend)}`;
      const response = await fetch(webhookUrl, {
        method: 'GET',
      });
      
      if (response.ok) {
        const responseData = await response.text();
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: responseData || getBotResponse(textToSend),
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Webhook response not ok');
      }
    } catch (error) {
      console.log('Webhook call failed:', error);
      // Fallback to local response
      const botResponse = getBotResponse(textToSend);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }
    
    setIsTyping(false);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('who are you') || lowerMessage.includes('qui es-tu')) {
      return `My name is **Tokiniaina Jean Anicet Jonhia RANDRIANAMBININA**.  
I come from Fianarantsoa, Madagascar.

🤖 Full-stack developer specializing in **React**, **Django**, and cloud services.  
Experienced in building scalable, responsive web apps, with a focus on high-quality solutions.  
Constantly learning and applying new techniques in software architecture and AI.`
      
    }

    if (lowerMessage.includes('compétence') || lowerMessage.includes('skill') || lowerMessage.includes('stack') || lowerMessage.includes('tech')|| lowerMessage.includes('summarize your skills')){
      return `# Technical Stack

## Frontend
- React
- Next.js
- React Native

## Backend
- Node.js
- Django
- Python

## AI & Data
- Machine Learning
- Deep Learning
- AI Integration

## Database & Design
- SQL
- NoSQL
- UI/UX Design
      `
    }

    if (lowerMessage.includes('experience') ) {
      return `# Professional Experience

## Python Developer
- **Company**: Futurmap, Madagascar
- **Period**: Since March 2024
- **Description**:
  - Developing and maintaining scripts and extensions with PyRevit
  - Automating tasks in Autodesk Revit

## Freelance JavaScript Developer
- **Company**: NextRocket, Dubai
- **Period**: January 2024
- **Description**:
  - Automation via Web Scraping

## Internship
- **Company**: LCom Corporation, Madagascar
- **Period**: September to November 2023
- **Description**:
  - UX / UI Design
  - Getting to Know ReactJs

## Internship
- **Company**: LCom Corporation, Madagascar
- **Period**: October to November 2022
- **Description**:
  - Showcase Site
  - Introduction to OOP in PHP

## Professional Discovery Course
- **Company**: Ibonia, Madagascar
- **Period**: July 2022
- **Description**:
  - Observation
  - Understanding the Agile Method
`
    }

 if (lowerMessage.includes('project') || lowerMessage.includes('projet') ) {
    return `# My Projects

## Agridi (2023)
**Description**: Bridging producers and consumers through agri-tech app  
**Tech**: React, Django, SQLite  


## ToBib (2024)
**Description**: AI as medical assistant  
**Tech**: Next.js, AI, Python | Django  
`
 }

     if (lowerMessage.includes('contact')) {
      return `# Contact Information

## Phone
+261344822412

## Email
anicet22.aps2a@gmail.com

## Address
Antananarivo, 101, Madagascar

## Social Links
- [GitHub](https://github.com/AnicetJonhia)
- [LinkedIn](https://www.linkedin.com/in/anicet-jonhia-randrianambinina-266628244/)
- [Facebook](https://www.facebook.com/anicet.jonhia/?locale=fr_FR)
`                                                     
      
     }


    return '❌ Oops! Something went wrong. Please try again later.';
    
};

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (

        <Tooltip>
  <TooltipTrigger>
        <Button variant={"outline"}
          onClick={() => setIsOpen(true)}

          className="chat-gradient cursor-pointer rounded-full w-16 h-16 shadow-chat interactive-scale"
          size="icon"
        >
          {/* <MessageCircle className="h-6 w-6 text-white" /> */}
              <img
      src="/images/bot.png" 
      alt="Chatbot Icon"
      className="h-14"
    />
        </Button>
        </TooltipTrigger>
  <TooltipContent>
    <p className='text-white'>🤖 Chat with my portfolio bot</p>
  </TooltipContent>
</Tooltip> 
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-96 h-[80vh] glass-effect shadow-chat animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-accent to-accent/90  rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                 <img
                        src="/images/botBot.png" 
                        alt="Chatbot Icon"
                        className="h-7 "
                      />
              </div>
              <div>
                <h3 className="font-semibold text-sm">PortfolioAssistant</h3>
                <p className="text-xs ">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:bg-white/20 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} message-enter`}
              >
                <div className="flex items-start space-x-2 max-w-[85%]">
                  {!message.isUser && (
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="/images/botBot.png" 
                        alt="Chatbot Icon"
                        className="h-5 "
                      />
                    </div>
                  )}
                  
                  <div
                    className={`chat-bubble ${
                      message.isUser ? 'chat-bubble-user' : 'chat-bubble-bot'
                    }`}
                  >
                    {message.isUser ? (
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    ) : (
                      <div className="text-sm leading-relaxed prose prose-sm max-w-none dark:prose-invert">
                        <ReactMarkdown
                          components={{
                            h1: ({node, ...props}) => <h1 className="text-lg font-bold mb-2" {...props} />,
                            h2: ({node, ...props}) => <h2 className="text-base font-semibold mb-2 text-foreground" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-sm font-medium mb-1" {...props} />,
                            p: ({node, ...props}) => <p className="mb-2" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-semibold text-primary" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-1 mb-2" {...props} />,
                            li: ({node, ...props}) => <li className="text-sm" {...props} />,
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    )}
                    <span className="text-xs opacity-70 mt-2 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>

                  {message.isUser && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="chat-bubble chat-bubble-bot typing-indicator">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Questions */}
            {showQuickQuestions && messages.length === 1 && (
              <div className="space-y-2 animate-fade-in">
                <p className="text-xs text-muted-foreground text-center mb-3">Quick questions ✅</p>
                <div className="flex flex-col gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left justify-start h-auto py-2 px-3 text-xs border hover:bg-muted/10 border-muted cursor-pointer"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-muted/30">
            <div className="flex space-x-2">
              <Input
                placeholder="Your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 rounded-full border-0 bg-white/50 backdrop-blur-sm"
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="chat-gradient rounded-full w-10 h-10 interactive-scale cursor-pointer"
                size="icon"
              >
                <Send className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;