import { redirect } from 'next/navigation';

// Redirect root "/" to "/inspection"
export default function RootPage() {
  redirect('/inspection');
}
