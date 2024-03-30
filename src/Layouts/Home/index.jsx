import { Outlet } from 'react-router-dom';
import { Button, Navbar } from '../../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <Button>Test</Button>
      <Outlet />
    </>
  );
}
