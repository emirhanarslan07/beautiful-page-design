import { createFileRoute } from '@tanstack/react-router';
import { DashboardPage, pageHead } from '@/components/sety/pages';
export const Route = createFileRoute('/musteriler')({head:()=>pageHead('Müşteriler','Sety mağazanızın müşteri listesini inceleyin.'),component:()=> <DashboardPage page="Müşteriler"/>});
