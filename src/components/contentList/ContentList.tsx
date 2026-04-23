type Props = {
  selectedSubMenuId: number;
};

export function ContentList({ selectedSubMenuId }: Props) {
  return (
    <div>
      <h2>Lista de itens</h2>
      <p>Submenu selecionado: {selectedSubMenuId}</p>
    </div>
  );
}