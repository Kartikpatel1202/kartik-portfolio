"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, Brain } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Experience 1 */}
          <Card className="border-0 shadow-xl shadow-pink-500/10 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 group h-full bg-gradient-to-br from-white via-pink-50/50 to-purple-50/50 backdrop-blur">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg shadow-pink-500/30">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Artificial Intelligence Intern
              </CardTitle>
              <CardDescription className="text-base">
                Codec Technologies India · Internship
              </CardDescription>
              <p className="text-sm text-gray-500">Jul 2025 – Aug 2025 · 2 mos (Remote)</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ Completed an AICTE & ICAC approved internship focused on applied AI/ML techniques.</li>
                <li>✅ Developed Customer Churn Prediction (80%+ accuracy) and Weather Data Analysis projects.</li>
                <li>✅ Built and deployed an interactive Streamlit app for real-time churn prediction.</li>
                <li>✅ Gained end-to-end ML workflow experience including preprocessing, training, evaluation, deployment.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Experience 2 */}
          <Card className="border-0 shadow-xl shadow-indigo-500/10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 group h-full bg-gradient-to-br from-white via-indigo-50/50 to-blue-50/50 backdrop-blur">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-400 to-blue-500 shadow-lg shadow-indigo-500/30">
                  <Brain className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                SRIP Research Intern
              </CardTitle>
              <CardDescription className="text-base">
                Vellore Institute of Technology · Internship
              </CardDescription>
              <p className="text-sm text-gray-500">May 2025 – Jun 2025 · 2 mos · Chennai, India</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ Worked as a Model Impact Analyst focusing on Bloom’s Taxonomy-based question generation.</li>
                <li>✅ Used FLAN-T5 and Mistral-7B-Instruct, fine-tuned on curated educational datasets.</li>
                <li>✅ Built model training & inference pipelines in Google Colab, deployed models to Hugging Face Hub.</li>
                <li>✅ Conducted evaluation across Bloom’s levels, proposed dataset enrichment & prompt engineering strategies.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
