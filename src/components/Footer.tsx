export default function Footer() {
  return (
    <footer
      style={{
        background: '#0f0f10',
        borderTop: '1px solid rgba(212,175,55,0.15)',
        padding: '32px 24px',
        textAlign: 'center',
      }}
    >
      <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.6 }}>
        © {new Date().getFullYear()} UNI. All rights reserved.
        <br />
        Licensed vendor. Based in California.
      </p>
    </footer>
  )
}
