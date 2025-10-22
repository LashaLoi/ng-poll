"use client";

import * as React from "react";
import { motion, type Variants, type HTMLMotionProps } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils";

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInVariantsSlow: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInVariantsFast: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInVariantsSlideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInVariantsSlideRight: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInVariantsScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInVariantsRotate: Variants = {
  hidden: {
    opacity: 0,
    rotate: -5,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInVariantsStagger: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
};

const fadeInVariantsStaggerChild: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeInVariantsMap = {
  default: fadeInVariants,
  slow: fadeInVariantsSlow,
  fast: fadeInVariantsFast,
  slideLeft: fadeInVariantsSlideLeft,
  slideRight: fadeInVariantsSlideRight,
  scale: fadeInVariantsScale,
  rotate: fadeInVariantsRotate,
  stagger: fadeInVariantsStagger,
};

const fadeInVariantsChildMap = {
  stagger: fadeInVariantsStaggerChild,
};

const fadeInVariantsCVA = cva("", {
  variants: {
    variant: {
      default: "",
      slow: "",
      fast: "",
      slideLeft: "",
      slideRight: "",
      scale: "",
      rotate: "",
      stagger: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type FadeInProps = Omit<HTMLMotionProps<"div">, "variants"> &
  VariantProps<typeof fadeInVariantsCVA> & {
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number;
    children?: React.ReactNode;
  };

const FadeIn = React.forwardRef<HTMLDivElement, FadeInProps>(
  (
    {
      className,
      variant = "default",
      delay = 0,
      duration,
      once = true,
      amount = 0.1,
      children,
      ...props
    },
    ref
  ) => {
    const variants =
      fadeInVariantsMap[variant as keyof typeof fadeInVariantsMap] ??
      fadeInVariantsMap.default;
    const childVariants =
      fadeInVariantsChildMap[variant as keyof typeof fadeInVariantsChildMap];

    // Override duration if provided
    const customVariants = () => {
      if (!duration) return variants;

      return {
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible,
            duration,
          },
        },
      };
    };

    return (
      <motion.div
        ref={ref}
        className={cn(fadeInVariantsCVA({ variant }), className)}
        variants={customVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        transition={{ delay }}
        {...props}
      >
        {variant === "stagger" && childVariants ? (
          <motion.div variants={childVariants}>{children}</motion.div>
        ) : (
          children
        )}
      </motion.div>
    );
  }
);
FadeIn.displayName = "FadeIn";

// Stagger container component for multiple children
export type FadeInStaggerProps = Omit<HTMLMotionProps<"div">, "variants"> & {
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  staggerDelay?: number;
  children?: React.ReactNode;
};

const FadeInStagger = React.forwardRef<HTMLDivElement, FadeInStaggerProps>(
  (
    {
      className,
      delay = 0,
      duration = 0.6,
      once = true,
      amount = 0.1,
      staggerDelay = 0.1,
      children,
      ...props
    },
    ref
  ) => {
    const staggerVariants: Variants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration,
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };

    const childVariants: Variants = {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        {...props}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }
);
FadeInStagger.displayName = "FadeInStagger";

export { FadeIn, FadeInStagger, fadeInVariantsCVA };
