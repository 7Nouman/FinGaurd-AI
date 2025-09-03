import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Brain, Shield, Zap, AlertCircle } from 'lucide-react'
import { ResultCard, type ScanResult } from './ResultCard'

const DEMO_TEXT =
  'Guaranteed 200% return in 7 days! Join our Telegram group now for IPO allotments.'

const DEMO_RESPONSE: ScanResult = {
  risk: 'High',
  reason:
    'Message contains unrealistic return promises and references to unverified Telegram groups, which are common in Ponzi and IPO fraud schemes.',
}

export function FraudDetector() {
  const [text, setText] = React.useState('')
  const [result, setResult] = React.useState<ScanResult | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  async function handleScan() {
    if (!text.trim()) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch('http://localhost:8000/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      if (!res.ok) throw new Error(String(res.status))
      const data = (await res.json()) as ScanResult
      setResult(data)
    } catch (e) {
      setError('Unable to reach the backend. Please ensure it is running.')
    } finally {
      setLoading(false)
    }
  }

  async function handleDemo() {
    setText(DEMO_TEXT)
    setError(null)
    setResult(null)
    setLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setResult(DEMO_RESPONSE)
    setLoading(false)
  }

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-2xl space-y-8">
        <header className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/60 px-3 py-1 text-xs text-muted-foreground shadow-[var(--shadow-card)]">
            <Shield className="h-4 w-4" />
            FinGuard AI
          </div>
          <h1 className="text-4xl font-bold tracking-tight bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            FinGuard AI
          </h1>
          <p className="text-sm text-muted-foreground">
            Advanced fraud detection for financial messages
          </p>
        </header>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Brain className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Message Scanner</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste the suspicious message here..."
              aria-label="Message to scan"
            />
            <div className="flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={handleDemo}
                className="underline text-muted-foreground hover:text-foreground"
              >
                Load demo text
              </button>
              <div className="flex items-center gap-2">
                <Button onClick={handleScan} disabled={loading || !text.trim()}>
                  <span className="inline-flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    ⚡ Scan Message
                  </span>
                </Button>
                <Button variant="outline" onClick={handleDemo} disabled={loading}>
                  Demo
                </Button>
              </div>
            </div>

            {loading && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                Scanning...
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 text-sm text-danger">
                <AlertCircle className="h-4 w-4" /> {error}
              </div>
            )}
          </CardContent>
        </Card>

        <section aria-live="polite">
          {result && <ResultCard result={result} />}
        </section>

        <footer>
          <Card className="bg-card/60">
            <CardContent className="text-center text-xs text-muted-foreground">
              <div className="pt-6">Powered by FastAPI backend with HuggingFace transformers and rule-based analysis</div>
              <div className="mt-1">
                Endpoint: <span className="text-foreground">http://localhost:8000/scan</span>
              </div>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  )
}


