"use client";

import { gamemodes } from "@/components/gamemodes/gamemodes";
import { Checkout } from "@/components/payment/Checkout";
import { Button } from "@/components/ui/button";
import { convertToSubcurrency } from "@/lib/utils";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Dices } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const gamemodeParam = (params.gamemode as string) || "";
  const gamemodeKey = Object.keys(gamemodes).find(
    (key) =>
      key.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() ===
      gamemodeParam.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  ) as keyof typeof gamemodes;
  const gamemode = gamemodes[gamemodeKey];
  const [purchased, setPurchased] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const bought = localStorage.getItem("purchasedGamemodes");
      setPurchased(bought ? JSON.parse(bought) : ["Klassiker"]);
    }
  }, []);

  // On successful payment, unlock gamemode and redirect
  const handleSuccess = () => {
    const normalizedKey = gamemodeKey.toLowerCase().replace(/[^a-z0-9]/g, "");
    const updated = Array.from(new Set([...(purchased || []), normalizedKey]));
    localStorage.setItem("purchasedGamemodes", JSON.stringify(updated));
    router.push("/");
  };

  if (!gamemode) {
    return <div>Gamemode nicht gefunden.</div>;
  }

  return (
    <div className="flex flex-col  items-center justify-center m-8 ">
      <div className="flex flex-col items-center">
        <Dices size={40} className="mb-2" />
        <h2 className="text-2xl font-bold mb-1">
          {gamemode.name} freischalten
        </h2>
        <div className="text-gray-500 mb-4 text-center">
          {gamemode.description}
        </div>
        <div className="text-3xl font-extrabold mb-4">
          {gamemode.price?.toFixed(2)} €
        </div>
      </div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(gamemode.price || 0),
          currency: "eur",
        }}
      >
        <Checkout amount={gamemode.price || 0} onSuccess={handleSuccess} />
      </Elements>
      <Button
        variant="outline"
        className="w-full mt-4"
        onClick={() => router.push("/")}
      >
        Abbrechen
      </Button>
    </div>
  );
}
