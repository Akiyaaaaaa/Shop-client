import Navbar from "@/components/Navbar";
import RouteGuard from "@/components/RouteGuard";
import TransactionContainer from "@/components/TransactionContainer";

export default function Transaction() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
        <TransactionContainer />
      </main>
    </>
  );
}
