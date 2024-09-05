import { SearchFilters } from "../components/user-filters";
import { UserTable } from "../components/user-table";

export default function HomePage() {
  return (
    <section className="min-h-screen w-full px-4 bg-gray-100 pt-16">
      <div className="flex flex-col mx-auto gap-2 max-w-[1200px]">
        <SearchFilters />
        <UserTable />
      </div>
    </section>
  );
}
