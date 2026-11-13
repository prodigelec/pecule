import { NextResponse, type NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// Contrôle optimiste (présence du cookie seulement) pour rediriger vite.
// La vraie vérification de session se fait dans les pages via requireSession().
export function proxy(request: NextRequest) {
  const hasSession = Boolean(getSessionCookie(request));
  const isLoginPage = request.nextUrl.pathname === "/connexion";

  if (!hasSession && !isLoginPage) {
    return NextResponse.redirect(new URL("/connexion", request.url));
  }
  if (hasSession && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // Tout sauf l'API d'auth, les fichiers internes de Next et les fichiers statiques.
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|.*\..*).*)"],
};
