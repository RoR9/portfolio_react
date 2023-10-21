import { Input, Button, Textarea } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { TypingText } from "../components/CustomTexts";
import { useForm as useFormspree } from "@formspree/react";

const Contact: React.FC = () => {
  const { register, getValues, handleSubmit } = useForm();
  const [formState, handleFormspreeSubmit] = useFormspree("mvojloop");

  return (
    <section id="contact" className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        className={`mx-auto md:mb-10`}
      >
        <TypingText textStyles="" title="| Contact" />
      </motion.div>
      <div className="md:flex-row flex flex-col-reverse">
        <form onSubmit={handleSubmit(handleFormspreeSubmit)} className="flex-1 justify-center flex items-center p-4">
          <div className="flex flex-col gap-4 flex-1  justify-center items-center">
            <div className="max-w-[450px] w-full">
              <Input
                readOnly={formState.succeeded}
                required
                label="Name"
                crossOrigin={""}
                color="lime"
                className="text-white "
                {...register("name")}
              />
            </div>
            <div className="max-w-[450px] w-full">
              <Input
                readOnly={formState.succeeded}
                required
                type="email"
                label="Email"
                crossOrigin={""}
                color="lime"
                className="text-white "
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

        <div className="p-8 md:text-[72px] text-[38px] font-bold flex flex-1 justify-center items-center">
          <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3 }}>
            {formState.succeeded
              ? `HEY, ${getValues("name").toUpperCase()}! THANK YOU FOR YOUR INTEREST`
              : "LET’S DO SOMETHING AMAZING TOGETHER!"}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
