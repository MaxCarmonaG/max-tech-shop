import { FC } from 'react';
import Container from '@/ui/Container';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router';

const Layout: FC = () => (
  <section className={styles.section}>
    <Container>{<Outlet />}</Container>
  </section>
);

export default Layout;
