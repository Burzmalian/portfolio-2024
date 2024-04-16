import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <div className="bg-slate-600">
        <Hero />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12">
        About intro left, picture right
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12">
        Projects left cards / CV Right logo list
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12">Contact</div>
    </>
  );
}
// TODO: Container, Wrapper
