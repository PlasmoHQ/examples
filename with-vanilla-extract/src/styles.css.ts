import { style } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  minHeight: "200px",
  minWidth: "300px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  fontFamily: "system-ui, -apple-system, sans-serif"
})

export const title = style({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "16px"
})

export const counter = style({
  fontSize: "32px",
  fontWeight: "bold",
  color: "#0070f3",
  margin: "16px 0"
})

export const button = style({
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "500",
  color: "white",
  backgroundColor: "#0070f3",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#0051cc",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(0, 112, 243, 0.3)"
  },
  ":active": {
    transform: "translateY(0)",
    boxShadow: "0 2px 8px rgba(0, 112, 243, 0.2)"
  }
})
