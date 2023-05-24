# Intranet Web Node

### Essa aplicação é uma parte de uma aplicação maior que tem como objetivo concentrar todos os sistemas do cartório em 1 só lugar, facilitando o uso dos mesmos.

## Requisitos e especificações:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A aplicação foi produzida em JavaScript com o uso do Electron 24.3.1, Express 4.18.2 e Node 18.16.0 e feito um arquivo `.exe` com o uso do Electron Packager 17.1.1 para que se consiga rodar a aplicação sem precisar manter o terminal aberto.<br><br>

Não é necessária a instalação de nenhum recurso diferente dos padrões de cada máquina do cartório.<br>
Para acessá-la, basta executar o `.exe`.

## Uso da aplicação:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ao abrir a aplicação, percebe-se que existem vários menus. Os centrais estão divididos por setores e os laterais são gerais (que diversos setores usam)<br><br>

Existe a possibilidade de fazer uma busca usando o campo de pesquisa logo abaixo da logo do cartório. Qualquer botão, independentemente do setor ou página que estiver localizado, será buscado por ali.

### Redirecionamentos internos
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existem alguns botões que redirecionam o usuário para uma outra página da Intranet, mais específica daquele setor selecionado. No caso, existem 3 páginas: `LGPD - Compliance`; `Declarações/Obrigações`; `Financeiro`. A maneira de funcionamento delas é a mesma.<br><br>

## Manutenção
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A aplicação foi construída sem acesso direto ao banco de dados. Utiliza-se a outra parte da aplicação maior, que é a parte que fica no servidor, para esse acesso ao banco. Para fazer uma alteração nos caminhos, faz-se necessário alterar os valores da tabela.<br><br>

## Segurança
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Como a aplicação não possui nenhuma função de gravação de dados, não é necessário um login para utilizá-la e várias instâncias dela podem ser abertas ao mesmo tempo.<br><br>

## Suporte
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Em caso de necessidade de suporte, seja para correção de bugs ou para implementação, deve-se entrar em contato com a Paula para que ela faça a coordenação da solicitação com as outras atividades do setor, definindo prioridades.