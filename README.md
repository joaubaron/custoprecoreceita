https://joaubaron.github.io/custoprecoreceita/

# Precificação 🫙

Calculadora de preço de venda para quem produz e vende em potes (conservas, doces, receitas artesanais em geral). PWA single-file, roda 100% no navegador, sem servidor.

## O que faz

- **Estoque**: cadastra os ingredientes que você compra e o preço pago
- **Receita**: informa quanto usa de cada ingrediente (com conversão automática g/ml por densidade)
- **Embalagem**: custo de pote, rótulo, decoração etc.
- **Custos operacionais**: mão de obra, energia, custo fixo rateado (aluguel, depreciação, maquininha)
- **$ de Venda**: calcula o preço sugerido a partir de margem de lucro, taxas de venda (marketplace) e impostos
- **Salvar**: múltiplas receitas, com exportação/importação de backup em JSON

Tudo fica salvo localmente no dispositivo (localStorage) — não envia dados pra nenhum servidor.

## Como usar

1. **Estoque** → cadastre o que você compra e quanto pagou
2. **Receita** → informe as quantidades usadas de cada ingrediente
3. **Embalagem** → custo dos potes/rótulos + custos operacionais do lote
4. **$ de Venda** → informe rendimento em potes, margem desejada, taxas e impostos → veja o preço sugerido
5. **Salvar** → guarde a receita pra reusar depois, exporte um backup se quiser

## Fórmula de precificação

```
preço = custo total por pote / (1 - margem% - taxas de venda% - impostos%)
```

A margem é calculada sobre o **preço de venda**, não sobre o custo — por isso o app também mostra o markup equivalente (o mesmo número, só que multiplicando o custo).

## Rodando localmente

Abra o `index.html` direto no navegador, ou sirva a pasta via GitHub Pages.

## Tecnologia

HTML/CSS/JS puro, sem build, sem dependências externas (exceto fontes do Google Fonts).
