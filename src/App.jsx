import { useState } from "react";

const schedule = [
  {
    day: "MON",
    label: "Monday",
    theme: "dsa",
    focus: "Python DSA",
    emoji: "🧠",
    sessions: [
      { time: "9:00 – 10:30 AM", type: "dsa", task: "NeetCode Python playlist: Arrays deep dive + Python implementation", link: "https://neetcode.io" },
      { time: "10:45 – 11:30 AM", type: "dsa", task: "LeetCode: Solve 2 Easy Python array problems", link: "https://leetcode.com/problemset/?difficulty=EASY&topicSlugs=array" },
      { time: "4:00 – 5:00 PM", type: "review", task: "Re-code today's problems from scratch in Python (no hints)", link: null },
    ],
    tip: "Write code by hand first, then type it. Forces actual thinking.",
  },
  {
    day: "TUE",
    label: "Tuesday",
    theme: "agent",
    focus: "AI Agents",
    emoji: "🤖",
    sessions: [
      { time: "9:00 – 10:00 AM", type: "agent", task: "Hugging Face AI Agents Course — Unit 1: What is an Agent?", link: "https://huggingface.co/learn/agents-course/en/unit1/introduction" },
      { time: "10:15 – 11:30 AM", type: "agent", task: "Code along: Call Groq/Claude API manually, print agent response", link: "https://console.groq.com/docs/quickstart" },
      { time: "4:00 – 5:00 PM", type: "review", task: "Write 5-line summary of what you learnt. No notes, from memory.", link: null },
    ],
    tip: "Don't just watch — copy the code into your own file and break it intentionally.",
  },
  {
    day: "WED",
    label: "Wednesday",
    theme: "dsa",
    focus: "Python DSA",
    emoji: "🧠",
    sessions: [
      { time: "9:00 – 10:30 AM", type: "dsa", task: "GeeksforGeeks Python DSA: Strings + hashing tutorials, then code with Python dicts", link: "https://www.geeksforgeeks.org/python-programming-language/" },
      { time: "10:45 – 11:30 AM", type: "dsa", task: "LeetCode: 2 Easy/Medium hash table problems in Python", link: "https://leetcode.com/problemset/?difficulty=EASY&topicSlugs=hash-table" },
      { time: "4:00 – 5:00 PM", type: "review", task: "NeetCode video for 1 problem you struggled with", link: "https://neetcode.io" },
    ],
    tip: "Stuck for 20+ mins? Watch NeetCode's approach — then re-solve it yourself.",
  },
  {
    day: "THU",
    label: "Thursday",
    theme: "agent",
    focus: "AI Agents",
    emoji: "🤖",
    sessions: [
      { time: "9:00 – 10:00 AM", type: "agent", task: "HF Agents Course — Unit 2: Tools & Tool Calling", link: "https://huggingface.co/learn/agents-course/en/unit2/introduction" },
      { time: "10:15 – 11:30 AM", type: "agent", task: "Build: Agent with 1 tool (calculator or web search)", link: "https://python.langchain.com/docs/tutorials/agents/" },
      { time: "4:00 – 5:00 PM", type: "review", task: "Push code to GitHub with a good README", link: "https://github.com" },
    ],
    tip: "Every agent you build, push to GitHub. This is your placement portfolio.",
  },
  {
    day: "FRI",
    label: "Friday",
    theme: "dsa",
    focus: "Python DSA",
    emoji: "🧠",
    sessions: [
      { time: "9:00 – 10:30 AM", type: "dsa", task: "freeCodeCamp Python DSA: Recursion + backtracking practice in Python", link: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
      { time: "10:45 – 11:30 AM", type: "dsa", task: "LeetCode: Solve 2 recursion/backtracking problems in Python", link: "https://leetcode.com/problemset/?topicSlugs=recursion" },
      { time: "4:00 – 5:00 PM", type: "review", task: "Weekly DSA: Revisit 2 problems you got wrong this week", link: null },
    ],
    tip: "Recursion is the hardest mental shift. Draw the call tree on paper every time.",
  },
  {
    day: "SAT",
    label: "Saturday",
    theme: "agent",
    focus: "AI Agents",
    emoji: "🤖",
    sessions: [
      { time: "10:00 – 12:00 PM", type: "agent", task: "Build Day: Extend your agent — add memory or 2nd tool", link: "https://python.langchain.com/docs/how_to/agent_trajectory/" },
      { time: "2:00 – 3:00 PM", type: "agent", task: "Read: DeepLearning.AI 'AI Agents in LangGraph' (free)", link: "https://learn.deeplearning.ai/courses/ai-agents-in-langgraph" },
      { time: "3:00 – 3:30 PM", type: "review", task: "Update your project README + GitHub push", link: null },
    ],
    tip: "Saturday is build day. Don't watch tutorials — build something broken and fix it.",
  },
  {
    day: "SUN",
    label: "Sunday",
    theme: "review",
    focus: "Review & Rest",
    emoji: "🔄",
    sessions: [
      { time: "10:00 – 10:45 AM", type: "review", task: "Weekly DSA revision: redo 3 problems without hints", link: "https://leetcode.com" },
      { time: "11:00 – 11:30 AM", type: "review", task: "Journal: What did I build this week? What's next?", link: null },
      { time: "Rest of day", type: "free", task: "Completely free — guilt-free rest", link: null },
    ],
    tip: "Sunday review compounds over weeks. Skip it and you'll re-learn the same things.",
  },
];

const resources = [
  { category: "DSA", name: "NeetCode.io", url: "https://neetcode.io", desc: "Python-first LeetCode walkthroughs and learning lists" },
  { category: "DSA", name: "GeeksforGeeks Python DSA", url: "https://www.geeksforgeeks.org/python-programming-language/", desc: "Topic-based Python DSA tutorials and examples" },
  { category: "DSA", name: "InterviewBit Python", url: "https://www.interviewbit.com/python/", desc: "Guided DSA practice with Python-focused explanations" },
  { category: "DSA", name: "freeCodeCamp Python DSA", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/", desc: "Free Python DSA and recursion practice path" },
  { category: "DSA", name: "Python Data Structures docs", url: "https://docs.python.org/3/tutorial/datastructures.html", desc: "Official Python docs for built-in data structures" },
  { category: "DSA", name: "Visualgo", url: "https://visualgo.net", desc: "Visualize algorithms and data structures step-by-step" },
  { category: "DSA", name: "LeetCode", url: "https://leetcode.com", desc: "Primary problem practice platform" },
  { category: "Agents", name: "HF Agents Course", url: "https://huggingface.co/learn/agents-course", desc: "Free, structured AI agents course" },
  { category: "Agents", name: "DeepLearning.AI LangGraph", url: "https://learn.deeplearning.ai/courses/ai-agents-in-langgraph", desc: "Free short course — agents with memory & tools" },
  { category: "Agents", name: "Groq Console", url: "https://console.groq.com", desc: "Free fast LLM API for your agent projects" },
  { category: "Productivity", name: "Pomofocus.io", url: "https://pomofocus.io", desc: "Pomodoro timer — 25 min work blocks" },
  { category: "Productivity", name: "GitHub", url: "https://github.com", desc: "Push every project, every day" },
];

const typeColors = {
  dsa: { bg: "#1a2744", border: "#3b6fd4", dot: "#4f8ef7", text: "#93bbff" },
  agent: { bg: "#1a2a1a", border: "#3b8c3b", dot: "#4db34d", text: "#90d490" },
  review: { bg: "#2a2215", border: "#8c6b20", dot: "#d4a040", text: "#f0c97a" },
  free: { bg: "#1e1e2e", border: "#5b5b8c", dot: "#8888cc", text: "#b0b0e8" },
};

const themeStyle = {
  dsa: { accent: "#4f8ef7", glow: "rgba(79,142,247,0.15)", badge: "#1a2744", badgeText: "#93bbff" },
  agent: { accent: "#4db34d", glow: "rgba(77,179,77,0.15)", badge: "#1a2a1a", badgeText: "#90d490" },
  review: { accent: "#d4a040", glow: "rgba(212,160,64,0.12)", badge: "#2a2215", badgeText: "#f0c97a" },
};

const catColors = { DSA: "#4f8ef7", Agents: "#4db34d", Productivity: "#d4a040" };

export default function WeeklySchedule() {
  const [activeDay, setActiveDay] = useState(0);
  const [tab, setTab] = useState("schedule");
  const [checkedSessions, setCheckedSessions] = useState({});

  const day = schedule[activeDay];
  const ts = themeStyle[day.theme];

  const toggleCheck = (key) => {
    setCheckedSessions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalSessions = schedule.reduce((a, d) => a + d.sessions.filter(s => s.type !== "free").length, 0);
  const doneCount = Object.values(checkedSessions).filter(Boolean).length;
  const pct = Math.round((doneCount / totalSessions) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a12",
      fontFamily: "'DM Mono', 'Fira Mono', 'Courier New', monospace",
      color: "#d0d0e8",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; } 
        ::-webkit-scrollbar-track { background: #0a0a12; }
        ::-webkit-scrollbar-thumb { background: #2a2a40; border-radius: 2px; }
        .day-btn { transition: all 0.2s; cursor: pointer; border: none; background: none; }
        .day-btn:hover { transform: translateY(-2px); }
        .session-card { transition: all 0.18s; }
        .session-card:hover { transform: translateX(3px); }
        .res-card { transition: all 0.18s; cursor: pointer; }
        .res-card:hover { transform: translateY(-2px); }
        .tab-btn { transition: all 0.15s; cursor: pointer; border: none; }
        .check-box { transition: all 0.15s; cursor: pointer; }
        .check-box:hover { transform: scale(1.1); }
        .link-btn { transition: all 0.15s; cursor: pointer; text-decoration: none; }
        .link-btn:hover { opacity: 0.75; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.3s ease forwards; }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
      `}</style>

      {/* Header */}
      <div style={{ background: "#0e0e1a", borderBottom: "1px solid #1e1e30", padding: "24px 28px 20px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.5px" }}>
              SUMMER GRIND
            </div>
            <div style={{ fontSize: 11, color: "#555570", marginTop: 3, letterSpacing: "0.08em" }}>
              PYTHON DSA + AI AGENTS · 6 WEEKS
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "#555570", marginBottom: 5, letterSpacing: "0.06em" }}>WEEKLY PROGRESS</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 90, height: 5, background: "#1a1a2a", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg, #4f8ef7, #4db34d)", borderRadius: 3, transition: "width 0.4s" }} />
              </div>
              <span style={{ fontSize: 12, color: "#8888aa", fontWeight: 500 }}>{pct}%</span>
            </div>
            <div style={{ fontSize: 10, color: "#3a3a55", marginTop: 3 }}>{doneCount}/{totalSessions} sessions done</div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginTop: 18 }}>
          {["schedule", "resources"].map(t => (
            <button key={t} className="tab-btn" onClick={() => setTab(t)} style={{
              padding: "6px 14px", borderRadius: 6, fontSize: 11,
              background: tab === t ? "#1e1e30" : "transparent",
              color: tab === t ? "#d0d0e8" : "#555570",
              border: tab === t ? "1px solid #2e2e48" : "1px solid transparent",
              letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "inherit"
            }}>{t}</button>
          ))}
        </div>
      </div>

      {tab === "schedule" && (
        <div className="fade-in">
          {/* Day selector */}
          <div style={{ padding: "16px 28px", display: "flex", gap: 8, overflowX: "auto", borderBottom: "1px solid #1a1a28" }}>
            {schedule.map((d, i) => {
              const active = i === activeDay;
              const ts2 = themeStyle[d.theme];
              return (
                <button key={d.day} className="day-btn" onClick={() => setActiveDay(i)} style={{
                  padding: "8px 14px", borderRadius: 8, minWidth: 60, textAlign: "center",
                  background: active ? ts2.badge : "#0e0e1a",
                  border: `1px solid ${active ? ts2.accent : "#1e1e30"}`,
                  boxShadow: active ? `0 0 14px ${ts2.glow}` : "none",
                  fontFamily: "inherit",
                }}>
                  <div style={{ fontSize: 10, color: active ? ts2.accent : "#444460", letterSpacing: "0.08em", fontWeight: 500 }}>{d.day}</div>
                  <div style={{ fontSize: 16, marginTop: 2 }}>{d.emoji}</div>
                </button>
              );
            })}
          </div>

          {/* Day content */}
          <div style={{ padding: "20px 28px" }} key={activeDay}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: 22 }}>{day.emoji}</span>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: "#ffffff" }}>{day.label}</div>
                <div style={{ fontSize: 11, color: ts.accent, letterSpacing: "0.08em", marginTop: 1 }}>{day.focus.toUpperCase()}</div>
              </div>
              <div style={{ marginLeft: "auto", background: ts.badge, border: `1px solid ${ts.accent}`, borderRadius: 20, padding: "3px 12px" }}>
                <span style={{ fontSize: 10, color: ts.badgeText, letterSpacing: "0.08em" }}>{day.sessions.length} SESSIONS</span>
              </div>
            </div>

            {/* Tip */}
            <div style={{ background: "#0e0e1a", border: `1px solid #1e1e30`, borderLeft: `3px solid ${ts.accent}`, borderRadius: "0 8px 8px 0", padding: "10px 14px", marginBottom: 18, marginTop: 12 }}>
              <span style={{ fontSize: 10, color: ts.accent, letterSpacing: "0.1em" }}>💡 TIP  </span>
              <span style={{ fontSize: 12, color: "#9090b8" }}>{day.tip}</span>
            </div>

            {/* Sessions */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {day.sessions.map((s, si) => {
                const c = typeColors[s.type];
                const key = `${activeDay}-${si}`;
                const done = checkedSessions[key];
                return (
                  <div key={si} className="session-card" style={{
                    background: done ? "#0e0e1a" : c.bg,
                    border: `1px solid ${done ? "#1e1e30" : c.border}`,
                    borderRadius: 10, padding: "12px 14px",
                    opacity: done ? 0.55 : 1,
                    display: "flex", gap: 12, alignItems: "flex-start",
                  }}>
                    {s.type !== "free" && (
                      <div className="check-box" onClick={() => toggleCheck(key)} style={{
                        width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${done ? c.dot : c.border}`,
                        background: done ? c.dot : "transparent", flexShrink: 0, marginTop: 1,
                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff"
                      }}>{done ? "✓" : ""}</div>
                    )}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: c.dot, flexShrink: 0 }} />
                        <span style={{ fontSize: 11, color: c.text, letterSpacing: "0.04em" }}>{s.time}</span>
                      </div>
                      <div style={{ fontSize: 13, color: done ? "#3a3a55" : "#c0c0e0", marginTop: 6, lineHeight: 1.5 }}>{s.task}</div>
                      {s.link && (
                        <a href={s.link} target="_blank" rel="noopener noreferrer" className="link-btn" style={{
                          display: "inline-flex", alignItems: "center", gap: 5, marginTop: 7,
                          fontSize: 10, color: c.dot, letterSpacing: "0.06em",
                          background: `${c.bg}cc`, border: `1px solid ${c.border}`, borderRadius: 5, padding: "3px 8px"
                        }}>
                          ↗ OPEN RESOURCE
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {tab === "resources" && (
        <div className="fade-in" style={{ padding: "20px 28px" }}>
          <div style={{ fontSize: 11, color: "#555570", letterSpacing: "0.1em", marginBottom: 18 }}>ALL RESOURCES · CURATED</div>
          {["DSA", "Agents", "Productivity"].map(cat => (
            <div key={cat} style={{ marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: catColors[cat] }} />
                <span style={{ fontSize: 11, color: catColors[cat], letterSpacing: "0.1em", fontWeight: 500 }}>{cat.toUpperCase()}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {resources.filter(r => r.category === cat).map((r, i) => (
                  <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="res-card" style={{
                    background: "#0e0e1a", border: "1px solid #1e1e30",
                    borderLeft: `3px solid ${catColors[cat]}`, borderRadius: "0 8px 8px 0",
                    padding: "12px 14px", textDecoration: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10
                  }}>
                    <div>
                      <div style={{ fontSize: 13, color: "#d0d0e8", fontWeight: 500 }}>{r.name}</div>
                      <div style={{ fontSize: 11, color: "#555570", marginTop: 3 }}>{r.desc}</div>
                    </div>
                    <span style={{ fontSize: 14, color: catColors[cat], flexShrink: 0 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Legend */}
          <div style={{ marginTop: 28, background: "#0e0e1a", border: "1px solid #1a1a28", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontSize: 10, color: "#444460", letterSpacing: "0.1em", marginBottom: 10 }}>SESSION TYPES</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {Object.entries(typeColors).map(([type, c]) => (
                <div key={type} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: c.dot }} />
                  <span style={{ fontSize: 11, color: "#666688", textTransform: "capitalize" }}>{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ padding: "16px 28px", borderTop: "1px solid #1a1a28", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 10, color: "#333350", letterSpacing: "0.06em" }}>CHECK OFF SESSIONS AS YOU COMPLETE THEM</div>
        <div style={{ fontSize: 10, color: "#333350" }}>TARGET: 60–70% / WEEK</div>
      </div>
    </div>
  );
}