import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tarefas from '@/pages/Tarefas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //define a rota que deve ser acessada pelo browser (como se fosse um link html)
      name: 'HelloWorld', //da o nome da rota
      component: HelloWorld //o componente (ou pagina) que será injetado no centro da pagina.
    },
    {
      path: '/tarefas', 
      name: 'Tarefas',
      component: Tarefas
    },
  ]
})
