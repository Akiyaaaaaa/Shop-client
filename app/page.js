import Navbar from "@/components/Navbar";
import ProductContainer from "@/components/ProductContainer";
import RouteGuard from "@/components/RouteGuard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
        <ProductContainer />
      </main>
    </>
  );
}
