"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { LogOut, RefreshCw, Trash2, ShieldCheck } from "lucide-react";

type Enquiry = { _id: string; name: string; email: string; phone?: string; service: string; message: string; status: "new" | "contacted" | "closed"; createdAt: string };
const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState<Enquiry[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const load = useCallback(async (authToken: string) => {
    setBusy(true); setError("");
    try {
      const response = await fetch(`${API}/api/enquiries`, { headers: { Authorization: `Bearer ${authToken}` } });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Could not load enquiries.");
      setItems(data.enquiries || []);
    } catch (e) { setError(e instanceof Error ? e.message : "Request failed."); }
    finally { setBusy(false); }
  }, []);

  useEffect(() => {
    const saved = window.sessionStorage.getItem("NAVRIVA_admin_token");
    if (saved) { setToken(saved); void load(saved); }
  }, [load]);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setError("");
    try {
      const response = await fetch(`${API}/api/auth/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed.");
      window.sessionStorage.setItem("NAVRIVA_admin_token", data.token);
      setToken(data.token); setPassword(""); await load(data.token);
    } catch (e) { setError(e instanceof Error ? e.message : "Login failed."); }
    finally { setBusy(false); }
  }

  async function updateStatus(id: string, status: Enquiry["status"]) {
    try {
      const response = await fetch(`${API}/api/enquiries/${id}/status`, { method: "PATCH", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify({ status }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Update failed.");
      setItems(current => current.map(item => item._id === id ? data.enquiry : item));
    } catch (e) { setError(e instanceof Error ? e.message : "Update failed."); }
  }

  async function remove(id: string) {
    if (!window.confirm("Delete this enquiry permanently?")) return;
    try {
      const response = await fetch(`${API}/api/enquiries/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Delete failed.");
      setItems(current => current.filter(item => item._id !== id));
    } catch (e) { setError(e instanceof Error ? e.message : "Delete failed."); }
  }

  function logout() { window.sessionStorage.removeItem("NAVRIVA_admin_token"); setToken(""); setItems([]); }

  return <main className="admin-page"><div className="admin-shell"><header className="admin-header"><Link href="/" className="admin-brand"><span>NV</span><b>NAVRIVA <small>TECHNOLOGIES</small></b></Link>{token && <button className="admin-logout" onClick={logout}><LogOut size={16}/> Sign out</button>}</header>
    {!token ? <form className="admin-login" onSubmit={login}><div className="admin-lock"><ShieldCheck size={25}/></div><p className="admin-kicker">SECURE ADMIN ACCESS</p><h1>Welcome back.</h1><p className="admin-subtitle">Sign in to manage website enquiries.</p><label>Admin email<input type="email" required autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@yourdomain.com"/></label><label>Password<input type="password" required autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Your password"/></label>{error && <p className="admin-error">{error}</p>}<button className="admin-primary" disabled={busy}>{busy ? "Signing in..." : "Sign in"}</button></form> : <section className="admin-content"><div className="admin-title-row"><div><p className="admin-kicker">CLIENT INBOX</p><h1>Website enquiries</h1><p className="admin-subtitle">Review and manage messages submitted through your website.</p></div><button className="admin-refresh" onClick={() => load(token)} disabled={busy}><RefreshCw size={16}/> Refresh</button></div>{error && <p className="admin-error">{error}</p>}<div className="admin-stats"><div><span>Total enquiries</span><b>{items.length}</b></div><div><span>New</span><b>{items.filter(x => x.status === "new").length}</b></div><div><span>Contacted</span><b>{items.filter(x => x.status === "contacted").length}</b></div></div>{busy && items.length === 0 ? <p className="admin-empty">Loading enquiries...</p> : items.length === 0 ? <p className="admin-empty">No enquiries yet. New website submissions will appear here.</p> : <div className="enquiry-list">{items.map(item => <article className="enquiry-card" key={item._id}><div className="enquiry-card-top"><div><h2>{item.name}</h2><span>{new Date(item.createdAt).toLocaleString()}</span></div><select aria-label={`Status for ${item.name}`} value={item.status} onChange={e => updateStatus(item._id, e.target.value as Enquiry["status"])}><option value="new">New</option><option value="contacted">Contacted</option><option value="closed">Closed</option></select></div><div className="enquiry-meta"><a href={`mailto:${item.email}`}>{item.email}</a>{item.phone && <a href={`tel:${item.phone}`}>{item.phone}</a>}<span>{item.service}</span></div><p>{item.message}</p><div className="enquiry-actions"><a href={`mailto:${item.email}?subject=${encodeURIComponent("Your enquiry to NAVRIVA TECHNOLOGY")}`}>Reply by email ↗</a><button onClick={() => remove(item._id)}><Trash2 size={14}/> Delete</button></div></article>)}</div>}</section>}
  </div></main>;
}
