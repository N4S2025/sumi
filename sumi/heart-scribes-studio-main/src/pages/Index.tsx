import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{id: number;left: number;delay: number;size: number;}[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      size: 12 + Math.random() * 20
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) =>
      <div
        key={heart.id}
        className="absolute text-love-blush animate-float-heart"
        style={{
          left: `${heart.left}%`,
          bottom: "-20px",
          animationDelay: `${heart.delay}s`,
          fontSize: `${heart.size}px`,
          opacity: 0.4
        }}>

          ♥
        </div>
      )}
    </div>);

};

const LoveLetterPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <FloatingHearts />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-script text-2xl md:text-3xl text-love-blush mb-4">


        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
          For my baby

        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="w-24 h-0.5 mt-8 bg-primary" />


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-8 font-body text-muted-foreground text-lg italic">


        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-4 text-love-rose">

          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block text-2xl">


          </motion.span>
        </motion.div>
      </motion.section>

      {/* Letter */}
      <section className="relative z-10 flex justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl w-full bg-card rounded-lg p-8 md:p-12 shadow-xl border border-border"
          style={{
            backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, hsl(var(--border)) 31px, hsl(var(--border)) 32px)",
            backgroundPositionY: "8px"
          }}>

          <p className="font-script text-love-rose text-xl mb-6">My angel,</p>

          <div className="space-y-6 font-body text-foreground leading-8 text-base md:text-lg">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}>
              The word blessing had no definition until you stepped into my life.



            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}>
              I love the way your big brown eyes light up when you smile. I love your wit, your sass and your silly jokes that gave us countless nights giggling till nothing else mattered. I love your soft heart, you're a doll more delicate than porcelain, and my only desire is to give you the care a work of art like you deserves.



            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}>
              You are my favorite sunrise and my hardest sunsets, you bring light to the bleakest of days, growing old and being healthy had no sense till I crossed your gaze.



            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}>
              Thank you for your patience, your kindness, your warmth, and your love. I've failed at showing how much you mean to me, but this letter could only grasp the surface of how important you are to me. So please my love, forgive me and grant me the honor of being your dearest valentine.



            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 text-right">

            <p className="font-script text-love-rose text-2xl">Your mush,</p>
            <p className="font-script text-love-deep text-3xl mt-2">♥</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center py-20 px-6">

        <p className="font-script text-4xl md:text-5xl text-love-rose">
          I love you ♥
        </p>
        <div className="w-16 h-0.5 mx-auto mt-6 bg-primary-foreground" />
        <p className="mt-6 font-body text-muted-foreground text-sm">

        </p>
      </motion.section>
    </div>);

};

export default LoveLetterPage;