"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Earth from "@/components/ui/globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { Label } from "@/components/ui/label";
import { PrimaryButton } from "../Shared/Button";

export default function ContactUs1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Perform form submission logic here
      console.log("Form submitted:", { name, email, message });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="mx-6 lg:mx-8">
      <div className="rounded-2xl border">
        <div className="grid md:grid-cols-2">
          <div className="relative p-6 md:p-10" ref={formRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex w-full gap-2"
            >
              <h2 className="from-foreground to-foreground/80 mb-2 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                Contact
              </h2>
              <span className="text-[#6366f1] relative z-10 w-full text-4xl font-bold tracking-tight font-instrument-serif italic md:text-5xl">
                Me
              </span>
              <SparklesCore
                id="tsparticles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={500}
                className="absolute inset-0 top-0 h-24 w-full"
                particleColor="#6366f1"
              />
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  required
                  className="h-40 resize-none"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <PrimaryButton
                  isSubmitting={isSubmitting}
                  isSubmitted={isSubmitted}
                  label="Send Message"
                  className="w-full"
                />
              </motion.div>
            </motion.form>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative flex items-center justify-center overflow-hidden p-6"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <article className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-3xl border bg-gradient-to-b from-[#6366f1] to-white/5 p-6 md:p-8 text-3xl tracking-tight text-white md:text-4xl md:leading-[1.05] lg:text-5xl">
                Let’s build something amazing together — reach out to me anytime.
                <div className="absolute -right-10 -bottom-10 md:-right-50 md:-bottom-16 w-[250px] md:w-[600px] transition-all duration-700 hover:scale-105">
                  <Earth
                    scale={1.1}
                    baseColor={[0.39, 0.40, 0.95]}
                    markerColor={[1, 1, 1]}
                    glowColor={[0.7, 0.72, 1]}
                  />
                </div>
              </article>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
