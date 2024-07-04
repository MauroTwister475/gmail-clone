import { colors } from "./src/styles/colors"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        heading: "Roboto_700Bold",
        subtitle: "Roboto_500Medium",
        body: "Roboto_400Regular",
      },
      colors: colors,
      backgroundColor: {
        green: {
          400: "#00875F"
        },
        black: {
          688: '#121214',
          689: '#323238',
          690: '#202024'
        },
        red: {
          400: '#C52742',
        }
      }
    },
    borderColor: {
      green: {
        300: '#00875F',
      }
    }
  },
  plugins: [],
}

