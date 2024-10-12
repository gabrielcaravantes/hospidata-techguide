# Hospidata Tech Guide - Backend

Backend do projeto Hospidata Tech Guide. Este servidor é responsável pela lógica de autenticação, gerenciamento de usuários, manipulação de cards e integração com o banco de dados PostgreSQL.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para construir a API RESTful.
- **PostgreSQL**: Banco de dados para armazenar informações.
- **JWT (JSON Web Token)**: Autenticação.

### Pré-requisitos

Antes de iniciar, você deve ter os seguintes softwares instalados:

- Node.js 16.20
- PostgreSQL 14

### Configuração do Ambiente

1. **Clone o repositório**:

   Se você ainda não clonou o repositório, faça isso:

   ```bash
   git clone https://github.com/gabrielcaravantes/hospidata-techguide
   cd hospidata-techguide/backend

2. **Instale as dependências**:
   npm install

3. **Configure o arquivo .env**:

   Crie um arquivo .env na pasta backend com as seguintes variáveis:

DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=hospidata
JWT_SECRET=seu_segredo

4. **Inicie o servidor**

   npm start

**Contribuição**
Contribuições são bem-vindas! Se você gostaria de contribuir, siga as etapas abaixo:

Fork o repositório
Crie sua branch (git checkout -b feature/MinhaNovaFuncionalidade)
Faça suas alterações e adicione testes, se aplicável
Faça commit das suas alterações (git commit -m 'Adiciona nova funcionalidade')
Envie para o repositório remoto (git push origin feature/MinhaNovaFuncionalidade)
Abra um Pull Request