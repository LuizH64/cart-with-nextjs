# Cart with Nextjs

> Este é um projeto simples e não funcional. Foi utilizado para seu desenvolvimento o framework NextJS.
> A proposta foi seguir um template de um carrinho de forma fidedigna, trabalhando com um código o mais
> organizado possível.

### Funcionalidades propostas

Assim que o projeto é acessado, o usuário é redirecionado para a rota "/cart/small", em que é demonstrado
um carrinho com poucos itens, a totalidade do preço destes itens será menor que R$ 10,00. Neste caso,
não é mostrado o aviso de frete grátis. Um botão de finalizar compra está disponível no final da página,
ao ser clicado, o usuário será redirecionado para a rota "/cart/big", em que é demonstrado um exemplo com 
um carrinho mais cheio, no caso o valor total da compra passa de R$ 10,00, fazendo com que o aviso de frete
grátis apareça.


### Métodos utilizados para o desenvolvimento

Foi utilizado uma proposta de rotas dinâmicas (url slugs), como pode ser observado ao alterar o parâmetro na
URL "big" ou "small". A depender do parâmetro, uma requisição será feita para um arquivo JSON inserido no próprio
projeto, que serve para simular uma requisição para uma API. Quando os dados serem retornados, eles são carregados
na página. Ademais, foi utlizada a proposta de "static generation", tendo em vista que é uma página estática.