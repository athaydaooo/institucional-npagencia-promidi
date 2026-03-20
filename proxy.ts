import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
    const url = req.nextUrl.clone();
    const hostname = req.headers.get('host');
    const normalizedHost = hostname?.split(':')[0] ?? '';
    const pathname = url.pathname;
    const requestHeaders = new Headers(req.headers);

    requestHeaders.set('x-current-host', normalizedHost);
    requestHeaders.set('x-current-path', pathname);

    // Ignorar arquivos estáticos e de API para não quebrar o layout
    if (
        pathname.startsWith('/_next') || 
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Lógica para o domínio da NP Agência
    if (normalizedHost === 'npagencia.info' || normalizedHost === 'www.npagencia.info') {
        if (pathname.startsWith('/promidi')) {
            url.pathname = '/404'; 
            return NextResponse.rewrite(url, {
                request: {
                    headers: requestHeaders,
                },
            });
        }
        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
    }
    // Lógica para o domínio da Promidi
    if (normalizedHost === 'promidi.com.br' || normalizedHost === 'www.promidi.com.br') {
        if (pathname === '/') {
            url.pathname = '/promidi';
            return NextResponse.rewrite(url, {
                request: {
                    headers: requestHeaders,
                },
            });
        }
        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
    }

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}