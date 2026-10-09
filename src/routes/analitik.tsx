import { createFileRoute } from '@tanstack/react-router';
import { DashboardPage, pageHead } from '@/components/sety/pages';
export const Route = createFileRoute('/analitik')({head:()=>pageHead('Analitik','Mağaza trafiği ve ürün etkileşimlerinizi inceleyin.'),component:()=> <DashboardPage page="Analitik"/>});
