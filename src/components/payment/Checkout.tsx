"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { convertToSubcurrency } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Checkout = ({
  amount,
  onSuccess,
}: {
  amount: number;
  onSuccess?: () => void;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://wuerfelkarte.sander-jan.net/",
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      if (onSuccess) onSuccess();
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <Card className="w-full p-4 flex flex-col gap-4 items-center">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        {clientSecret && <PaymentElement />}
        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}
        <Button type="submit" disabled={!stripe || loading} className="w-full">
          {!loading
            ? `Jetzt bezahlen (${amount.toFixed(2)} €)`
            : "Verarbeite..."}
        </Button>
      </form>
    </Card>
  );
};
