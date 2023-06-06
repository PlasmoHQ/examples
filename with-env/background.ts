export {}

if (process.env.NODE_ENV === "development") {
  console.log("This is a development build")
}

if (process.env.NODE_ENV === "production") {
  console.log("This is a production build")
}

console.log("SITE_URL:", process.env.PLASMO_PUBLIC_SITE_URL)
