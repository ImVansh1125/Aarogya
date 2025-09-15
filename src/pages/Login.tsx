// src/pages/Login.tsx
import React, { JSX, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

type Role = "patient" | "doctor" | "pathologist";

function generateMathCaptcha() {
  const a = Math.floor(Math.random() * 8) + 1;
  const b = Math.floor(Math.random() * 8) + 1;
  return { question: `${a} + ${b} = ?`, answer: String(a + b) };
}

export default function Login(): JSX.Element {
  const navigate = useNavigate();

  // UI state
  const [role, setRole] = useState<Role>("patient");
  const [usePhone, setUsePhone] = useState(false); // slide switch: false = email, true = phone
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // digits only
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // OTP flow
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);
  const [otpInput, setOtpInput] = useState("");

  // Captcha
  const [captcha, setCaptcha] = useState(() => generateMathCaptcha());
  const [captchaAttempt, setCaptchaAttempt] = useState("");

  // UI feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Basic validation helpers
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/; // simple Indian mobile format

  const roleLabel = useMemo(() => {
    if (role === "doctor") return "Doctor";
    if (role === "pathologist") return "Pathologist";
    return "Patient";
  }, [role]);

  // Actions
  const refreshCaptcha = () => {
    setCaptcha(generateMathCaptcha());
    setCaptchaAttempt("");
  };

  const sendOtp = () => {
    setError(null);
    // validate phone first
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    // simulate sending OTP
    const otp = String(Math.floor(100000 + Math.random() * 900000)); // 6-digit
    setGeneratedOtp(otp);
    setOtpSent(true);
    setSuccessMsg(`OTP sent to ${phone} (demo OTP: ${otp})`);
    // In real app: call API to send OTP; never reveal OTP to client
    setTimeout(() => setSuccessMsg(null), 4000);
  };

  const verifyAndLogin = async (useOtp: boolean) => {
    setError(null);

    // captcha check
    if (captchaAttempt.trim() !== captcha.answer) {
      setError("Captcha answer is incorrect. Try again.");
      refreshCaptcha();
      return;
    }

    // credential validation
    if (usePhone) {
      if (!phoneRegex.test(phone)) {
        setError("Enter a valid 10-digit phone number.");
        return;
      }
      if (useOtp) {
        if (!otpSent) {
          setError("Please request OTP first.");
          return;
        }
        if (otpInput.trim() !== generatedOtp) {
          setError("Invalid OTP. Check and try again.");
          return;
        }
      } else {
        // password flow with phone
        if (!password || password.length < 6) {
          setError("Please enter a password (at least 6 characters).");
          return;
        }
      }
    } else {
      // email flow
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      if (!password || password.length < 6) {
        setError("Please enter a password (at least 6 characters).");
        return;
      }
    }

    setLoading(true);
    // Simulate server call
    await new Promise((res) => setTimeout(res, 800));

    // Demo: login success
    setLoading(false);
    setSuccessMsg(`Logged in as ${roleLabel} (demo). Redirecting...`);
    // persist remember
    if (remember) localStorage.setItem("aarogya_remember", "1");
    else localStorage.removeItem("aarogya_remember");

    // Reset sensitive fields (demo)
    setPassword("");
    setOtpInput("");
    setGeneratedOtp(null);
    setOtpSent(false);

    // Redirect based on role — example routing
    setTimeout(() => {
      if (role === "doctor") navigate("/doctor/dashboard");
      else if (role === "pathologist") navigate("/lab/dashboard");
      else navigate("/patient/dashboard");
    }, 700);
  };

  const handleSocialLogin = (provider: "google" | "facebook") => {
    // placeholder for OAuth - open popup / redirect to your backend oauth endpoint
    // e.g. window.location.href = `${API_URL}/auth/${provider}`;
    alert(`Social login with ${provider} (UI demo). Replace with OAuth flow.`);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white/90 dark:bg-surface p-8 rounded-2xl shadow-lg">
        <div className="md:flex md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Sign in</h1>
            <p className="text-sm text-gray-600">
              Continue as <span className="font-medium">{roleLabel}</span>
            </p>
          </div>

          {/* Role selector pills */}
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <button
              onClick={() => setRole("patient")}
              className={`px-3 py-1 rounded-full text-sm transition ${
                role === "patient" ? "bg-[var(--medical-green)] text-white" : "bg-white border"
              }`}
            >
              Patient
            </button>
            <button
              onClick={() => setRole("doctor")}
              className={`px-3 py-1 rounded-full text-sm transition ${
                role === "doctor" ? "bg-[var(--medical-green)] text-white" : "bg-white border"
              }`}
            >
              Doctor
            </button>
            <button
              onClick={() => setRole("pathologist")}
              className={`px-3 py-1 rounded-full text-sm transition ${
                role === "pathologist" ? "bg-[var(--medical-green)] text-white" : "bg-white border"
              }`}
            >
              Pathologist
            </button>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // If phone & OTP is visible -> use OTP verify path, else password path
            const useOtpFlow = usePhone && otpSent;
            verifyAndLogin(useOtpFlow);
          }}
          className="space-y-4"
        >
          {/* Slide switch: Email vs Phone */}
          <div className="flex items-center gap-3">
            <div className={`text-sm ${usePhone ? "text-gray-500" : "text-[var(--medical-navy)]"}`}>
              Email
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={usePhone}
                onChange={(e) => {
                  // reset phone/email related state when switching
                  setUsePhone(e.target.checked);
                  setEmail("");
                  setPhone("");
                  setOtpSent(false);
                  setGeneratedOtp(null);
                  setOtpInput("");
                  setError(null);
                }}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:bg-[var(--medical-green)] transition" />
              <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition" />
            </label>

            <div className={`text-sm ${usePhone ? "text-[var(--medical-navy)]" : "text-gray-500"}`}>
              Phone
            </div>
          </div>

          {/* Email or Phone input */}
          {usePhone ? (
            <>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Phone number</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="e.g. 9876543210"
                  className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </label>

              {/* OTP area */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={sendOtp}
                  className="px-3 py-2 rounded-md bg-[var(--medical-green)] text-white"
                >
                  Send OTP
                </button>

                {otpSent && (
                  <div className="flex-1">
                    <label className="block">
                      <span className="text-sm font-medium text-gray-700">Enter OTP</span>
                      <input
                        type="text"
                        value={otpInput}
                        onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, "").slice(0, 6))}
                        placeholder="6-digit code"
                        className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      />
                    </label>
                  </div>
                )}
              </div>
            </>
          ) : (
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email address</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>
          )}

          {/* Password (only for password flow) */}
          {!usePhone || (usePhone && !otpSent) ? (
            <label className="block relative">
              <span className="text-sm font-medium text-gray-700">Password</span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border px-3 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-9 text-sm text-gray-600 px-2 py-1 rounded hover:bg-gray-100"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </label>
          ) : null}

          {/* Captcha */}
          <div className="flex gap-3 items-center">
            <div className="flex-1">
              <div className="text-sm text-gray-700 mb-1">Prove you're human</div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 border rounded bg-gray-50">{captcha.question}</div>
                <input
                  value={captchaAttempt}
                  onChange={(e) => setCaptchaAttempt(e.target.value)}
                  placeholder="Answer"
                  className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="px-3 py-2 rounded-md border"
                  title="Refresh captcha"
                >
                  ↻
                </button>
              </div>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border"
              />
              <span className="text-gray-700">Remember me</span>
            </label>

            <Link to="/forgot-password" className="text-teal-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Error / Success */}
          {error && <div className="text-sm text-red-700 bg-red-100 px-3 py-2 rounded">{error}</div>}
          {successMsg && <div className="text-sm text-green-800 bg-green-100 px-3 py-2 rounded">{successMsg}</div>}

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex justify-center items-center rounded-md px-4 py-2 bg-teal-600 text-white font-medium disabled:opacity-60"
            >
              {loading ? "Signing in..." : otpSent && usePhone ? "Verify OTP & Sign in" : "Sign in"}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <div className="text-sm text-gray-500">or continue with</div>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social login */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => handleSocialLogin("google")}
              className="flex-1 inline-flex items-center justify-center gap-3 rounded-md border px-4 py-2 bg-white"
            >
              <FcGoogle size={20} />
              <span className="text-sm font-medium">Continue with Google</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("facebook")}
              className="flex-1 inline-flex items-center justify-center gap-3 rounded-md border px-4 py-2 bg-blue-600 text-white"
            >
              <FaFacebook size={16} />
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>

          <div className="text-center text-sm text-gray-600 mt-2">
            Don't have an account?{" "}
            <Link to="/register" className="text-teal-600 hover:underline">
              Create one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
