# ShopMakeupProject
- Exemplo de Vue3 com Bootstrap
- Exemplo de site para loja de maquiagem
- Para Utilizar por favor peça autorização! jessicabohn74@gmail.com

- :hammer_and_wrench: Ferramentas utilizadas, instale na ordem que elas estão listadas: 
  - VSCode: https://code.visualstudio.com/Download
  - GitBash: https://git-scm.com/downloads
  - Node: https://nodejs.org/en/download/ versão utilizada 14.18 
  - Vue3:  https://vuejs.org/guide/quick-start.html#creating-a-vue-application ```npm init vue@latest```
  - Vue CLI: ```npm install -g @vue/cli```, ```vue --version```
  - BootstrapVue: https://bootstrap-vue.org/vue3, https://bootstrap-vue.org/docs/#getting-started-with-nuxtjs (está no passo de configuração no após a criação do projeto em vue por CLI).
 
- :construction_worker_woman:	 Criando o Projeto:
  - Crie um projeto vue com: ```vue create shop_make_up ```

![image](https://user-images.githubusercontent.com/47541659/215292046-59a59814-0f75-40b0-9eff-16b2955369bc.png)
![image](https://user-images.githubusercontent.com/47541659/215292164-0adddad5-8d5f-4b8b-9ac2-721f94ee1c7d.png)
![image](https://user-images.githubusercontent.com/47541659/215292227-a53cd105-4ddd-4a39-b8b8-c09b0eb17441.png)
![image](https://user-images.githubusercontent.com/47541659/215292490-1f577211-5cf6-4e8b-9352-53cdc9de5cd3.png)
![image](https://user-images.githubusercontent.com/47541659/215292856-a260dceb-27b0-40e8-9258-5f3ab6c3f7d9.png)
  - Crie um arquivo .gitignore para não subir coisas desnecessárias utilize o link para criar o seu nesse link: https://www.toptal.com/developers/gitignore/api/

- Configurando o Projeto
  - Instale o BoostrapVue ```npm i bootstrap-vue-3```
  - E faça as importações no main.ts. Passo a Passo na documentação oficial do [BootstrapVue](https://bootstrap-vue.org/docs#getting-started), porém já com as devidas alterações para uso de Vue3.
  
  ![image](https://user-images.githubusercontent.com/47541659/215296616-8aa12abd-3886-4f34-a231-38eebc59c9af.png)
  - Porém podemos perceber que a tela que antes funcionava vai ficar em branco, então é necessário se fazer algumas alterações:
     - Instalar o uma compatibilidade do Vue3 para o Bootstrap ```npm i @vue/compat```
     ![image](https://user-images.githubusercontent.com/47541659/215297200-56bbe158-b5a6-4a28-81d9-e48fbf44eb12.png)
     ![image](https://user-images.githubusercontent.com/47541659/215297227-ca818985-afb0-4d22-b3e3-aa3c33f50148.png)
     ![image](https://user-images.githubusercontent.com/47541659/215297238-48ef03df-6d56-4de1-b4df-f41f98c8e2fb.png)



- Outros Lugares para consultar duvidas de Vue3 e configurações do VSCode, acima o meu passo a passo foi um resumo de todas essas fontes, para concluir esse projeto
  - Alterações do Vue2 para o Vue3: https://blog.cod3r.com.br/o-que-mudou-do-vue-2-para-o-vue-3/
  - Como montar corrtetamente uma main: https://stackoverflow.com/questions/64032296/property-use-does-not-exist-on-type-typeof-property-extend-does-not-exi
  - Migração do Bootstrap para Vue3: https://v3-migration.vuejs.org/migration-build.html
  - Como usar Bootstrap com Vue3: https://stackoverflow.com/questions/63570340/how-to-use-vue-3-add-plugin-boostrap-vue
  - Configurações de TAB: https://www.youtube.com/watch?v=dyKVsRg0eDM&t=11s
  
