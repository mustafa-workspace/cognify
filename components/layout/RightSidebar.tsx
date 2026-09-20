"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function RightSidebar() {
  const recommendations = [
    {
      id: 1,
      category: "NEUROPLASTICITY",
      title: "Synaptic Pruning in Adult Learning Environments",
      readTime: "12 min read",
      source: "Oxford University",
    },
    {
      id: 2,
      category: "EMOTIONAL INTELLIGENCE",
      title: "The Limbic Resonance: Why Leaders Fail to Connect",
      readTime: "8 min read",
      source: "Harvard Psych",
    },
  ];

  const highlights = [
    {
      id: 1,
      quote: '"The prefrontal cortex acts as a filter for stimuli..."',
      title: "Filtering Mechanisms in ADHD Diagnostics",
      source: "JOURNAL OF NEUROLOGY",
    },
    {
      id: 2,
      quote: '"Sleep deprivation alters cortisol patterns..."',
      title: "Circadian Disruptions and Memory Consolidation",
      source: "STANFORD SLEEP LAB",
    },
  ];

  const trendingTopics = [
    "Metacognition",
    "Deep Work",
    "Stoicism",
    "Behavioral Econ",
    "Grit",
  ];

  return (
    <aside className="right-sidebar py-6 px-2 w-full flex flex-col gap-6 sticky top-15">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-1">
        <Sparkles className="w-5 h-5 text-[#4A90E2]" strokeWidth={2.2} />
        <h2 className="text-xl font-bold text-[#4A90E2] font-serif tracking-tight">
          Smart Recommendations
        </h2>
      </div>

      {/* Section 1: BASED ON YOUR INTERESTS */}
      <div>
        <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3 block">
          Based on your interests
        </span>
        <div className="flex flex-col gap-3.5">
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4.5 border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col gap-1.5 group"
            >
              <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#4A90E2]">
                {item.category}
              </span>
              <h3 className="font-serif font-bold text-slate-800 text-[15px] leading-snug group-hover:text-[#4A90E2] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                {item.readTime} • {item.source}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: RELATED TO HIGHLIGHTS */}
      <div>
        <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3 block">
          Related to highlights
        </span>
        <div className="flex flex-col gap-3.5">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-r-2xl rounded-l-md border-l-4 border-l-[#4A90E2] border-t border-r border-b border-slate-100 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col gap-2 group"
            >
              <p className="text-slate-500 text-xs italic font-medium leading-relaxed">
                {item.quote}
              </p>
              <h3 className="font-serif font-bold text-slate-800 text-sm leading-tight group-hover:text-[#4A90E2] transition-colors">
                {item.title}
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                {item.source}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: TRENDING KNOWLEDGE */}
      <div>
        <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3 block">
          Trending knowledge
        </span>
        <div className="flex flex-wrap gap-2.5">
          {trendingTopics.map((topic, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-white rounded-full text-xs font-bold text-slate-700 border border-slate-200/80 shadow-xs hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}