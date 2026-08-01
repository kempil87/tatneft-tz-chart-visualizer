import type { PropsWithChildren, ReactNode } from 'react';

import { Content, Layout } from './app-layout.styles';

interface AppLayoutProps extends PropsWithChildren {
  header: ReactNode;
  banner?: ReactNode;
}

export const AppLayout = ({ header, banner, children }: AppLayoutProps) => {
  return (
    <Layout>
      {header}
      {banner}

      <Content>{children}</Content>
    </Layout>
  );
};
