## 🚨 Sobre

O Chuvix é um projeto dedicado a alertar os moradores de regiões específicas sobre a iminência de índices elevados de chuvas. O objetivo é fornecer informações precisas e em tempo real para que as pessoas possam se preparar adequadamente e tomar medidas preventivas.

## 📊 Recursos Principais

- **Alertas de Chuva:** Receba notificações antecipadas sobre previsões de chuvas intensas em sua região.
  
- **Doações Solidárias:** Permita que usuários generosos façam doações de alimentos e móveis para ajudar aqueles que foram afetados pelas fortes chuvas.

## 🆘 Doações 

Você também pode ajudar fazendo doações para fornecer suporte a quem precisa após eventos climáticos adversos. Todas as doações serão encaminhadas diretamente para as famílias afetadas.

Sua contribuição faz a diferença!

## 🔨 Ferramentas utilizadas

- **Front End:** React e Tailwind.
- **Back End:** Node.

## ✔ Como rodar o front?

1. **Passo:** Baixe o nvm-setup.exe do [link](https://github.com/coreybutler/nvm-windows/releases).

2. **Passo:** Abra o cmd e execute os comandos:
    ```bash
    nvm install 16
    nvm use 16
    ```

## ✔ Como rodar o back?

3. **Passo:** Baixe o projeto do GitHub - [AvisoAguaChuva](https://github.com/GMLF/AvisoAguaChuva/tree/main).

4. **Passo:** Dentro do cmd, acesse a pasta frontend do projeto clonado.

5. **Passo:** Dentro do caminho frontend, digite `npm install` e depois `npm start`.

6. **Passo:** Para rodar o backend (banco de dados), execute os seguintes comandos:
    ```bash
    npm install typeorm reflect-metadata
    npm i -D typescript @types/node
    npm i -D @types/express ts-node-dev typescript
    npm i -S express dotenv typeorm pg reflect-metadata
    ```

7. **Passo:** Certifique-se de que você está utilizando o PostgreSQL e crie um banco de dados chamado `dadosChuva2`.

8. **Passo:** Execute o projeto com o comando:
    ```bash
    npm run dev
    ```
