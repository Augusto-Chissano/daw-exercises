import Counter from "../../components/counter/Counter";

const Page = () => {
  return (
    <main>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Contador</h1>
        <Counter />
      </div>
    </main>
  );
};

export default Page;
