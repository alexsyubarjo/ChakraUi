export const fadeInTransition = (direction: string, type: string, delay: number, duration: number) => ({
    hidden: { opacity: 0, y: direction === "up" ? 20 : -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type,
        delay,
        duration,
      },
    },
  });

export * from "./sendEmail";
