// components/LinhaDoTempo.tsx
export function LinhaDoTempo({
  datas,
}: {
  datas: { data: string; descricao: string }[];
}) {
  return (
    <div className="mt-4 px-4">
      <h2 className="text-center font-semibold mb-2">Nossa Linha do Tempo</h2>
      <ul className="space-y-2">
        {datas.map((evento, i) => (
          <li key={i} className="bg-pink-100 p-2 rounded shadow text-sm">
            <strong>{evento.data}</strong>: {evento.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}
