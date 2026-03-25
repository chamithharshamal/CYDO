"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Sparkles } from "lucide-react"

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
   <></>
  )
}
