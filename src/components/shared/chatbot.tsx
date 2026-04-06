"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"

interface Message {
  role: "user" | "bot"
  content: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [userMessage, setUserMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm CYDO AI. How can I help you today?" },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userMessage.trim() || isLoading) return

    const newMessage: Message = { role: "user", content: userMessage }
    setMessages((prev) => [...prev, newMessage])
    setUserMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, newMessage].map((m) => ({
            role: m.role === "user" ? "user" : "assistant",
            content: m.content,
          })),
        }),
      })

      const data = await response.json()
      if (data.text) {
        setMessages((prev) => [...prev, { role: "bot", content: data.text }])
      } else {
        throw new Error(data.error || "Failed to get response")
      }
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Sorry, I encountered an error. Please try again later." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[380px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 shadow-2xl backdrop-blur-2xl md:w-[420px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-600 p-5 text-white shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight">CYDO AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-medium text-white/80 uppercase tracking-widest">Active Now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="h-[450px] overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-white/10"
            >
              <div className="flex flex-col gap-5">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      msg.role === "user" ? "bg-purple-600" : "bg-white/5 border border-white/10"
                    }`}>
                      {msg.role === "user" ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-purple-400" />}
                    </div>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                        msg.role === "user"
                          ? "bg-purple-600 text-white rounded-tr-none font-medium"
                          : "bg-zinc-900 text-zinc-100 border border-white/5 rounded-tl-none"
                      }`}
                    >
                      <div className="markdown-content text-zinc-200">
                        <ReactMarkdown 
                          components={{
                            p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
                            ul: ({children}) => <ul className="mb-3 list-disc pl-4 space-y-1.5">{children}</ul>,
                            ol: ({children}) => <ol className="mb-3 list-decimal pl-4 space-y-1.5">{children}</ol>,
                            li: ({children}) => <li className="text-zinc-300 pl-1">{children}</li>,
                            strong: ({children}) => <strong className="text-white font-bold">{children}</strong>,
                            code: ({children}) => <code className="bg-white/10 px-1 rounded text-pink-400 font-mono text-[12px]">{children}</code>
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                      <Bot className="h-4 w-4 text-purple-400" />
                    </div>
                    <div className="flex gap-1.5 rounded-2xl bg-zinc-900 border border-white/5 px-4 py-3">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.2s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="How can we help?"
                className="flex-1 bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all font-sans"
              />
              <button
                type="submit"
                disabled={!userMessage.trim() || isLoading}
                className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/20 transition-all active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? <X className="w-6 h-6 relative z-10" /> : <MessageCircle className="w-7 h-7 relative z-10" />}
      </motion.button>
    </div>
  )
}
