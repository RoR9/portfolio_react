import { Input, Button, Textarea } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText } from "../components/CustomTexts";
import { useForm as useFormspree } from "@formspree/react";

const Contact: React.FC = () => {
  const { register, getValues, handleSubmit } = useForm();
  const [formState, handleFormspreeSubmit] = useFormspree("mvojloop");

  return (
    <section id="contact" className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        className="mx-auto md:mb-10"
      >
        <TypingText textStyles="" title="| Contact" />
      </motion.div>
      <div className="md:flex-row flex flex-col-reverse">
        <form onSubmit={handleSubmit(handleFormspreeSubmit)} className="contact-form flex-1 justify-center flex items-center p-4">
          <div className="flex flex-col gap-4 flex-1 justify-center items-center">
            <div className="max-w-[450px] w-full">
              <Input
                readOnly={formState.succeeded}
                required
                label="Name"
                crossOrigin={undefined}
                color="lime"
                className="text-white"
                {...register("name")}
              />
            </div>
            <div className="max-w-[450px] w-full">
              <Input
                readOnly={formState.succeeded}
                required
                type="email"
                label="Email"
                crossOrigin={undefined}
                color="lime"
                className="text-white"
                {...register("email")}
              />
            </div>
            <div className="max-w-[450px] w-full">
              <Textarea
                readOnly={formState.succeeded}
                label="Message"
                className="text-white"
                color="lime"
                {...register("message")}
              />
            </div>

            <Button disabled={formState.succeeded} size="lg" color="teal" type="submit">
              Send a message
            </Button>
          </div>
        </form>

        <div className="p-8 flex flex-1 justify-center items-center text-center">
          <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3 }} className="max-w-2xl">
            {formState.succeeded ? (
              <>
                <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Hey, {getValues("name") || "there"}! Thank you for your interest.
                </h2>
                <p className="text-white/90 text-lg md:text-xl mt-4 font-medium">
                  I&apos;ll get back to you soon.
                </p>
                <a
                  href="#projects"
                  className="inline-block mt-8 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#102020]"
                >
                  Back to projects
                </a>
              </>
            ) : (
              <p className="text-white md:text-[72px] text-[28px] sm:text-[38px] font-bold">Let&apos;s do something amazing together!</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
