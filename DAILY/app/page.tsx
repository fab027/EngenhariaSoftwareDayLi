import Link from "next/link"
import { Users, Briefcase } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Day<span className="text-purple-500">.li</span>
          </h1>
          <p className="text-xl text-white font-semibold mb-3">
            Conectando clientes e prestadores de forma segura, eficiente e confiável
          </p>
          <p className="text-gray-400 text-lg">
            Transformamos o mercado de serviços trazendo organização, segurança,
            <br />
            previsibilidade e confiança para todos
          </p>
        </div>

        {/* Login Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Cliente Card */}
          <Link href="/login/cliente">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white text-center mb-3">Entrar como Cliente</h2>
              <p className="text-gray-400 text-center mb-6">Encontre e contrate prestadores de serviços qualificados</p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-purple-500 mr-3">→</span>
                  Buscar prestadores por categoria
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-purple-500 mr-3">→</span>
                  Acompanhar serviços contratados
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-purple-500 mr-3">→</span>
                  Avaliar e recomendar serviços
                </li>
              </ul>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Entrar como Cliente
              </button>
            </div>
          </Link>

          {/* Prestador Card */}
          <Link href="/login/prestador">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Briefcase className="w-8 h-8 text-purple-500" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white text-center mb-3">Entrar como Prestador</h2>
              <p className="text-gray-400 text-center mb-6">Ofereça seus serviços e gerencie sua agenda profissional</p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-purple-500 mr-3">→</span>
                  Gerenciar agenda e serviços
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-purple-500 mr-3">→</span>
                  Controle financeiro completo
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-purple-500 mr-3">→</span>
                  Receber avaliações e crescer
                </li>
              </ul>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Entrar como Prestador
              </button>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
