"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function GuardianAdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
    } else {
      window.location.href =
        "/guardian-admin/dashboard";
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F8FA] px-6">

      <div className="w-full max-w-md rounded-[40px] bg-white p-10 shadow-xl">

        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[4px] text-[#355AA3]">
            GUARDIAN SHIPPING
          </p>

          <h1 className="text-4xl font-semibold text-slate-800">
            Admin Login
          </h1>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-800 outline-none focus:border-[#355AA3]"
              placeholder="admin@email.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-800 outline-none focus:border-[#355AA3]"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#355AA3] px-8 py-4 font-medium text-white transition hover:scale-[1.02]"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </form>
      </div>
    </main>
  );
}