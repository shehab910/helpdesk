import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard');
  return (
    <main>
      <h2>Home</h2>
    </main>
  );
}
