export function Loading() {
  return (
    <>
      <section>
        <div className="container py-20 flex flex-col justify-center items-center">
          <h1 className="text-3xl text-white">Loading...</h1>
          <div className="w-16 h-16 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    </>
  );
}
