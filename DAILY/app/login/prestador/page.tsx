"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Briefcase, ArrowLeft, Eye, EyeOff } from "lucide-react"

export default function PrestadorLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulando login
    setTimeout(() => {
      setLoading(false)
      alert("Login de Prestador - Funcionalidade em desenvolvimento")
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Voltar */}
        <Link href="/" className="flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>

        {/* Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          {/* Header */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-purple-500" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white text-center mb-2">Entrar como Prestador</h1>
          <p className="text-gray-400 text-center mb-8">Acesse sua conta e gerencie seus serviços</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Lembrar e Esqueceu */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300 hover:text-white cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 rounded bg-slate-700 border-slate-600 accent-purple-500"
                />
                Lembrar-me
              </label>
              <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                Esqueceu a senha?
              </Link>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white font-semibold py-3 rounded-lg transition-colors mt-6"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-slate-700"></div>
            <span className="px-3 text-sm text-gray-400">ou</span>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>

          {/* Links */}
          <p className="text-center text-gray-400 mb-4">
            Não tem conta?{" "}
            <Link
              href="/signup/prestador"
              className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              Cadastre-se
            </Link>
          </p>

          <p className="text-center text-sm text-gray-500">
            É um cliente?{" "}
            <Link href="/login/cliente" className="text-purple-400 hover:text-purple-300 transition-colors">
              Clique aqui
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
