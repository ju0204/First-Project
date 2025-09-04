// /api/contact.js
import { Resend } from 'resend';

export default async function handler(req, res) {
  // 허용 메서드 제한
  if (req.method === 'OPTIONS') {
    // (서브도메인이 다르면 CORS 필요. 같은 Vercel 프로젝트면 보통 불필요)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }
  if (req.method !== 'POST') return res.status(405).end();

  // JSON 파싱 (Vercel은 보통 req.body가 객체지만, 안전하게 처리)
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const { name, email, phone, subject, message, agree, honeypot } = body;

  // 간단 검증 + 봇(Honeypot) 차단
  if (honeypot) return res.status(200).json({ ok: true }); // 봇이면 조용히 성공처럼
  if (!agree) return res.status(400).json({ error: 'privacy_required' });
  if (!name || !email || !subject || !message) return res.status(400).json({ error: 'missing_fields' });

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.CONTACT_FROM,         // ex) 'Contact <noreply@yourdomain.com>'
      to: process.env.CONTACT_TO,             // ex) 'contact@yourdomain.com'
      replyTo: email,                         // “답장” 누르면 문의자에게
      subject: `[문의] ${subject} — ${name}`,
      text: [
        `보낸사람: ${name}`,
        `이메일: ${email}`,
        `전화: ${phone || '-'}`,
        '',
        message
      ].join('\n'),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] send_failed:', err);
    return res.status(500).json({ error: 'send_failed' });
  }
}
