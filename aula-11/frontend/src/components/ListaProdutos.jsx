import { useState, useEffect } from 'react';
import { URL_API } from '../config.js';

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState(null); // null = ainda não carregou
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(URL_API, { signal: controller.signal })
      .then((resp) => {
        if (!resp.ok) throw new Error(`Erro ${resp.status}`);
        return resp.json();
      })
      .then((dados) => {
        setProdutos(dados);
        setCarregando(false);
      })
      .catch((e) => {
        if (e.name === 'AbortError') return;
        setErro(e.message);
        setCarregando(false);
      });

    return () => controller.abort();
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p className="erro">Erro: {erro}</p>;
  if (!produtos || produtos.length === 0) return <p>Nenhum produto encontrado.</p>;

  return (
    <ul className="lista">
      {produtos.map((item) => (
        <li key={item._id ?? item.id}>
          <strong>{item.nome}</strong> - R$ {item.preco.toFixed(2)}
          {item.ativo !== undefined && (item.ativo ? ' (ativo)' : ' (inativo)')}
          {item.tags && <div className="detalhe">Tags: {item.tags.join(', ')}</div>}
          {item.fornecedor && (
            <div className="detalhe">
              Fornecedor: {item.fornecedor.nome} ({item.fornecedor.cidade})
            </div>
        )}
        </li>))}
        </ul>);
}