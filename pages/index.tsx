import CardDashboard from "@/components/CardDashboard";
import Title from "@/components/Title";

export default function Home() {
  return (
    <section className="h-screen bg-gray-200">

      <Title>
        DASHBOARD
      </Title>

      <div className="w-3/4 mx-auto flex justify-around">
        <CardDashboard bgColor="bg-sky-500">
          LOJAS ATIVAS
        </CardDashboard>

        <CardDashboard bgColor="bg-emerald-500">
          TOTAL INVESTIDO
        </CardDashboard>

        <CardDashboard bgColor="bg-red-500">
          TOTAL GASTO
        </CardDashboard>
      </div>

    </section>
  )
}