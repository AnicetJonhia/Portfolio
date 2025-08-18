'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

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
    "Summarize your skills"
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
      const webhookUrl = `https://n8n-deploy-5io2.onrender.com/webhook/3d3f66c8-8cc2-4ad0-90c4-c64c8cbdef9d?message=${encodeURIComponent(textToSend)}`;
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
    // if (lowerMessage.includes('who are you') || lowerMessage.includes('qui es-tu')) {
    //   return ''
    // }
    
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
        <Button
          onClick={() => setIsOpen(true)}
          className="chat-gradient rounded-full w-14 h-14 shadow-chat interactive-scale"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-96 h-[80vh] glass-effect shadow-chat animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-accent to-accent/90  rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Assistant Portfolio</h3>
                <p className="text-xs ">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className=" hover:bg-white/20 h-8 w-8"
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
                      <Bot className="h-3 w-3 " />
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
                      className="text-left justify-start h-auto py-2 px-3 text-xs hover:bg-accent/10 border-accent/20"
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
                className="chat-gradient rounded-full w-10 h-10 interactive-scale"
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