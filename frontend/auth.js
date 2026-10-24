const API_BASE = (window.NOVACART_API_URL || "http://localhost:5000/api").replace(/\/$/, "");
const message = document.getElementById("authMessage");
async function submitAuth(form, endpoint) {
  message.textContent = "Please wait…";
  const data = Object.fromEntries(new FormData(form).entries());
  try {
    const response = await fetch(`${API_BASE}/auth/${endpoint}`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.message || "Request failed. Please try again.");
    if (result.token) localStorage.setItem("novacartToken", result.token);
    if (result.user) localStorage.setItem("novacartUser", JSON.stringify(result.user));
    message.textContent = endpoint === "register" ? "Account created! Opening your account…" : `Welcome${result.user?.name ? ", " + result.user.name : ""}! Login successful.`;
    if (endpoint === "register") setTimeout(() => location.href = "login.html", 1200);
    else setTimeout(() => location.href = "index.html", 900);
  } catch (error) {
    message.textContent = error.message || "Cannot connect to backend. Start the server and try again.";
  }
}
document.getElementById("loginForm")?.addEventListener("submit", e => { e.preventDefault(); submitAuth(e.currentTarget, "login"); });
document.getElementById("registerForm")?.addEventListener("submit", e => { e.preventDefault(); submitAuth(e.currentTarget, "register"); });
