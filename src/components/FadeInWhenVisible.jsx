import React, { useEffect } from "react"
import { any } from "prop-types"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.0125,
      delayChildren: 1.375,
    },
  },
}

const FadeInWhenVisible = ({ children, t, i18n }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

FadeInWhenVisible.propTypes = {
  children: any.isRequired,
}

FadeInWhenVisible.defaultProps = {
  children: null,
}

export default FadeInWhenVisible
