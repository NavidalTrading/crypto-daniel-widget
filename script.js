
function sendMessage() {
  const input = document.querySelector("#chat-input input");
  const msg = input.value.trim();
  if (!msg) return;
  const chatBox = document.querySelector("#chat-box");
  const userMsg = document.createElement("div");
  userMsg.className = "msg user";
  userMsg.textContent = msg;
  chatBox.appendChild(userMsg);

  const reply = document.createElement("div");
  reply.className = "msg bot";
  reply.textContent = "🔁 Crypto Daniel will respond shortly...";
  chatBox.appendChild(reply);
  input.value = "";
}
