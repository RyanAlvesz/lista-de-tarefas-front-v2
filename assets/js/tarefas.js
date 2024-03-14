'use strict'

import {tarefasUsuario, tarefasUsuarioNaoConcluidas, selecionarTarefa, concluirTarefa, tarefaNaoConcluida, atualizarTarefa, removerTarefa, criarTarefa} from './funcoes-api.js'

const containerTarefas = document.getElementById('container-tarefas')
const botaoConcluido = document.getElementById('concluido')
const audio = document.getElementById('audio')
const idUsuario = localStorage.getItem('usuarioID')
const botaoSair = document.getElementById('sair')
let concluido

botaoSair.addEventListener('click', () => {

    window.location.href = '../../index.html'

})

const pageTitle = document.getElementById('page-title')
const scroll = document.getElementById('scroll')
pageTitle.addEventListener('click', () => {
    scroll.scroll({
        top: 0,
        behavior: 'smooth'
    })
})