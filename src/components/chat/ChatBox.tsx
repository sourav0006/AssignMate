"use client";

import type { Message, User } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Paperclip, Send } from "lucide-react";
import { useState } from "react";

const mockCurrentUser: User = {
  id: "user-1",
  name: "Alex Doe",
  email: "alex@example.com",
  avatarUrl: "https://placehold.co/100x100.png",
  rating: 4.8,
  reviewsCount: 32,
};

const mockOtherUser: User = {
  id: "user-2",
  name: "Jane Smith",
  email: "jane@example.com",
  avatarUrl: "https://placehold.co/100x100.png?text=JS",
  rating: 4.9,
  reviewsCount: 45,
};

const initialMessages: Message[] = [
    { id: '1', senderId: 'user-2', text: "Hello! I've reviewed the assignment details and I'm ready to start. Just wanted to confirm the deadline is August 15th, right?", timestamp: new Date(Date.now() - 1000 * 60 * 5) },
    { id: '2', senderId: 'user-1', text: "Hi Jane! Yes, that's correct. Let me know if you have any questions as you go.", timestamp: new Date(Date.now() - 1000 * 60 * 4) },
    { id: '3', senderId: 'user-2', text: "Great, thanks! I'll get started right away and keep you updated on my progress.", timestamp: new Date(Date.now() - 1000 * 60 * 3) },
];


export function ChatBox() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    const msg: Message = {
        id: (messages.length + 1).toString(),
        senderId: mockCurrentUser.id,
        text: newMessage,
        timestamp: new Date(),
    }
    setMessages([...messages, msg]);
    setNewMessage("");
  }

  return (
    <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 p-4 border-b">
            <Avatar>
                <AvatarImage src={mockOtherUser.avatarUrl} />
                <AvatarFallback>{mockOtherUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold">{mockOtherUser.name}</p>
                <p className="text-xs text-muted-foreground">Typing...</p>
            </div>
        </div>
      <ScrollArea className="flex-grow p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-end gap-2",
                message.senderId === mockCurrentUser.id ? "justify-end" : "justify-start"
              )}
            >
              {message.senderId !== mockCurrentUser.id && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={mockOtherUser.avatarUrl} />
                  <AvatarFallback>{mockOtherUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "max-w-xs rounded-lg p-3 text-sm md:max-w-md",
                  message.senderId === mockCurrentUser.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                <p>{message.text}</p>
                 <p className={cn(
                    "text-xs mt-1",
                    message.senderId === mockCurrentUser.id
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                    )}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="relative">
          <Input 
            placeholder="Type a message..." 
            className="pr-24"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
            <Button type="button" variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button type="submit" variant="ghost" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
