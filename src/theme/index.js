import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    serif: "'Playfair Display', Georgia, serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  colors: {
    brand: {
      primary: "#0F766E", // Deep teal — authority & trust
      secondary: "#1E3A5F", // Navy blue — geopolitical gravitas
      light: "#5EEAD4", // Mint — lighter accent used on light backgrounds
      accent: "#D4A017", // Gold — premium, strategic
      cream: "#FFFFFF",
      parchment: "#F0FDFA", // Very light teal tint
      ink: "#0F172A", // Slate-900 — strong headlines
      gray: "#475569", // Slate-600
      lightGray: "#94A3B8", // Slate-400
      gradient: "linear-gradient(90deg, #14B8A6, #0F766E)",
    },
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    xxl: "96em",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "md",
      },
      variants: {
        primary: {
          bg: "brand.primary",
          color: "white",
          _hover: { bg: "#115E59", transform: "translateY(-1px)" },
        },
        outline: {
          borderColor: "brand.primary",
          color: "brand.primary",
          _hover: { bg: "teal.50" },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: "700",
        color: "brand.ink",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.700",
        lineHeight: "1.7",
      },
    },
    Link: {
      baseStyle: {
        color: "brand.primary",
        _hover: { textDecoration: "underline", color: "brand.secondary" },
      },
    },
  },
  styles: {
    global: {
      "::selection": {
        color: "white",
        background: "brand.primary",
      },
      "::-webkit-scrollbar": {
        width: "0.5em",
      },
      "::-webkit-scrollbar-track": {
        background: "#F0FDFA",
      },
      "::-webkit-scrollbar-thumb": {
        transition: "150ms all ease-in-out",
        bgColor: "#CBD5E0",
        borderRadius: "full",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#A0AEC0",
      },
      html: {
        scrollBehavour: "smooth",
      },
      "html, body": {
        overflowX: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#0F172A",
        fontSize: "16px",
        lineHeight: "1.7",
      },
      ".booxtore-logo": {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      },
      ".markdown": {
        "div.end-p": {
          marginBottom: 4,
        },
        a: {
          color: "brand.primary",
          fontWeight: "500",
          _hover: {
            textDecoration: "underline",
            color: "brand.secondary",
          },
        },
        p: {
          lineHeight: "1.9",
          marginY: 6,
          fontSize: "1.1rem",
          color: "#2D3748",
          fontFamily: "'Inter', sans-serif",
        },
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          fontWeight: 700,
          marginTop: 8,
          marginBottom: 4,
          textOverflow: "ellipsis",
          lineHeight: "1.3",
          color: "#0F172A",
        },
        h1: {
          fontSize: "4xl",
        },
        h2: {
          fontSize: "3xl",
        },
        h3: {
          fontSize: "2xl",
        },
        h4: {
          fontSize: "xl",
        },
        h5: {
          fontSize: "lg",
        },
        h6: {
          fontSize: "md",
        },
        blockquote: {
          pl: 6,
          py: 2,
          my: 6,
          pos: "relative",
          fontStyle: "italic",
          color: "#4A5568",
          bg: "#F0FDFA",
          borderRadius: "md",
          _before: {
            content: "''",
            display: "block",
            pos: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "4px",
            bgColor: "brand.primary",
            borderRadius: "full",
          },
        },
        table: {
          maxWidth: "full",
          borderSpacing: 0,
          mt: 6,
          borderRadius: "md",
          overflow: "hidden",
          thead: {
            background: "#F0FDFA",
          },
          th: {
            fontWeight: 600,
            color: "#0F172A",
          },
          "th, td": {
            padding: "0.75em 1em",
            border: "1px solid #E2E8F0",
          },
        },
        "ol, ul": {
          padding: 0,
          fontSize: "lg",
        },
        li: {
          lineHeight: "1.8",
          marginLeft: 6,
          paddingLeft: 2,
          marginBottom: 3,
        },
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "brand.gradient",
        pos: "fixed",
        zIndex: 99999,
        top: 0,
        left: 0,
        width: "full",
        height: "3px",
      },
      ".nprogress-custom-parent": {
        overflow: "hidden",
        position: "absolute",
      },
    },
  },
})

export default theme
