export const Loading = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    </section>
  );
};
