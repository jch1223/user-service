interface LayoutProps {
  title: string;
  children: JSX.Element | string;
}

function Layout({ title, children }: LayoutProps) {
  return (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full">
        <div>
          <h1 className="text-center text-3xl font-extrabold">{title}</h1>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Layout;
