import { createFileRoute } from '@tanstack/react-router';
import { DashboardPage, pageHead } from '@/components/sety/pages';
export const Route = createFileRoute('/ayarlar')({head:()=>pageHead('Ayarlar','Sety hesap ve mağaza tercihlerinizi düzenleyin.'),component:()=> <DashboardPage page="Ayarlar"/>});
