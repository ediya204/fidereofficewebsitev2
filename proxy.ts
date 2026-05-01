import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Supported locales: en, cn (simplified), tc (traditional)
const locales = ["en", "cn", "tc"]
const defaultLocale = "en"

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files like .png, .jpg, .svg
  ) {
    return NextResponse.next()
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Try to get locale from cookie
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
    const locale = cookieLocale && locales.includes(cookieLocale) ? cookieLocale : defaultLocale

    return NextResponse.redirect(new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    "/((?!_next|api|.*\\..*).*)",
  ],
}
