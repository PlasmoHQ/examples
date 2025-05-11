import { useRef, useState } from "react"

const BACKEND_URL = process.env.PLASMO_PUBLIC_BACKEND_URL

const initialForm = {
  name: "",
  email: "",
  cellphone: "",
  taxId: "",
  amount: 1,
  description: "PIX payment via AbacatePay"
}

function IndexPopup() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [payment, setPayment] = useState<any>(null)
  const [status, setStatus] = useState<string>("")
  const pollingRef = useRef<NodeJS.Timeout | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, amount: Number(e.target.value) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setPayment(null)
    setStatus("")
    try {
      const res = await fetch(`${BACKEND_URL}/api/create-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: form.amount,
          expiresIn: 300,
          description: form.description,
          customer: {
            name: form.name,
            cellphone: form.cellphone,
            email: form.email,
            taxId: form.taxId
          }
        })
      })
      if (!res.ok) {
        console.log(res)
        throw new Error("Error creating payment")
      }
      const data = await res.json()
      setPayment(data.data)
      setStatus(data.data.status)
      startPolling(data.data.id)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const startPolling = (id: string) => {
    if (pollingRef.current) clearInterval(pollingRef.current)
    pollingRef.current = setInterval(async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/check-status/${id}`)
        const data = await res.json()
        setStatus(data.status || data.data?.status)
        if (data.status === "paid" || data.status === "expired") {
          if (pollingRef.current) clearInterval(pollingRef.current)
        }
      } catch (err) {
        // ignore polling errors
      }
    }, 3000)
  }

  const handleSimulate = async () => {
    if (!payment?.id) return
    setLoading(true)
    setError("")
    try {
      const res = await fetch(`${BACKEND_URL}/api/simulate-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: payment.id })
      })
      if (!res.ok) throw new Error("Error at simulate payment")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: 16, minWidth: 320, fontFamily: "sans-serif" }}>
      <h2>AbacatePay PIX Example</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="cellphone"
          placeholder="Cellphone"
          value={form.cellphone}
          onChange={handleChange}
          required
        />
        <input
          name="taxId"
          placeholder="CPF (Brazilian Tax ID)"
          value={form.taxId}
          onChange={handleChange}
          required
        />
        <input
          name="amount"
          type="number"
          min={1}
          placeholder="Amount (BRL)"
          value={form.amount}
          onChange={handleNumber}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading} style={{ marginTop: 8 }}>
          {loading ? "Processing..." : "Generate PIX QR Code"}
        </button>
      </form>
      {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
      {payment && (
        <div style={{ marginTop: 16 }}>
          <div>
            Status: <b>{status || payment.status || "PENDING"}</b>
          </div>
          {payment.brCode && (
            <div style={{ margin: "16px 0" }}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(payment.brCode)}&size=200x200`}
                alt="PIX QR Code"
              />
              <div
                style={{ wordBreak: "break-all", fontSize: 12, marginTop: 8 }}>
                {payment.brCode}
              </div>
            </div>
          )}
          {status !== "paid" && status !== "expired" && (
            <button
              onClick={handleSimulate}
              disabled={loading}
              style={{ marginTop: 8 }}>
              Simulate Payment
            </button>
          )}
        </div>
      )}
      <div style={{ marginTop: 24, fontSize: 12, color: "#888" }}>
        <a
          href="https://docs.abacatepay.com/pages/introduction"
          target="_blank"
          rel="noreferrer">
          AbacatePay Docs
        </a>
      </div>
    </div>
  )
}

export default IndexPopup
