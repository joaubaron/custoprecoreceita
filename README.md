https://joaubaron.github.io/precifica/

Precificação 🫙
Calculadora de preço de venda para quem produz e vende em potes (conservas, doces, receitas artesanais em geral). PWA single-file, roda 100% no navegador, sem servidor.

O que faz
Estoque: cadastra os ingredientes que você compra e o preço pago (com densidade para conversão g ↔ ml)

Receita: informa quanto usa de cada ingrediente (com conversão automática g/ml por densidade e medidas caseiras X/Cs/Cc) e sinaliza se a quantidade excede o lote cadastrado

Embalagem: custo de pote, rótulo, decoração etc. (por pote)

Custos operacionais: mão de obra, energia, custo fixo rateado (aluguel, depreciação, maquininha)

Embalagem de transporte: custo por pote para entrega (sacola, caixa, gelo, etiqueta)

$ de Venda: calcula o preço sugerido a partir de margem de lucro, taxas de venda (marketplace) e impostos

Rendimento real: informe quantos potes saíram de fato e a sobra — útil para receitas que perdem água no cozimento

Salvar: múltiplas receitas, com exportação/importação de backup em JSON e lembrete automático de backup

Tudo fica salvo localmente no dispositivo (localStorage) — não envia dados pra nenhum servidor.

Como usar
Estoque → cadastre o que você compra e quanto pagou

Receita → informe as quantidades usadas de cada ingrediente

Embalagem → custo dos potes/rótulos + custos operacionais do lote + embalagem de transporte

$ de Venda → informe tamanho do pote, rendimento real, margem desejada, taxas e impostos → veja o preço sugerido

Salvar → guarde a receita pra reusar depois, exporte um backup se quiser

Fórmula de precificação
text
preço = custo total por pote / (1 - margem% - taxas de venda% - impostos%)
A margem é calculada sobre o preço de venda, não sobre o custo — por isso o app também mostra o markup equivalente (o mesmo número, só que multiplicando o custo).

Rodando localmente
Abra o index.html direto no navegador, ou sirva a pasta via GitHub Pages.

Nota: o app é uma PWA e registra um service worker (sw.js) e um manifest.json para funcionar offline e ser instalável. Mantenha esses arquivos junto do index.html.

Tecnologia
HTML/CSS/JS puro, sem build, sem dependências externas (exceto fontes do Google Fonts).
