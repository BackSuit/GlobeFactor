import { Text, Box } from "@chakra-ui/layout"
import Link from "next/link"

// Globe icon mark for GlobeFactor
function GlobeMark() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="globeGrad"
          x1="0"
          y1="0"
          x2="38"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0F766E" />
          <stop offset="100%" stopColor="#1E3A5F" />
        </linearGradient>
      </defs>
      <rect width="38" height="38" rx="10" fill="url(#globeGrad)" />
      {/* Globe circle */}
      <circle
        cx="19"
        cy="19"
        r="11"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        opacity="0.9"
      />
      {/* Horizontal latitude lines */}
      <ellipse
        cx="19"
        cy="19"
        rx="11"
        ry="4"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* Vertical meridian */}
      <ellipse
        cx="19"
        cy="19"
        rx="5"
        ry="11"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* Equator */}
      <line
        x1="8"
        y1="19"
        x2="30"
        y2="19"
        stroke="white"
        strokeWidth="1"
        opacity="0.4"
      />
      {/* Prime meridian */}
      <line
        x1="19"
        y1="8"
        x2="19"
        y2="30"
        stroke="white"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  )
}

/**
 * Logo component.
 * @param {boolean} isLight  – if true, renders white text (for dark backgrounds like footer)
 */
export default function Logo({ isLight = false }) {
  return (
    <Box
      as={Link}
      href="/"
      display="flex"
      alignItems="center"
      gap={2}
      _hover={{ opacity: 0.85 }}
      lineHeight={1}
      flexShrink={0}
    >
      <GlobeMark />
      <Text
        as="span"
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="700"
        fontFamily="'Inter', sans-serif"
        letterSpacing="-0.01em"
        color={isLight ? "white" : "brand.ink"}
        lineHeight={1}
      >
        Globe
        <Text
          as="span"
          color={isLight ? "#5EEAD4" : "brand.primary"}
          fontWeight="800"
        >
          Factor
        </Text>
      </Text>
    </Box>
  )
}
