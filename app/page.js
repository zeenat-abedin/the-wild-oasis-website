import Link from 'next/link';
import Navigation from './components/Navigation';

export default function Page() {
  return (
    <div>
      <Navigation/>
      <h1>The Wild Oasis. Welcome to paradise.</h1>
      <Link href="/cabin">Explore luxury Cabins</Link>
    </div>
  );
}
