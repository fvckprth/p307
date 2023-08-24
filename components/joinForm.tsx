'use client'

import * as React from "react"

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
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Textarea } from "./ui/textarea"

type Input = z.infer<typeof joinValidator>

export function JoinForm() {
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
      transition={{ delay: 0.3, duration: 0.9 }}
    >
    <Card className="w-[400px]" style={{ fontFamily: 'var(--font-fk-grotesk)' }}>
      <CardHeader>
        <CardTitle>
            Easiest way to streamline
            collaborative commerce
        </CardTitle>
        <CardDescription>We’re building commerce 3.0:  A new ecosystem centered around shoppers,  where unconventional platforms become the routes for the world's most exceptional contextual shopping experiences. </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
            <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative space-y-3 overflow-x-hidden"
            style={{ fontFamily: "var(--font-fk-grotesk)" }}
            >
            <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                            placeholder="Enter name or business" {...field} 
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
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            <CardFooter>
              <Button className="p-3 bg-transparent rounded-lg border border-white text-white text-xs leading-4" type="submit">
                  Join Waitlist
              </Button>
            </CardFooter>
            </form>
        </Form>
      </CardContent>
    </Card>
    </motion.div>
  )
}

export default JoinForm;
