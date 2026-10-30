
Aluno: Pedro Travaim - INFO 6B


## Exercício 1 

O JSON da API (`/produtos`) usa o identificador **`_id`**, com valores como `"65f1a2b3c4d5e6f7a8b9c0d1"` (24 caracteres hexadecimais), e não um número inteiro como `id: 1`.
Isso indica **MongoDB**, que gera o ObjectId automaticamente. No SQL o `id` costuma ser um inteiro incremental.
Além disso, a API tem subdocumento (`fornecedor`), arrays (`tags`) e campos variáveis, que também são marcas do MongoDB.


## Exercício 3 - Definições

- **Coleção:** grupo de documentos no MongoDB, como uma pasta com várias fichas. Equivale a uma tabela do SQL.
- **Schemaless:** "sem schema obrigatório". Cada documento da coleção pode ter campos diferentes.

## Exercício 4 - Vantagens

**SQL:**
1. Schema rígido: todos os registros seguem o mesmo padrão.
2. JOIN permite juntar dados de tabelas diferentes.
3. Boa organização e consistência dos dados.

**MongoDB:**
1. Schema flexível: cada documento pode ter campos diferentes.
2. Subdocumentos guardam dados relacionados no próprio documento, sem JOIN.
3. É fácil adicionar um campo novo sem alterar os registros antigos.

## Exercício 5 - URL de acesso

Código em `frontend/src/config.js`:

`http://localhost:3000/produtos`

## Exercício 6 - Componente consumidor

Código em `frontend/src/components/ListaProdutos.jsx` (usa `fetch`, trata carregando/erro/vazio e `key={item._id ?? item.id}`).

