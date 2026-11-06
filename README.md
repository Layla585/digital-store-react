# Digital Store — React (versão interativa)

## Executar

1. Abra esta pasta no VS Code.
2. No terminal, execute `npm install`.
3. Execute `npm run dev`.
4. Abra o endereço mostrado pelo Vite (geralmente http://localhost:5173).

## Páginas

- `/` — Home com imagens originais.
- `/products` — Produtos, pesquisa, filtros e ordenação.
- `/product/1` — Detalhes, opções e adicionar ao carrinho.
- `/categorias` — Categorias; apenas tênis possui produtos no conjunto demonstrativo.
- `/cadastro` — Criar conta de demonstração.
- `/login` — Entrar com conta cadastrada neste navegador.
- `/carrinho` — Itens e quantidades.
- `/checkout` — Confirmar pedido fictício.
- `/pedidos` — Histórico de pedidos fictícios do usuário logado.

## Limitações importantes

**Projeto exclusivamente front-end para atividade acadêmica.** Cadastro, login, carrinho e pedidos usam `localStorage` do navegador. As senhas ficam armazenadas localmente sem proteção adequada: **não utilize senhas reais**. Não existe servidor, autenticação segura, pagamento, estoque real, envio ou sincronização entre dispositivos. Os pedidos são simulações e não representam compras reais. Para uma loja em produção é obrigatório implementar back-end seguro.

As imagens de produtos foram incluídas a partir dos arquivos disponibilizados para a atividade.
