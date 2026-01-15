export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Szczegóły posiłku</h1>
      <p>Parametr z adresu URL: {params.someName}</p>
    </main>
  );
}