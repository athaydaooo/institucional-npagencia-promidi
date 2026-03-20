import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const hostname = req.headers.get('host');
    const pathname = url.pathname;

    // Ignorar arquivos estáticos e de API para não quebrar o layout
    if (
        pathname.startsWith('/_next') || 
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Lógica para o domínio da NP Agência
    if (hostname === 'npagencia.info' || hostname === 'www.npagencia.info') {
        if (pathname.startsWith('/promidi')) {
            url.pathname = '/404'; 
            return NextResponse.rewrite(url);
        }
        return NextResponse.next();
    }
    // Lógica para o domínio da Promidi
    if (hostname === 'promidi.com.br' || hostname === 'www.promidi.com.br') {
        if (pathname === '/') {
            url.pathname = '/promidi';
            return NextResponse.rewrite(url);
        }
        return NextResponse.next();
    }

    return NextResponse.next();
}