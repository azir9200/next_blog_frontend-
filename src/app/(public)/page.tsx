import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto my-5">
        <p>blog card</p>
      </div>
    </div>
  );
}
