export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm sm:mt-20 mt-5">{children}</div>
    </div>
  );
}
