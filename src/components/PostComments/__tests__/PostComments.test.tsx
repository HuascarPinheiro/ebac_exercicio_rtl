import { fireEvent, render, screen } from '@testing-library/react'
import PostComments from '..'

describe('Testes para o componente PostComments', () => {
    test('Deve renderizar corretamente', () => {
        render(<PostComments />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test('Deve adicionar dois comentários', () => {
        // usei para ver se os comentarios estavam funcionando: const {debug} = 
        render(<PostComments />)

        // Criei 2 constantes para chamar nos testes sem precisar escrever tudo dnovo:
        const textarea = screen.getByTestId('campo-comentario') 
        const botao = screen.getByTestId('btn-comentar')

        fireEvent.change(textarea, {
            target: { 
                value: 'Comentário 1' 
            }
        })
        fireEvent.click(botao)

        fireEvent.change(textarea, {
            target: { 
                value: 'Comentário 2' 
            }
        })
        fireEvent.click(botao)
        // debug()

        expect(screen.getByText('Comentário 1')).toBeInTheDocument()
        expect(screen.getByText('Comentário 2')).toBeInTheDocument()
    })
})