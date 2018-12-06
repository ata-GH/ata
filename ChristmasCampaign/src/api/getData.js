import fetch from '@/config/fetch'

/* common POST */
export const POST = (url, data) => fetch(url, data, 'POST');
/* common GET */
export const GET = (url) => fetch(url);
