import { createFileRoute } from '@tanstack/react-router';
import { DashboardPage, pageHead } from '@/components/sety/pages';
export const Route = createFileRoute('/')({head:()=>pageHead('Genel Bakış','Sety mağazanızın satışları, ürünleri ve son siparişleri.'),component:()=> <DashboardPage page="Genel Bakış"/>});
