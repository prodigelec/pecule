import { NextResponse, type NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// Contrôle optimiste (présence du cookie seulement) pour rediriger vite.
// La vraie vérification de session se fait dans les pages via requireSession().
export function proxy(request: NextRequest) {
  const hasSession = Boolean(getSessionCookie(request));
  const { pathname } = request.nextUrl;
  const isAppRoute = pathname === "/app" || pathname.startsWith("/app/");

  if (!hasSession && isAppRoute) {
    return NextResponse.redirect(new URL("/connexion", request.url));
  }
  // Déjà connecté : la vitrine mène directement à l'app. On ne fait PAS de même
  // pour /connexion : avec un cookie expiré, /app renverrait vers /connexion qui
  // renverrait vers /app, en boucle.
  if (hasSession && pathname === "/") {
    return NextResponse.redirect(new URL("/app", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/connexion", "/app/:path*"],
};
