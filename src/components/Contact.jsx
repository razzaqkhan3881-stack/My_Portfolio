export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'razzaqkhan3881@gmail.com',
      href: 'mailto:razzaqkhan3881@gmail.com',
      icon: '✉',
      color: 'from-[#6EE7B7] to-teal-400',
    },
    {
      label: 'Phone',
      value: '03467513244',
      href: 'tel:03467513244',
      icon: '☎',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      label: 'GitHub',
      value: 'github.com/RazzaqAhmad',
      href: 'https://github.com/RazzaqAhmad',
      icon: '⌨',
      color: 'from-purple-400 to-pink-400',
    },
    {
      label: 'Location',
      value: 'Mianwali, Punjab, Pakistan',
      href: null,
      icon: '◉',
      color: 'from-orange-400 to-red-400',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#6EE7B7] font-mono text-xs tracking-[0.3em] uppercase mb-3">Let's Talk</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Got a project in mind?
        </h2>
        <p className="text-gray-500 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
          I'm open to freelance work, full-time roles, and interesting collaborations. Drop a message.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contacts.map(({ label, value, href, icon, color }) => {
            const inner = (
              <div className="flex items-center gap-4 bg-[#0D0D14] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 group text-left w-full">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-lg shrink-0`}>
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-gray-600 font-mono mb-0.5">{label}</div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{value}</div>
                </div>
              </div>
            );

            return href ? (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        <a
          href="mailto:razzaqkhan3881@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#6EE7B7] text-[#0A0A0F] font-semibold rounded-xl hover:bg-[#4dd4a0] transition-colors duration-300 text-sm tracking-wide"
        >
          Send an Email
          <span>→</span>
        </a>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 text-gray-700 text-xs font-mono">
          Designed & built by Razzaq Ahmad · {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}