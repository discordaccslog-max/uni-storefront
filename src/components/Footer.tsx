import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="mt-16 py-10 px-6 text-center"
      style={{ background: '#0f0f10', borderTop: '1px solid rgba(212,175,55,0.15)' }}
    >
      <div className="max-w-site mx-auto">
        <div className="font-heading text-2xl font-bold tracking-widest text-[#FFD976] mb-4">
          UNI
        </div>

        <nav className="flex flex-wrap justify-center gap-5 mb-6">
          {[
            { label: 'Home', href: '/' },
            { label: 'Singles', href: '/collections/single' },
            { label: 'Bulk Orders', href: '/collections/bulk' },
            { label: 'All Products', href: '/products' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#A5A7AC] hover:text-[#FFD976] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-[#555] leading-relaxed">
          © {new Date().getFullYear()} UNI. All rights reserved.
          <br />
          Licensed vendor. Based in California.
          <br className="hidden sm:block" />
          <span className="block mt-1">
            By browsing this catalog you confirm you are 21+ and comply with all local regulations.
          </span>
        </p>
      </div>
    </footer>
  )
}
