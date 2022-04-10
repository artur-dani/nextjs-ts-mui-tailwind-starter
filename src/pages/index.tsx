import { Container } from '@mui/material';
import Link from 'components/mui-link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <h1 className="text-3xl text-green-600">Hello World from Home Page!</h1>
      <Link href="/about" color="secondary">
        Go to About Page
      </Link>
    </Container>
  );
};

export default Home;
