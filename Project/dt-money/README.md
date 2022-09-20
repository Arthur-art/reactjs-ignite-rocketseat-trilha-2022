### Trabalhando com Vite na criação de projetos
- https://vitejs.dev/guide/

### Figma
- https://www.figma.com/community/file/1138814493269096792

### Trabalhando com ESlint
- Instalar a extensão no vscode
- npm i eslint -D
- npm i @rocketseat/eslint-config -D
- Procurar e corrgir os erros do projeto como um todo
  - npx eslint src --ext .ts,.tsx --fix

### Trabalhando com styled components
- https://styled-components.com/
- Tipagem:
  - npm i @types/styled-components -D

### Trabalhando com lib phosphoricons para lidar com icons
- https://phosphoricons.com/

### Trabalhando com lib Radix para lidar com components primitivos com mais acessibilidade
- https://www.radix-ui.com/

### Trabalhando com JSON server para simular um API
- https://github.com/typicode/json-server

### Trabalhando com inputs Uncontrolled no react e lib react-hook-form
- https://reactjs.org/docs/uncontrolled-components.html
- Lib:
  - https://react-hook-form.com/

### Trabalhando com lib zod na validação de inputs
- https://github.com/colinhacks/zod
  - npm i zod

- Integrando a lib react-hook-form com lib de validação
  - npm i @hookform/resolvers

### Trabalhando com Axios na requisicao de dados
- https://axios-http.com/ptbr/docs/intro

### Trabalhando com useCallback a fim de otimizar componentes filhos
- https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback

### Trabalhando com memo

- https://pt-br.reactjs.org/docs/hooks-reference.html#usememo

- Por que que um combonente renderiza?
  - Hooks changed (mudou estado, contexto, reducer);
  - Props changed (mudou propriedades);
  - Parent rerendered (componente pai renderizou);
- Qual o fluxo de renderização?
  1. O React recria o HTML da interface daquele componente
  2. Compara a versão do HTML recriada com a versão anterior
  3. SE mudou alguma coisa, ele reescreve o HTML na tela
- Memo:
  1. Hooks changed, Props changed (deep comparison)
  2. Comparar a versão anterior dos hooks e props
  3. SE mudou algo, ele vai permitir a nova renderização