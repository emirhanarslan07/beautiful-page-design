import { createFileRoute } from '@tanstack/react-router';
import { DashboardPage, pageHead } from '@/components/sety/pages';
export const Route = createFileRoute('/magazam')({head:()=>pageHead('Mağazam','Dijital ürünlerinizi ve mağaza profilinizi yönetin.'),component:()=> <DashboardPage page="Mağazam"/>});
