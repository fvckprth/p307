'use client'

import React, { useState } from "react"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { joinValidator } from "@/validators/auth"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner'
import { supabase } from '../lib/supabaseClient'

type Input = z.infer<typeof joinValidator>;

export function SignUpForm() {
  const form = useForm<Input>({
    resolver: zodResolver(joinValidator),
    defaultValues: {
      name: "",
      email: "",
      details: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: Input) {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    setTimeout(async () => {
      toast("Thank you for signing up.", {
      description: "We will contact you soon with updates.",
      style: {
        border: "1px solid",
        borderColor:  "#D8FBAD",
        backgroundColor: "rgba(16, 16, 16, 0.25)",
        borderRadius: "0.75rem",
        backdropFilter: "blur(10px)", 
        padding: "0.75rem",
        color: "#D8FBAD",
        zIndex: 10000,
        position: 'relative'
      },
      className: 'my-toast',
      descriptionClassName: 'my-toast-description'
    });

      // Send email
      try {
        await fetch("/api/email", {
          method: "POST",
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            details: data.details,
          }),
        });
  
        // Insert into Supabase
        const { error } = await supabase
          .from('waitlist')
          .insert([
            { name: data.name, email: data.email, details: data.details },
          ]);
  
        if (error) {
          throw error;
        }
  
      } catch (error) {
        console.error("Error sending email:", error);
      }

      form.reset(
        {
          name: "",
          email: "",
          details: "",
        },
        {
          keepValues: false,
          keepErrors: false,
          keepDirty: false,
          keepIsValid: false,
          keepTouched: false,
          keepSubmitCount: false,
        }
      );
      setIsLoading(false);
    });
  }

  const { isValid } = form.formState;

  return (
    <div>
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0.95, filter: "blur(5px)" }}
      animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.3, duration: 1.3 }}
    >
    <Card className="w-full mx-auto" style={{ fontFamily: 'var(--font-fk-grotesk)' }}>
      <CardHeader>
        <CardTitle>
          The easiest way to enable <br/>
          collaborative commerce
        </CardTitle>
        <CardDescription>
            Platform 307: Stripe meets Alibaba.<br/>
            Let anyone, sell anything, anywhere.<br/>
            Sign up for early access. <br/>
        </CardDescription> 
      </CardHeader>
      <CardContent>
        <Form {...form}>
            <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative overflow-x-hidden"
            style={{ fontFamily: "var(--font-fk-grotesk)" }}
            >
            <div className="space-y-3">
            <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                            placeholder="Enter name or business" {...field} 
                            className="md:w-3/4"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                            placeholder="Enter email address" {...field} 
                            className="md:w-3/4"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                            placeholder="Tell us a little bit about yourself" {...field}
                            className="md:w-3/4"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  
                />
            </div>
            <div className="flex justify-between items-end mt-8">
            <Button             
              className={`px-3 py-2 rounded-lg text-base leading-tight tracking-tight ${isValid ? 'bg-transparent border border-[#E4E4E4] text-[#E4E4E4]' : 'bg-transparent border border-[#E4E4E4] text-[#E4E4E4] text-opacity-25 border-opacity-25'} ${isLoading ? 'bg-transparent border border-[#E4E4E4] text-[#E4E4E4] text-opacity-25 border-opacity-25' : ''}`} 
              type="submit" 
              disabled={!isValid || isLoading}>
                {isLoading ? 'Please wait...' : 'Join Waitlist'}
            </Button>
              <img src="/images/p307-logo.svg" alt="P307 Logo" className="h-4 md:h-6 w-auto" /> {/* Adjust size as needed */}
            </div>
            </form>
        </Form>
      </CardContent>
    </Card>
    </motion.div>
  </div>
  )
}

export default SignUpForm;