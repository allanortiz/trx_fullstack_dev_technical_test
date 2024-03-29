type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <main className="flex flex-grow">{children}</main>
    </div>
  );
};

export default AppLayout;
