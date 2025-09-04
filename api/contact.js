// /api/contact.js (CommonJS)
const { Resend } = require('resend');

module.exports = async (req, res) => {
  console.log('[contact] method =', req.method, 'url =', req.url); // ← 추가

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, note: 'Use POST to send email' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); }
    catch { return res.status(400).json({ ok:false, error:'invalid_json' }); }
  }

  const { name, email, phone, subject, message, agree, honeypot, company } = body || {};
  if (honeypot) return res.status(200).json({ ok: true });
  if (!agree || !name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'invalid_input' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const esc = (s='') => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const html = `
    <h2>웹 문의 도착</h2>
    <ul>
      <li><b>이름</b>: ${esc(name)}</li>
      <li><b>이메일</b>: ${esc(email)}</li>
      <li><b>전화</b>: ${esc(phone || '')}</li>
      <li><b>회사</b>: ${esc(company || '')}</li>
      <li><b>제목</b>: ${esc(subject)}</li>
    </ul>
    <pre style="white-space:pre-wrap;font-family:inherit;border:1px solid #eee;padding:12px;border-radius:8px;">${esc(message)}</pre>
  `;

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      reply_to: `${name} <${email}>`,
      subject: `[문의] ${subject} — ${name}`,
      text: [
        `보낸사람: ${name}`,
        `이메일: ${email}`,
        `전화: ${phone || '-'}`,
        `회사: ${company || '-'}`,
        '',
        message
      ].join('\n'),
      html
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] send_failed:', err);
    return res.status(500).json({ ok: false, error: 'send_failed' });
  }
};
