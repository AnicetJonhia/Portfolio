

export const SOCIAL_HREFS = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
} as const;

export const CONTACT_DETAILS = {
  phone: {
    display: process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY || "",
    value: process.env.NEXT_PUBLIC_CONTACT_PHONE_VALUE || "",
    href: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_VALUE || ""}`,
  },
  email: {
    display: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || ""}`,
  },
} as const;