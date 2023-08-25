'use client'

import React from "react"

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

type Input = z.infer<typeof joinValidator>

export function WaitlistForm() {
    const form = useForm<Input>({
        resolver: zodResolver(joinValidator),
        defaultValues: {
            name: "",
            email: "",
            details: "",
        },
    })

  function onSubmit(data: Input) {
    alert(JSON.stringify(data, null, 4));
    console.log(data)
    }

  return (
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0.95, filter: "blur(5px)" }}
      animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.3, duration: 1.3 }}
    >
    <Card className="w-full mx-auto" style={{ fontFamily: 'var(--font-fk-grotesk)' }}>
      <CardHeader>
        <CardTitle>
          Easiest Way to Enable <br/>
          Community Commerce
        </CardTitle>
        <CardDescription>
            Platform 307: Stripe meets Alibaba.<br/>
            Collaborate with anyone to make anything<br/>
            shoppable. Sign up for early access. <br/>
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
              <Button className="px-3 py-2 bg-transparent rounded-lg border border-white text-white text-xs md:text-base" type="submit">
                Join Waitlist
              </Button>
              <img src="/images/p307-logo.svg" alt="P307 Logo" className="h-4 md:h-6 w-auto" /> {/* Adjust size as needed */}
            </div>
            </form>
        </Form>
      </CardContent>
    </Card>
    </motion.div>
  )
}

export default WaitlistForm;
