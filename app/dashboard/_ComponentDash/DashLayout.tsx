"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, GraduationCap, LayoutDashboard, Menu, Settings, Users, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-blue-900/90 to-purple-900/90 backdrop-blur-sm">
      {/* Mobile sidebar toggle */}
      <div className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center gap-2 bg-gradient-to-r from-black via-blue-900/90 to-purple-900/90 backdrop-blur-sm border-b border-purple-500/20 px-4 sm:px-6 lg:hidden">
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-blue-400" />
          <span className="font-semibold text-white">EduAdmin</span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-black/50 backdrop-blur-sm border-r border-purple-500/20 transition-transform duration-200 ease-in-out lg:translate-x-0 lg:z-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center gap-2 border-b border-purple-500/20 mt-24 px-6">
          <GraduationCap className="h-6 w-6 text-blue-400" />
          <span className="font-semibold text-white">EduAdmin</span>
        </div>
        <nav className="space-y-1 px-2 py-4">
          <NavItem href="/dashboard" icon={LayoutDashboard} label="Dashboard" active />
          <NavItem href="/dashboard/courses" icon={BookOpen} label="Courses" />
          <NavItem href="/dashboard/students" icon={Users} label="Students" />
          <NavItem href="/dashboard/settings" icon={Settings} label="Settings" />
        </nav>
      </div>

      {/* Main content */}
      <div className={cn("flex min-h-screen flex-col lg:pl-64 pt-16 lg:pt-0")}>
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ElementType
  label: string
  active?: boolean
}

function NavItem({ href, icon: Icon, label, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
        active ? "bg-blue-600/70 text-white" : "text-white/80 hover:bg-blue-900/50 hover:text-white",
      )}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  )
}

