export function Mensagem({ texto }: { texto: string }) {
  return (
    <div className="my-4 px-4 text-center text-lg font-light italic">
      {texto}
    </div>
  );
}
