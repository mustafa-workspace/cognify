'use client'; 

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowLeft, Eye, EyeOff, GraduationCap } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldLabel,
  FieldDescription
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useForm } from 'react-hook-form'; 
import { LoginSchema, LoginSchemaForm } from "@/validation/login.schema";
import { useRouter } from "next/navigation";
import UserLoginSubmiting from "@/features/auth/services/getUser";
import { toast } from "sonner";
import { setAuthCookies } from "@/lib/cookies";
export default function Signin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginSchemaForm>({
    resolver: zodResolver(LoginSchema),
    mode: 'onTouched'
  });

    const onSubmit = async (data: LoginSchemaForm) => {
      try {
        const result = await UserLoginSubmiting(data);
        const token = result?.data.jwt
        if (result && result.status === 200) {
          toast.success("Success.. Welcome back"); 
          setAuthCookies(token);
          router.push('/feed');
        }
      } catch (error: any) {
        const errorMessage = error.response?.data?.error?.message || error.message || "An error occurred";
        toast.error(errorMessage);
      }
    };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Left Side: Illustration / Brand Details */}
      <div className="hidden md:flex md:w-[45%] lg:w-[50%] flex-col justify-between p-12 bg-linear-to-tr from-[#e8f1fd] to-[#f4f8ff] relative overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative aspect-square w-full max-w-[340px] rounded-[40px] overflow-hidden bg-white p-3 shadow-[0_20px_50px_rgba(8,112,184,0.12)] border border-white/50">
            <Image 
              className="w-full h-full rounded-[32px] object-cover" 
              width={400} 
              height={400} 
              src="/images/register/signin-image.jpg" 
              alt="Sign In Illustration" 
              priority 
            />
          </div>
          <div className="mt-10 text-center max-w-[400px]">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1a2238] tracking-tight leading-tight">
              Discover Shared Knowledge, Empower Global Authors.
            </h2>
            <p className="mt-4 text-sm lg:text-base text-slate-500 font-medium leading-relaxed">
              Join a premier network of scholars and thinkers. COGNIFY bridges the gap between groundbreaking research and the community that drives it forward.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Sign In Form */}
      <div className="w-full md:w-[55%] lg:w-[50%] flex flex-col justify-center items-center p-6 sm:p-12 md:p-16 lg:p-24 bg-white relative">
        <div className="max-w-[420px] w-full flex flex-col">
          {/* Back Button */}
          <div className="self-start">
            <button 
              type="button" 
              onClick={() => router.back()} 
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full hover:bg-slate-50 text-sm font-semibold text-slate-600 transition-colors shadow-xs mb-8 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          </div>

          {/* Logo & Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-[#1e2538]" />
              <span className="font-extrabold text-lg text-[#1e2538] tracking-widest">COGNIFY</span>
            </div>
            <h1 className="text-3xl font-extrabold text-[#1a2238] tracking-tight">Sign in to your account</h1>
            <p className="mt-2 text-sm font-medium text-slate-500">
              Where knowledge comes alive. Start your learning journey today.
            </p>
          </div>

          {/* Social Sign-in Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button 
              type="button"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#f0f4fc] hover:bg-[#e4ecf8] text-sm font-bold text-[#1e2538] transition-colors border border-transparent cursor-pointer"
            >
              {/* Google Icon SVG */}
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span>Google</span>
            </button>
            <button 
              type="button"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#f0f4fc] hover:bg-[#e4ecf8] text-sm font-bold text-[#1e2538] transition-colors border border-transparent cursor-pointer"
            >
              {/* Facebook Icon SVG */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <span className="relative px-4 text-xs font-semibold text-slate-400 bg-white">or sign in with email</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field className="flex flex-col gap-4">
              {/* Email Address */}
              <div>
                <FieldLabel htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</FieldLabel>
                <Input 
                  className="w-full px-4 h-12 bg-[#f8f9fd] border border-slate-200 rounded-xl focus-visible:border-slate-400 focus-visible:ring-0 transition-all placeholder:text-slate-400 text-sm font-medium" 
                  id="email" 
                  placeholder="cognify@example.com" 
                  type="email" 
                  {...register("email")} 
                  required
                />
                {errors.email && (
                  <FieldDescription className="font-semibold text-red-500 text-[13px] mt-3 block">
                    {errors.email.message}
                  </FieldDescription>
                )}
                
              </div>

              {/* Password */}
              <div>
                <FieldLabel htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1.5">Password</FieldLabel>
                <div className="relative">
                  <Input 
                    className="w-full pl-4 pr-12 h-12 bg-[#f8f9fd] border border-slate-200 rounded-xl focus-visible:border-slate-400 focus-visible:ring-0 transition-all placeholder:text-slate-400 text-sm font-medium" 
                    id="password" 
                    placeholder="••••••••" 
                    type={showPassword ? "text" : "password"} 
                    {...register("password")} 
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <FieldDescription className="font-semibold text-red-500 text-[13px] mt-1.5 block">
                    {errors.password.message}
                  </FieldDescription>
                )}
              </div>

              {/* Keep me signed in & Forgot Password */}
              <div className="flex items-center justify-between mt-2 mb-4">
                <span className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer select-none">
                  <Checkbox id="keep-signed-in" /> 
                  <label htmlFor="keep-signed-in" className="cursor-pointer">Keep me signed in</label>
                </span>
                <span>
                  <Link className="text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors" href="#forgot">
                    Forgot password ?
                  </Link>
                </span>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#1e2538] hover:bg-[#283149] text-white text-sm font-semibold rounded-xl flex items-center justify-center cursor-pointer transition-colors shadow-xs"
              >
                {isSubmitting ? "Signing in..." : "Continue"}
              </Button>
            </Field>
          </form>

          {/* Footer Sign Up link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 font-medium">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-500 hover:text-blue-600 font-bold transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
