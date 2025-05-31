"use client";

import { Menu } from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dices } from "lucide-react";
import Link from "next/link";
import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className={`flex flex-col`}>
      <Card className="m-4 p-4 flex flex-row justify-between items-center">
        <Link href="/" className="flex flex-row ">
          <Dices size={32} strokeWidth={2.5} />
          <h1 className="scroll-m-20 sm:text-2xl mb-1 ml-4 font-extrabold tracking-tight lg:text-3xl text-xl">
            Würfelkarte
          </h1>
        </Link>
        <div className="flex flex-row gap-2">
          <Menu />
        </div>
      </Card>
      {/* Login Card */}
      <div className="flex flex-1 items-center justify-center">
        <Card className={`p-6 w-full max-w-md flex flex-col shadow-lg mx-4`}>
          <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
          <form className="flex flex-col gap-4">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
            <label htmlFor="password" className="font-medium">
              Passwort
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
            <div className="flex flex-col gap-2 mt-4">
              <Button
                type="submit"
                formAction={login}
                className="w-full"
                variant="default"
              >
                Log in
              </Button>
              <Button
                type="submit"
                formAction={signup}
                variant="outline"
                className="w-full"
              >
                Sign up
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
