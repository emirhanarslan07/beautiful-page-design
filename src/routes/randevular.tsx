import { createFileRoute } from '@tanstack/react-router';
import { DashboardPage, pageHead } from '@/components/sety/pages';
export const Route = createFileRoute('/randevular')({head:()=>pageHead('Randevular','Danışmanlık talepleri ve görüşmelerinizi takip edin.'),component:()=> <DashboardPage page="Randevular"/>});
