import { createFileRoute } from '@tanstack/react-router';
import { DashboardPage, pageHead } from '@/components/sety/pages';
export const Route = createFileRoute('/siparisler')({head:()=>pageHead('Siparişler','Sety mağazanızdaki siparişleri inceleyin.'),component:()=> <DashboardPage page="Siparişler"/>});
