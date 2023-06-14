import Head from 'next/head';
import { Schedule as ScheduleForm } from '../templates/SchedulePage';
import { Menu } from '@/components/Menu';
import { useRouter } from 'next/navigation';
export default function Schedule() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/');
  };
  return (
    <>
      <Head>
        <title>Cadastre seu personagem</title>
        <meta name="description" content="Tela de cadastro de personagem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu toWhere="Home" onButtonClick={handleButtonClick} />
      <ScheduleForm />
    </>
  );
}
