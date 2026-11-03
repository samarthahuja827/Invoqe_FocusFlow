
import { useState } from "react";

const features = [
  { icon: "📚", title: "Organise Your Studies", desc: "Keep assignments, notes and important tasks organised in one place." },
  { icon: "⏱️", title: "Focus Timer", desc: "Break your study time into focused sessions with regular short breaks." },
  { icon: "📅", title: "Plan Your Day", desc: "Create a realistic daily schedule around classes and personal goals." },
  { icon: "📈", title: "Track Progress", desc: "See completed tasks and understand how consistently you're studying." },
  { icon: "🎯", title: "Set Study Goals", desc: "Turn bigger academic goals into smaller, achievable steps." },
  { icon: "🌿", title: "Build Consistency", desc: "Develop better study habits without putting unnecessary pressure on yourself." },
];

const reviews = [
  { name: "A college student", role: "Managing assignments", text: "Having my daily tasks in one place makes it easier to decide what to work on next." },
  { name: "A university student", role: "Preparing for exams", text: "Breaking study time into smaller sessions makes long study days feel manageable." },
  { name: "A self learner", role: "Learning new skills", text: "A simple planner helps me balance college work with learning outside the classroom." },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [completed, setCompleted] = useState([true, false, false]);

  const navLinks = [
    ["Home", "#home"],
    ["Features", "#features"],
    ["About", "#about"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  const doneCount = completed.filter(Boolean).length;

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-extrabold tracking-tight">
            Focus<span className="text-blue-600">Flow.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(([name, link]) => (
              <a key={name} href={link} className="text-sm text-slate-600 transition hover:text-blue-600">
                {name}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 md:block">
            Get Started →
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-slate-700 md:hidden" aria-label="Toggle navigation">
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-slate-200 bg-white px-6 py-6 md:hidden">
            {navLinks.map(([name, link]) => (
              <a key={name} href={link} onClick={() => setMenuOpen(false)} className="text-slate-600 hover:text-blue-600">
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative flex min-h-screen items-center bg-slate-50 px-6 pb-20 pt-32">
          <div className="absolute right-0 top-1/4 -z-0 h-80 w-80 rounded-full bg-blue-200/40 blur-[120px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                ✨ A simpler way to study
              </span>

              <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Study smarter.
                <span className="block text-blue-600">One day at a time.</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                College life comes with classes, assignments and countless deadlines. FocusFlow helps you organise your day, stay focused and make steady progress towards your goals.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#features" className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700">
                  Explore Features →
                </a>
                <a href="#about" className="rounded-full border border-slate-300 px-8 py-4 font-semibold transition hover:border-blue-500 hover:text-blue-600">
                  Learn More
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-500">
                <div><strong className="block text-2xl text-slate-800">01</strong>Plan your day</div>
                <div><strong className="block text-2xl text-slate-800">02</strong>Stay focused</div>
                <div><strong className="block text-2xl text-slate-800">03</strong>Track progress</div>
              </div>
            </div>

            {/* Interactive Study Planner */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">YOUR STUDY SPACE</p>
                  <h3 className="mt-1 text-2xl font-bold">Today's Planner</h3>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-2xl">📖</div>
              </div>

              <div className="mt-8 rounded-2xl bg-blue-50 p-5">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700">Daily progress</span>
                  <span className="font-bold text-blue-700">{Math.round(doneCount / 3 * 100)}%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-100">
                  <div className="h-full rounded-full bg-blue-600 transition-all duration-300" style={{ width: `${doneCount / 3 * 100}%` }} />
                </div>
                <p className="mt-3 text-xs text-slate-500">{doneCount} of 3 tasks completed. Keep going!</p>
              </div>

              <div className="mt-7">
                <h4 className="mb-4 font-semibold">Your priorities</h4>
                {["Complete DSA practice", "Revise college lectures", "Work on personal project"].map((task, i) => (
                  <button key={task} onClick={() => setCompleted(prev => prev.map((v, index) => index === i ? !v : v))} className="mb-3 flex w-full items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 text-left transition hover:border-blue-200">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full border text-sm ${completed[i] ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 text-transparent"}`}>
                      ✓
                    </span>
                    <span className={`text-sm ${completed[i] ? "text-slate-400 line-through" : "text-slate-700"}`}>{task}</span>
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm font-medium text-blue-800">💡 A small reminder</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">Consistency matters more than studying for hours without a break.</p>
              </div>
              <p className="mt-4 text-center text-xs text-slate-400">Try ticking the tasks to update your progress.</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24 bg-white px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="font-semibold uppercase tracking-widest text-blue-600">What you get</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Everything in one <span className="text-blue-600">place.</span>
              </h2>
              <p className="mt-5 leading-7 text-slate-500">
                Practical tools to make student life a little more organised and a lot less stressful.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(feature => (
                <div key={feature.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-6 py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-10 sm:p-14">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-700">A better study routine</p>
              <div className="mt-8 space-y-5">
                {["Set a clear goal", "Focus on one task", "Take a short break", "Review your progress"].map((item, i) => (
                  <div key={item} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">{i + 1}</span>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold uppercase tracking-widest text-blue-600">About FocusFlow</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Make room for what <span className="text-blue-600">matters.</span>
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                Being a student often means balancing lectures, assignments, exams and personal interests. It can be difficult to keep everything organised.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                FocusFlow is built around a simple idea: make planning easier, break big goals into smaller tasks and focus on making progress every day.
              </p>
              <a href="#contact" className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
                Get in Touch →
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="scroll-mt-24 bg-white px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="font-semibold uppercase tracking-widest text-blue-600">Student life</p>
              <h2 className="mt-4 text-4xl font-bold">Small changes make a difference.</h2>
              <p className="mt-4 text-sm text-slate-500">Sample feedback scenarios illustrating how students might use FocusFlow.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {reviews.map(review => (
                <div key={review.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/5">
                  <div className="text-2xl text-blue-600">“</div>
                  <p className="leading-8 text-slate-600">{review.text}</p>
                  <div className="mt-8 border-t border-slate-200 pt-5">
                    <p className="font-bold">{review.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 bg-blue-50 px-6 py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-widest text-blue-600">Get in touch</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Have something in mind?
            </h2>
            <p className="mt-5 text-slate-600">
              Have a question or suggestion? Send us a message.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">
              <input required type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500" />
              <input required type="email" placeholder="Your email address" className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500" />
              <textarea required rows="4" placeholder="Your message" className="w-full resize-none rounded-xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500" />
              <button type="submit" className="w-full rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700">
                Send Message →
              </button>
              {submitted && (
                <p role="status" className="text-center text-sm text-green-700">
                  Thank you! Your message has been received in this demo.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <a href="#home" className="text-2xl font-extrabold">
            Focus<span className="text-blue-600">Flow.</span>
          </a>
          <p className="text-sm text-slate-500">A little more focus, a little less stress.</p>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} FocusFlow.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
